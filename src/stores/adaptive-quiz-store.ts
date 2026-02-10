/**
 * Adaptive Quiz Store
 * Zustand store for managing adaptive assessment state with persistence
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  BusinessContext,
  BusinessStageResult,
  QuestionAnswer,
} from '@/types/adaptive-quiz';

interface AdaptiveQuizState {
  // Business context
  businessContext: BusinessContext | null;
  businessStage: BusinessStageResult | null;

  // Quiz state
  currentQuestionIndex: number;
  questionsAsked: string[];
  pathsTaken: string[];
  answers: Record<string, QuestionAnswer>;
  timeStarted: Date | null;
  timeSpent: number; // seconds

  // Completion
  quizCompleted: boolean;
  sessionId: string | null;

  // Actions
  setBusinessContext: (
    context: BusinessContext,
    stage: BusinessStageResult
  ) => void;
  answerQuestion: (questionId: string, answer: QuestionAnswer) => void;
  recordPath: (pathLabel: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  completeQuiz: () => void;
  reset: () => void;

  // Session management
  startSession: (sessionId: string) => void;
  updateTimeSpent: () => void;
}

const initialState = {
  businessContext: null,
  businessStage: null,
  currentQuestionIndex: 0,
  questionsAsked: [],
  pathsTaken: [],
  answers: {},
  timeStarted: null,
  timeSpent: 0,
  quizCompleted: false,
  sessionId: null,
};

export const useAdaptiveQuizStore = create<AdaptiveQuizState>()(
  persist(
    (set, get) => ({
      ...initialState,

      /**
       * Set business context and stage after initial classification
       */
      setBusinessContext: (context, stage) =>
        set({
          businessContext: context,
          businessStage: stage,
          timeStarted: new Date(),
        }),

      /**
       * Record an answer to a question
       */
      answerQuestion: (questionId, answer) =>
        set((state) => ({
          answers: { ...state.answers, [questionId]: answer },
          questionsAsked: [...new Set([...state.questionsAsked, questionId])],
        })),

      /**
       * Record a path taken in the adaptive tree
       */
      recordPath: (pathLabel) =>
        set((state) => ({
          pathsTaken: [...state.pathsTaken, pathLabel],
        })),

      /**
       * Move to next question
       */
      nextQuestion: () =>
        set((state) => ({
          currentQuestionIndex: state.currentQuestionIndex + 1,
        })),

      /**
       * Move to previous question
       */
      prevQuestion: () =>
        set((state) => ({
          currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
        })),

      /**
       * Mark quiz as completed
       */
      completeQuiz: () => set({ quizCompleted: true }),

      /**
       * Reset all state
       */
      reset: () => set(initialState),

      /**
       * Start a new session with session ID
       */
      startSession: (sessionId) =>
        set({ sessionId, timeStarted: new Date() }),

      /**
       * Update time spent (call periodically during quiz)
       */
      updateTimeSpent: () => {
        const { timeStarted } = get();
        if (timeStarted) {
          const now = new Date();
          const spent = Math.floor(
            (now.getTime() - timeStarted.getTime()) / 1000
          );
          set({ timeSpent: spent });
        }
      },
    }),
    {
      name: 'unshakable-adaptive-quiz',
      partialize: (state) => ({
        businessContext: state.businessContext,
        businessStage: state.businessStage,
        questionsAsked: state.questionsAsked,
        pathsTaken: state.pathsTaken,
        answers: state.answers,
        timeStarted: state.timeStarted,
        timeSpent: state.timeSpent,
        quizCompleted: state.quizCompleted,
        sessionId: state.sessionId,
      }),
    }
  )
);
