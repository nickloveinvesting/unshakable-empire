import type { AdaptiveQuestionNode } from '@/types/adaptive-quiz';

/**
 * PILLAR 2: TEAM ARCHITECTURE
 * Adaptive question tree with solo operator skip logic
 */

// ============================================================================
// TIER 2: QUALIFIERS (3 Questions, but skip most for solo operators)
// ============================================================================

export const P2_QUALIFIERS: AdaptiveQuestionNode[] = [
  {
    id: 'p2-q1',
    pillarId: 2,
    category: 'Independence & Scalability',
    tier: 2,
    text: 'My team can handle a full day without me being available.',
    subtext: 'Think about what happens operationally when you are completely unavailable for a day.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    skipConditions: [
      {
        check: (context) =>
          context.businessContext.teamSize === 'Solo',
        reason: 'Solo operators have no team',
      },
    ],
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score <= 2;
        },
        nextQuestionId: 'p2-bottleneck-q1',
        pathLabel: 'BOTTLENECK PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 3;
        },
        nextQuestionId: 'p2-q2',
        pathLabel: 'INDEPENDENT TEAM PATH',
      },
    ],
    defaultNext: 'p2-q2',
  },
  {
    id: 'p2-q2',
    pillarId: 2,
    category: 'Role Clarity & Structure',
    tier: 2,
    text: 'Every team member has a written job description with clear outcomes.',
    subtext: 'Think about whether each person knows exactly what success looks like in their role.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    skipConditions: [
      {
        check: (context) => context.businessContext.teamSize === 'Solo',
        reason: 'Solo operators have no team',
      },
    ],
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score <= 2;
        },
        nextQuestionId: 'p2-role-clarity-q1',
        pathLabel: 'ROLE CONFUSION PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 3;
        },
        nextQuestionId: 'p2-q3',
        pathLabel: 'ROLES CLEAR',
      },
    ],
    defaultNext: 'p2-q3',
  },
  {
    id: 'p2-q3',
    pillarId: 2,
    category: 'Performance & Accountability',
    tier: 2,
    text: "I track my team's performance with measurable KPIs weekly.",
    subtext: 'Think about whether each team member has numbers you review on a weekly basis.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    skipConditions: [
      {
        check: (context) => context.businessContext.teamSize === 'Solo',
        reason: 'Solo operators have no team',
      },
    ],
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score <= 2;
        },
        nextQuestionId: 'p2-performance-none-q1',
        pathLabel: 'NO ACCOUNTABILITY PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 3;
        },
        nextQuestionId: 'p2-performance-exists-q1',
        pathLabel: 'PERFORMANCE SYSTEM EXISTS',
      },
    ],
    defaultNext: 'p2-culture-q1',
  },
];

// ============================================================================
// SOLO OPERATOR PATH (Skip most team questions)
// ============================================================================

export const P2_SOLO_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p2-solo-q1',
    pillarId: 2,
    category: 'Team Planning',
    tier: 3,
    text: 'Do you plan to hire your first team member in the next 6 months?',
    subtext: 'Understanding your hiring timeline helps us customize recommendations',
    responseType: 'select',
    options: [
      { value: 'no-plans', label: 'No plans to hire' },
      { value: 'maybe-6-12', label: 'Maybe in 6-12 months' },
      { value: 'yes-6-months', label: 'Yes, within 6 months' },
      { value: 'actively-hiring', label: 'Yes, actively hiring now' },
    ],
    defaultNext: 'p2-solo-q2',
  },
  {
    id: 'p2-solo-q2',
    pillarId: 2,
    category: 'Team Planning',
    tier: 3,
    text: "What's the #1 thing stopping you from hiring?",
    subtext: 'Identifying the blocker is the first step to overcoming it',
    responseType: 'select',
    options: [
      { value: 'cant-afford', label: "Can't afford it" },
      { value: 'dont-know-role', label: "Don't know what role to hire" },
      { value: 'trust-issues', label: "Don't trust anyone to do it as well as I do" },
      { value: 'no-systems', label: "Don't have systems to train them" },
      { value: 'not-priority', label: "Haven't prioritized it" },
    ],
    defaultNext: 'p2-solo-q3',
  },
  {
    id: 'p2-solo-q3',
    pillarId: 2,
    category: 'Team Planning',
    tier: 3,
    text: 'I have at least 3 tasks I could delegate to someone if I hired them.',
    subtext: 'Delegation readiness is critical before hiring',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-q1', // Skip to Pillar 3
  },
];

// ============================================================================
// TIER 3: DEEP-DIVE QUESTIONS (For teams)
// ============================================================================

// BOTTLENECK PATH (Triggered by p2-q1 score 1-2)
export const P2_BOTTLENECK_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p2-bottleneck-q1',
    pillarId: 2,
    category: 'Independence & Scalability',
    tier: 3,
    text: 'When I step away, the quality of work delivered to clients drops.',
    subtext: "Rate honestly - does quality suffer when you're not involved?",
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-bottleneck-q2',
  },
  {
    id: 'p2-bottleneck-q2',
    pillarId: 2,
    category: 'Independence & Scalability',
    tier: 3,
    text: 'My team closes deals and serves clients without my direct involvement.',
    subtext: 'Rate whether revenue generation and client delivery happen independently of you.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-bottleneck-q3',
  },
  {
    id: 'p2-bottleneck-q3',
    pillarId: 2,
    category: 'Independence & Scalability',
    tier: 3,
    text: 'I have documented SOPs for at least 80% of recurring tasks.',
    subtext: 'Think about how much of your operations is captured in written standard operating procedures.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-bottleneck-q4',
  },
  {
    id: 'p2-bottleneck-q4',
    pillarId: 2,
    category: 'Independence & Scalability',
    tier: 3,
    text: 'At least one team member could run the business for a week in my absence.',
    subtext: 'Consider whether you have a capable second-in-command who can lead without you.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-bottleneck-q5',
  },
  {
    id: 'p2-bottleneck-q5',
    pillarId: 2,
    category: 'Independence & Scalability',
    tier: 3,
    text: 'My team solves problems independently rather than escalating everything to me.',
    subtext: "Rate your team's ability to handle issues without constant CEO intervention",
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-q2', // Move to role clarity qualifier
  },
];

// ROLE CLARITY PATH (Triggered by p2-q2 score 1-2)
export const P2_ROLE_CLARITY_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p2-role-clarity-q1',
    pillarId: 2,
    category: 'Role Clarity & Structure',
    tier: 3,
    text: 'Do your job descriptions define OUTCOMES or just list tasks?',
    subtext: 'Outcome-based roles are more effective than task lists',
    responseType: 'select',
    options: [
      { value: 'no-jds', label: 'No job descriptions' },
      { value: 'tasks-only', label: 'Task lists only' },
      { value: 'mix', label: 'Mix of tasks and outcomes' },
      { value: 'outcomes', label: 'Clear outcome-based descriptions' },
    ],
    defaultNext: 'p2-role-clarity-q2',
  },
  {
    id: 'p2-role-clarity-q2',
    pillarId: 2,
    category: 'Role Clarity & Structure',
    tier: 3,
    text: 'I have an org chart that accurately reflects how the business operates.',
    subtext: 'Rate whether your organizational structure is documented and matches reality.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-role-clarity-q3',
  },
  {
    id: 'p2-role-clarity-q3',
    pillarId: 2,
    category: 'Role Clarity & Structure',
    tier: 3,
    text: 'Role responsibilities do not overlap or create confusion between team members.',
    subtext: 'Consider whether there is clarity on who owns what, with no territorial gray areas.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-role-clarity-q4',
  },
  {
    id: 'p2-role-clarity-q4',
    pillarId: 2,
    category: 'Role Clarity & Structure',
    tier: 3,
    text: 'Each role has defined authority - team members know what they CAN decide without asking.',
    subtext: 'Rate whether your team members have clearly defined decision-making power.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-role-clarity-q5',
  },
  {
    id: 'p2-role-clarity-q5',
    pillarId: 2,
    category: 'Role Clarity & Structure',
    tier: 3,
    text: 'New hires receive a structured onboarding process (not just shadowing).',
    subtext: 'Consider whether new employees follow a defined onboarding plan with milestones and training.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-q3', // Move to performance qualifier
  },
];

// PERFORMANCE PATH - NO ACCOUNTABILITY (Triggered by p2-q3 score 1-2)
export const P2_PERFORMANCE_NONE_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p2-performance-none-q1',
    pillarId: 2,
    category: 'Performance & Accountability',
    tier: 3,
    text: 'Every team member knows their top 3 measurable KPIs.',
    subtext: 'Think about whether each person can name the specific metrics they are measured on.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-performance-none-q2',
  },
  {
    id: 'p2-performance-none-q2',
    pillarId: 2,
    category: 'Performance & Accountability',
    tier: 3,
    text: 'I conduct formal performance reviews at least quarterly.',
    subtext: 'Think about whether you have a structured review process happening on a regular cadence.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-performance-none-q3',
  },
  {
    id: 'p2-performance-none-q3',
    pillarId: 2,
    category: 'Performance & Accountability',
    tier: 3,
    text: 'Underperformers are addressed within 2 weeks of identifying the issue.',
    subtext: 'Consider how quickly you act when someone is not meeting expectations.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-performance-none-q4',
  },
  {
    id: 'p2-performance-none-q4',
    pillarId: 2,
    category: 'Performance & Accountability',
    tier: 3,
    text: 'Top performers are recognized and rewarded consistently.',
    subtext: 'Consider whether your best people feel valued and incentivized to keep excelling.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-culture-q1',
  },
];

// PERFORMANCE PATH - SYSTEM EXISTS (Triggered by p2-q3 score 3-5)
export const P2_PERFORMANCE_EXISTS_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p2-performance-exists-q1',
    pillarId: 2,
    category: 'Performance & Accountability',
    tier: 3,
    text: 'Team behavior changes when they see their performance metrics.',
    subtext: 'Metrics should drive action, not just provide data',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-performance-exists-q2',
  },
  {
    id: 'p2-performance-exists-q2',
    pillarId: 2,
    category: 'Performance & Accountability',
    tier: 3,
    text: 'I have 1-on-1s with each team member at least monthly.',
    subtext: 'Regular check-ins build accountability and trust',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p2-culture-q1',
  },
];

// CULTURE PATH (All teams)
export const P2_CULTURE_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p2-culture-q1',
    pillarId: 2,
    category: 'Culture & Retention',
    tier: 3,
    text: 'My team members genuinely support each other when problems arise.',
    subtext: 'Think about whether your team rallies together or points fingers when things go wrong.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    skipConditions: [
      {
        check: (context) => context.businessContext.teamSize === 'Solo',
        reason: 'Solo operators have no team',
      },
    ],
    defaultNext: 'p2-culture-q2',
  },
  {
    id: 'p2-culture-q2',
    pillarId: 2,
    category: 'Culture & Retention',
    tier: 3,
    text: 'Employee turnover in the last 12 months is below 20%.',
    subtext: 'Consider your retention rate and whether people are staying or leaving frequently.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    skipConditions: [
      {
        check: (context) => context.businessContext.teamSize === 'Solo',
        reason: 'Solo operators have no team',
      },
    ],
    defaultNext: 'p2-culture-q3',
  },
  {
    id: 'p2-culture-q3',
    pillarId: 2,
    category: 'Culture & Retention',
    tier: 3,
    text: 'My team stays because they believe in the company vision, not just the paycheck.',
    subtext: 'Rate whether your team is motivated by purpose or purely by compensation.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    skipConditions: [
      {
        check: (context) => context.businessContext.teamSize === 'Solo',
        reason: 'Solo operators have no team',
      },
    ],
    defaultNext: 'p3-q1', // Move to Pillar 3
  },
];

// ============================================================================
// EXPORT ALL PILLAR 2 QUESTIONS
// ============================================================================

export const PILLAR_2_QUESTIONS: AdaptiveQuestionNode[] = [
  ...P2_QUALIFIERS,
  ...P2_SOLO_QUESTIONS,
  ...P2_BOTTLENECK_QUESTIONS,
  ...P2_ROLE_CLARITY_QUESTIONS,
  ...P2_PERFORMANCE_NONE_QUESTIONS,
  ...P2_PERFORMANCE_EXISTS_QUESTIONS,
  ...P2_CULTURE_QUESTIONS,
];
