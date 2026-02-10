'use server';

import { createClient } from '@/lib/supabase/server';
import type { Json } from '@/types/database';

export async function saveCheckIn(data: {
  pillarId: number;
  dayNumber: number;
  responses: Record<string, string | number | boolean>;
  completionPercentage: number;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated' };

  const { data: existing } = await supabase
    .from('daily_checkins')
    .select('id')
    .eq('user_id', user.id)
    .eq('pillar_id', data.pillarId)
    .eq('day_number', data.dayNumber)
    .single();

  if (existing) {
    const { error } = await supabase
      .from('daily_checkins')
      .update({ responses: data.responses as unknown as Json, completion_percentage: data.completionPercentage })
      .eq('id', existing.id);
    if (error) return { error: error.message };
  } else {
    const { error } = await supabase
      .from('daily_checkins')
      .insert({
        user_id: user.id,
        pillar_id: data.pillarId,
        day_number: data.dayNumber,
        responses: data.responses as unknown as Json,
        completion_percentage: data.completionPercentage,
      });
    if (error) return { error: error.message };
  }

  return { success: true };
}

export async function getCheckInHistory(pillarId: number) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated', data: null };

  const { data, error } = await supabase
    .from('daily_checkins')
    .select('*')
    .eq('user_id', user.id)
    .eq('pillar_id', pillarId)
    .order('day_number', { ascending: true });

  if (error) return { error: error.message, data: null };
  return { data };
}

export async function getCheckIn(pillarId: number, dayNumber: number) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated', data: null };

  const { data, error } = await supabase
    .from('daily_checkins')
    .select('*')
    .eq('user_id', user.id)
    .eq('pillar_id', pillarId)
    .eq('day_number', dayNumber)
    .single();

  if (error && error.code !== 'PGRST116') return { error: error.message, data: null };
  return { data: data || null };
}
