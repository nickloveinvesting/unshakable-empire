'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface QuizCardProps {
  questionNumber: number;
  totalQuestions: number;
  pillarLabel: string;
  question: string;
  subtext: string;
  selectedValue: number | undefined;
  onAnswer: (value: number) => void;
  onNext: () => void;
  onPrev: () => void;
  canGoBack: boolean;
  isLast: boolean;
}

export default function QuizCard({ questionNumber, totalQuestions, pillarLabel, question, subtext, selectedValue, onAnswer, onNext, onPrev, canGoBack, isLast }: QuizCardProps) {
  const progressPercent = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-zinc-500 text-xs font-medium">Question {questionNumber} of {totalQuestions}</span>
          <span className="text-zinc-500 text-xs font-medium">{Math.round(progressPercent)}%</span>
        </div>
        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-amber-400 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 md:p-8 card-hover">
        <div className="mb-6">
          <span className="bg-amber-400/10 text-amber-400 border border-amber-400/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider inline-block">{pillarLabel}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">{question}</h2>
        {subtext && <p className="text-zinc-400 text-sm italic mt-2">{subtext}</p>}
        <div className="mt-8">
          <div className="flex items-center justify-center gap-2 md:gap-3">
            {[1, 2, 3, 4, 5].map((value) => {
              const isSelected = selectedValue === value;
              return (
                <button
                  key={value}
                  onClick={() => onAnswer(value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onAnswer(value);
                    }
                  }}
                  className={`w-12 h-12 md:w-14 md:h-14 min-h-[44px] rounded-lg text-lg font-bold transition-[background-color,border-color,transform,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 button-press ${isSelected ? 'bg-amber-400 text-black scale-105 shadow-lg shadow-amber-400/25' : 'bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-amber-400/50 hover:text-zinc-200'}`}
                  aria-label={`Rate ${value} out of 5`}
                  aria-pressed={isSelected}
                >
                  {value}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between mt-3 px-1">
            <span className="text-zinc-400 text-xs">Strongly Disagree</span>
            <span className="text-zinc-400 text-xs">Strongly Agree</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-zinc-800">
          <button
            onClick={onPrev}
            disabled={!canGoBack}
            className={`flex items-center gap-1 px-4 py-2.5 min-h-[44px] rounded-lg text-sm font-medium transition-[color,background-color] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 ${canGoBack ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' : 'text-zinc-700 cursor-not-allowed'}`}
            aria-label="Go to previous question"
          >
            <ChevronLeft className="w-4 h-4" /><span className="hidden sm:inline">Back</span>
          </button>
          <button
            onClick={onNext}
            disabled={selectedValue === undefined}
            className={`flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-lg font-bold text-sm transition-[background-color,box-shadow] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 button-press ${selectedValue !== undefined ? 'bg-amber-400 text-black hover:bg-amber-300 shadow-lg shadow-amber-400/20' : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'}`}
            aria-label={isLast ? 'Complete assessment' : 'Go to next question'}
          >
            {isLast ? (<><CheckCircle className="w-4 h-4" />Complete</>) : (<>Next<ChevronRight className="w-4 h-4" /></>)}
          </button>
        </div>
      </div>
    </div>
  );
}
