'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, TrendingUp, DollarSign, Landmark, ArrowRight, Plus, Loader2 } from 'lucide-react';
import { PILLAR_MAP } from '@/types/quiz';
import type { PillarId } from '@/types/quiz';
import { useUser } from '@/hooks/useUser';
import { getCheckInHistory } from '@/app/actions/checkin';

const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  DollarSign: <DollarSign className="w-5 h-5" />,
  Landmark: <Landmark className="w-5 h-5" />,
};

interface PillarProgress {
  completedDays: number;
  currentDay: number;
  percentage: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const { profile, loading: userLoading } = useUser();
  const [pillarProgress, setPillarProgress] = useState<Record<number, PillarProgress>>({});
  const [loadingProgress, setLoadingProgress] = useState(false);

  const activePillars: PillarId[] = (profile?.active_pillars ?? []) as PillarId[];

  useEffect(() => {
    if (activePillars.length === 0) return;
    async function loadProgress() {
      setLoadingProgress(true);
      const progress: Record<number, PillarProgress> = {};
      const results = await Promise.all(activePillars.map((pillarId) => getCheckInHistory(pillarId)));
      activePillars.forEach((pillarId, idx) => {
        const result = results[idx];
        if (result.data) {
          const completed = result.data.filter((c) => c.completion_percentage >= 50);
          const completedCount = completed.length;
          const currentDay = completedCount > 0 ? Math.min(Math.max(...completed.map((c) => c.day_number)) + 1, 30) : 1;
          progress[pillarId] = { completedDays: completedCount, currentDay, percentage: Math.round((completedCount / 30) * 100) };
        } else {
          progress[pillarId] = { completedDays: 0, currentDay: 1, percentage: 0 };
        }
      });
      setPillarProgress(progress);
      setLoadingProgress(false);
    }
    loadProgress();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.active_pillars?.join(',')]);

  const loading = userLoading || loadingProgress;

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Your Empire Dashboard</h1>
            <p className="text-zinc-400 text-sm">{profile?.full_name ? `Welcome back, ${profile.full_name.split(' ')[0]}. Keep building.` : 'Welcome back. Keep building.'}</p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16"><Loader2 className="w-6 h-6 text-amber-400 animate-spin" /></div>
        ) : activePillars.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-4">Active Protocols</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activePillars.map((pillarId) => {
                  const pillar = PILLAR_MAP[pillarId];
                  if (!pillar) return null;
                  const progress = pillarProgress[pillarId] ?? { completedDays: 0, currentDay: 1, percentage: 0 };
                  return (
                    <button key={pillarId} onClick={() => router.push(`/protocol/${pillar.slug}`)} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all text-left group flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full border-2 border-amber-400/30 flex items-center justify-center">
                        <span className="text-amber-400 font-bold text-sm">{progress.percentage}%</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-amber-400">{ICON_MAP[pillar.icon]}</span>
                          <h3 className="text-white font-semibold text-sm">{pillar.label}</h3>
                        </div>
                        <p className="text-zinc-500 text-xs">{progress.completedDays >= 30 ? 'Protocol complete!' : `Day ${progress.currentDay} of 30`}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 transition-colors" />
                    </button>
                  );
                })}
              </div>
            </div>
            {activePillars.length < 4 && (
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Start Another Pillar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {([1, 2, 3, 4] as PillarId[]).filter((id) => !activePillars.includes(id)).map((id) => {
                    const pillar = PILLAR_MAP[id];
                    return (
                      <button key={id} onClick={() => router.push(`/assess/${pillar.slug}`)} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all text-left">
                        <span className="text-amber-400">{ICON_MAP[pillar.icon]}</span>
                        <p className="text-zinc-300 text-sm font-medium mt-2">{pillar.label}</p>
                        <p className="text-zinc-600 text-xs mt-1">Take assessment</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 text-center mb-8">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Start Your First Assessment</h3>
              <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">Take a pillar assessment to discover your critical constraint and unlock your personalized 30-day protocol.</p>
              <button onClick={() => router.push('/assess')} className="bg-amber-400 text-black font-bold px-6 py-3 min-h-[44px] rounded-lg hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 inline-flex items-center gap-2">
                <Plus className="w-5 h-5" />Begin Assessment
              </button>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {([1, 2, 3, 4] as PillarId[]).map((id) => {
                  const pillar = PILLAR_MAP[id];
                  return (
                    <button key={id} onClick={() => router.push(`/assess/${pillar.slug}`)} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all text-left">
                      <span className="text-amber-400">{ICON_MAP[pillar.icon]}</span>
                      <p className="text-zinc-300 text-sm font-medium mt-2">{pillar.label}</p>
                      <p className="text-zinc-600 text-xs mt-1">Take assessment</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
