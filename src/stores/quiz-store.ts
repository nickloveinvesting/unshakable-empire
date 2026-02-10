import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PillarId, PillarSlug } from '@/types/quiz';
import { SLUG_TO_PILLAR } from '@/types/quiz';

interface QuizState {
  selectedPillars: PillarId[];
  currentPillarIndex: number;
  currentQuestionIndex: number;
  answers: Record<string, number>;
  quizCompleted: boolean;
  emailCaptured: boolean;
  capturedEmail: string;
  selectPillars: (pillars: PillarId[]) => void;
  selectPillarBySlug: (slug: PillarSlug) => void;
  answerQuestion: (questionId: string, value: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  completeQuiz: () => void;
  captureEmail: (email: string) => void;
  reset: () => void;
}

const initialState = {
  selectedPillars: [] as PillarId[],
  currentPillarIndex: 0,
  currentQuestionIndex: 0,
  answers: {} as Record<string, number>,
  quizCompleted: false,
  emailCaptured: false,
  capturedEmail: '',
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      ...initialState,
      selectPillars: (pillars) => set({ selectedPillars: pillars, currentPillarIndex: 0, currentQuestionIndex: 0, answers: {}, quizCompleted: false }),
      selectPillarBySlug: (slug) => set({ selectedPillars: [SLUG_TO_PILLAR[slug]], currentPillarIndex: 0, currentQuestionIndex: 0, answers: {}, quizCompleted: false }),
      answerQuestion: (questionId, value) => set((state) => ({ answers: { ...state.answers, [questionId]: value } })),
      nextQuestion: () => set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),
      prevQuestion: () => set((state) => ({ currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1) })),
      completeQuiz: () => set({ quizCompleted: true }),
      captureEmail: (email) => set({ emailCaptured: true, capturedEmail: email }),
      reset: () => set(initialState),
    }),
    {
      name: 'unshakable-quiz',
      partialize: (state) => ({
        selectedPillars: state.selectedPillars,
        currentPillarIndex: state.currentPillarIndex,
        currentQuestionIndex: state.currentQuestionIndex,
        answers: state.answers,
        quizCompleted: state.quizCompleted,
        emailCaptured: state.emailCaptured,
        capturedEmail: state.capturedEmail,
      }),
    }
  )
);
