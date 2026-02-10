'use client';

import { useEffect, useState } from 'react';
import type { PillarProgress } from '@/app/actions/dashboard';

interface ProgressRingsProps {
  activePillars: PillarProgress[];
}

export function ProgressRings({ activePillars }: ProgressRingsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setMounted(true);
  }, []);

  if (activePillars.length === 0) {
    return (
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 text-center">
        <h2 className="text-white font-bold text-xl mb-2">Track Your Progress</h2>
        <p className="text-zinc-500 text-sm">Complete an assessment to see your protocol progress rings here</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
      <h2 className="text-white font-bold text-xl mb-4">Your Progress</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {activePillars.map((pillar, index) => {
          const radius = 45;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = mounted
            ? circumference - (pillar.percentage / 100) * circumference
            : circumference;

          const colors = [
            'text-amber-400',
            'text-blue-400',
            'text-green-400',
            'text-purple-400',
          ];
          const colorClass = colors[index % colors.length];
          const strokeColor = colorClass.replace('text-', '');

          return (
            <div key={pillar.pillarId} className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-3">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background track */}
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-zinc-800"
                  />
                  {/* Progress ring */}
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className={colorClass}
                    style={{
                      transition: 'stroke-dashoffset 1s ease-out',
                    }}
                  />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    Day {pillar.currentDay}
                  </span>
                </div>
              </div>

              <p className="text-zinc-400 text-sm text-center font-medium mb-1">
                {pillar.pillarLabel}
              </p>
              <p className="text-zinc-500 text-xs text-center">
                {pillar.completedDays} of 30 days
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
