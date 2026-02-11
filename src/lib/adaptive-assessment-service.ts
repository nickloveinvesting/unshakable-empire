import type {
  AdaptiveQuestionNode,
  QuestionAnswer,
  AssessmentContext,
  BusinessContext,
  ComprehensiveAssessmentResult,
} from '@/types/adaptive-quiz';
import {
  getInitialQuestion,
  getNextQuestion,
  buildAssessmentContext,
  extractBusinessContext,
  isBusinessContextComplete,
  validateAnswer,
  getPathLabel,
} from './adaptive-engine';
import { getQuestionById } from '@/data/questions/adaptive';
import { calculateAdaptiveResults } from './adaptive-scoring';
import {
  generateFormattedResults,
  generateShareableText,
  type FormattedResults,
} from './adaptive-results-generator';

/**
 * Adaptive Assessment Service
 * Orchestrates the entire adaptive assessment flow
 */

export interface AssessmentState {
  currentQuestion: AdaptiveQuestionNode | null;
  answers: Record<string, QuestionAnswer>;
  questionsAsked: string[];
  pathsTaken: string[];
  businessContext: BusinessContext | null;
  isComplete: boolean;
  context: AssessmentContext | null;
}

export interface AnswerSubmissionResult {
  success: boolean;
  error?: string;
  nextQuestion: AdaptiveQuestionNode | null;
  pathLabel?: string;
  isComplete: boolean;
  results?: ComprehensiveAssessmentResult;
  formattedResults?: FormattedResults;
}

/**
 * Initialize a new adaptive assessment
 */
export function initializeAssessment(): AssessmentState {
  const firstQuestion = getInitialQuestion();

  return {
    currentQuestion: firstQuestion,
    answers: {},
    questionsAsked: firstQuestion ? [firstQuestion.id] : [],
    pathsTaken: [],
    businessContext: null,
    isComplete: false,
    context: null,
  };
}

/**
 * Submit an answer and get the next question
 */
export function submitAnswer(
  state: AssessmentState,
  questionId: string,
  value: number | string | string[] | boolean
): AnswerSubmissionResult {
  // Validate the question exists
  const question = getQuestionById(questionId);
  if (!question) {
    return {
      success: false,
      error: 'Question not found',
      nextQuestion: null,
      isComplete: false,
    };
  }

  // Validate the answer
  if (!validateAnswer(question, value)) {
    return {
      success: false,
      error: 'Invalid answer value for this question type',
      nextQuestion: null,
      isComplete: false,
    };
  }

  // Create answer object
  const answer: QuestionAnswer = {
    questionId,
    value,
    answeredAt: new Date(),
  };

  // Add answer to state
  const newAnswers = {
    ...state.answers,
    [questionId]: answer,
  };

  // Check if business context is now complete
  let businessContext = state.businessContext;
  let context = state.context;

  if (!businessContext && isBusinessContextComplete(newAnswers)) {
    businessContext = extractBusinessContext(newAnswers);

    if (businessContext) {
      context = buildAssessmentContext(
        businessContext,
        newAnswers,
        state.questionsAsked,
        state.pathsTaken
      );
    }
  } else if (context) {
    // Update context with new answers
    context = buildAssessmentContext(
      businessContext!,
      newAnswers,
      state.questionsAsked,
      state.pathsTaken
    );
  }

  // Get path label if this answer triggered a branch
  let pathLabel: string | undefined;
  if (context) {
    const label = getPathLabel(question, answer, context);
    if (label) {
      pathLabel = label;
    }
  }

  // Get next question (coalesce undefined → null for type safety)
  const nextQuestion = (context
    ? getNextQuestion(question, answer, context)
    : getQuestionById(question.defaultNext || '')) ?? null;

  // Update questions asked
  const newQuestionsAsked = [...state.questionsAsked];
  if (nextQuestion && !newQuestionsAsked.includes(nextQuestion.id)) {
    newQuestionsAsked.push(nextQuestion.id);
  }

  // Update paths taken
  const newPathsTaken = [...state.pathsTaken];
  if (pathLabel && !newPathsTaken.includes(pathLabel)) {
    newPathsTaken.push(pathLabel);
  }

  // Check if assessment is complete
  const isComplete = nextQuestion === null;

  // Calculate results if complete
  let results: ComprehensiveAssessmentResult | undefined;
  let formattedResults: FormattedResults | undefined;

  if (isComplete && context) {
    // Get all questions that were asked
    const askedQuestions = newQuestionsAsked
      .map((id) => getQuestionById(id))
      .filter((q): q is AdaptiveQuestionNode => q !== undefined);

    // Calculate time spent (will be provided by UI, default to 0 for now)
    const timeSpentSeconds = 0; // TODO: Track actual time in state

    // Calculate results
    results = calculateAdaptiveResults(
      newAnswers,
      askedQuestions,
      context,
      timeSpentSeconds
    );

    // Generate formatted results
    formattedResults = generateFormattedResults(results);
  }

  // Update state
  Object.assign(state, {
    currentQuestion: nextQuestion,
    answers: newAnswers,
    questionsAsked: newQuestionsAsked,
    pathsTaken: newPathsTaken,
    businessContext,
    context,
    isComplete,
  });

  return {
    success: true,
    nextQuestion: nextQuestion ?? null,
    pathLabel,
    isComplete,
    results,
    formattedResults,
  };
}

/**
 * Resume an assessment from saved state
 */
export function resumeAssessment(
  savedAnswers: Record<string, QuestionAnswer>,
  savedQuestionsAsked: string[],
  savedPathsTaken: string[]
): AssessmentState {
  // Extract business context
  const businessContext = extractBusinessContext(savedAnswers);

  if (!businessContext) {
    // Not enough context yet, restart from beginning
    return initializeAssessment();
  }

  // Build assessment context
  const context = buildAssessmentContext(
    businessContext,
    savedAnswers,
    savedQuestionsAsked,
    savedPathsTaken
  );

  // Get the last question asked
  const lastQuestionId =
    savedQuestionsAsked[savedQuestionsAsked.length - 1];
  const lastQuestion = getQuestionById(lastQuestionId);

  if (!lastQuestion) {
    return initializeAssessment();
  }

  // Get the last answer
  const lastAnswer = savedAnswers[lastQuestionId];

  if (!lastAnswer) {
    // Last question wasn't answered, resume from there
    return {
      currentQuestion: lastQuestion,
      answers: savedAnswers,
      questionsAsked: savedQuestionsAsked,
      pathsTaken: savedPathsTaken,
      businessContext,
      context,
      isComplete: false,
    };
  }

  // Get next question from last answer
  const nextQuestion = getNextQuestion(lastQuestion, lastAnswer, context);

  return {
    currentQuestion: nextQuestion,
    answers: savedAnswers,
    questionsAsked: savedQuestionsAsked,
    pathsTaken: savedPathsTaken,
    businessContext,
    context,
    isComplete: nextQuestion === null,
  };
}

/**
 * Calculate results for a completed assessment
 */
export function calculateResults(
  state: AssessmentState,
  timeSpentSeconds: number = 0
): {
  results: ComprehensiveAssessmentResult;
  formattedResults: FormattedResults;
  shareableText: string;
} | null {
  if (!state.isComplete || !state.context) {
    return null;
  }

  // Get all questions that were asked
  const askedQuestions = state.questionsAsked
    .map((id) => getQuestionById(id))
    .filter((q): q is AdaptiveQuestionNode => q !== undefined);

  // Calculate results
  const results = calculateAdaptiveResults(
    state.answers,
    askedQuestions,
    state.context,
    timeSpentSeconds
  );

  // Generate formatted results
  const formattedResults = generateFormattedResults(results);

  // Generate shareable text
  const shareableText = generateShareableText(results);

  return {
    results,
    formattedResults,
    shareableText,
  };
}

/**
 * Get current assessment progress
 */
export function getAssessmentProgress(state: AssessmentState): {
  questionsAnswered: number;
  estimatedTotal: number;
  percentComplete: number;
  currentPillar: number | null;
  businessStage: string | null;
} {
  const questionsAnswered = Object.keys(state.answers).length;

  // Estimate total based on business stage
  const estimatedTotals: Record<string, number> = {
    'solo-overwhelmed': 37,
    'solo-optimizing': 39,
    'small-team': 45,
    growing: 48,
    established: 52,
    enterprise: 57,
  };

  const businessStage = state.context?.businessStage || null;
  const estimatedTotal = businessStage
    ? estimatedTotals[businessStage] || 45
    : 45;

  const percentComplete = Math.min(
    100,
    Math.round((questionsAnswered / estimatedTotal) * 100)
  );

  const currentPillar = state.currentQuestion?.pillarId || null;

  return {
    questionsAnswered,
    estimatedTotal,
    percentComplete,
    currentPillar,
    businessStage,
  };
}

/**
 * Validate assessment state
 */
export function validateAssessmentState(state: AssessmentState): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check if questions asked matches answers
  const answeredQuestionIds = Object.keys(state.answers);
  for (const questionId of answeredQuestionIds) {
    if (!state.questionsAsked.includes(questionId)) {
      errors.push(
        `Answer exists for question ${questionId} but question was not in questionsAsked`
      );
    }
  }

  // Check if business context is valid
  if (isBusinessContextComplete(state.answers) && !state.businessContext) {
    errors.push('Business context should be complete but is missing');
  }

  // Check if context is built when business context exists
  if (state.businessContext && !state.context) {
    errors.push('Business context exists but assessment context is missing');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Get all questions for debugging/review
 */
export function getQuestionsAskedDetails(
  state: AssessmentState
): Array<{
  question: AdaptiveQuestionNode;
  answer: QuestionAnswer | null;
  skipped: boolean;
}> {
  return state.questionsAsked.map((questionId) => {
    const question = getQuestionById(questionId);
    const answer = state.answers[questionId] || null;

    return {
      question: question!,
      answer,
      skipped: answer === null,
    };
  });
}
