'use client';

import React, { useEffect, useMemo, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuizStore } from '@/stores/quiz-store';
import { getQuestionsForPillar } from '@/data/questions';
import { SLUG_TO_PILLAR } from '@/types/quiz';
import type { PillarSlug } from '@/types/quiz';
import QuizCard from '@/components/QuizCard';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.pillarSlug as PillarSlug;
  const pillarId = SLUG_TO_PILLAR[slug];

  const { selectedPillars, selectPillarBySlug, currentQuestionIndex, answers, answerQuestion, nextQuestion, prevQuestion, completeQuiz } = useQuizStore();

  useEffect(() => {
    if (!selectedPillars.length || selectedPillars[0] !== pillarId) {
      selectPillarBySlug(slug);
    }
  }, [slug, pillarId, selectedPillars, selectPillarBySlug]);

  const questions = useMemo(() => pillarId ? getQuestionsForPillar(pillarId) : [], [pillarId]);
  const currentQuestion = questions[currentQuestionIndex];
  const isLast = currentQuestionIndex === questions.length - 1;

  const handleNext = useCallback(() => {
    if (isLast) {
      completeQuiz();
      router.push('/assess/results');
    } else {
      nextQuestion();
    }
  }, [isLast, completeQuiz, nextQuestion, router]);

  if (!pillarId || !currentQuestion) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-zinc-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-8">
      <QuizCard
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        pillarLabel={currentQuestion.category}
        question={currentQuestion.text}
        subtext={currentQuestion.subtext}
        selectedValue={answers[currentQuestion.id]}
        onAnswer={(value) => answerQuestion(currentQuestion.id, value)}
        onNext={handleNext}
        onPrev={prevQuestion}
        canGoBack={currentQuestionIndex > 0}
        isLast={isLast}
      />
    </div>
  );
}
