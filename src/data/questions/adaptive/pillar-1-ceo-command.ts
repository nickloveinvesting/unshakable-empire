import type { AdaptiveQuestionNode } from '@/types/adaptive-quiz';

/**
 * PILLAR 1: CEO COMMAND CENTER
 * Adaptive question tree with branching logic
 */

// ============================================================================
// TIER 2: QUALIFIERS (3 Questions)
// ============================================================================

export const P1_QUALIFIERS: AdaptiveQuestionNode[] = [
  {
    id: 'p1-q1',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 2,
    text: 'I have a structured weekly schedule that I follow consistently.',
    subtext:
      'Think about whether you have a predictable weekly rhythm or if every week feels different.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 1 && score <= 2;
        },
        nextQuestionId: 'p1-time-chaos-q1',
        pathLabel: 'TIME CHAOS PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score === 3;
        },
        nextQuestionId: 'p1-inconsistent-q1',
        pathLabel: 'INCONSISTENT PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 4 && score <= 5;
        },
        nextQuestionId: 'p1-structured-q1',
        pathLabel: 'STRUCTURED PATH',
      },
    ],
  },
  {
    id: 'p1-q2',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 2,
    text: 'I spend more time on strategic growth activities than putting out daily fires.',
    subtext:
      'Consider whether your days are spent building the future or reacting to urgent problems.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
  },
  {
    id: 'p1-q3',
    pillarId: 1,
    category: 'Metrics & Visibility',
    tier: 2,
    text: 'I review a business scorecard/dashboard at least weekly.',
    subtext:
      'Think about whether you have a single view of your key business numbers reviewed every week.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 1 && score <= 2;
        },
        nextQuestionId: 'p1-metrics-none-q1',
        pathLabel: 'NO METRICS PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 3 && score <= 5;
        },
        nextQuestionId: 'p1-metrics-exists-q1',
        pathLabel: 'METRICS EXISTS PATH',
      },
    ],
  },
];

// ============================================================================
// TIER 3: DEEP-DIVE QUESTIONS
// ============================================================================

// TIME CHAOS PATH (Triggered by p1-q1 score 1-2)
export const P1_TIME_CHAOS_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p1-time-chaos-q1',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'How often does your day get derailed by urgent issues that only you can handle?',
    subtext: 'Be honest about how predictable vs chaotic your typical day is',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-time-chaos-q2',
  },
  {
    id: 'p1-time-chaos-q2',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'I can identify my top 3 priorities for the week before Monday morning.',
    subtext:
      'Consider whether you start each week with crystal-clear focus or figure it out as you go.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-time-chaos-q3',
  },
  {
    id: 'p1-time-chaos-q3',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'I know exactly which tasks only I should handle vs. what should be delegated.',
    subtext: 'Rate your clarity on what truly requires the CEO versus what others could own.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-time-chaos-q4',
  },
  {
    id: 'p1-time-chaos-q4',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'I rarely get pulled into tasks that someone else on my team could handle.',
    subtext: 'Rate how often you end up doing work that belongs to someone else on the team.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-time-chaos-q5',
  },
  {
    id: 'p1-time-chaos-q5',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'I have blocked time each week specifically for business strategy and planning.',
    subtext: 'Think about whether dedicated strategy time is on your calendar every week.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-time-chaos-q6',
  },
  {
    id: 'p1-time-chaos-q6',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'I have a clear morning routine that sets up my day for CEO-level work.',
    subtext:
      'Consider whether your morning routine primes you for high-impact leadership or reactive mode.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-time-chaos-q7',
  },
  {
    id: 'p1-time-chaos-q7',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'I do not check email or messages more than 3 times per day.',
    subtext: 'Rate your discipline in batching communication instead of being constantly reactive.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-time-chaos-q8',
  },
  {
    id: 'p1-time-chaos-q8',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'When was the last time you tracked how you spend your time for a full week?',
    subtext: 'Tracking reveals where time actually goes vs where you think it goes',
    responseType: 'select',
    options: [
      { value: 'never', label: 'Never' },
      { value: 'year-plus', label: 'More than a year ago' },
      { value: 'last-year', label: 'Within the last year' },
      { value: 'last-3-months', label: 'Within the last 3 months' },
      { value: 'recent', label: 'Recently (last month)' },
    ],
    defaultNext: 'p1-decision-q1', // Move to decision making path
  },
];

// INCONSISTENT PATH (Triggered by p1-q1 score 3)
export const P1_INCONSISTENT_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p1-inconsistent-q1',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'What percentage of the time do you actually follow your planned schedule?',
    subtext: 'Be realistic about adherence vs intention',
    responseType: 'select',
    options: [
      { value: '0-20', label: '0-20% (rarely follow it)' },
      { value: '20-40', label: '20-40% (occasionally)' },
      { value: '40-60', label: '40-60% (about half)' },
      { value: '60-80', label: '60-80% (usually)' },
      { value: '80-100', label: '80-100% (almost always)' },
    ],
    defaultNext: 'p1-inconsistent-q2',
  },
  {
    id: 'p1-inconsistent-q2',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'What most often causes you to abandon your schedule?',
    subtext: 'Identifying the pattern is the first step to fixing it',
    responseType: 'select',
    options: [
      { value: 'client-emergencies', label: 'Client emergencies' },
      { value: 'team-needs', label: 'Team needs/interruptions' },
      { value: 'sales-opportunities', label: 'Sales opportunities' },
      { value: 'personal-discipline', label: 'Personal discipline/focus' },
      { value: 'poor-planning', label: 'Poor planning/unrealistic schedule' },
      { value: 'external-interruptions', label: 'External interruptions' },
    ],
    defaultNext: 'p1-inconsistent-q3',
  },
  {
    id: 'p1-inconsistent-q3',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: "Are your 'emergencies' truly unpredictable, or are they recurring patterns you could systematize?",
    subtext: 'Most "emergencies" are predictable once you track them',
    responseType: 'select',
    options: [
      { value: 'truly-unpredictable', label: 'Truly unpredictable' },
      { value: 'mix', label: 'Mix of both' },
      { value: 'recurring-patterns', label: "Mostly recurring patterns I haven't systematized" },
    ],
    defaultNext: 'p1-inconsistent-q4',
  },
  {
    id: 'p1-inconsistent-q4',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'I have an end-of-day routine where I close open loops and plan tomorrow.',
    subtext: 'A shutdown routine ensures you start the next day with clarity',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-decision-q1',
  },
];

// STRUCTURED PATH (Triggered by p1-q1 score 4-5)
export const P1_STRUCTURED_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p1-structured-q1',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'If I looked at your calendar for last week, how many hours were dedicated to strategic work (planning, hiring, partnership-building)?',
    subtext: 'Strategic work = building the future, not fighting fires',
    responseType: 'select',
    options: [
      { value: '0-2', label: '0-2 hours' },
      { value: '2-5', label: '2-5 hours' },
      { value: '5-10', label: '5-10 hours' },
      { value: '10-15', label: '10-15 hours' },
      { value: '15+', label: '15+ hours' },
    ],
    defaultNext: 'p1-structured-q2',
  },
  {
    id: 'p1-structured-q2',
    pillarId: 1,
    category: 'Time & Focus',
    tier: 3,
    text: 'I focus my time on the 20% of activities that drive 80% of results.',
    subtext: 'The Pareto Principle applied to your calendar',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-decision-q1',
  },
];

// DECISION MAKING PATH (Parallel with Time paths)
export const P1_DECISION_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p1-decision-q1',
    pillarId: 1,
    category: 'Decision Making & Delegation',
    tier: 3,
    text: 'My team makes operational decisions without needing my approval.',
    subtext:
      'Think about whether your team can move forward on day-to-day decisions without waiting on you.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    branches: [
      {
        condition: (answer, context) => {
          const score = answer.value as number;
          const teamSize = context.businessContext.teamSize;
          return score <= 2 && teamSize !== 'Solo';
        },
        nextQuestionId: 'p1-decision-deep-q1',
        pathLabel: 'DECISION BOTTLENECK PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 3;
        },
        nextQuestionId: 'p1-q3', // Skip to metrics qualifier if delegation is OK
        pathLabel: 'DELEGATION OK',
      },
    ],
    skipConditions: [
      {
        check: (context) => context.businessContext.teamSize === 'Solo',
        reason: 'Solo operators have no team to delegate to',
      },
    ],
    defaultNext: 'p1-q3',
  },
  {
    id: 'p1-decision-deep-q1',
    pillarId: 1,
    category: 'Decision Making & Delegation',
    tier: 3,
    text: "I have clear decision filters — I know which decisions require my input and which don't.",
    subtext:
      "Consider whether you have defined criteria for what escalates to you versus what doesn't.",
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-decision-deep-q2',
  },
  {
    id: 'p1-decision-deep-q2',
    pillarId: 1,
    category: 'Decision Making & Delegation',
    tier: 3,
    text: 'I trust my team to handle customer issues without my involvement.',
    subtext:
      'Rate your confidence that client problems get resolved well without your direct intervention.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-decision-deep-q3',
  },
  {
    id: 'p1-decision-deep-q3',
    pillarId: 1,
    category: 'Decision Making & Delegation',
    tier: 3,
    text: 'I have delegated at least 3 major responsibilities in the last 90 days.',
    subtext: 'Think about whether you have actively shifted significant work off your plate recently.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-decision-deep-q4',
  },
  {
    id: 'p1-decision-deep-q4',
    pillarId: 1,
    category: 'Decision Making & Delegation',
    tier: 3,
    text: "When I'm unavailable for a day, operations continue smoothly.",
    subtext: 'Consider what happens to the business when you step away for a full day.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-decision-deep-q5',
  },
  {
    id: 'p1-decision-deep-q5',
    pillarId: 1,
    category: 'Decision Making & Delegation',
    tier: 3,
    text: 'I can take a full week off without the business suffering.',
    subtext:
      'Consider whether the business would run smoothly if you were completely unplugged for seven days.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-q3', // Move to metrics qualifier
  },
];

// METRICS PATH - NO METRICS (Triggered by p1-q3 score 1-2)
export const P1_METRICS_NONE_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p1-metrics-none-q1',
    pillarId: 1,
    category: 'Metrics & Visibility',
    tier: 3,
    text: 'I know my top 3 revenue-generating activities this month.',
    subtext: 'Consider whether you can name the activities driving the most revenue right now.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-metrics-none-q2',
  },
  {
    id: 'p1-metrics-none-q2',
    pillarId: 1,
    category: 'Metrics & Visibility',
    tier: 3,
    text: 'I can tell you my gross profit margin within 5% accuracy right now.',
    subtext: 'Rate your awareness of your actual profitability, not just top-line revenue.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-metrics-none-q3',
  },
  {
    id: 'p1-metrics-none-q3',
    pillarId: 1,
    category: 'Metrics & Visibility',
    tier: 3,
    text: 'I know exactly how many new leads came in this week and their source.',
    subtext: 'Consider whether you can pinpoint lead volume and where those leads originated.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-metrics-none-q4',
  },
  {
    id: 'p1-metrics-none-q4',
    pillarId: 1,
    category: 'Metrics & Visibility',
    tier: 3,
    text: 'I have a financial forecast for the next 90 days.',
    subtext: 'Rate whether you have a forward-looking financial projection guiding your decisions.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-core-functions-q1',
  },
];

// METRICS PATH - METRICS EXIST (Triggered by p1-q3 score 3-5)
export const P1_METRICS_EXISTS_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p1-metrics-exists-q1',
    pillarId: 1,
    category: 'Metrics & Visibility',
    tier: 3,
    text: 'My scorecard includes leading indicators (predictive) not just lagging (historical).',
    subtext: 'Leading indicators tell you what WILL happen, lagging indicators tell you what DID happen',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-metrics-exists-q2',
  },
  {
    id: 'p1-metrics-exists-q2',
    pillarId: 1,
    category: 'Metrics & Visibility',
    tier: 3,
    text: 'When my scorecard shows a problem, I have a defined process for addressing it.',
    subtext: 'Metrics without action are just data',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p1-core-functions-q1',
  },
];

// CORE FUNCTIONS PATH (Final CEO pillar section)
export const P1_CORE_FUNCTIONS_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p1-core-functions-q1',
    pillarId: 1,
    category: 'The Five Core Functions',
    tier: 3,
    text: 'How many of the five core functions (Sales, Operations, Delivery, Finance, Leadership) have documented processes?',
    subtext: 'Documented means written down and followed consistently',
    responseType: 'select',
    options: [
      { value: '0', label: '0 - None documented' },
      { value: '1', label: '1 function' },
      { value: '2', label: '2 functions' },
      { value: '3', label: '3 functions' },
      { value: '4', label: '4 functions' },
      { value: '5', label: 'All 5 functions' },
    ],
    defaultNext: 'p1-core-functions-q2',
  },
  {
    id: 'p1-core-functions-q2',
    pillarId: 1,
    category: 'The Five Core Functions',
    tier: 3,
    text: 'Each core function has a designated owner who is NOT me.',
    subtext: 'Think about whether someone else is accountable for each major business function.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    skipConditions: [
      {
        check: (context) => context.businessContext.teamSize === 'Solo',
        reason: 'Solo operators own all functions',
      },
    ],
    defaultNext: 'p1-core-functions-q3',
  },
  {
    id: 'p1-core-functions-q3',
    pillarId: 1,
    category: 'The Five Core Functions',
    tier: 3,
    text: 'I can identify which of the five functions is currently my biggest bottleneck.',
    subtext: 'Rate your clarity on which core function is most holding back your growth right now.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-q1', // Move to Pillar 2
  },
];

// ============================================================================
// EXPORT ALL PILLAR 1 QUESTIONS
// ============================================================================

export const PILLAR_1_QUESTIONS: AdaptiveQuestionNode[] = [
  ...P1_QUALIFIERS,
  ...P1_TIME_CHAOS_QUESTIONS,
  ...P1_INCONSISTENT_QUESTIONS,
  ...P1_STRUCTURED_QUESTIONS,
  ...P1_DECISION_QUESTIONS,
  ...P1_METRICS_NONE_QUESTIONS,
  ...P1_METRICS_EXISTS_QUESTIONS,
  ...P1_CORE_FUNCTIONS_QUESTIONS,
];
