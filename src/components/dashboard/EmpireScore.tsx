import { Trophy } from 'lucide-react';
import type { EmpireScore as EmpireScoreData } from '@/app/actions/dashboard';

interface EmpireScoreProps {
  empireScore: EmpireScoreData;
}

export function EmpireScore({ empireScore }: EmpireScoreProps) {
  const { score, band, bandColor } = empireScore;

  // Map band colors to Tailwind classes
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    red: {
      bg: 'bg-red-400/10',
      text: 'text-red-400',
      border: 'border-red-400/20',
    },
    orange: {
      bg: 'bg-orange-400/10',
      text: 'text-orange-400',
      border: 'border-orange-400/20',
    },
    blue: {
      bg: 'bg-blue-400/10',
      text: 'text-blue-400',
      border: 'border-blue-400/20',
    },
    green: {
      bg: 'bg-green-400/10',
      text: 'text-green-400',
      border: 'border-green-400/20',
    },
    amber: {
      bg: 'bg-amber-400/10',
      text: 'text-amber-400',
      border: 'border-amber-400/20',
    },
  };

  const colors = colorMap[bandColor] || colorMap.amber;

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
      <h2 className="text-white font-bold text-xl mb-4">Empire Score</h2>

      <div className="flex items-center gap-6">
        <div className={`w-20 h-20 ${colors.bg} border ${colors.border} rounded-2xl flex items-center justify-center`}>
          <Trophy className={`w-10 h-10 ${colors.text}`} />
        </div>

        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-white font-bold text-5xl">{score}</span>
            <span className="text-zinc-400 text-sm font-medium">/ 100</span>
          </div>

          <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.border} border px-3 py-1 rounded-full`}>
            <span className={`${colors.text} text-sm font-bold`}>{band}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-5 border-t border-zinc-800">
        <p className="text-zinc-500 text-xs mb-3">Score Breakdown:</p>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-zinc-400">Assessment Average (50%)</span>
            <span className="text-zinc-300 font-medium">
              {Math.round(empireScore.latestAssessmentAvg)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Protocol Completion (30%)</span>
            <span className="text-zinc-300 font-medium">
              {Math.round(empireScore.protocolCompletionPct)}%
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Streak Score (20%)</span>
            <span className="text-zinc-300 font-medium">
              {Math.round(empireScore.streakScore)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
