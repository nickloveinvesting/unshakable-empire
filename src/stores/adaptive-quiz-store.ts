/**
 * Adaptive Quiz Store
 * Zustand store for managing adaptive assessment state
 * Wraps the AssessmentState from adaptive-assessment-service
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  QuestionAnswer,
  ComprehensiveAssessmentResult,
} from '@/types/adaptive-quiz';
import type { AssessmentState } from '@/lib/adaptive-assessment-service';
import type { FormattedResults } from '@/lib/adaptive-results-generator';

export interface AdaptiveQuizStoreState {
  // Core assessment state (matches AssessmentState from service)
  state: AssessmentState;

  // Session tracking
  sessionId: string | null;
  startedAt: Date | null;
  businessStage: string | null;

  // Results (populated on completion)
  results: ComprehensiveAssessmentResult | null;
  formattedResults: FormattedResults | null;

  // Actions
  setState: (partial: Partial<AssessmentState>) => void;
  updateAnswer: (questionId: string, value: number | string | string[] | boolean) => void;
  completeAssessment: (results: ComprehensiveAssessmentResult, formattedResults: FormattedResults) => void;
  initializeSession: (sessionId: string, businessContext: any, businessStage: string) => void;
  startSession: (sessionId: string) => void;
  setBusinessStage: (stage: string) => void;
  reset: () => void;
}

const initialAssessmentState: AssessmentState = {
  currentQuestion: null,
  answers: {},
  questionsAsked: [],
  pathsTaken: [],
  businessContext: null,
  isComplete: false,
  context: null,
};

export const useAdaptiveQuizStore = create<AdaptiveQuizStoreState>()(
  persist(
    (set, get) => ({
      // Initial state
      state: initialAssessmentState,
      sessionId: null,
      startedAt: null,
      businessStage: null,
      results: null,
      formattedResults: null,

      /**
       * Merge partial updates into the assessment state
       * Used by AdaptiveQuizCard to update currentQuestion, isComplete, etc.
       */
      setState: (partial) =>
        set((store) => ({
          state: { ...store.state, ...partial },
        })),

      /**
       * Record an answer for a question
       */
      updateAnswer: (questionId, value) =>
        set((store) => ({
          state: {
            ...store.state,
            answers: {
              ...store.state.answers,
              [questionId]: {
                questionId,
                value,
                answeredAt: new Date(),
              },
            },
            questionsAsked: [
              ...new Set([...store.state.questionsAsked, questionId]),
            ],
          },
        })),

      /**
       * Mark assessment as complete with results
       */
      completeAssessment: (results, formattedResults) =>
        set((store) => ({
          state: { ...store.state, isComplete: true },
          results,
          formattedResults,
        })),

      /**
       * Initialize a new session with business context
       */
      initializeSession: (sessionId, businessContext, businessStage) =>
        set((store) => ({
          sessionId,
          startedAt: new Date(),
          businessStage,
          state: {
            ...store.state,
            businessContext,
          },
        })),

      /**
       * Start a new assessment session
       */
      startSession: (sessionId) =>
        set({
          sessionId,
          startedAt: new Date(),
        }),

      /**
       * Set business stage after classification
       */
      setBusinessStage: (stage) =>
        set({ businessStage: stage }),

      /**
       * Reset all state
       */
      reset: () =>
        set({
          state: initialAssessmentState,
          sessionId: null,
          startedAt: null,
          businessStage: null,
          results: null,
          formattedResults: null,
        }),
    }),
    {
      name: 'unshakable-adaptive-quiz',
      partialize: (store) => ({
        state: {
          answers: store.state.answers,
          questionsAsked: store.state.questionsAsked,
          pathsTaken: store.state.pathsTaken,
          businessContext: store.state.businessContext,
          isComplete: store.state.isComplete,
          // Don't persist currentQuestion or context (non-serializable / rebuilt on resume)
          currentQuestion: null,
          context: null,
        },
        sessionId: store.sessionId,
        startedAt: store.startedAt,
        businessStage: store.businessStage,
      }),
    }
  )
);
