import React, { Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { BarChart3, ArrowLeft } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { getCompletionTimeline, getConfidenceTrend, getHeatmapData } from '@/app/actions/analytics';

// Dynamic imports for heavy chart components
const CompletionTimeline = dynamic(() => import('@/components/analytics/CompletionTimeline').then(mod => ({ default: mod.CompletionTimeline })), {
  loading: () => <div className="h-64 bg-zinc-800/50 animate-pulse rounded-lg" />,
  ssr: false
});

const ConfidenceTrend = dynamic(() => import('@/components/analytics/ConfidenceTrend').then(mod => ({ default: mod.ConfidenceTrend })), {
  loading: () => <div className="h-64 bg-zinc-800/50 animate-pulse rounded-lg" />,
  ssr: false
});

const HeatmapGrid = dynamic(() => import('@/components/analytics/HeatmapGrid').then(mod => ({ default: mod.HeatmapGrid })), {
  loading: () => <div className="h-48 bg-zinc-800/50 animate-pulse rounded-lg" />,
  ssr: false
});

const PILLAR_LABELS: Record<number, string> = {
  1: 'CEO Command Center',
  2: 'Team Architecture',
  3: 'Revenue Pipeline',
  4: 'Conversion Intelligence',
};

export default async function AnalyticsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-black py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 text-center">
            <p className="text-zinc-400">Please log in to view your analytics.</p>
          </div>
        </div>
      </div>
    );
  }

  // Get user profile to see active pillars
  const { data: profile } = await supabase
    .from('profiles')
    .select('active_pillars')
    .eq('id', user.id)
    .single();

  const activePillars = profile?.active_pillars || [];

  // Check if user has any check-ins
  const { data: checkins } = await supabase
    .from('daily_checkins')
    .select('id, completed_at')
    .eq('user_id', user.id)
    .limit(1);

  const hasData = checkins && checkins.length > 0;

  if (!hasData) {
    return (
      <div className="min-h-screen bg-black py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Your Analytics</h1>
              <p className="text-zinc-400 text-sm">Track your empire-building progress</p>
            </div>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 text-center">
            <p className="text-zinc-400">Complete your first day to unlock your analytics dashboard.</p>
          </div>
        </div>
      </div>
    );
  }

  // Fetch all chart data
  const [timelineData, confidenceData, ...heatmapData] = await Promise.all([
    getCompletionTimeline(),
    getConfidenceTrend(),
    ...activePillars.map((pillarId: number) => getHeatmapData(pillarId)),
  ]);

  // Check if we have at least 7 days of data for trend charts
  const { count: daysCount } = await supabase
    .from('daily_checkins')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id)
    .gte('completion_percentage', 50);

  const hasEnoughData = (daysCount || 0) >= 7;

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-6 transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-lg px-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Your Analytics</h1>
            <p className="text-zinc-400 text-sm">Track your empire-building progress</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="space-y-6">
          {/* Protocol Completion Timeline - Full Width */}
          {hasEnoughData && (
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
              <h2 className="text-xl font-semibold text-white mb-4">Protocol Completion Timeline</h2>
              <CompletionTimeline data={timelineData} />
            </div>
          )}

          {/* Confidence Trend & First Heatmap - Side by Side on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {hasEnoughData && (
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
                <h2 className="text-xl font-semibold text-white mb-4">Confidence Score Trend</h2>
                <ConfidenceTrend data={confidenceData} />
              </div>
            )}

            {activePillars.length > 0 && heatmapData[0] && (
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
                <HeatmapGrid
                  pillarLabel={PILLAR_LABELS[activePillars[0]]}
                  data={heatmapData[0]}
                />
              </div>
            )}
          </div>

          {/* Additional Heatmaps - Full Width or Grid */}
          {activePillars.length > 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activePillars.slice(1).map((pillarId: number, index: number) => {
                const data = heatmapData[index + 1];
                if (!data) return null;
                return (
                  <div key={pillarId} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
                    <HeatmapGrid
                      pillarLabel={PILLAR_LABELS[pillarId]}
                      data={data}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* Not Enough Data Message */}
          {!hasEnoughData && (
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 text-center">
              <p className="text-zinc-400">
                Keep going — your trend charts unlock after 7 days of consistent progress.
              </p>
              <p className="text-zinc-500 text-sm mt-2">
                Current progress: {daysCount || 0} / 7 days
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
