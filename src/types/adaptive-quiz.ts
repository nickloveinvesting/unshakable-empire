import type { PillarId } from './quiz';

/**
 * Business stage classification for adaptive assessment
 */
export type BusinessStage =
  | 'solo-overwhelmed'
  | 'solo-optimizing'
  | 'small-team'
  | 'growing'
  | 'established'
  | 'enterprise';

export type RevenueRange =
  | '$0-$250K'
  | '$250K-$500K'
  | '$500K-$1M'
  | '$1M-$2M'
  | '$2M-$5M'
  | '$5M+';

export type TeamSizeRange =
  | 'Solo'
  | '1-5 people'
  | '6-15 people'
  | '16-30 people'
  | '31-50 people'
  | '50+ people';

export type HoursWorkedRange =
  | 'Less than 40'
  | '40-50'
  | '50-60'
  | '60-70'
  | '70+';

export type BusinessAgeRange =
  | 'Less than 1 year'
  | '1-3 years'
  | '3-5 years'
  | '5-10 years'
  | '10+ years';

export type PrimaryRole =
  | 'I do everything (sales, delivery, operations)'
  | 'I focus on sales, team handles delivery'
  | 'I focus on strategy, team handles operations'
  | "I'm rarely in day-to-day operations";

/**
 * Business context collected at start of assessment
 */
export interface BusinessContext {
  revenue: RevenueRange;
  teamSize: TeamSizeRange;
  hoursWorked: HoursWorkedRange;
  businessAge: BusinessAgeRange;
  primaryRole: PrimaryRole;
}

/**
 * Result of business stage classification
 */
export interface BusinessStageResult {
  stage: BusinessStage;
  label: string;
  pillarWeights: {
    ceo: number;
    team: number;
    revenue: number;
    marketing: number;
  };
  recommendFocus?: string;
}

/**
 * Question response types
 */
export type QuestionResponseType = 'scale' | 'select' | 'multiselect' | 'number' | 'text';

/**
 * Select option for select/multiselect questions
 */
export interface SelectOption {
  value: string;
  label: string;
  description?: string;
}

/**
 * Question answer - can be various types
 */
export interface QuestionAnswer {
  questionId: string;
  value: number | string | string[] | boolean;
  answeredAt: Date;
  timeSpentSeconds?: number;
}

/**
 * Branch condition - determines next question based on answer
 */
export interface BranchCondition {
  condition: (answer: QuestionAnswer, context: AssessmentContext) => boolean;
  nextQuestionId: string;
  pathLabel?: string;
}

/**
 * Skip condition - determines if question should be skipped
 */
export interface SkipCondition {
  check: (context: AssessmentContext) => boolean;
  reason: string;
}

/**
 * Validation rule for Tier 4 validation questions
 */
export interface ValidationRule {
  triggerCondition: (answers: Record<string, QuestionAnswer>) => boolean;
  validationQuestionId: string;
  recalibrationLogic: (validationAnswer: QuestionAnswer) => ScoreAdjustment;
}

/**
 * Score adjustment from validation
 */
export interface ScoreAdjustment {
  adjustments: Array<{
    questionId: string;
    newScore: number;
    reason: string;
  }>;
}

/**
 * Assessment context - state during assessment
 */
export interface AssessmentContext {
  businessStage: BusinessStage;
  businessContext: BusinessContext;
  answersGiven: Record<string, QuestionAnswer>;
  currentPillarScores: Partial<Record<PillarId, number>>;
  questionsAsked: string[];
  pathsTaken: string[];
}

/**
 * Adaptive question node in the tree
 */
export interface AdaptiveQuestionNode {
  id: string;
  pillarId: PillarId | 0; // 0 for business context questions
  category: string;
  tier: 1 | 2 | 3 | 4; // Business context, Qualifier, Deep-dive, Validation
  text: string;
  subtext: string;
  responseType: QuestionResponseType;
  options?: SelectOption[];
  scaleMin?: number;
  scaleMax?: number;
  branches?: BranchCondition[];
  defaultNext?: string;
  skipConditions?: SkipCondition[];
  validationRules?: ValidationRule[];
}

/**
 * Category score result
 */
export interface CategoryScoreResult {
  category: string;
  questionsAsked: string[];
  questionCount: number;
  rawScore: number;
  maxPossible: number;
  percentage: number;
  weight: number;
  weightedScore: number;
  band: string;
}

/**
 * Pillar score result
 */
export interface PillarScoreResult {
  pillarId: PillarId;
  pillarLabel: string;
  categoryScores: CategoryScoreResult[];
  rawScore: number;
  maxPossible: number;
  percentage: number;
  stageWeightedPercentage: number;
  band: string;
  weakestCategory: string;
  topRecommendation: string;
}

/**
 * Assessment recommendation
 */
export interface AssessmentRecommendation {
  focusPillar: PillarId;
  focusCategory: string;
  protocolSlug: string;
  headline: string;
  description: string;
  firstThreeActions: string[];
  estimatedImpact: string;
}

/**
 * Comprehensive assessment result
 */
export interface ComprehensiveAssessmentResult {
  businessStage: BusinessStage;
  completedAt: Date;
  questionCount: number;
  timeSpent: number;
  pillarScores: PillarScoreResult[];
  overallScore: number;
  overallBand: string;
  weakestPillar: PillarScoreResult;
  strongestPillar: PillarScoreResult;
  recommendation: AssessmentRecommendation;
}

/**
 * Assessment session (for database)
 */
export interface AssessmentSession {
  id: string;
  user_id: string;
  started_at: Date;
  completed_at: Date | null;
  business_context: BusinessContext;
  business_stage: BusinessStage;
  answers: Record<string, QuestionAnswer>;
  questions_asked: string[];
  paths_taken: string[];
  validation_triggered: boolean;
  time_spent_seconds: number;
  is_adaptive: boolean;
  version: string;
}

/**
 * Assessment result (for database)
 */
export interface AssessmentResult {
  id: string;
  session_id: string;
  user_id: string;
  completed_at: Date;
  business_stage: BusinessStage;
  question_count: number;
  time_spent_seconds: number;
  pillar_scores: PillarScoreResult[];
  overall_score: number;
  overall_band: string;
  weakest_pillar_id: PillarId;
  strongest_pillar_id: PillarId;
  recommended_pillar_id: PillarId;
  recommended_category: string;
  recommended_protocol_slug: string;
  recommendation_headline: string;
  recommendation_description: string;
  first_actions: string[];
  is_retake: boolean;
  previous_assessment_id: string | null;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Server action response type
 */
export interface ActionResponse<T = unknown> {
  success?: boolean;
  error?: string;
  data?: T;
}

/**
 * Session creation response
 */
export interface SessionResponse {
  session: AssessmentSession;
}

/**
 * Result creation response
 */
export interface ResultResponse {
  result: AssessmentResult;
}

/**
 * Performance band type
 */
export type Band = 'Critical' | 'Needs Work' | 'Building' | 'Strong' | 'Elite';
