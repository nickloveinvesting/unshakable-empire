import type { AdaptiveQuestionNode } from '@/types/adaptive-quiz';

/**
 * PILLAR 4: CONVERSION INTELLIGENCE
 * Adaptive question tree focusing on tracking → ROI → automation → scalability
 */

// ============================================================================
// TIER 2: QUALIFIERS (3 Questions)
// ============================================================================

export const P4_QUALIFIERS: AdaptiveQuestionNode[] = [
  {
    id: 'p4-q1',
    pillarId: 4,
    category: 'Buyer Journey & Tracking',
    tier: 2,
    text: "I can map every stage of my buyer's journey from first touch to close.",
    subtext: 'Think about whether you have a clear picture of every step a prospect takes before buying.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score <= 2;
        },
        nextQuestionId: 'p4-tracking-none-q1',
        pathLabel: 'NO TRACKING PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 3;
        },
        nextQuestionId: 'p4-tracking-exists-q1',
        pathLabel: 'TRACKING EXISTS PATH',
      },
    ],
  },
  {
    id: 'p4-q2',
    pillarId: 4,
    category: 'Marketing ROI & Spend',
    tier: 2,
    text: 'I know my return on ad spend (ROAS) for every paid channel.',
    subtext: 'Think about whether you can calculate the revenue generated per dollar spent on each ad platform.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score <= 2;
        },
        nextQuestionId: 'p4-roi-none-q1',
        pathLabel: 'NO ROI TRACKING PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 3;
        },
        nextQuestionId: 'p4-roi-tracked-q1',
        pathLabel: 'ROI TRACKED PATH',
      },
    ],
  },
  {
    id: 'p4-q3',
    pillarId: 4,
    category: 'Automated Sequences & Systems',
    tier: 2,
    text: 'I have automated email/SMS sequences that nurture leads without manual effort.',
    subtext: 'Think about whether your lead nurture runs on autopilot or requires manual follow-up.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score <= 2;
        },
        nextQuestionId: 'p4-automation-none-q1',
        pathLabel: 'MANUAL EVERYTHING PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 3;
        },
        nextQuestionId: 'p4-automation-exists-q1',
        pathLabel: 'AUTOMATION EXISTS PATH',
      },
    ],
  },
];

// ============================================================================
// TIER 3: DEEP-DIVE QUESTIONS
// ============================================================================

// TRACKING - NONE (Triggered by p4-q1 score 1-2)
export const P4_TRACKING_NONE_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p4-tracking-none-q1',
    pillarId: 4,
    category: 'Buyer Journey & Tracking',
    tier: 3,
    text: 'I track where every lead comes from (source attribution).',
    subtext: 'Consider whether you can trace each lead back to the specific channel or campaign that generated it.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-tracking-none-q2',
  },
  {
    id: 'p4-tracking-none-q2',
    pillarId: 4,
    category: 'Buyer Journey & Tracking',
    tier: 3,
    text: 'I know exactly where leads drop off in my funnel and why.',
    subtext: 'Rate your understanding of where prospects disengage and the reasons behind it.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-tracking-none-q3',
  },
  {
    id: 'p4-tracking-none-q3',
    pillarId: 4,
    category: 'Buyer Journey & Tracking',
    tier: 3,
    text: 'I have tracking pixels/analytics installed on my website and landing pages.',
    subtext: 'Think about whether you have the technical tracking in place to measure visitor behavior.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-tracking-none-q4',
  },
  {
    id: 'p4-tracking-none-q4',
    pillarId: 4,
    category: 'Buyer Journey & Tracking',
    tier: 3,
    text: 'I review funnel metrics (click rates, conversion rates, drop-offs) at least weekly.',
    subtext: 'Consider whether you regularly analyze the performance of each stage of your funnel.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-tracking-none-q5',
  },
  {
    id: 'p4-tracking-none-q5',
    pillarId: 4,
    category: 'Buyer Journey & Tracking',
    tier: 3,
    text: 'I can tell you which marketing channel has the best ROI right now.',
    subtext: 'Rate your ability to identify your highest-returning marketing channel at this moment.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-tracking-none-q6',
  },
  {
    id: 'p4-tracking-none-q6',
    pillarId: 4,
    category: 'Buyer Journey & Tracking',
    tier: 3,
    text: 'How many distinct stages are in your buyer\'s journey?',
    subtext: 'Understanding your funnel stages is the first step to optimizing them',
    responseType: 'select',
    options: [
      { value: 'dont-know', label: "Don't know" },
      { value: '1-2', label: '1-2 stages' },
      { value: '3-4', label: '3-4 stages' },
      { value: '5-6', label: '5-6 stages' },
      { value: '7+', label: '7+ stages' },
    ],
    defaultNext: 'p4-q2', // Move to ROI qualifier
  },
];

// TRACKING - EXISTS (Triggered by p4-q1 score 3-5)
export const P4_TRACKING_EXISTS_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p4-tracking-exists-q1',
    pillarId: 4,
    category: 'Buyer Journey & Tracking',
    tier: 3,
    text: 'How often do you make changes to improve funnel conversion?',
    subtext: 'Tracking without optimization is wasted effort',
    responseType: 'select',
    options: [
      { value: 'rarely', label: 'Rarely' },
      { value: 'quarterly', label: 'Quarterly' },
      { value: 'monthly', label: 'Monthly' },
      { value: 'weekly', label: 'Weekly' },
      { value: 'continuously', label: 'Continuously testing' },
    ],
    defaultNext: 'p4-tracking-exists-q2',
  },
  {
    id: 'p4-tracking-exists-q2',
    pillarId: 4,
    category: 'Buyer Journey & Tracking',
    tier: 3,
    text: 'I track micro-conversions (email opens, page visits, downloads) not just sales.',
    subtext: 'Micro-conversions reveal engagement patterns',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-q2',
  },
];

// ROI - NONE (Triggered by p4-q2 score 1-2)
export const P4_ROI_NONE_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p4-roi-none-q1',
    pillarId: 4,
    category: 'Marketing ROI & Spend',
    tier: 3,
    text: 'Every marketing dollar I spend has a measurable expected return.',
    subtext: 'Consider whether you invest in marketing with clear ROI targets or spend without expectations.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-roi-none-q2',
  },
  {
    id: 'p4-roi-none-q2',
    pillarId: 4,
    category: 'Marketing ROI & Spend',
    tier: 3,
    text: 'I have stopped spending on at least one underperforming channel in the last 6 months.',
    subtext: 'Rate your willingness to cut marketing spend that is not delivering results.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-roi-none-q3',
  },
  {
    id: 'p4-roi-none-q3',
    pillarId: 4,
    category: 'Marketing ROI & Spend',
    tier: 3,
    text: 'My marketing budget is allocated based on data, not gut feeling.',
    subtext: 'Think about whether your spending decisions are driven by performance data or intuition.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-roi-none-q4',
  },
  {
    id: 'p4-roi-none-q4',
    pillarId: 4,
    category: 'Marketing ROI & Spend',
    tier: 3,
    text: 'I can calculate cost-per-lead for each marketing channel.',
    subtext: 'Consider whether you know exactly how much each lead costs you by source.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-roi-none-q5',
  },
  {
    id: 'p4-roi-none-q5',
    pillarId: 4,
    category: 'Marketing ROI & Spend',
    tier: 3,
    text: 'I have a monthly marketing budget that\'s tied to revenue goals.',
    subtext: 'Rate whether your marketing investment is aligned with specific revenue targets.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-q3', // Move to automation qualifier
  },
];

// ROI - TRACKED (Triggered by p4-q2 score 3-5)
export const P4_ROI_TRACKED_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p4-roi-tracked-q1',
    pillarId: 4,
    category: 'Marketing ROI & Spend',
    tier: 3,
    text: 'I track the ratio of lifetime value to customer acquisition cost.',
    subtext: 'LTV:CAC ratio is the ultimate marketing health metric',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-roi-tracked-q2',
  },
  {
    id: 'p4-roi-tracked-q2',
    pillarId: 4,
    category: 'Marketing ROI & Spend',
    tier: 3,
    text: 'I compare ROI of organic efforts (content, SEO) vs paid ads.',
    subtext: 'Understanding the full marketing mix optimizes allocation',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-q3',
  },
];

// AUTOMATION - NONE (Triggered by p4-q3 score 1-2)
export const P4_AUTOMATION_NONE_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p4-automation-none-q1',
    pillarId: 4,
    category: 'Automated Sequences & Systems',
    tier: 3,
    text: 'Leads receive follow-up within 5 minutes of inquiry (automated or manual).',
    subtext: 'Consider whether your response time to new leads is fast enough to maximize conversion.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-automation-none-q2',
  },
  {
    id: 'p4-automation-none-q2',
    pillarId: 4,
    category: 'Automated Sequences & Systems',
    tier: 3,
    text: 'I have a documented lead nurture sequence of at least 5 touchpoints.',
    subtext: 'Rate whether you have a multi-step follow-up process that keeps you top of mind.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-automation-none-q3',
  },
  {
    id: 'p4-automation-none-q3',
    pillarId: 4,
    category: 'Automated Sequences & Systems',
    tier: 3,
    text: 'My CRM tracks every interaction with every lead automatically.',
    subtext: 'Think about whether all lead activity is captured in your CRM without manual data entry.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-automation-none-q4',
  },
  {
    id: 'p4-automation-none-q4',
    pillarId: 4,
    category: 'Automated Sequences & Systems',
    tier: 3,
    text: 'I have re-engagement campaigns for leads who went cold.',
    subtext: 'Consider whether you have a system to revive interest from leads that stopped responding.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-automation-none-q5',
  },
  {
    id: 'p4-automation-none-q5',
    pillarId: 4,
    category: 'Automated Sequences & Systems',
    tier: 3,
    text: 'I use retargeting ads to re-engage website visitors.',
    subtext: 'Think about whether you bring back visitors who left your site without converting.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-scalability-q1',
  },
];

// AUTOMATION - EXISTS (Triggered by p4-q3 score 3-5)
export const P4_AUTOMATION_EXISTS_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p4-automation-exists-q1',
    pillarId: 4,
    category: 'Automated Sequences & Systems',
    tier: 3,
    text: 'I track open rates, click rates, and conversion rates for all email sequences.',
    subtext: 'Automation without analytics is blind optimization',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-automation-exists-q2',
  },
  {
    id: 'p4-automation-exists-q2',
    pillarId: 4,
    category: 'Automated Sequences & Systems',
    tier: 3,
    text: 'My email lists are segmented by behavior, stage, or demographics.',
    subtext: 'Segmentation multiplies automation effectiveness',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-scalability-q1',
  },
];

// SCALABILITY & REPEATABILITY PATH (All users)
export const P4_SCALABILITY_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p4-scalability-q1',
    pillarId: 4,
    category: 'Repeatable & Scalable Marketing',
    tier: 3,
    text: 'My best-performing marketing campaigns are documented and repeatable.',
    subtext: 'Think about whether your winning campaigns are captured in a playbook anyone can execute.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-scalability-q2',
  },
  {
    id: 'p4-scalability-q2',
    pillarId: 4,
    category: 'Repeatable & Scalable Marketing',
    tier: 3,
    text: 'I could hand my marketing playbook to a new hire and they could execute it.',
    subtext: 'Consider whether your marketing processes are documented well enough for someone new to follow.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-scalability-q3',
  },
  {
    id: 'p4-scalability-q3',
    pillarId: 4,
    category: 'Repeatable & Scalable Marketing',
    tier: 3,
    text: 'My messaging is consistent across all channels (website, social, email, ads).',
    subtext: 'Rate whether your brand voice and value proposition are unified everywhere you show up.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-scalability-q4',
  },
  {
    id: 'p4-scalability-q4',
    pillarId: 4,
    category: 'Repeatable & Scalable Marketing',
    tier: 3,
    text: 'I test variations of ads, emails, or landing pages and optimize based on results.',
    subtext: 'Think about whether you run A/B tests and make data-driven improvements to your marketing.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-scalability-q5',
  },
  {
    id: 'p4-scalability-q5',
    pillarId: 4,
    category: 'Repeatable & Scalable Marketing',
    tier: 3,
    text: 'My marketing generates leads predictably - I know roughly how many to expect each week.',
    subtext: 'Rate whether your lead flow is consistent and predictable or sporadic and unpredictable.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'COMPLETE', // Assessment complete!
  },
];

// ============================================================================
// EXPORT ALL PILLAR 4 QUESTIONS
// ============================================================================

export const PILLAR_4_QUESTIONS: AdaptiveQuestionNode[] = [
  ...P4_QUALIFIERS,
  ...P4_TRACKING_NONE_QUESTIONS,
  ...P4_TRACKING_EXISTS_QUESTIONS,
  ...P4_ROI_NONE_QUESTIONS,
  ...P4_ROI_TRACKED_QUESTIONS,
  ...P4_AUTOMATION_NONE_QUESTIONS,
  ...P4_AUTOMATION_EXISTS_QUESTIONS,
  ...P4_SCALABILITY_QUESTIONS,
];
