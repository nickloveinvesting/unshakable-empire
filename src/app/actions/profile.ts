'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export interface ProfileUpdateData {
  full_name?: string | null;
  business_name?: string | null;
  business_type?: string | null;
  annual_revenue?: string | null;
  team_size?: number | null;
  hours_per_week?: number | null;
}

const BUSINESS_TYPES = [
  'service',
  'product',
  'saas',
  'agency',
  'consulting',
  'retail',
  'construction',
  'healthcare',
  'other',
];

const REVENUE_RANGES = [
  'under-250k',
  '250k-500k',
  '500k-1m',
  '1m-2m',
  '2m-5m',
  '5m-10m',
  'over-10m',
];

/**
 * Update user profile information
 */
export async function updateProfile(data: ProfileUpdateData) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: 'Not authenticated', success: false };
  }

  // Validate business_type if provided
  if (data.business_type && !BUSINESS_TYPES.includes(data.business_type)) {
    return { error: 'Invalid business type', success: false };
  }

  // Validate annual_revenue if provided
  if (data.annual_revenue && !REVENUE_RANGES.includes(data.annual_revenue)) {
    return { error: 'Invalid revenue range', success: false };
  }

  // Validate team_size if provided
  if (data.team_size !== undefined && data.team_size !== null && data.team_size <= 0) {
    return { error: 'Team size must be greater than 0', success: false };
  }

  // Validate hours_per_week if provided
  if (data.hours_per_week !== undefined && data.hours_per_week !== null && data.hours_per_week <= 0) {
    return { error: 'Hours per week must be greater than 0', success: false };
  }

  const { error } = await supabase
    .from('profiles')
    .update(data)
    .eq('id', user.id);

  if (error) {
    return { error: error.message, success: false };
  }

  revalidatePath('/profile');
  return { success: true };
}
