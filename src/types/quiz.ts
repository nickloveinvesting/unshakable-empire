export type PillarId = 1 | 2 | 3 | 4;
export type PillarSlug = 'ceo-command' | 'team' | 'revenue' | 'conversion';

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
    label: 'CEO Command Center',
    slug: 'ceo-command',
    icon: 'Crosshair',
    description: 'Install a weekly rhythm that transforms you from a firefighter to an actual CEO. Your week becomes predictable and growth becomes intentional.',
    categories: ['Time & Focus', 'Decision Making & Delegation', 'Metrics & Visibility', 'The Five Core Functions'],
  },
  2: {
    id: 2,
    label: 'Team Architecture',
    slug: 'team',
    icon: 'Users',
    description: "Put people in place that execute without you. Your business runs whether you're there or not — that creates scalability.",
    categories: ['Role Clarity & Structure', 'Performance & Accountability', 'Culture & Retention', 'Independence & Scalability'],
  },
  3: {
    id: 3,
    label: 'Revenue Pipeline',
    slug: 'revenue',
    icon: 'DollarSign',
    description: "Install a system that identifies your most profitable clients, builds an offer ladder, and creates tracking that shows exactly what's working.",
    categories: ['Avatar & Client Clarity', 'Sales Process & Scripts', 'Offer Ladder & Client Retention', 'Revenue Tracking & Predictability'],
  },
  4: {
    id: 4,
    label: 'Conversion Intelligence',
    slug: 'conversion',
    icon: 'Target',
    description: "Install tracking at every stage of your buyer's journey. Identify the drop-offs and build repeatable sequences that convert every lead to revenue.",
    categories: ['Buyer Journey & Tracking', 'Marketing ROI & Spend', 'Automated Sequences & Systems', 'Repeatable & Scalable Marketing'],
  },
};

export const SLUG_TO_PILLAR: Record<PillarSlug, PillarId> = {
  'ceo-command': 1,
  'team': 2,
  'revenue': 3,
  'conversion': 4,
};
