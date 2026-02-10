'use client';

import React, { useEffect, useMemo, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
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
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-amber-400/30 border-t-amber-400 rounded-full animate-spin"></div>
          <p className="text-zinc-400 text-sm">Loading assessment…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-2xl">
        {/* Back link */}
        <Link
          href="/assess"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-6 transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-lg px-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Pillar Selection
        </Link>

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
    </div>
  );
}
