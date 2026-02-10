'use server';

import { createClient } from '@/lib/supabase/server';

export interface AnalyticsSummary {
  totalDaysCompleted: number;
  currentStreak: number;
  averageScore: number;
}

export async function getAnalyticsSummary(): Promise<{ data: AnalyticsSummary | null; error?: string }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated', data: null };

  const { data: checkins } = await supabase
    .from('daily_checkins')
    .select('*')
    .eq('user_id', user.id)
    .order('completed_at', { ascending: false });

  if (!checkins || checkins.length === 0) return { data: { totalDaysCompleted: 0, currentStreak: 0, averageScore: 0 } };

  const completed = checkins.filter((c) => c.completion_percentage >= 50);
  const totalDaysCompleted = completed.length;
  const averageScore = completed.length > 0 ? Math.round(completed.reduce((sum, c) => sum + c.completion_percentage, 0) / completed.length) : 0;

  // Simple streak calc
  let currentStreak = 0;
  const today = new Date();
  const dates = completed.map((c) => new Date(c.completed_at).toDateString());
  const uniqueDates = [...new Set(dates)].sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  for (let i = 0; i < uniqueDates.length; i++) {
    const expected = new Date(today);
    expected.setDate(expected.getDate() - i);
    if (uniqueDates[i] === expected.toDateString()) {
      currentStreak++;
    } else {
      break;
    }
  }

  return { data: { totalDaysCompleted, currentStreak, averageScore } };
}

export async function getCompletionTimeline(pillarId?: number) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  let query = supabase
    .from('daily_checkins')
    .select('completed_at, pillar_id, day_number')
    .eq('user_id', user.id)
    .gte('completion_percentage', 50)
    .order('completed_at', { ascending: true });

  if (pillarId) {
    query = query.eq('pillar_id', pillarId);
  }

  const { data: checkins } = await query;
  if (!checkins || checkins.length === 0) return [];

  // Group by pillar and calculate cumulative days
  const pillarData: Record<number, Array<{ date: string; cumulativeDays: number }>> = {};

  checkins.forEach((checkin) => {
    const date = new Date(checkin.completed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    if (!pillarData[checkin.pillar_id]) {
      pillarData[checkin.pillar_id] = [];
    }
    pillarData[checkin.pillar_id].push({
      date,
      cumulativeDays: pillarData[checkin.pillar_id].length + 1,
    });
  });

  // Merge all pillar data into timeline format
  const timeline: Array<{ date: string; pillar1?: number; pillar2?: number; pillar3?: number; pillar4?: number }> = [];
  const allDates = new Set<string>();

  Object.values(pillarData).forEach(data => {
    data.forEach(point => allDates.add(point.date));
  });

  const sortedDates = Array.from(allDates).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
  });

  sortedDates.forEach(date => {
    const point: { date: string; pillar1?: number; pillar2?: number; pillar3?: number; pillar4?: number } = { date };

    [1, 2, 3, 4].forEach(pid => {
      const pillarDataPoints = pillarData[pid];
      if (pillarDataPoints) {
        const dataPoint = pillarDataPoints.find(p => p.date === date);
        if (dataPoint) {
          (point as any)[`pillar${pid}`] = dataPoint.cumulativeDays;
        } else {
          // Find last known value for this pillar before this date
          const lastValue = pillarDataPoints
            .filter(p => new Date(p.date) <= new Date(date))
            .pop();
          if (lastValue) {
            (point as any)[`pillar${pid}`] = lastValue.cumulativeDays;
          }
        }
      }
    });

    timeline.push(point);
  });

  return timeline;
}

export async function getConfidenceTrend(pillarId?: number) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  let query = supabase
    .from('daily_checkins')
    .select('day_number, responses, pillar_id')
    .eq('user_id', user.id)
    .order('day_number', { ascending: true });

  if (pillarId) {
    query = query.eq('pillar_id', pillarId);
  }

  const { data: checkins } = await query;
  if (!checkins || checkins.length === 0) return [];

  return checkins
    .map((checkin) => {
      const responses = checkin.responses as Record<string, unknown>;
      const score = typeof responses?.confidence_score === 'number' ? responses.confidence_score : null;
      return score !== null ? { day: checkin.day_number, score } : null;
    })
    .filter((item): item is { day: number; score: number } => item !== null);
}

export async function getHeatmapData(pillarId: number) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data: checkins } = await supabase
    .from('daily_checkins')
    .select('day_number, completion_percentage')
    .eq('user_id', user.id)
    .eq('pillar_id', pillarId)
    .gte('day_number', 1)
    .lte('day_number', 30);

  // Create array for all 30 days
  const heatmap = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    completionPct: 0,
  }));

  // Fill in actual data
  checkins?.forEach((checkin) => {
    if (checkin.day_number >= 1 && checkin.day_number <= 30) {
      heatmap[checkin.day_number - 1].completionPct = checkin.completion_percentage;
    }
  });

  return heatmap;
}
