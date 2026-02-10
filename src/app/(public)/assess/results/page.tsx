'use client';

import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/stores/quiz-store';
import { getQuestionsForPillar } from '@/data/questions';
import { generatePillarAssessment } from '@/lib/engine';
import { getInterpretationCopy } from '@/data/scoring';
import { saveAssessment } from '@/app/actions/assessment';
import { useUser } from '@/hooks/useUser';
import { Shield, ArrowRight } from 'lucide-react';

function RadarChart({ data }: { data: { category: string; score: number }[] }) {
  const cx = 150, cy = 150, r = 110;
  const n = data.length;

  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
    const dist = (value / 100) * r;
    return { x: cx + dist * Math.cos(angle), y: cy + dist * Math.sin(angle) };
  };

  const gridLevels = [25, 50, 75, 100];

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 mb-6">
      <h3 className="text-white font-bold text-lg mb-4 text-center">Category Radar</h3>
      <svg viewBox="0 0 300 300" className="w-full max-w-[300px] mx-auto">
        {/* Grid polygons */}
        {gridLevels.map((level) => {
          const points = Array.from({ length: n }, (_, i) => {
            const p = getPoint(i, level);
            return `${p.x},${p.y}`;
          }).join(' ');
          return (
            <polygon
              key={level}
              points={points}
              fill="none"
              stroke="#3f3f46"
              strokeWidth={level === 100 ? 1 : 0.5}
              opacity={0.6}
            />
          );
        })}
        {/* Axis lines */}
        {data.map((_, i) => {
          const p = getPoint(i, 100);
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#3f3f46" strokeWidth={0.5} opacity={0.6} />;
        })}
        {/* Data polygon */}
        <polygon
          points={data.map((d, i) => { const p = getPoint(i, d.score); return `${p.x},${p.y}`; }).join(' ')}
          fill="#FBBF24"
          fillOpacity={0.15}
          stroke="#FBBF24"
          strokeWidth={2}
        />
        {/* Data points */}
        {data.map((d, i) => {
          const p = getPoint(i, d.score);
          return <circle key={i} cx={p.x} cy={p.y} r={3.5} fill="#FBBF24" />;
        })}
        {/* Labels */}
        {data.map((d, i) => {
          const p = getPoint(i, 125);
          const short = d.category.length > 14 ? d.category.slice(0, 12) + '...' : d.category;
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#a1a1aa"
              fontSize={9}
              fontWeight={500}
            >
              {short}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default function ResultsPage() {
  const router = useRouter();
  const { selectedPillars, answers, quizCompleted } = useQuizStore();
  const { user, loading: userLoading } = useUser();
  const saveAttempted = useRef(false);

  const pillarId = selectedPillars[0];

  const result = useMemo(() => {
    if (!pillarId) return null;
    const questions = getQuestionsForPillar(pillarId);
    return generatePillarAssessment(pillarId, questions, answers);
  }, [pillarId, answers]);

  useEffect(() => {
    if (!user || !result || !pillarId || saveAttempted.current || userLoading) return;
    saveAttempted.current = true;
    saveAssessment({
      pillarId,
      answers,
      overallScore: result.overallScore,
      overallPercentage: result.overallPercentage,
      categoryScores: Object.fromEntries(
        result.categoryScores.map((cs) => [cs.category, { score: cs.score, max: cs.max, percentage: cs.percentage }])
      ),
      band: result.overallBand,
      weakestCategory: result.weakestCategory,
    });
  }, [user, result, pillarId, answers, userLoading]);

  if (!quizCompleted || !pillarId || !result) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
        <p className="text-zinc-500">No assessment data found.</p>
        <button onClick={() => router.push('/assess')} className="text-amber-400 hover:text-amber-300 text-sm font-medium">Start an Assessment</button>
      </div>
    );
  }

  const interpretation = getInterpretationCopy(result.overallBand, result.pillarLabel);
  const bandColor = result.overallBand === 'critical' ? 'text-red-400' : result.overallBand === 'weak' ? 'text-orange-400' : result.overallBand === 'developing' ? 'text-amber-400' : result.overallBand === 'strong' ? 'text-blue-400' : 'text-emerald-400';

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Empire Score</h1>
          <p className="text-zinc-400 text-sm">Here&apos;s how your {result.pillarLabel} pillar scored.</p>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 mb-6 text-center animate-scale-in">
          <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Overall Score</p>
          <p className={`text-5xl font-extrabold ${bandColor}`}>{result.overallPercentage}%</p>
          <p className={`text-sm font-semibold uppercase mt-1 ${bandColor}`}>{result.overallBand}</p>
          <p className="text-zinc-400 text-sm mt-4 max-w-md mx-auto">{interpretation}</p>
        </div>

        <RadarChart data={result.radarData} />

        <div className="space-y-3 mb-8">
          <h3 className="text-white font-bold text-lg">Category Breakdown</h3>
          {result.categoryScores.map((cs) => {
            const color = cs.band === 'critical' ? 'bg-red-400' : cs.band === 'weak' ? 'bg-orange-400' : cs.band === 'developing' ? 'bg-amber-400' : cs.band === 'strong' ? 'bg-blue-400' : 'bg-emerald-400';
            return (
              <div key={cs.category} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-zinc-300 text-sm font-medium">{cs.category}</span>
                  <span className="text-zinc-400 text-sm">{cs.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-700 ${color}`} style={{ width: `${cs.percentage}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4">
          {user ? (
            <>
              <button onClick={() => router.push(`/protocol/${result.pillarSlug}`)} className="w-full sm:w-auto bg-amber-400 text-black font-bold px-8 py-3 min-h-[44px] rounded-lg hover:bg-amber-300 transition-[background-color,box-shadow] duration-200 shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 button-press">
                <Shield className="w-5 h-5" />Get My 30-Day Protocol<ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => router.push('/assessments')} className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">View Assessment History</button>
            </>
          ) : (
            <button onClick={() => router.push('/signup')} className="w-full sm:w-auto bg-amber-400 text-black font-bold px-8 py-3 min-h-[44px] rounded-lg hover:bg-amber-300 transition-[background-color,box-shadow] duration-200 shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 button-press">
              <Shield className="w-5 h-5" />Sign Up to Get Your Protocol<ArrowRight className="w-4 h-4" />
            </button>
          )}
          <button onClick={() => router.push('/assess')} className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Assess Another Pillar</button>
        </div>
      </div>
    </div>
  );
}
