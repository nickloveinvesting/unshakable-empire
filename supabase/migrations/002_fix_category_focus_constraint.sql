-- Step 1: Drop the old constraint
ALTER TABLE daily_checkins DROP CONSTRAINT IF EXISTS valid_category_focus;

-- Step 2: Update existing rows with placeholder values to correct category names
-- Map old values (a, b, c, d) to actual category names based on pillar and day

-- Pillar 1: CEO Command Center
UPDATE daily_checkins
SET category_focus = CASE
  WHEN day_number <= 7 THEN 'Time & Focus'
  WHEN day_number <= 14 THEN 'Decision Making & Delegation'
  WHEN day_number <= 22 THEN 'Metrics & Visibility'
  ELSE 'The Five Core Functions'
END
WHERE pillar_id = 1 AND category_focus IN ('a', 'b', 'c', 'd');

-- Pillar 2: Team Architecture
UPDATE daily_checkins
SET category_focus = CASE
  WHEN day_number <= 7 THEN 'Role Clarity & Structure'
  WHEN day_number <= 14 THEN 'Performance & Accountability'
  WHEN day_number <= 22 THEN 'Culture & Retention'
  ELSE 'Independence & Scalability'
END
WHERE pillar_id = 2 AND category_focus IN ('a', 'b', 'c', 'd');

-- Pillar 3: Revenue Pipeline
UPDATE daily_checkins
SET category_focus = CASE
  WHEN day_number <= 7 THEN 'Avatar & Client Clarity'
  WHEN day_number <= 14 THEN 'Sales Process & Scripts'
  WHEN day_number <= 22 THEN 'Offer Ladder & Client Retention'
  ELSE 'Revenue Tracking & Predictability'
END
WHERE pillar_id = 3 AND category_focus IN ('a', 'b', 'c', 'd');

-- Pillar 4: Conversion Intelligence
UPDATE daily_checkins
SET category_focus = CASE
  WHEN day_number <= 7 THEN 'Buyer Journey & Tracking'
  WHEN day_number <= 14 THEN 'Marketing ROI & Spend'
  WHEN day_number <= 22 THEN 'Automated Sequences & Systems'
  ELSE 'Repeatable & Scalable Marketing'
END
WHERE pillar_id = 4 AND category_focus IN ('a', 'b', 'c', 'd');

-- Step 3: Add new constraint with actual category names from all 4 pillars
ALTER TABLE daily_checkins
ADD CONSTRAINT valid_category_focus CHECK (
  category_focus IN (
    -- CEO Command Center (Pillar 1)
    'Time & Focus',
    'Decision Making & Delegation',
    'Metrics & Visibility',
    'The Five Core Functions',

    -- Team Architecture (Pillar 2)
    'Role Clarity & Structure',
    'Performance & Accountability',
    'Culture & Retention',
    'Independence & Scalability',

    -- Revenue Pipeline (Pillar 3)
    'Avatar & Client Clarity',
    'Sales Process & Scripts',
    'Offer Ladder & Client Retention',
    'Revenue Tracking & Predictability',

    -- Conversion Intelligence (Pillar 4)
    'Buyer Journey & Tracking',
    'Marketing ROI & Spend',
    'Automated Sequences & Systems',
    'Repeatable & Scalable Marketing',

    -- Fallback
    'General'
  )
);
