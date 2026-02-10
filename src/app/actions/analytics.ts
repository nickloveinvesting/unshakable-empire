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
