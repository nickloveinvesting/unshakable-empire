'use server';

/**
 * Adaptive Assessment Server Actions
 *
 * Server-side functions for managing adaptive assessment sessions and results
 */

import { createClient } from '@/lib/supabase/server';
import type {
  BusinessContext,
  QuestionAnswer,
  PillarScoreResult,
  AssessmentRecommendation,
  ActionResponse,
  SessionResponse,
  ResultResponse,
  BusinessStage,
  Band,
} from '@/types/adaptive-quiz';
import type { PillarId, PillarSlug } from '@/types/quiz';

// ============================================================================
// SESSION MANAGEMENT
// ============================================================================

/**
 * Create a new adaptive assessment session
 * Allows anonymous sessions for lead generation
 */
export async function createAdaptiveSession(
  businessContext: BusinessContext,
  businessStage: BusinessStage
): Promise<ActionResponse<SessionResponse>> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Allow anonymous sessions - user_id will be null for unauthenticated users
  const { data, error } = await supabase
    .from('assessment_sessions_v2')
    .insert({
      user_id: user?.id || null,
      business_context: businessContext,
      business_stage: businessStage,
    })
    .select()
    .single();

  if (error) return { error: error.message };
  return { success: true, data: { session: data } };
}

/**
 * Update an existing assessment session with answers and paths
 * Supports both authenticated and anonymous sessions
 */
export async function updateAdaptiveSession(
  sessionId: string,
  answers: Record<string, QuestionAnswer>,
  questionsAsked: string[],
  pathsTaken: string[],
  timeSpentSeconds: number
): Promise<ActionResponse<void>> {
  const supabase = await createClient();

  // Update session by ID only (works for both authenticated and anonymous)
  const { error } = await supabase
    .from('assessment_sessions_v2')
    .update({
      answers,
      questions_asked: questionsAsked,
      paths_taken: pathsTaken,
      time_spent_seconds: timeSpentSeconds,
      updated_at: new Date().toISOString(),
    })
    .eq('id', sessionId);

  if (error) return { error: error.message };
  return { success: true };
}

/**
 * Mark session as completed
 * Supports both authenticated and anonymous sessions
 */
export async function completeAdaptiveSession(
  sessionId: string
): Promise<ActionResponse<void>> {
  const supabase = await createClient();

  // Update session by ID only (works for both authenticated and anonymous)
  const { error } = await supabase
    .from('assessment_sessions_v2')
    .update({
      completed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', sessionId);

  if (error) return { error: error.message };
  return { success: true };
}

/**
 * Get an assessment session by ID
 * Supports both authenticated and anonymous sessions
 */
export async function getAdaptiveSession(
  sessionId: string
): Promise<ActionResponse<SessionResponse>> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Build query - if authenticated, filter by user_id, otherwise just by session id
  let query = supabase
    .from('assessment_sessions_v2')
    .select('*')
    .eq('id', sessionId);

  // If authenticated, also verify ownership
  if (user) {
    query = query.eq('user_id', user.id);
  }

  const { data, error } = await query.single();

  if (error) return { error: error.message };
  return { success: true, data: { session: data } };
}

/**
 * Get all sessions for current user
 */
export async function getUserAdaptiveSessions(): Promise<
  ActionResponse<{ sessions: any[] }>
> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('assessment_sessions_v2')
    .select('*')
    .eq('user_id', user.id)
    .order('started_at', { ascending: false });

  if (error) return { error: error.message };
  return { success: true, data: { sessions: data || [] } };
}

// ============================================================================
// RESULTS MANAGEMENT
// ============================================================================

/**
 * Create assessment result after completion
 */
export async function createAdaptiveResult(data: {
  sessionId: string;
  businessStage: BusinessStage;
  questionCount: number;
  timeSpentSeconds: number;
  pillarScores: PillarScoreResult[];
  overallScore: number;
  overallBand: Band;
  weakestPillarId: PillarId;
  strongestPillarId: PillarId;
  recommendedPillarId: PillarId;
  recommendedCategory: string;
  recommendedProtocolSlug: PillarSlug;
  recommendation: AssessmentRecommendation;
  isRetake?: boolean;
  previousAssessmentId?: string;
}): Promise<ActionResponse<ResultResponse>> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Allow anonymous results - user_id will be null for unauthenticated users
  const { data: result, error } = await supabase
    .from('assessment_results_v2')
    .insert({
      session_id: data.sessionId,
      user_id: user?.id || null,
      business_stage: data.businessStage,
      question_count: data.questionCount,
      time_spent_seconds: data.timeSpentSeconds,
      pillar_scores: data.pillarScores,
      overall_score: data.overallScore,
      overall_band: data.overallBand,
      weakest_pillar_id: data.weakestPillarId,
      strongest_pillar_id: data.strongestPillarId,
      recommended_pillar_id: data.recommendedPillarId,
      recommended_category: data.recommendedCategory,
      recommended_protocol_slug: data.recommendedProtocolSlug,
      recommendation_headline: data.recommendation.headline,
      recommendation_description: data.recommendation.description,
      first_actions: data.recommendation.firstThreeActions,
      is_retake: data.isRetake ?? false,
      previous_assessment_id: data.previousAssessmentId ?? null,
    })
    .select()
    .single();

  if (error) return { error: error.message };
  return { success: true, data: { result } };
}

/**
 * Get latest assessment result for user
 */
export async function getLatestAdaptiveResult(): Promise<
  ActionResponse<ResultResponse>
> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('assessment_results_v2')
    .select('*')
    .eq('user_id', user.id)
    .order('completed_at', { ascending: false })
    .limit(1)
    .single();

  if (error) return { error: error.message };
  return { success: true, data: { result: data } };
}

/**
 * Get assessment result by ID
 */
export async function getAdaptiveResult(
  resultId: string
): Promise<ActionResponse<ResultResponse>> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('assessment_results_v2')
    .select('*')
    .eq('id', resultId)
    .eq('user_id', user.id)
    .single();

  if (error) return { error: error.message };
  return { success: true, data: { result: data } };
}

/**
 * Get all assessment results for user (history)
 */
export async function getAdaptiveResultHistory(): Promise<
  ActionResponse<{ results: any[] }>
> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('assessment_results_v2')
    .select('*')
    .eq('user_id', user.id)
    .order('completed_at', { ascending: false });

  if (error) return { error: error.message };
  return { success: true, data: { results: data || [] } };
}

/**
 * Get result comparison for retakes
 */
export async function compareAdaptiveResults(
  currentResultId: string,
  previousResultId: string
): Promise<
  ActionResponse<{
    current: any;
    previous: any;
    improvements: Record<string, number>;
  }>
> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: 'Not authenticated' };

  const { data: current, error: currentError } = await supabase
    .from('assessment_results_v2')
    .select('*')
    .eq('id', currentResultId)
    .eq('user_id', user.id)
    .single();

  if (currentError) return { error: currentError.message };

  const { data: previous, error: previousError } = await supabase
    .from('assessment_results_v2')
    .select('*')
    .eq('id', previousResultId)
    .eq('user_id', user.id)
    .single();

  if (previousError) return { error: previousError.message };

  // Calculate improvements
  const improvements: Record<string, number> = {
    overall: current.overall_score - previous.overall_score,
  };

  // Calculate per-pillar improvements
  if (current.pillar_scores && previous.pillar_scores) {
    (current.pillar_scores as PillarScoreResult[]).forEach(
      (currentPillar, index) => {
        const previousPillar = (previous.pillar_scores as PillarScoreResult[])[
          index
        ];
        if (previousPillar) {
          improvements[`pillar_${currentPillar.pillarId}`] =
            currentPillar.percentage - previousPillar.percentage;
        }
      }
    );
  }

  return {
    success: true,
    data: {
      current,
      previous,
      improvements,
    },
  };
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Delete an incomplete session (if user wants to start over)
 */
export async function deleteAdaptiveSession(
  sessionId: string
): Promise<ActionResponse<void>> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: 'Not authenticated' };

  const { error } = await supabase
    .from('assessment_sessions_v2')
    .delete()
    .eq('id', sessionId)
    .eq('user_id', user.id)
    .is('completed_at', null); // Only allow deletion of incomplete sessions

  if (error) return { error: error.message };
  return { success: true };
}
