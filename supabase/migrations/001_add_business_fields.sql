-- Add business information fields to profiles table
-- Run this migration against the Supabase database via the dashboard SQL editor

ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS business_name TEXT,
ADD COLUMN IF NOT EXISTS business_type TEXT,
ADD COLUMN IF NOT EXISTS annual_revenue TEXT,
ADD COLUMN IF NOT EXISTS team_size INTEGER,
ADD COLUMN IF NOT EXISTS hours_per_week INTEGER;

-- Add constraints for business_type (optional - uncomment if you want to enforce valid values)
-- ALTER TABLE profiles
-- ADD CONSTRAINT business_type_check
-- CHECK (business_type IS NULL OR business_type IN (
--   'service', 'product', 'saas', 'agency', 'consulting',
--   'retail', 'construction', 'healthcare', 'other'
-- ));

-- Add constraints for annual_revenue (optional - uncomment if you want to enforce valid values)
-- ALTER TABLE profiles
-- ADD CONSTRAINT annual_revenue_check
-- CHECK (annual_revenue IS NULL OR annual_revenue IN (
--   'under-250k', '250k-500k', '500k-1m', '1m-2m',
--   '2m-5m', '5m-10m', 'over-10m'
-- ));

-- Add check constraints for positive numbers
ALTER TABLE profiles
ADD CONSTRAINT team_size_positive CHECK (team_size IS NULL OR team_size > 0);

ALTER TABLE profiles
ADD CONSTRAINT hours_per_week_positive CHECK (hours_per_week IS NULL OR hours_per_week > 0);

-- Add comments for documentation
COMMENT ON COLUMN profiles.business_name IS 'Name of the user''s business';
COMMENT ON COLUMN profiles.business_type IS 'Type of business: service, product, saas, agency, consulting, retail, construction, healthcare, other';
COMMENT ON COLUMN profiles.annual_revenue IS 'Annual revenue range: under-250k, 250k-500k, 500k-1m, 1m-2m, 2m-5m, 5m-10m, over-10m';
COMMENT ON COLUMN profiles.team_size IS 'Number of team members (including owner)';
COMMENT ON COLUMN profiles.hours_per_week IS 'Average hours worked per week';
