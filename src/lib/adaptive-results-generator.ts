import type {
  ComprehensiveAssessmentResult,
  PillarScoreResult,
  BusinessStage,
  Band,
} from '@/types/adaptive-quiz';

/**
 * Adaptive Results Generator
 * Formats comprehensive results for display to users
 */

export interface FormattedResults {
  summary: ResultSummary;
  pillarDetails: PillarDetail[];
  recommendations: RecommendationSection;
  nextSteps: NextStep[];
  comparisonToStage: StageComparison;
}

export interface ResultSummary {
  overallScore: number;
  overallPercentage: number;
  band: string;
  bandDescription: string;
  businessStage: string;
  businessStageLabel: string;
  totalQuestionsAsked: number;
  improvementPotential: number;
}

export interface PillarDetail {
  pillarId: number;
  pillarName: string;
  icon: string;
  rawScore: number;
  weightedScore: number;
  percentage: number;
  status: 'Critical' | 'Needs Work' | 'Good' | 'Excellent';
  statusColor: string;
  isWeakest: boolean;
  categories: CategoryDetail[];
}

export interface CategoryDetail {
  categoryName: string;
  rawScore: number;
  weightedScore: number;
  percentage: number;
  questionCount: number;
  status: 'Critical' | 'Needs Work' | 'Good' | 'Excellent';
}

export interface RecommendationSection {
  primaryFocus: string;
  weakestPillarFocus: string;
  detailedRecommendations: string[];
  priorityOrder: number[];
}

export interface NextStep {
  pillarId: number;
  pillarName: string;
  action: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface StageComparison {
  yourStage: string;
  typicalChallenges: string[];
  nextStageGoals: string[];
}

/**
 * Generate formatted comprehensive results
 */
export function generateFormattedResults(
  result: ComprehensiveAssessmentResult
): FormattedResults {
  return {
    summary: generateSummary(result),
    pillarDetails: generatePillarDetails(result),
    recommendations: generateRecommendationSection(result),
    nextSteps: generateNextSteps(result),
    comparisonToStage: generateStageComparison(result),
  };
}

/**
 * Generate result summary
 */
function generateSummary(result: ComprehensiveAssessmentResult): ResultSummary {
  const overallPercentage = Math.round((result.overallScore / 5) * 100);

  const improvementPotential = 5.0 - result.overallScore;

  return {
    overallScore: result.overallScore,
    overallPercentage,
    band: result.overallBand,
    bandDescription: getBandDescription(result.overallBand),
    businessStage: result.businessStage,
    businessStageLabel: getBusinessStageLabel(result.businessStage),
    totalQuestionsAsked: result.questionCount,
    improvementPotential: Math.round(improvementPotential * 10) / 10,
  };
}

/**
 * Generate pillar details with categories
 */
function generatePillarDetails(
  result: ComprehensiveAssessmentResult
): PillarDetail[] {
  return result.pillarScores.map((pillar) => ({
    pillarId: pillar.pillarId,
    pillarName: pillar.pillarLabel,
    icon: getPillarIcon(pillar.pillarId),
    rawScore: pillar.rawScore,
    weightedScore: pillar.stageWeightedPercentage,
    percentage: pillar.percentage,
    status: getScoreStatus(pillar.rawScore),
    statusColor: getStatusColor(pillar.rawScore),
    isWeakest: pillar.pillarId === result.weakestPillar.pillarId,
    categories: pillar.categoryScores.map((cat) => ({
      categoryName: cat.category,
      rawScore: cat.rawScore,
      weightedScore: cat.weightedScore,
      percentage: cat.percentage,
      questionCount: cat.questionCount,
      status: getScoreStatus(cat.rawScore),
    })),
  }));
}

/**
 * Generate recommendation section
 */
function generateRecommendationSection(
  result: ComprehensiveAssessmentResult
): RecommendationSection {
  const { recommendation } = result;

  const priorityOrder = [...result.pillarScores]
    .sort((a, b) => a.rawScore - b.rawScore)
    .map((p) => p.pillarId);

  return {
    primaryFocus: recommendation.headline,
    weakestPillarFocus: recommendation.description,
    detailedRecommendations: recommendation.firstThreeActions,
    priorityOrder,
  };
}

/**
 * Generate actionable next steps
 */
function generateNextSteps(result: ComprehensiveAssessmentResult): NextStep[] {
  const steps: NextStep[] = [];

  // Get weakest pillar
  const weakestPillar = result.weakestPillar;

  if (!weakestPillar) return steps;

  // Add immediate action for weakest pillar
  const pillarActions: Record<
    number,
    { action: string; description: string }
  > = {
    1: {
      action: 'Build Your CEO Operating System',
      description:
        'Create a structured weekly schedule with blocked CEO time. Implement a simple dashboard to track your top 3 KPIs weekly.',
    },
    2: {
      action: 'Define Team Roles & Accountability',
      description:
        'Write outcome-based job descriptions for each role. Set up weekly KPI tracking for each team member.',
    },
    3: {
      action: 'Document Your Sales Process',
      description:
        'Map your sales process from lead to close. Create a simple CRM to track every opportunity and measure conversion rates.',
    },
    4: {
      action: 'Track Your Marketing ROI',
      description:
        'Identify your top 3 lead sources. Implement tracking for cost per lead and ROI per channel.',
    },
  };

  steps.push({
    pillarId: weakestPillar.pillarId,
    pillarName: weakestPillar.pillarLabel,
    ...pillarActions[weakestPillar.pillarId],
    priority: 'High',
  });

  // Add second weakest pillar action
  const sortedPillars = [...result.pillarScores].sort(
    (a, b) => a.rawScore - b.rawScore
  );

  if (sortedPillars.length > 1) {
    const secondWeakest = sortedPillars[1];
    steps.push({
      pillarId: secondWeakest.pillarId,
      pillarName: secondWeakest.pillarLabel,
      ...pillarActions[secondWeakest.pillarId],
      priority: 'Medium',
    });
  }

  // Add general stage-specific action
  const stageActions: Record<BusinessStage, NextStep> = {
    'solo-overwhelmed': {
      pillarId: 0,
      pillarName: 'Time Management',
      action: 'Reclaim 10 Hours Per Week',
      description:
        'Audit your calendar and eliminate low-value activities. Block 2-hour CEO time blocks for strategic work.',
      priority: 'High',
    },
    'solo-optimizing': {
      pillarId: 2,
      pillarName: 'Hiring Preparation',
      action: 'Prepare for Your First Hire',
      description:
        'Document 5 tasks you could delegate. Create a simple hiring checklist and job description for your first hire.',
      priority: 'Medium',
    },
    'small-team': {
      pillarId: 2,
      pillarName: 'Team Independence',
      action: 'Build Team Independence',
      description:
        'Create SOPs for your 3 most common operational tasks. Train your team to handle daily operations without you.',
      priority: 'High',
    },
    growing: {
      pillarId: 1,
      pillarName: 'Strategic Focus',
      action: 'Shift from Operator to CEO',
      description:
        'Delegate 80% of tactical work. Spend 50%+ of your time on strategy, team development, and revenue growth.',
      priority: 'High',
    },
    established: {
      pillarId: 2,
      pillarName: 'Leadership Development',
      action: 'Develop Your Leadership Team',
      description:
        'Identify your top 3 leaders. Implement a leadership development program and succession planning.',
      priority: 'Medium',
    },
    enterprise: {
      pillarId: 1,
      pillarName: 'Vision & Strategy',
      action: 'Focus on Vision & Market Expansion',
      description:
        'Define your 3-year vision. Develop strategic initiatives for market expansion and innovation.',
      priority: 'Medium',
    },
  };

  steps.push(stageActions[result.businessStage]);

  return steps;
}

/**
 * Generate stage comparison
 */
function generateStageComparison(
  result: ComprehensiveAssessmentResult
): StageComparison {
  const stageChallenges: Record<BusinessStage, string[]> = {
    'solo-overwhelmed': [
      'You are doing everything - sales, delivery, operations',
      'Working 60+ hours per week with no end in sight',
      'Revenue is inconsistent and unpredictable',
      'You cannot take a vacation without revenue stopping',
    ],
    'solo-optimizing': [
      'You have good revenue but limited time to scale',
      'Considering your first hire but uncertain where to start',
      'Marketing is inconsistent or non-existent',
      'You need systems before you can delegate',
    ],
    'small-team': [
      'Team depends on you for every decision',
      'You are still the bottleneck for client delivery',
      'Role clarity is fuzzy - people overlap or miss tasks',
      'You need to shift from doer to leader',
    ],
    growing: [
      'Revenue is growing but chaos is increasing',
      'You need systems across all 4 pillars',
      'Team scalability is becoming critical',
      'Marketing needs to be repeatable and measurable',
    ],
    established: [
      'Team operates well but still relies on you too much',
      'You need true independence to scale further',
      'Leadership development is the next unlock',
      'Revenue is strong but optimization is needed',
    ],
    enterprise: [
      'Leading a large team requires strategic focus',
      'Market expansion and innovation are top priorities',
      'Leadership pipeline and succession planning are critical',
      'Systems and processes must be institutionalized',
    ],
  };

  const nextStageGoals: Record<BusinessStage, string[]> = {
    'solo-overwhelmed': [
      'Reclaim 20+ hours per week through time management',
      'Build predictable revenue systems ($250K-$500K)',
      'Prepare to hire your first team member',
    ],
    'solo-optimizing': [
      'Make your first strategic hire',
      'Build marketing systems that generate consistent leads',
      'Scale revenue to $500K-$1M',
    ],
    'small-team': [
      'Build team independence - they run daily operations',
      'Shift your focus to CEO-only activities',
      'Scale revenue to $1M-$2M with a structured team',
    ],
    growing: [
      'Balance all 4 pillars systematically',
      'Build scalable systems that work without you',
      'Grow revenue to $2M-$5M with sustainable growth',
    ],
    established: [
      'Develop a leadership team that runs the business',
      'Focus on strategic growth and market expansion',
      'Optimize for profitability and efficiency at scale',
    ],
    enterprise: [
      'Build institutional systems and processes',
      'Develop next-generation leaders for succession',
      'Expand into new markets or innovate core offerings',
    ],
  };

  return {
    yourStage: getBusinessStageLabel(result.businessStage),
    typicalChallenges: stageChallenges[result.businessStage] || [],
    nextStageGoals: nextStageGoals[result.businessStage] || [],
  };
}

/**
 * Get band description
 */
function getBandDescription(band: Band): string {
  const descriptions: Record<Band, string> = {
    Critical:
      'Your business has critical gaps that are severely limiting growth. Immediate action required.',
    'Needs Work':
      'Your business has significant gaps in foundational systems. Focus on building core capabilities.',
    Building:
      'You have some systems in place but inconsistency is holding you back. Strengthen core operations.',
    Strong:
      'Your business has strong systems and is ready for growth. Optimize for scalability.',
    Elite:
      'Your business operates at an elite level. Focus on refinement and strategic expansion.',
  };

  return descriptions[band];
}

/**
 * Get business stage label
 */
function getBusinessStageLabel(stage: BusinessStage): string {
  const labels: Record<BusinessStage, string> = {
    'solo-overwhelmed': 'Solo Operator - Overwhelmed',
    'solo-optimizing': 'Solo Operator - Optimizing',
    'small-team': 'Small Team (2-5 people)',
    growing: 'Growing Business (6-15 people)',
    established: 'Established Business (16-50 people)',
    enterprise: 'Enterprise (50+ people)',
  };

  return labels[stage];
}

/**
 * Get score status label
 */
function getScoreStatus(
  score: number
): 'Critical' | 'Needs Work' | 'Good' | 'Excellent' {
  if (score < 2.0) return 'Critical';
  if (score < 3.5) return 'Needs Work';
  if (score < 4.5) return 'Good';
  return 'Excellent';
}

/**
 * Get status color
 */
function getStatusColor(score: number): string {
  if (score < 2.0) return 'red';
  if (score < 3.5) return 'orange';
  if (score < 4.5) return 'blue';
  return 'green';
}

/**
 * Get pillar icon
 */
function getPillarIcon(pillarId: number): string {
  const icons: Record<number, string> = {
    1: '👑', // CEO Command Center
    2: '👥', // Team Architecture
    3: '💰', // Revenue Pipeline
    4: '📈', // Conversion Intelligence
  };

  return icons[pillarId] || '📊';
}

/**
 * Generate shareable summary text
 */
export function generateShareableText(result: ComprehensiveAssessmentResult): string {
  const formatted = generateFormattedResults(result);

  return `
🎯 My Empire O.S. Assessment Results

Overall Score: ${formatted.summary.overallScore}/5.0 (${formatted.summary.overallPercentage}%)
Band: ${formatted.summary.band}
Business Stage: ${formatted.summary.businessStageLabel}

📊 Pillar Scores:
${formatted.pillarDetails
  .map(
    (p) =>
      `${p.icon} ${p.pillarName}: ${p.rawScore}/5.0 (${p.status})${p.isWeakest ? ' ⚠️ Priority Focus' : ''}`
  )
  .join('\n')}

🎯 Next Steps:
${formatted.nextSteps
  .slice(0, 3)
  .map((s, i) => `${i + 1}. ${s.action}`)
  .join('\n')}

Take your free assessment at: [Your Domain Here]
  `.trim();
}
