/**
 * Get human-readable label for revenue range
 */
export function getRevenueLabel(value: string): string {
  const labels: Record<string, string> = {
    'under-250k': 'Under $250K',
    '250k-500k': '$250K - $500K',
    '500k-1m': '$500K - $1M',
    '1m-2m': '$1M - $2M',
    '2m-5m': '$2M - $5M',
    '5m-10m': '$5M - $10M',
    'over-10m': 'Over $10M',
  };
  return labels[value] || value;
}

/**
 * Get human-readable label for business type
 */
export function getBusinessTypeLabel(value: string): string {
  const labels: Record<string, string> = {
    'service': 'Service Business',
    'product': 'Product Business',
    'saas': 'SaaS',
    'agency': 'Agency',
    'consulting': 'Consulting',
    'retail': 'Retail',
    'construction': 'Construction',
    'healthcare': 'Healthcare',
    'other': 'Other',
  };
  return labels[value] || value;
}
