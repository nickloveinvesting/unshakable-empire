'use server';

import { createClient } from '@/lib/supabase/server';
import type { Json } from '@/types/database';

export async function saveAssessment(data: {
  pillarId: number;
  answers: Record<string, number>;
  overallScore: number;
  overallPercentage: number;
  categoryScores: Record<string, { score: number; max: number; percentage: number }>;
  band: string;
  weakestCategory: string;
  isRetake?: boolean;
  previousAssessmentId?: string;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: 'Not authenticated' };

  const answersArray = Object.entries(data.answers).map(([questionId, value]) => ({ question_id: questionId, value }));

  const { data: assessment, error } = await supabase
    .from('assessments')
    .insert({
      user_id: user.id,
      pillar_id: data.pillarId,
      answers: answersArray as unknown as Json,
      overall_score: data.overallScore,
      overall_percentage: data.overallPercentage,
      category_scores: data.categoryScores as unknown as Json,
      band: data.band,
      weakest_category: data.weakestCategory,
      is_retake: data.isRetake ?? false,
      previous_assessment_id: data.previousAssessmentId ?? null,
    })
    .select()
    .single();

  if (error) return { error: error.message };

  const { data: profile } = await supabase
    .from('profiles')
    .select('active_pillars')
    .eq('id', user.id)
    .single();

  if (profile) {
    const pillars = new Set(profile.active_pillars || []);
    pillars.add(data.pillarId);
    await supabase.from('profiles').update({ active_pillars: Array.from(pillars) }).eq('id', user.id);
  }

  return { success: true, assessmentId: assessment.id };
}

export async function getLatestAssessment(pillarId: number) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated', data: null };

  const { data, error } = await supabase
    .from('assessments')
    .select('*')
    .eq('user_id', user.id)
    .eq('pillar_id', pillarId)
    .order('completed_at', { ascending: false })
    .limit(1)
    .single();

  if (error) return { error: error.message, data: null };
  return { data };
}

export async function getAssessmentHistory(pillarId?: number) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated', data: null };

  let query = supabase.from('assessments').select('*').eq('user_id', user.id).order('completed_at', { ascending: false });
  if (pillarId) query = query.eq('pillar_id', pillarId);

  const { data, error } = await query;
  if (error) return { error: error.message, data: null };
  return { data };
}
