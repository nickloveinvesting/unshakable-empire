import type {
  BusinessContext,
  BusinessStage,
  BusinessStageResult,
  RevenueRange,
  TeamSizeRange,
  HoursWorkedRange,
} from '@/types/adaptive-quiz';

/**
 * Business stage classification algorithm
 * Determines which business stage a user is in based on their context
 * This affects question selection and scoring weights
 */

/**
 * Classify business stage based on revenue, team size, and hours worked
 */
export function classifyBusinessStage(context: BusinessContext): BusinessStageResult {
  const { revenue, teamSize, hoursWorked, primaryRole } = context;

  // Convert ranges to numbers for comparison
  const revenueNum = getRevenueNumber(revenue);
  const teamNum = getTeamSizeNumber(teamSize);
  const hoursNum = getHoursWorkedNumber(hoursWorked);

  // STAGE 1: SOLO OPERATOR - OVERWHELMED
  // Characteristics: Solo, high hours, <$500K revenue, doing everything
  if (
    teamSize === 'Solo' &&
    hoursNum >= 60 &&
    revenueNum < 500000 &&
    primaryRole === 'I do everything (sales, delivery, operations)'
  ) {
    return {
      stage: 'solo-overwhelmed',
      label: 'Solo Operator - Overwhelmed',
      pillarWeights: {
        ceo: 0.4, // CEO time management is critical
        team: 0.05, // Team not relevant yet
        revenue: 0.45, // Revenue generation is critical
        marketing: 0.1, // Marketing is secondary to survival
      },
      recommendFocus: 'Focus on CEO time management and revenue systems first',
    };
  }

  // STAGE 2: SOLO OPERATOR - OPTIMIZING
  // Characteristics: Solo, reasonable hours, decent revenue, strategic focus emerging
  if (
    teamSize === 'Solo' &&
    hoursNum < 60 &&
    revenueNum >= 250000 &&
    revenueNum < 1000000
  ) {
    return {
      stage: 'solo-optimizing',
      label: 'Solo Operator - Optimizing',
      pillarWeights: {
        ceo: 0.3, // Still important but improving
        team: 0.15, // Starting to think about hiring
        revenue: 0.35, // Revenue optimization
        marketing: 0.2, // Can start investing in marketing
      },
      recommendFocus: 'Prepare for your first hire and scale marketing',
    };
  }

  // STAGE 3: SMALL TEAM
  // Characteristics: 1-5 people, $500K-$2M, transitioning from doer to leader
  if (
    (teamNum >= 2 && teamNum <= 5) &&
    revenueNum >= 500000 &&
    revenueNum <= 2000000
  ) {
    return {
      stage: 'small-team',
      label: 'Small Team',
      pillarWeights: {
        ceo: 0.25, // Delegation becoming critical
        team: 0.3, // Team clarity and performance critical
        revenue: 0.3, // Revenue systems
        marketing: 0.15, // Marketing secondary
      },
      recommendFocus: 'Build team independence and clear role structures',
    };
  }

  // STAGE 4: GROWING BUSINESS
  // Characteristics: 6-15 people, $1M-$5M, systems becoming necessary
  if (
    (teamNum >= 6 && teamNum <= 15) &&
    revenueNum >= 1000000 &&
    revenueNum <= 5000000
  ) {
    return {
      stage: 'growing',
      label: 'Growing Business',
      pillarWeights: {
        ceo: 0.25, // CEO operating rhythm
        team: 0.25, // Team scalability
        revenue: 0.25, // Revenue predictability
        marketing: 0.25, // Marketing scalability
      },
      recommendFocus: 'Balance all pillars - systematic growth across the board',
    };
  }

  // STAGE 5: ESTABLISHED BUSINESS
  // Characteristics: 16-50 people, $2M+, need for true independence
  if (
    (teamNum >= 16 && teamNum <= 50) &&
    revenueNum >= 2000000
  ) {
    return {
      stage: 'established',
      label: 'Established Business',
      pillarWeights: {
        ceo: 0.2, // CEO should be more strategic
        team: 0.35, // Team independence and leadership critical
        revenue: 0.25, // Revenue optimization
        marketing: 0.2, // Marketing efficiency
      },
      recommendFocus: 'Build team that runs without you - true scalability',
    };
  }

  // STAGE 6: ENTERPRISE
  // Characteristics: 50+ people, $5M+, institutional systems
  if (teamNum >= 50 && revenueNum >= 5000000) {
    return {
      stage: 'enterprise',
      label: 'Enterprise',
      pillarWeights: {
        ceo: 0.25, // Strategy and vision
        team: 0.3, // Leadership development
        revenue: 0.2, // Optimization over growth
        marketing: 0.25, // Market expansion
      },
      recommendFocus: 'Leadership development and market expansion',
    };
  }

  // FALLBACK: If doesn't match clean patterns, default to Growing
  // This handles edge cases like high revenue but small team, etc.
  return {
    stage: 'growing',
    label: 'Growing Business',
    pillarWeights: {
      ceo: 0.25,
      team: 0.25,
      revenue: 0.25,
      marketing: 0.25,
    },
    recommendFocus: 'Balance all pillars systematically',
  };
}

/**
 * Convert revenue range to approximate number
 */
function getRevenueNumber(revenue: RevenueRange): number {
  const revenueMap: Record<RevenueRange, number> = {
    '$0-$250K': 125000,
    '$250K-$500K': 375000,
    '$500K-$1M': 750000,
    '$1M-$2M': 1500000,
    '$2M-$5M': 3500000,
    '$5M+': 7500000,
  };
  return revenueMap[revenue];
}

/**
 * Convert team size range to approximate number
 */
function getTeamSizeNumber(teamSize: TeamSizeRange): number {
  const teamMap: Record<TeamSizeRange, number> = {
    'Solo': 1,
    '1-5 people': 3,
    '6-15 people': 10,
    '16-30 people': 23,
    '31-50 people': 40,
    '50+ people': 75,
  };
  return teamMap[teamSize];
}

/**
 * Convert hours worked range to number
 */
function getHoursWorkedNumber(hours: HoursWorkedRange): number {
  const hoursMap: Record<HoursWorkedRange, number> = {
    'Less than 40': 35,
    '40-50': 45,
    '50-60': 55,
    '60-70': 65,
    '70+': 75,
  };
  return hoursMap[hours];
}

/**
 * Get category weight for a specific pillar, category, and business stage
 * This allows fine-grained weighting of specific categories based on stage
 */
export function getCategoryWeight(
  stage: BusinessStage,
  pillarId: number,
  category: string
): number {
  // Default weight is 1.0 (equal weighting)
  // Increase weight (>1.0) for more important categories at this stage
  // Decrease weight (<1.0) for less relevant categories

  const weightMap: Record<
    BusinessStage,
    Record<number, Partial<Record<string, number>>>
  > = {
    'solo-overwhelmed': {
      1: {
        'Time & Focus': 1.5, // Most critical
        'Decision Making & Delegation': 1.2,
        'Metrics & Visibility': 1.0,
        'The Five Core Functions': 0.8, // Less relevant for solo
      },
      2: {}, // Team categories get minimal weight
      3: {
        'Avatar & Client Clarity': 1.3,
        'Sales Process & Scripts': 1.3,
        'Offer Ladder & Client Retention': 1.0,
        'Revenue Tracking & Predictability': 1.2,
      },
      4: {}, // Standard weight for marketing
    },
    'solo-optimizing': {
      1: {
        'Time & Focus': 1.2,
        'Decision Making & Delegation': 1.3, // Preparing to hire
      },
      2: {}, // Team planning becomes slightly relevant
      3: {
        'Avatar & Client Clarity': 1.2,
        'Sales Process & Scripts': 1.1,
        'Revenue Tracking & Predictability': 1.3,
      },
      4: {
        'Buyer Journey & Tracking': 1.2,
        'Marketing ROI & Spend': 1.3,
      },
    },
    'small-team': {
      1: {
        'Decision Making & Delegation': 1.4, // Critical transition
      },
      2: {
        'Role Clarity & Structure': 1.4, // Most important
        'Performance & Accountability': 1.3,
        'Independence & Scalability': 1.2,
      },
      3: {
        'Sales Process & Scripts': 1.3,
        'Revenue Tracking & Predictability': 1.2,
      },
      4: {},
    },
    'growing': {
      1: {},
      2: {},
      3: {},
      4: {}, // All equal weight
    },
    'established': {
      1: {
        'The Five Core Functions': 1.3,
      },
      2: {
        'Independence & Scalability': 1.5, // Most critical
        'Performance & Accountability': 1.3,
        'Culture & Retention': 1.2,
      },
      3: {
        'Revenue Tracking & Predictability': 1.2,
      },
      4: {
        'Repeatable & Scalable Marketing': 1.3,
      },
    },
    'enterprise': {
      1: {
        'The Five Core Functions': 1.4,
      },
      2: {
        'Independence & Scalability': 1.4,
        'Culture & Retention': 1.3,
      },
      3: {},
      4: {
        'Repeatable & Scalable Marketing': 1.3,
      },
    },
  };

  return weightMap[stage]?.[pillarId]?.[category] || 1.0;
}
