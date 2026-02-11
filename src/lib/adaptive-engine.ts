import type {
  AdaptiveQuestionNode,
  AssessmentContext,
  QuestionAnswer,
  BusinessContext,
  BusinessStage,
} from '@/types/adaptive-quiz';
import { getQuestionById, getFirstQuestionId } from '@/data/questions/adaptive';
import { classifyBusinessStage } from './business-stage-classifier';

/**
 * Adaptive Branching Engine
 * Determines which question to show next based on previous answers and business context
 */

/**
 * Get the first question to start the assessment
 */
export function getInitialQuestion(): AdaptiveQuestionNode | null {
  const firstId = getFirstQuestionId();
  return getQuestionById(firstId) || null;
}

/**
 * Get the next question based on current question and answer
 */
export function getNextQuestion(
  currentQuestion: AdaptiveQuestionNode,
  answer: QuestionAnswer,
  context: AssessmentContext,
  visited: Set<string> = new Set()
): AdaptiveQuestionNode | null {
  // Prevent infinite loops - if we've visited this question in this call chain, stop
  if (visited.has(currentQuestion.id)) {
    console.error(`Circular reference detected at question ${currentQuestion.id}`);
    return null;
  }

  // Add current question to visited set
  const newVisited = new Set(visited);
  newVisited.add(currentQuestion.id);

  // Safeguard: If we've skipped more than 20 questions, something is wrong
  if (newVisited.size > 50) {
    console.error(`Too many questions skipped (${newVisited.size}), aborting`);
    return null;
  }

  // Check if this is the final question
  if (currentQuestion.defaultNext === 'COMPLETE') {
    return null; // Assessment complete
  }

  // Process branches if they exist
  if (currentQuestion.branches && currentQuestion.branches.length > 0) {
    for (const branch of currentQuestion.branches) {
      if (branch.condition(answer, context)) {
        const nextQuestion = getQuestionById(branch.nextQuestionId);
        if (nextQuestion) {
          // Check skip conditions before returning
          if (shouldSkipQuestion(nextQuestion, context)) {
            // Recursively get the next question after the skipped one
            return getNextQuestion(nextQuestion, answer, context, newVisited);
          }
          return nextQuestion;
        }
      }
    }
  }

  // If no branch matched or no branches exist, use default next
  if (currentQuestion.defaultNext) {
    const nextQuestion = getQuestionById(currentQuestion.defaultNext);
    if (nextQuestion) {
      // Check skip conditions
      if (shouldSkipQuestion(nextQuestion, context)) {
        return getNextQuestion(nextQuestion, answer, context, newVisited);
      }
      return nextQuestion;
    }
  }

  // No next question found - assessment complete
  return null;
}

/**
 * Check if a question should be skipped based on skip conditions
 */
export function shouldSkipQuestion(
  question: AdaptiveQuestionNode,
  context: AssessmentContext
): boolean {
  if (!question.skipConditions || question.skipConditions.length === 0) {
    return false;
  }

  for (const skipCondition of question.skipConditions) {
    if (skipCondition.check(context)) {
      console.log(`Skipping question ${question.id}: ${skipCondition.reason}`);
      return true;
    }
  }

  return false;
}

/**
 * Build assessment context from business context and current answers
 */
export function buildAssessmentContext(
  businessContext: BusinessContext,
  answers: Record<string, QuestionAnswer>,
  questionsAsked: string[],
  pathsTaken: string[]
): AssessmentContext {
  const stageResult = classifyBusinessStage(businessContext);

  return {
    businessStage: stageResult.stage,
    businessContext,
    answersGiven: answers,
    currentPillarScores: {}, // Will be populated during scoring
    questionsAsked,
    pathsTaken,
  };
}

/**
 * Extract business context from initial 5 answers
 */
export function extractBusinessContext(
  answers: Record<string, QuestionAnswer>
): BusinessContext | null {
  const revenue = answers['context-revenue']?.value as string | undefined;
  const teamSize = answers['context-team-size']?.value as string | undefined;
  const hoursWorked = answers['context-hours']?.value as string | undefined;
  const businessAge = answers['context-business-age']?.value as string | undefined;
  const primaryRole = answers['context-primary-role']?.value as string | undefined;

  if (!revenue || !teamSize || !hoursWorked || !businessAge || !primaryRole) {
    return null;
  }

  return {
    revenue: revenue as BusinessContext['revenue'],
    teamSize: teamSize as BusinessContext['teamSize'],
    hoursWorked: hoursWorked as BusinessContext['hoursWorked'],
    businessAge: businessAge as BusinessContext['businessAge'],
    primaryRole: primaryRole as BusinessContext['primaryRole'],
  };
}

/**
 * Check if business context is complete (all 5 questions answered)
 */
export function isBusinessContextComplete(
  answers: Record<string, QuestionAnswer>
): boolean {
  return Boolean(extractBusinessContext(answers));
}

/**
 * Get all questions that have been asked in the current path
 */
export function getQuestionHistory(questionsAsked: string[]): AdaptiveQuestionNode[] {
  return questionsAsked
    .map((id) => getQuestionById(id))
    .filter((q): q is AdaptiveQuestionNode => q !== undefined);
}

/**
 * Normalize answer value to 1-5 scale for scoring
 */
export function normalizeAnswerToScore(
  answer: QuestionAnswer,
  question: AdaptiveQuestionNode
): number {
  const value = answer.value;

  switch (question.responseType) {
    case 'scale':
      // Already 1-5
      return typeof value === 'number' ? value : 0;

    case 'select':
      // Map select options to scores
      // For now, use option index + 1 (can be customized per question)
      if (typeof value === 'string' && question.options) {
        const index = question.options.findIndex((opt) => opt.value === value);
        if (index !== -1) {
          // Map evenly across 1-5 range
          const range = question.options.length;
          return Math.round(((index + 1) / range) * 5);
        }
      }
      return 3; // Default to middle score

    case 'multiselect':
      // Count number of selections, normalize to 1-5
      if (Array.isArray(value)) {
        const count = value.length;
        const max = question.options?.length || 5;
        return Math.min(5, Math.max(1, Math.round((count / max) * 5)));
      }
      return 1;

    case 'number':
      // Assume number questions have reasonable ranges, normalize to 1-5
      return typeof value === 'number' ? Math.min(5, Math.max(1, value)) : 3;

    case 'text':
      // Text answers don't contribute to numeric scores
      return 0;

    default:
      return 3; // Default middle score
  }
}

/**
 * Get path label from branch if it was taken
 */
export function getPathLabel(
  question: AdaptiveQuestionNode,
  answer: QuestionAnswer,
  context: AssessmentContext
): string | null {
  if (!question.branches) return null;

  for (const branch of question.branches) {
    if (branch.condition(answer, context) && branch.pathLabel) {
      return branch.pathLabel;
    }
  }

  return null;
}

/**
 * Determine if assessment is complete
 */
export function isAssessmentComplete(currentQuestion: AdaptiveQuestionNode | null): boolean {
  return currentQuestion === null;
}

/**
 * Get progress estimate (rough estimate of completion)
 */
export function getProgressEstimate(
  questionsAsked: number,
  businessStage: BusinessStage
): number {
  // Estimate total questions based on business stage
  const estimatedTotals: Record<BusinessStage, number> = {
    'solo-overwhelmed': 35, // Fewer team questions
    'solo-optimizing': 37,
    'small-team': 42,
    'growing': 45,
    'established': 48,
    'enterprise': 50,
  };

  const estimatedTotal = estimatedTotals[businessStage] || 45;
  const progress = Math.min(100, Math.round((questionsAsked / estimatedTotal) * 100));

  return progress;
}

/**
 * Validate answer before accepting it
 */
export function validateAnswer(
  question: AdaptiveQuestionNode,
  value: number | string | string[] | boolean
): boolean {
  switch (question.responseType) {
    case 'scale':
      return (
        typeof value === 'number' &&
        value >= (question.scaleMin || 1) &&
        value <= (question.scaleMax || 5)
      );

    case 'select':
      return (
        typeof value === 'string' &&
        question.options?.some((opt) => opt.value === value) === true
      );

    case 'multiselect':
      return (
        Array.isArray(value) &&
        value.every((v) => question.options?.some((opt) => opt.value === v))
      );

    case 'number':
      return typeof value === 'number';

    case 'text':
      return typeof value === 'string' && value.length > 0;

    default:
      return false;
  }
}
