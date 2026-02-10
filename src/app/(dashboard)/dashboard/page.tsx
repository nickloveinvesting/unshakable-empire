import { redirect } from 'next/navigation';
import { Shield } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { getDashboardData } from '@/app/actions/dashboard';
import { TodaysFocus } from '@/components/dashboard/TodaysFocus';
import { ProgressRings } from '@/components/dashboard/ProgressRings';
import { StreakCounter } from '@/components/dashboard/StreakCounter';
import { EmpireScore } from '@/components/dashboard/EmpireScore';
import { DailyInsight } from '@/components/dashboard/DailyInsight';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', user.id)
    .single();

  const { data: dashboardData } = await getDashboardData();

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8">
            <h2 className="text-white font-bold text-xl mb-2">Error Loading Dashboard</h2>
            <p className="text-zinc-400 text-sm mb-6">
              We couldn't load your dashboard data. Please try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-400 text-black font-bold px-6 py-3 min-h-[44px] rounded-lg hover:bg-amber-300 transition-[background-color] duration-200 shadow-lg shadow-amber-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(today);

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Your Empire Dashboard</h1>
              <p className="text-zinc-400 text-sm">
                Welcome back, {profile?.full_name?.split(' ')[0] || 'Builder'}. Keep building.
              </p>
            </div>
          </div>
          <p className="text-zinc-500 text-sm">{formattedDate}</p>
        </div>

        {/* Zone 1: Today's Protocol (Most Prominent) */}
        <div className="mb-6">
          <TodaysFocus activePillars={dashboardData.activePillars} />
        </div>

        {/* Zone 2 & 3: Progress and Score (Side by Side on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Zone 2: Progress Rings */}
          <div>
            <ProgressRings activePillars={dashboardData.activePillars} />
          </div>

          {/* Zone 3: Empire Score and Streak */}
          <div className="space-y-6">
            <EmpireScore empireScore={dashboardData.empireScore} />
            <StreakCounter streak={dashboardData.streak} />
          </div>
        </div>

        {/* Zone 4: Daily Insight */}
        <div>
          <DailyInsight currentDay={dashboardData.earliestCurrentDay} />
        </div>
      </div>
    </div>
  );
}
