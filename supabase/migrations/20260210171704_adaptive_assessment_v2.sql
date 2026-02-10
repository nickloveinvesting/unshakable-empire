-- ============================================================================
-- Adaptive Assessment V2 Schema
-- Based on COMPREHENSIVE_ADAPTIVE_ASSESSMENT_ARCHITECTURE.md section 7
-- ============================================================================
--
-- This migration creates tables for the new adaptive assessment system:
-- - assessment_sessions_v2: Tracks user sessions with business context and paths
-- - assessment_results_v2: Stores comprehensive 4-pillar results with recommendations
--
-- This runs alongside the existing assessments table (v1) for parallel rollout
-- ============================================================================

-- ============================================================================
-- TABLE: assessment_sessions_v2
-- Purpose: Track adaptive assessment sessions with business context
-- ============================================================================

CREATE TABLE IF NOT EXISTS assessment_sessions_v2 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,

  -- Session timestamps
  started_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  completed_at TIMESTAMPTZ,

  -- Business context (Tier 1 questions)
  business_context JSONB NOT NULL,
  business_stage TEXT NOT NULL,

  -- Assessment data
  answers JSONB DEFAULT '{}'::jsonb,
  questions_asked TEXT[] DEFAULT ARRAY[]::TEXT[],
  paths_taken TEXT[] DEFAULT ARRAY[]::TEXT[],

  -- Metadata
  validation_triggered BOOLEAN DEFAULT false,
  time_spent_seconds INTEGER DEFAULT 0,
  is_adaptive BOOLEAN DEFAULT true,
  version TEXT DEFAULT 'v2-adaptive',

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Constraints
  CONSTRAINT valid_business_stage CHECK (
    business_stage IN (
      'solo-overwhelmed',
      'solo-optimizing',
      'small-team',
      'growing',
      'established',
      'enterprise'
    )
  ),
  CONSTRAINT valid_time_spent CHECK (time_spent_seconds >= 0)
);

-- ============================================================================
-- TABLE: assessment_results_v2
-- Purpose: Store comprehensive 4-pillar assessment results
-- ============================================================================

CREATE TABLE IF NOT EXISTS assessment_results_v2 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES assessment_sessions_v2(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,

  -- Completion metadata
  completed_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  business_stage TEXT NOT NULL,
  question_count INTEGER NOT NULL,
  time_spent_seconds INTEGER NOT NULL,

  -- Pillar scores (all 4 pillars)
  pillar_scores JSONB NOT NULL,
  overall_score INTEGER NOT NULL,
  overall_band TEXT NOT NULL,
  weakest_pillar_id INTEGER NOT NULL,
  strongest_pillar_id INTEGER NOT NULL,

  -- Recommendation
  recommended_pillar_id INTEGER NOT NULL,
  recommended_category TEXT NOT NULL,
  recommended_protocol_slug TEXT NOT NULL,
  recommendation_headline TEXT NOT NULL,
  recommendation_description TEXT NOT NULL,
  first_actions JSONB NOT NULL,

  -- Retake tracking
  is_retake BOOLEAN DEFAULT false,
  previous_assessment_id UUID REFERENCES assessment_results_v2(id) ON DELETE SET NULL,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Constraints
  CONSTRAINT valid_question_count CHECK (question_count > 0 AND question_count <= 100),
  CONSTRAINT valid_time_spent CHECK (time_spent_seconds >= 0),
  CONSTRAINT valid_overall_score CHECK (overall_score >= 0 AND overall_score <= 100),
  CONSTRAINT valid_overall_band CHECK (
    overall_band IN ('Critical', 'Needs Work', 'Building', 'Strong', 'Elite')
  ),
  CONSTRAINT valid_pillar_ids CHECK (
    weakest_pillar_id BETWEEN 1 AND 4 AND
    strongest_pillar_id BETWEEN 1 AND 4 AND
    recommended_pillar_id BETWEEN 1 AND 4
  ),
  CONSTRAINT valid_protocol_slug CHECK (
    recommended_protocol_slug IN ('ceo-command', 'team', 'revenue', 'conversion')
  ),
  CONSTRAINT valid_business_stage CHECK (
    business_stage IN (
      'solo-overwhelmed',
      'solo-optimizing',
      'small-team',
      'growing',
      'established',
      'enterprise'
    )
  )
);

-- ============================================================================
-- INDEXES
-- Purpose: Optimize common queries
-- ============================================================================

-- Sessions indexes
CREATE INDEX IF NOT EXISTS idx_assessment_sessions_v2_user_id
  ON assessment_sessions_v2(user_id);

CREATE INDEX IF NOT EXISTS idx_assessment_sessions_v2_user_completed
  ON assessment_sessions_v2(user_id, completed_at DESC NULLS LAST);

CREATE INDEX IF NOT EXISTS idx_assessment_sessions_v2_business_stage
  ON assessment_sessions_v2(business_stage);

-- Results indexes
CREATE INDEX IF NOT EXISTS idx_assessment_results_v2_user_id
  ON assessment_results_v2(user_id);

CREATE INDEX IF NOT EXISTS idx_assessment_results_v2_user_completed
  ON assessment_results_v2(user_id, completed_at DESC);

CREATE INDEX IF NOT EXISTS idx_assessment_results_v2_session_id
  ON assessment_results_v2(session_id);

CREATE INDEX IF NOT EXISTS idx_assessment_results_v2_previous
  ON assessment_results_v2(previous_assessment_id)
  WHERE previous_assessment_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_assessment_results_v2_business_stage
  ON assessment_results_v2(business_stage);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- Purpose: Ensure users can only access their own data
-- ============================================================================

-- Enable RLS
ALTER TABLE assessment_sessions_v2 ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_results_v2 ENABLE ROW LEVEL SECURITY;

-- Sessions policies
CREATE POLICY "Users can view own sessions"
  ON assessment_sessions_v2
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions"
  ON assessment_sessions_v2
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions"
  ON assessment_sessions_v2
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own incomplete sessions"
  ON assessment_sessions_v2
  FOR DELETE
  USING (auth.uid() = user_id AND completed_at IS NULL);

-- Results policies
CREATE POLICY "Users can view own results"
  ON assessment_results_v2
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own results"
  ON assessment_results_v2
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- FUNCTIONS
-- Purpose: Helper functions for common operations
-- ============================================================================

-- Update updated_at timestamp automatically
CREATE OR REPLACE FUNCTION update_assessment_sessions_v2_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_assessment_sessions_v2_updated_at
  BEFORE UPDATE ON assessment_sessions_v2
  FOR EACH ROW
  EXECUTE FUNCTION update_assessment_sessions_v2_updated_at();

-- ============================================================================
-- COMMENTS
-- Purpose: Document tables and columns
-- ============================================================================

COMMENT ON TABLE assessment_sessions_v2 IS
  'Adaptive assessment sessions with business context and branching paths';

COMMENT ON COLUMN assessment_sessions_v2.business_context IS
  'Business context from Tier 1 questions (revenue, team size, hours, etc.)';

COMMENT ON COLUMN assessment_sessions_v2.business_stage IS
  'Classified business stage (solo-overwhelmed, growing, etc.)';

COMMENT ON COLUMN assessment_sessions_v2.paths_taken IS
  'Array of path labels taken during adaptive branching (e.g., "TIME CHAOS PATH")';

COMMENT ON TABLE assessment_results_v2 IS
  'Comprehensive 4-pillar assessment results with recommendations';

COMMENT ON COLUMN assessment_results_v2.pillar_scores IS
  'Detailed scores for all 4 pillars including category breakdowns';

COMMENT ON COLUMN assessment_results_v2.recommended_pillar_id IS
  'Pillar ID of the weakest pillar (recommended focus area)';

-- ============================================================================
-- MIGRATION COMPLETE
-- ============================================================================

-- Grant necessary permissions (adjust as needed for your setup)
-- GRANT SELECT, INSERT, UPDATE ON assessment_sessions_v2 TO authenticated;
-- GRANT SELECT, INSERT ON assessment_results_v2 TO authenticated;
