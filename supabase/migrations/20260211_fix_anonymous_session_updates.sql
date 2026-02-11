-- ============================================================================
-- Fix Anonymous Session Updates
-- ============================================================================
--
-- Problem: Anonymous users cannot update their sessions because RLS policy
-- requires auth.uid() = user_id, but NULL = NULL evaluates to NULL (not TRUE)
--
-- Solution: Add policies that explicitly allow anonymous users to update
-- their own sessions (where both auth.uid() and user_id are NULL)
-- ============================================================================

-- Drop existing update policy
DROP POLICY IF EXISTS "Users can update own sessions" ON assessment_sessions_v2;

-- Create new update policy that handles both authenticated and anonymous users
CREATE POLICY "Users can update own sessions"
  ON assessment_sessions_v2
  FOR UPDATE
  USING (
    -- Authenticated users can update their own sessions
    (auth.uid() = user_id)
    OR
    -- Anonymous users can update anonymous sessions
    (auth.uid() IS NULL AND user_id IS NULL)
  );

-- Similarly fix the SELECT policy for consistency
DROP POLICY IF EXISTS "Users can view own sessions" ON assessment_sessions_v2;

CREATE POLICY "Users can view own sessions"
  ON assessment_sessions_v2
  FOR SELECT
  USING (
    -- Authenticated users can view their own sessions
    (auth.uid() = user_id)
    OR
    -- Anonymous users can view anonymous sessions
    (auth.uid() IS NULL AND user_id IS NULL)
  );

-- Fix INSERT policy to allow anonymous inserts
DROP POLICY IF EXISTS "Users can insert own sessions" ON assessment_sessions_v2;

CREATE POLICY "Users can insert own sessions"
  ON assessment_sessions_v2
  FOR INSERT
  WITH CHECK (
    -- Authenticated users can insert their own sessions
    (auth.uid() = user_id)
    OR
    -- Anonymous users can insert anonymous sessions
    (auth.uid() IS NULL AND user_id IS NULL)
  );

-- Fix results INSERT policy for anonymous users
DROP POLICY IF EXISTS "Users can insert own results" ON assessment_results_v2;

CREATE POLICY "Users can insert own results"
  ON assessment_results_v2
  FOR INSERT
  WITH CHECK (
    -- Authenticated users can insert their own results
    (auth.uid() = user_id)
    OR
    -- Anonymous users can insert anonymous results
    (auth.uid() IS NULL AND user_id IS NULL)
  );

-- Fix results SELECT policy for anonymous users
DROP POLICY IF EXISTS "Users can view own results" ON assessment_results_v2;

CREATE POLICY "Users can view own results"
  ON assessment_results_v2
  FOR SELECT
  USING (
    -- Authenticated users can view their own results
    (auth.uid() = user_id)
    OR
    -- Anonymous users can view anonymous results
    (auth.uid() IS NULL AND user_id IS NULL)
  );

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON POLICY "Users can update own sessions" ON assessment_sessions_v2 IS
  'Allows users to update their own sessions. Handles both authenticated users (auth.uid() = user_id) and anonymous users (both NULL)';

COMMENT ON POLICY "Users can view own sessions" ON assessment_sessions_v2 IS
  'Allows users to view their own sessions. Handles both authenticated users (auth.uid() = user_id) and anonymous users (both NULL)';

COMMENT ON POLICY "Users can insert own sessions" ON assessment_sessions_v2 IS
  'Allows users to insert their own sessions. Handles both authenticated users (auth.uid() = user_id) and anonymous users (both NULL)';

COMMENT ON POLICY "Users can insert own results" ON assessment_results_v2 IS
  'Allows users to insert their own results. Handles both authenticated users (auth.uid() = user_id) and anonymous users (both NULL)';

COMMENT ON POLICY "Users can view own results" ON assessment_results_v2 IS
  'Allows users to view their own results. Handles both authenticated users (auth.uid() = user_id) and anonymous users (both NULL)';

-- ============================================================================
-- MIGRATION COMPLETE
-- ============================================================================
