export type PillarId = 1 | 2 | 3 | 4;
export type PillarSlug = 'protection' | 'assets' | 'income' | 'estate';

export const CATEGORY_QUESTIONS_COUNT = 8;

export interface PillarInfo {
  id: PillarId;
  label: string;
  slug: PillarSlug;
  icon: string;
  description: string;
  categories: string[];
}

export const PILLAR_MAP: Record<PillarId, PillarInfo> = {
  1: {
    id: 1,
    label: 'Protection & Insurance',
    slug: 'protection',
    icon: 'Shield',
    description: 'Safeguard your wealth with comprehensive insurance, emergency reserves, and risk management strategies.',
    categories: ['Emergency Fund', 'Insurance Coverage', 'Identity Protection', 'Liability Management'],
  },
  2: {
    id: 2,
    label: 'Assets & Investments',
    slug: 'assets',
    icon: 'TrendingUp',
    description: 'Build and grow your wealth through strategic investment allocation, diversification, and tax-advantaged accounts.',
    categories: ['Portfolio Allocation', 'Retirement Accounts', 'Real Estate', 'Alternative Investments'],
  },
  3: {
    id: 3,
    label: 'Cash Flow & Income',
    slug: 'income',
    icon: 'DollarSign',
    description: 'Optimize your cash flow, eliminate wasteful spending, and build multiple income streams for financial freedom.',
    categories: ['Budgeting Systems', 'Debt Management', 'Income Streams', 'Expense Optimization'],
  },
  4: {
    id: 4,
    label: 'Estate & Legacy',
    slug: 'estate',
    icon: 'Landmark',
    description: 'Protect your legacy with estate planning, trusts, beneficiary designations, and succession strategies.',
    categories: ['Wills & Trusts', 'Beneficiary Planning', 'Healthcare Directives', 'Succession Strategy'],
  },
};

export const SLUG_TO_PILLAR: Record<PillarSlug, PillarId> = {
  'protection': 1,
  'assets': 2,
  'income': 3,
  'estate': 4,
};
