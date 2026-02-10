/**
 * Adaptive Assessment Question Tree
 * Exports all questions for the adaptive 4-pillar assessment
 */

import { BUSINESS_CONTEXT_QUESTIONS } from './business-context';
import { PILLAR_1_QUESTIONS } from './pillar-1-ceo-command';
import { PILLAR_2_QUESTIONS, P2_SOLO_QUESTIONS } from './pillar-2-team';
import { PILLAR_3_QUESTIONS } from './pillar-3-revenue';
import { PILLAR_4_QUESTIONS } from './pillar-4-conversion';
import type { AdaptiveQuestionNode } from '@/types/adaptive-quiz';

/**
 * All adaptive questions in one map for easy lookup
 */
export const ADAPTIVE_QUESTION_MAP: Record<string, AdaptiveQuestionNode> = {};

// Build the question map
[
  ...BUSINESS_CONTEXT_QUESTIONS,
  ...PILLAR_1_QUESTIONS,
  ...PILLAR_2_QUESTIONS,
  ...PILLAR_3_QUESTIONS,
  ...PILLAR_4_QUESTIONS,
].forEach((q) => {
  ADAPTIVE_QUESTION_MAP[q.id] = q;
});

/**
 * Get question by ID
 */
export function getQuestionById(id: string): AdaptiveQuestionNode | undefined {
  return ADAPTIVE_QUESTION_MAP[id];
}

/**
 * Get all questions for a specific pillar
 */
export function getQuestionsForPillar(pillarId: number): AdaptiveQuestionNode[] {
  switch (pillarId) {
    case 0:
      return BUSINESS_CONTEXT_QUESTIONS;
    case 1:
      return PILLAR_1_QUESTIONS;
    case 2:
      return PILLAR_2_QUESTIONS;
    case 3:
      return PILLAR_3_QUESTIONS;
    case 4:
      return PILLAR_4_QUESTIONS;
    default:
      return [];
  }
}

/**
 * Get solo operator questions for Pillar 2
 */
export function getSoloOperatorTeamQuestions(): AdaptiveQuestionNode[] {
  return P2_SOLO_QUESTIONS;
}

/**
 * Get first question ID (business context)
 */
export function getFirstQuestionId(): string {
  return 'context-revenue';
}

/**
 * Total question pool size
 */
export const TOTAL_QUESTION_POOL_SIZE = Object.keys(ADAPTIVE_QUESTION_MAP).length;

// Export individual question sets
export {
  BUSINESS_CONTEXT_QUESTIONS,
  PILLAR_1_QUESTIONS,
  PILLAR_2_QUESTIONS,
  PILLAR_3_QUESTIONS,
  PILLAR_4_QUESTIONS,
};
