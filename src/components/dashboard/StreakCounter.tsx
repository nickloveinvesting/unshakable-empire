import { Flame } from 'lucide-react';
import type { StreakData } from '@/app/actions/dashboard';

interface StreakCounterProps {
  streak: StreakData;
}

export function StreakCounter({ streak }: StreakCounterProps) {
  const { currentStreak, bestStreak } = streak;

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center">
            <Flame className="w-7 h-7 text-amber-400" />
          </div>

          <div>
            {currentStreak > 0 ? (
              <>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-white font-bold text-3xl">{currentStreak}</span>
                  <span className="text-zinc-400 text-sm font-medium">
                    {currentStreak === 1 ? 'day streak' : 'days streak'}
                  </span>
                </div>
                <p className="text-zinc-500 text-xs">
                  Best: {bestStreak} {bestStreak === 1 ? 'day' : 'days'}
                </p>
              </>
            ) : (
              <>
                <p className="text-white font-semibold text-lg mb-1">Start your streak today</p>
                <p className="text-zinc-500 text-xs">Complete a daily check-in to begin</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
