'use server';

import { createClient } from '@/lib/supabase/server';
import { PILLAR_MAP } from '@/types/quiz';
import type { PillarId } from '@/types/quiz';

export interface PillarProgress {
  pillarId: number;
  pillarSlug: string;
  pillarLabel: string;
  completedDays: number;
  currentDay: number;
  percentage: number;
  isCompleted: boolean;
}

export interface StreakData {
  currentStreak: number;
  bestStreak: number;
}

export interface EmpireScore {
  score: number;
  band: string;
  bandColor: string;
  latestAssessmentAvg: number;
  protocolCompletionPct: number;
  streakScore: number;
}

export interface DashboardData {
  activePillars: PillarProgress[];
  streak: StreakData;
  empireScore: EmpireScore;
  earliestCurrentDay: number;
}

/**
 * Calculate current streak from check-in history
 * A streak is consecutive days completed (ordered by completed_at)
 */
function calculateStreak(allCheckins: any[]): StreakData {
  if (allCheckins.length === 0) {
    return { currentStreak: 0, bestStreak: 0 };
  }

  // Sort by completed_at descending
  const completed = allCheckins
    .filter((c) => c.completed_at && c.completion_percentage >= 100)
    .sort((a, b) => new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime());

  if (completed.length === 0) {
    return { currentStreak: 0, bestStreak: 0 };
  }

  let currentStreak = 0;
  let bestStreak = 0;
  let tempStreak = 1;
  let lastDate: Date | null = null;

  for (let i = 0; i < completed.length; i++) {
    const currentDate = new Date(completed[i].completed_at);

    if (i === 0) {
      currentStreak = 1;
      lastDate = currentDate;
      continue;
    }

    if (lastDate) {
      const diffDays = Math.floor((lastDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        tempStreak++;
        if (i < 20) { // Only count towards current streak if in recent history
          currentStreak = tempStreak;
        }
      } else {
        bestStreak = Math.max(bestStreak, tempStreak);
        tempStreak = 1;
      }
    }

    lastDate = currentDate;
  }

  bestStreak = Math.max(bestStreak, tempStreak, currentStreak);

  return { currentStreak, bestStreak };
}

/**
 * Calculate Empire Score (0-100) composite metric
 */
function calculateEmpireScore(
  assessmentScores: any[],
  totalCompletedDays: number,
  totalPossibleDays: number,
  currentStreak: number
): EmpireScore {
  // 1. Latest assessment average (50% weight)
  let latestAssessmentAvg = 0;
  if (assessmentScores.length > 0) {
    const latest = assessmentScores
      .filter((a) => a.total_percentage !== null)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];

    if (latest) {
      latestAssessmentAvg = latest.total_percentage;
    }
  }

  // 2. Protocol completion percentage (30% weight)
  const protocolCompletionPct = totalPossibleDays > 0
    ? (totalCompletedDays / totalPossibleDays) * 100
    : 0;

  // 3. Streak score (20% weight) - max out at 30 days
  const streakScore = Math.min((currentStreak / 30) * 100, 100);

  // Calculate composite score
  const score = Math.round(
    (latestAssessmentAvg * 0.5) +
    (protocolCompletionPct * 0.3) +
    (streakScore * 0.2)
  );

  // Determine band based on score
  let band = 'Critical';
  let bandColor = 'red';

  if (score >= 80) {
    band = 'Elite';
    bandColor = 'amber';
  } else if (score >= 60) {
    band = 'Strong';
    bandColor = 'green';
  } else if (score >= 40) {
    band = 'Developing';
    bandColor = 'blue';
  } else if (score >= 20) {
    band = 'Weak';
    bandColor = 'orange';
  }

  return {
    score,
    band,
    bandColor,
    latestAssessmentAvg,
    protocolCompletionPct,
    streakScore,
  };
}

/**
 * Fetch all dashboard data for the authenticated user
 */
export async function getDashboardData(): Promise<{ data: DashboardData | null; error: string | null }> {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated', data: null };

  const { data: profile } = await supabase
    .from('profiles')
    .select('active_pillars')
    .eq('id', user.id)
    .single();

  if (!profile || !profile.active_pillars || profile.active_pillars.length === 0) {
    return {
      data: {
        activePillars: [],
        streak: { currentStreak: 0, bestStreak: 0 },
        empireScore: {
          score: 0,
          band: 'Critical',
          bandColor: 'red',
          latestAssessmentAvg: 0,
          protocolCompletionPct: 0,
          streakScore: 0,
        },
        earliestCurrentDay: 1,
      },
      error: null,
    };
  }

  const activePillarIds = profile.active_pillars as PillarId[];

  // Fetch all check-ins for active pillars
  const { data: allCheckins } = await supabase
    .from('daily_checkins')
    .select('*')
    .eq('user_id', user.id)
    .in('pillar_id', activePillarIds);

  // Fetch all assessments
  const { data: assessments } = await supabase
    .from('assessments')
    .select('*')
    .eq('user_id', user.id);

  const activePillars: PillarProgress[] = [];
  let totalCompletedDays = 0;
  let earliestCurrentDay = 30;

  activePillarIds.forEach((pillarId) => {
    const pillar = PILLAR_MAP[pillarId];
    if (!pillar) return;

    const pillarCheckins = (allCheckins || []).filter((c) => c.pillar_id === pillarId);
    const completed = pillarCheckins.filter((c) => c.completion_percentage >= 100);
    const completedCount = completed.length;
    const currentDay = completedCount >= 30 ? 30 : completedCount + 1;

    totalCompletedDays += completedCount;
    earliestCurrentDay = Math.min(earliestCurrentDay, currentDay);

    activePillars.push({
      pillarId,
      pillarSlug: pillar.slug,
      pillarLabel: pillar.label,
      completedDays: completedCount,
      currentDay,
      percentage: Math.round((completedCount / 30) * 100),
      isCompleted: completedCount >= 30,
    });
  });

  const totalPossibleDays = activePillarIds.length * 30;
  const streak = calculateStreak(allCheckins || []);
  const empireScore = calculateEmpireScore(
    assessments || [],
    totalCompletedDays,
    totalPossibleDays,
    streak.currentStreak
  );

  return {
    data: {
      activePillars,
      streak,
      empireScore,
      earliestCurrentDay: earliestCurrentDay === 30 ? 1 : earliestCurrentDay,
    },
    error: null,
  };
}
