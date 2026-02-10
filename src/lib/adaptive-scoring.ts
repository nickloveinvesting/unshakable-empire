import type {
  AdaptiveQuestionNode,
  QuestionAnswer,
  AssessmentContext,
  BusinessStage,
  PillarScoreResult,
  CategoryScoreResult,
  ComprehensiveAssessmentResult,
  AssessmentRecommendation,
  Band,
} from '@/types/adaptive-quiz';
import type { PillarId } from '@/types/quiz';
import { normalizeAnswerToScore } from './adaptive-engine';
import { getCategoryWeight } from './business-stage-classifier';

/**
 * Adaptive Scoring Algorithm
 * Calculates weighted scores across all 4 pillars based on business stage
 */

/**
 * Calculate comprehensive assessment results
 */
export function calculateAdaptiveResults(
  answers: Record<string, QuestionAnswer>,
  questions: AdaptiveQuestionNode[],
  context: AssessmentContext,
  timeSpentSeconds: number
): ComprehensiveAssessmentResult {
  const { businessStage } = context;

  // Calculate category scores for each pillar
  const pillarScores = calculatePillarScores(answers, questions, businessStage);

  // Calculate overall weighted score
  const overallScore = calculateOverallScore(pillarScores, businessStage);

  // Identify weakest and strongest pillars
  const weakestPillar = identifyWeakestPillar(pillarScores);
  const strongestPillar = identifyStrongestPillar(pillarScores);

  // Generate band classification
  const overallBand = classifyScoreBand(overallScore);

  // Generate recommendations
  const recommendation = generateRecommendation(
    pillarScores,
    businessStage,
    weakestPillar
  );

  return {
    businessStage,
    completedAt: new Date(),
    questionCount: context.questionsAsked.length,
    timeSpent: timeSpentSeconds,
    pillarScores,
    overallScore: Math.round(overallScore * 10) / 10,
    overallBand,
    weakestPillar,
    strongestPillar,
    recommendation,
  };
}

/**
 * Calculate scores for all 4 pillars
 */
function calculatePillarScores(
  answers: Record<string, QuestionAnswer>,
  questions: AdaptiveQuestionNode[],
  businessStage: BusinessStage
): PillarScoreResult[] {
  const pillarMap: Record<number, PillarScoreResult> = {
    1: {
      pillarId: 1 as PillarId,
      pillarLabel: 'CEO Command Center',
      categoryScores: [],
      rawScore: 0,
      maxPossible: 5,
      percentage: 0,
      stageWeightedPercentage: 0,
      band: 'Building',
      weakestCategory: '',
      topRecommendation: '',
    },
    2: {
      pillarId: 2 as PillarId,
      pillarLabel: 'Team Architecture',
      categoryScores: [],
      rawScore: 0,
      maxPossible: 5,
      percentage: 0,
      stageWeightedPercentage: 0,
      band: 'Building',
      weakestCategory: '',
      topRecommendation: '',
    },
    3: {
      pillarId: 3 as PillarId,
      pillarLabel: 'Revenue Pipeline',
      categoryScores: [],
      rawScore: 0,
      maxPossible: 5,
      percentage: 0,
      stageWeightedPercentage: 0,
      band: 'Building',
      weakestCategory: '',
      topRecommendation: '',
    },
    4: {
      pillarId: 4 as PillarId,
      pillarLabel: 'Conversion Intelligence',
      categoryScores: [],
      rawScore: 0,
      maxPossible: 5,
      percentage: 0,
      stageWeightedPercentage: 0,
      band: 'Building',
      weakestCategory: '',
      topRecommendation: '',
    },
  };

  // Group questions by pillar and category
  const questionsByPillar = questions.filter((q) => q.pillarId !== 0); // Exclude context questions

  // Temporary map to track scores during calculation
  const categoryTotals: Record<
    number,
    Record<string, { questionsAsked: string[]; totalScore: number }>
  > = {
    1: {},
    2: {},
    3: {},
    4: {},
  };

  for (const question of questionsByPillar) {
    const answer = answers[question.id];
    if (!answer) continue; // Question was skipped

    const pillarId = question.pillarId as 1 | 2 | 3 | 4;
    const category = question.category;

    // Initialize category if not exists
    if (!categoryTotals[pillarId][category]) {
      categoryTotals[pillarId][category] = {
        questionsAsked: [],
        totalScore: 0,
      };
    }

    // Normalize answer to 1-5 score
    const normalizedScore = normalizeAnswerToScore(answer, question);

    // Add to category totals
    if (normalizedScore > 0) {
      // Only count non-text answers
      categoryTotals[pillarId][category].totalScore += normalizedScore;
      categoryTotals[pillarId][category].questionsAsked.push(question.id);
    }
  }

  // Calculate category scores
  for (const pillarId of [1, 2, 3, 4] as const) {
    const pillar = pillarMap[pillarId];

    for (const [category, totals] of Object.entries(categoryTotals[pillarId])) {
      const questionCount = totals.questionsAsked.length;
      if (questionCount === 0) continue;

      // Calculate raw average
      const rawScore = totals.totalScore / questionCount;

      // Apply business stage category weight
      const weight = getCategoryWeight(businessStage, pillarId, category);
      const weightedScore = rawScore * weight;

      const categoryScore: CategoryScoreResult = {
        category,
        questionsAsked: totals.questionsAsked,
        questionCount,
        rawScore: Math.round(rawScore * 10) / 10,
        maxPossible: 5,
        percentage: Math.round((rawScore / 5) * 100),
        weight,
        weightedScore: Math.round(weightedScore * 10) / 10,
        band: classifyScoreBand(rawScore),
      };

      pillar.categoryScores.push(categoryScore);
    }
  }

  // Calculate pillar scores from category scores
  for (const pillarId of [1, 2, 3, 4] as const) {
    const pillar = pillarMap[pillarId];

    if (pillar.categoryScores.length === 0) continue;

    // Calculate pillar raw score (average of all category raw scores)
    const categoryRawScores = pillar.categoryScores.map((cs) => cs.rawScore);
    pillar.rawScore =
      categoryRawScores.reduce((sum, score) => sum + score, 0) /
      categoryRawScores.length;

    // Calculate pillar percentage
    pillar.percentage = Math.round((pillar.rawScore / 5) * 100);

    // Calculate pillar weighted score (average of all category weighted scores)
    const categoryWeightedScores = pillar.categoryScores.map(
      (cs) => cs.weightedScore
    );
    const weightedScore =
      categoryWeightedScores.reduce((sum, score) => sum + score, 0) /
      categoryWeightedScores.length;

    // Get pillar weight from business stage
    const stageWeights = getBusinessStagePillarWeights(businessStage);
    const pillarWeight = getPillarWeight(pillarId, stageWeights);

    // Calculate stage-weighted percentage
    pillar.stageWeightedPercentage = Math.round(
      (weightedScore / 5) * 100 * pillarWeight
    );

    // Set pillar band
    pillar.band = classifyScoreBand(pillar.rawScore);

    // Identify weakest category
    const sortedCategories = [...pillar.categoryScores].sort(
      (a, b) => a.rawScore - b.rawScore
    );
    pillar.weakestCategory =
      sortedCategories.length > 0 ? sortedCategories[0].category : '';

    // Generate top recommendation for this pillar
    pillar.topRecommendation = getPillarRecommendation(pillarId, pillar.rawScore);
  }

  return [pillarMap[1], pillarMap[2], pillarMap[3], pillarMap[4]];
}

/**
 * Calculate overall weighted score based on business stage pillar weights
 */
function calculateOverallScore(
  pillarScores: PillarScoreResult[],
  businessStage: BusinessStage
): number {
  // Get pillar weights from business stage
  const stageWeights = getBusinessStagePillarWeights(businessStage);

  let totalWeightedScore = 0;

  for (const pillar of pillarScores) {
    const pillarWeight = getPillarWeight(pillar.pillarId, stageWeights);
    // Use raw score (not stage-weighted percentage)
    totalWeightedScore += pillar.rawScore * pillarWeight;
  }

  // Overall score is on 1-5 scale (weighted average)
  return totalWeightedScore;
}

/**
 * Get pillar weights for a business stage
 */
function getBusinessStagePillarWeights(businessStage: BusinessStage): {
  ceo: number;
  team: number;
  revenue: number;
  marketing: number;
} {
  const weightMap: Record<
    BusinessStage,
    { ceo: number; team: number; revenue: number; marketing: number }
  > = {
    'solo-overwhelmed': {
      ceo: 0.4,
      team: 0.05,
      revenue: 0.45,
      marketing: 0.1,
    },
    'solo-optimizing': {
      ceo: 0.3,
      team: 0.15,
      revenue: 0.35,
      marketing: 0.2,
    },
    'small-team': {
      ceo: 0.25,
      team: 0.3,
      revenue: 0.3,
      marketing: 0.15,
    },
    growing: {
      ceo: 0.25,
      team: 0.25,
      revenue: 0.25,
      marketing: 0.25,
    },
    established: {
      ceo: 0.2,
      team: 0.35,
      revenue: 0.25,
      marketing: 0.2,
    },
    enterprise: {
      ceo: 0.25,
      team: 0.3,
      revenue: 0.2,
      marketing: 0.25,
    },
  };

  return weightMap[businessStage];
}

/**
 * Get pillar weight by pillar ID
 */
function getPillarWeight(
  pillarId: number,
  weights: { ceo: number; team: number; revenue: number; marketing: number }
): number {
  const pillarWeightMap: Record<number, keyof typeof weights> = {
    1: 'ceo',
    2: 'team',
    3: 'revenue',
    4: 'marketing',
  };

  return weights[pillarWeightMap[pillarId]] || 0.25;
}

/**
 * Identify the weakest pillar (lowest raw score)
 */
function identifyWeakestPillar(pillarScores: PillarScoreResult[]): PillarScoreResult {
  return [...pillarScores].sort((a, b) => a.rawScore - b.rawScore)[0];
}

/**
 * Identify the strongest pillar (highest raw score)
 */
function identifyStrongestPillar(pillarScores: PillarScoreResult[]): PillarScoreResult {
  return [...pillarScores].sort((a, b) => b.rawScore - a.rawScore)[0];
}

/**
 * Classify overall score into a band (Critical, Needs Work, Building, Strong, Elite)
 */
function classifyScoreBand(score: number): Band {
  if (score < 1.5) return 'Critical';
  if (score < 2.5) return 'Needs Work';
  if (score < 3.5) return 'Building';
  if (score < 4.5) return 'Strong';
  return 'Elite';
}

/**
 * Generate comprehensive recommendation based on weakest pillar
 */
function generateRecommendation(
  pillarScores: PillarScoreResult[],
  businessStage: BusinessStage,
  weakestPillar: PillarScoreResult
): AssessmentRecommendation {
  const weakestCategory =
    weakestPillar.categoryScores.sort((a, b) => a.rawScore - b.rawScore)[0]
      ?.category || '';

  // Generate protocol slug from pillar and category
  const protocolSlug = generateProtocolSlug(
    weakestPillar.pillarId,
    weakestCategory
  );

  // Generate headline
  const headline = generateRecommendationHeadline(
    businessStage,
    weakestPillar.pillarId,
    weakestCategory
  );

  // Generate description
  const description = generateRecommendationDescription(
    businessStage,
    weakestPillar.pillarId,
    weakestCategory
  );

  // Generate first three actions
  const firstThreeActions = generateFirstThreeActions(
    weakestPillar.pillarId,
    weakestCategory
  );

  // Estimate impact
  const estimatedImpact = estimateImpact(
    weakestPillar.rawScore,
    weakestPillar.pillarId
  );

  return {
    focusPillar: weakestPillar.pillarId,
    focusCategory: weakestCategory,
    protocolSlug,
    headline,
    description,
    firstThreeActions,
    estimatedImpact,
  };
}

/**
 * Generate protocol slug from pillar and category
 */
function generateProtocolSlug(pillarId: PillarId, category: string): string {
  const slugMap: Record<number, string> = {
    1: 'ceo-command-center',
    2: 'team-architecture',
    3: 'revenue-pipeline',
    4: 'conversion-intelligence',
  };

  const pillarSlug = slugMap[pillarId] || 'general';
  const categorySlug = category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return `${pillarSlug}-${categorySlug}`;
}

/**
 * Generate recommendation headline
 */
function generateRecommendationHeadline(
  stage: BusinessStage,
  pillarId: PillarId,
  category: string
): string {
  const headlines: Record<number, Record<string, string>> = {
    1: {
      'Time & Focus': 'Reclaim Your CEO Time & Build Operating Rhythm',
      'Decision Making & Delegation': 'Stop Being the Bottleneck',
      'Metrics & Visibility': 'Build Your CEO Dashboard',
      'The Five Core Functions': 'Define Your Core Business Functions',
    },
    2: {
      'Independence & Scalability': 'Build a Team That Runs Without You',
      'Role Clarity & Structure': 'Define Clear Roles & Accountability',
      'Performance & Accountability': 'Implement Performance Tracking Systems',
      'Culture & Retention': 'Build a High-Performance Culture',
    },
    3: {
      'Avatar & Client Clarity': 'Define Your Ideal Client Avatar',
      'Sales Process & Scripts': 'Document Your Sales Process',
      'Offer Ladder & Client Retention': 'Build Your Offer Ladder',
      'Revenue Tracking & Predictability': 'Implement Revenue Forecasting',
    },
    4: {
      'Buyer Journey & Tracking': 'Map Your Complete Buyer Journey',
      'Lead Generation': 'Build Consistent Lead Generation',
      'Marketing ROI & Spend': 'Track & Optimize Marketing ROI',
      'Repeatable & Scalable Marketing': 'Systematize Your Marketing',
    },
  };

  return headlines[pillarId]?.[category] || 'Improve Your Business Systems';
}

/**
 * Generate recommendation description
 */
function generateRecommendationDescription(
  stage: BusinessStage,
  pillarId: PillarId,
  category: string
): string {
  const stageContext: Record<BusinessStage, string> = {
    'solo-overwhelmed':
      'As a solo operator working 60+ hours, you need immediate systems to reclaim time and build predictability.',
    'solo-optimizing':
      'With solid revenue, your focus should be preparing for scalable growth and your first hire.',
    'small-team':
      'With a small team, your priority is shifting from doer to leader through clear systems.',
    growing:
      'At this stage, systematic growth across all pillars prevents chaos as you scale.',
    established:
      'With an established team, focus on building true independence and leadership depth.',
    enterprise:
      'At enterprise scale, institutionalize systems and develop next-generation leaders.',
  };

  const pillarDescriptions: Record<number, string> = {
    1: 'Your CEO Command Center is the foundation—without time, focus, and visibility, nothing else scales.',
    2: 'Team Architecture determines your scalability—you cannot grow beyond your team's capabilities.',
    3: 'Revenue Pipeline is your lifeblood—predictable revenue unlocks everything else.',
    4: 'Conversion Intelligence drives efficiency—better marketing ROI means faster growth.',
  };

  return `${stageContext[stage]} ${pillarDescriptions[pillarId]}`;
}

/**
 * Generate first three actions
 */
function generateFirstThreeActions(
  pillarId: PillarId,
  category: string
): string[] {
  const actionMap: Record<number, Record<string, string[]>> = {
    1: {
      'Time & Focus': [
        'Audit your calendar—block 2-hour CEO time blocks for strategic work',
        'Identify and eliminate your top 3 time-wasting activities',
        'Implement a structured weekly operating rhythm',
      ],
      'Decision Making & Delegation': [
        'Document your decision-making framework (what you decide vs. what team decides)',
        'List 10 decisions you currently make that should be delegated',
        'Create delegation authority levels for each role',
      ],
      'Metrics & Visibility': [
        'Define your top 5 KPIs (leading + lagging indicators)',
        'Build a simple CEO dashboard (spreadsheet or tool)',
        'Schedule weekly reviews of your numbers',
      ],
    },
    2: {
      'Independence & Scalability': [
        'Document SOPs for your 3 most common operational tasks',
        'Identify 1-2 team members who could run operations in your absence',
        'Set 30-day goal: take 2 days completely off without business disruption',
      ],
      'Role Clarity & Structure': [
        'Write outcome-based job descriptions for each role',
        'Create an org chart showing clear reporting lines',
        'Define decision-making authority for each role',
      ],
      'Performance & Accountability': [
        'Define 3 measurable KPIs per team member',
        'Schedule weekly 1-on-1s with direct reports',
        'Implement quarterly performance reviews',
      ],
    },
    3: {
      'Avatar & Client Clarity': [
        'Interview your top 5 clients—identify common patterns',
        'Write a detailed ideal client profile (demographics, psychographics, pain)',
        'Document the specific outcomes your best clients achieve',
      ],
      'Sales Process & Scripts': [
        'Map your sales process from lead to close',
        'Script your discovery call and closing conversation',
        'Track conversion rates at each stage',
      ],
      'Revenue Tracking & Predictability': [
        'Implement CRM to track every opportunity',
        'Calculate your sales velocity (deals × close rate × avg deal size ÷ sales cycle)',
        'Build a 90-day revenue forecast',
      ],
    },
    4: {
      'Buyer Journey & Tracking': [
        'Map your buyer journey stages (Awareness → Consideration → Decision → Advocacy)',
        'Install tracking pixels on your website',
        'Audit where leads drop off in your funnel',
      ],
      'Lead Generation': [
        'Identify your top 3 lead sources and track cost per lead',
        'Test 2 new lead generation channels this quarter',
        'Set up lead tracking dashboard',
      ],
      'Marketing ROI & Spend': [
        'Calculate ROI for each marketing channel',
        'Eliminate negative-ROI marketing immediately',
        'Double down on your highest-ROI channel',
      ],
    },
  };

  return (
    actionMap[pillarId]?.[category] || [
      'Identify your top priority',
      'Document current state',
      'Implement first system',
    ]
  );
}

/**
 * Estimate impact of addressing this area
 */
function estimateImpact(currentScore: number, pillarId: PillarId): string {
  const improvementPotential = 5 - currentScore;

  if (improvementPotential > 3.5) {
    return 'CRITICAL IMPACT: Fixing this area could transform your business within 90 days.';
  }

  if (improvementPotential > 2.5) {
    return 'HIGH IMPACT: Addressing this will unlock significant growth potential.';
  }

  if (improvementPotential > 1.5) {
    return 'MODERATE IMPACT: Improvement here will strengthen your foundation.';
  }

  return 'REFINEMENT OPPORTUNITY: Optimizing this area will enhance efficiency.';
}

/**
 * Get pillar-specific recommendation text
 */
function getPillarRecommendation(pillarId: PillarId, score: number): string {
  const recommendations: Record<number, Record<string, string>> = {
    1: {
      critical: 'URGENT: Build CEO operating rhythm immediately',
      low: 'Build structured CEO time blocks and metrics',
      good: 'Optimize decision-making and delegation',
      excellent: 'Refine strategic planning and vision',
    },
    2: {
      critical: 'URGENT: Define roles and accountability now',
      low: 'Build team clarity and performance tracking',
      good: 'Develop team independence',
      excellent: 'Build leadership depth',
    },
    3: {
      critical: 'URGENT: Document sales process and track revenue',
      low: 'Build client avatar and sales systems',
      good: 'Optimize revenue predictability',
      excellent: 'Refine offer ladder and retention',
    },
    4: {
      critical: 'URGENT: Implement basic marketing tracking',
      low: 'Build buyer journey and lead generation',
      good: 'Optimize marketing ROI',
      excellent: 'Scale marketing systematically',
    },
  };

  const level =
    score < 2 ? 'critical' : score < 3 ? 'low' : score < 4 ? 'good' : 'excellent';

  return recommendations[pillarId]?.[level] || 'Improve this pillar';
}

/**
 * Get detailed category breakdown for a specific pillar
 */
export function getPillarCategoryBreakdown(
  pillarScore: PillarScoreResult
): CategoryScoreResult[] {
  return pillarScore.categoryScores.sort(
    (a, b) => a.weightedScore - b.weightedScore
  ); // Weakest first
}

/**
 * Calculate improvement potential (how much score could increase)
 */
export function calculateImprovementPotential(
  pillarScores: PillarScoreResult[]
): number {
  const currentScore =
    pillarScores.reduce((sum, p) => sum + p.rawScore, 0) / pillarScores.length;
  const maxScore = 5.0;
  const potential = maxScore - currentScore;

  return Math.round(potential * 10) / 10; // Round to 1 decimal
}

/**
 * Get priority order for pillars based on raw scores
 */
export function getPillarPriorityOrder(
  pillarScores: PillarScoreResult[]
): PillarId[] {
  return [...pillarScores]
    .sort((a, b) => a.rawScore - b.rawScore)
    .map((p) => p.pillarId);
}
