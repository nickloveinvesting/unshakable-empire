import type { AdaptiveQuestionNode } from '@/types/adaptive-quiz';

/**
 * PILLAR 3: REVENUE PIPELINE
 * Adaptive question tree focusing on avatar clarity → sales process → predictability
 */

// ============================================================================
// TIER 2: QUALIFIERS (3 Questions)
// ============================================================================

export const P3_QUALIFIERS: AdaptiveQuestionNode[] = [
  {
    id: 'p3-q1',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 2,
    text: 'I can describe my ideal client in specific detail (demographics, psychographics, pain points).',
    subtext: 'Think about whether you have a vivid, documented profile of who you serve best.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score <= 2;
        },
        nextQuestionId: 'p3-avatar-undefined-q1',
        pathLabel: 'AVATAR UNDEFINED PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score === 3;
        },
        nextQuestionId: 'p3-avatar-fuzzy-q1',
        pathLabel: 'FUZZY AVATAR PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 4;
        },
        nextQuestionId: 'p3-avatar-clear-q1',
        pathLabel: 'CLEAR AVATAR PATH',
      },
    ],
  },
  {
    id: 'p3-q2',
    pillarId: 3,
    category: 'Sales Process & Scripts',
    tier: 2,
    text: 'I have a documented, step-by-step sales process my team follows.',
    subtext: 'Think about whether your sales workflow is written down and consistently executed.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score <= 2;
        },
        nextQuestionId: 'p3-sales-process-none-q1',
        pathLabel: 'NO PROCESS PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 3;
        },
        nextQuestionId: 'p3-sales-process-exists-q1',
        pathLabel: 'PROCESS EXISTS PATH',
      },
    ],
  },
  {
    id: 'p3-q3',
    pillarId: 3,
    category: 'Revenue Tracking & Predictability',
    tier: 2,
    text: 'I can predict next month\'s revenue within 15% accuracy.',
    subtext: 'Think about whether your revenue is predictable enough to forecast with confidence.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    branches: [
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score <= 2;
        },
        nextQuestionId: 'p3-revenue-chaotic-q1',
        pathLabel: 'CHAOTIC REVENUE PATH',
      },
      {
        condition: (answer) => {
          const score = answer.value as number;
          return score >= 3;
        },
        nextQuestionId: 'p3-revenue-predictable-q1',
        pathLabel: 'PREDICTABLE REVENUE PATH',
      },
    ],
  },
];

// ============================================================================
// TIER 3: DEEP-DIVE QUESTIONS
// ============================================================================

// AVATAR UNDEFINED PATH (Triggered by p3-q1 score 1-2)
export const P3_AVATAR_UNDEFINED_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p3-avatar-undefined-q1',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 3,
    text: 'Are your best clients similar to each other in meaningful ways?',
    subtext: 'Pattern recognition is the first step to avatar definition',
    responseType: 'select',
    options: [
      { value: 'no-pattern', label: 'No pattern - very different' },
      { value: 'some-similarities', label: 'Some similarities' },
      { value: 'very-similar', label: 'Very similar' },
      { value: 'identical', label: 'Almost identical profile' },
    ],
    defaultNext: 'p3-avatar-undefined-q2',
  },
  {
    id: 'p3-avatar-undefined-q2',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 3,
    text: 'I know the top 3 problems my ideal client is trying to solve.',
    subtext: 'Consider whether you deeply understand the specific pain points driving your ideal client to seek help.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-avatar-undefined-q3',
  },
  {
    id: 'p3-avatar-undefined-q3',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 3,
    text: 'I track which client segments generate the most referrals.',
    subtext: 'Consider whether you know which types of clients are most likely to send you new business.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-avatar-undefined-q4',
  },
  {
    id: 'p3-avatar-undefined-q4',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 3,
    text: 'I know which client type generates the highest lifetime value.',
    subtext: 'Consider whether you have identified which clients are the most profitable long-term.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-avatar-undefined-q5',
  },
  {
    id: 'p3-avatar-undefined-q5',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 3,
    text: 'My marketing speaks directly to my ideal client\'s specific situation.',
    subtext: 'Rate whether your messaging resonates with your target audience or feels generic.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-q2', // Move to sales process qualifier
  },
];

// AVATAR FUZZY PATH (Triggered by p3-q1 score 3)
export const P3_AVATAR_FUZZY_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p3-avatar-fuzzy-q1',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 3,
    text: 'How many distinct ideal client profiles do you serve?',
    subtext: 'Too many segments dilutes focus and marketing effectiveness',
    responseType: 'select',
    options: [
      { value: '1', label: '1 (focused)' },
      { value: '2-3', label: '2-3 (manageable)' },
      { value: '4-6', label: '4-6 (too many)' },
      { value: '7+', label: '7+ (unfocused)' },
    ],
    defaultNext: 'p3-avatar-fuzzy-q2',
  },
  {
    id: 'p3-avatar-fuzzy-q2',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 3,
    text: 'I can identify my top 10 most profitable clients and explain why they\'re profitable.',
    subtext: 'Think about whether you know who your best clients are and what makes them so valuable.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-avatar-fuzzy-q3',
  },
  {
    id: 'p3-avatar-fuzzy-q3',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 3,
    text: 'I actively say "no" to clients who don\'t fit my ideal profile.',
    subtext: 'Think about your discipline in turning away revenue that does not align with your best-fit client.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-q2',
  },
];

// AVATAR CLEAR PATH (Triggered by p3-q1 score 4-5)
export const P3_AVATAR_CLEAR_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p3-avatar-clear-q1',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 3,
    text: 'I review and refine my ideal client avatar at least annually.',
    subtext: 'Markets evolve - your avatar should too',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-avatar-clear-q2',
  },
  {
    id: 'p3-avatar-clear-q2',
    pillarId: 3,
    category: 'Avatar & Client Clarity',
    tier: 3,
    text: 'I have documented my ideal client avatar and shared it with my team.',
    subtext: 'Rate whether your team can consistently identify and attract the right clients.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-q2',
  },
];

// SALES PROCESS - NONE (Triggered by p3-q2 score 1-2)
export const P3_SALES_PROCESS_NONE_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p3-sales-process-none-q1',
    pillarId: 3,
    category: 'Sales Process & Scripts',
    tier: 3,
    text: 'Do your sales conversations follow a consistent structure, or does it vary every time?',
    subtext: 'Consistency breeds predictability',
    responseType: 'select',
    options: [
      { value: 'ad-hoc', label: 'Completely ad hoc' },
      { value: 'mostly-varies', label: 'Mostly varies' },
      { value: 'some-consistency', label: 'Some consistency' },
      { value: 'highly-structured', label: 'Highly structured' },
    ],
    defaultNext: 'p3-sales-process-none-q2',
  },
  {
    id: 'p3-sales-process-none-q2',
    pillarId: 3,
    category: 'Sales Process & Scripts',
    tier: 3,
    text: 'My team uses discovery questions to diagnose client needs before presenting solutions.',
    subtext: "Consider whether your sales conversations start with understanding the prospect's situation.",
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-sales-process-none-q3',
  },
  {
    id: 'p3-sales-process-none-q3',
    pillarId: 3,
    category: 'Sales Process & Scripts',
    tier: 3,
    text: 'My sales conversations focus on solving problems rather than pitching features.',
    subtext: 'Rate whether your approach leads with the client's pain or with your product details.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-sales-process-none-q4',
  },
  {
    id: 'p3-sales-process-none-q4',
    pillarId: 3,
    category: 'Sales Process & Scripts',
    tier: 3,
    text: 'I have objection-handling scripts or frameworks my team is trained on.',
    subtext: 'Think about whether your team has prepared responses for common pushback and objections.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-sales-process-none-q5',
  },
  {
    id: 'p3-sales-process-none-q5',
    pillarId: 3,
    category: 'Sales Process & Scripts',
    tier: 3,
    text: 'I measure close rate and know it within 5% accuracy.',
    subtext: 'Rate your awareness of the percentage of prospects that convert to paying clients.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-q3', // Move to revenue predictability qualifier
  },
];

// SALES PROCESS - EXISTS (Triggered by p3-q2 score 3-5)
export const P3_SALES_PROCESS_EXISTS_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p3-sales-process-exists-q1',
    pillarId: 3,
    category: 'Sales Process & Scripts',
    tier: 3,
    text: 'My team consistently follows the documented sales process.',
    subtext: "Documented doesn't mean followed - rate actual adherence",
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-sales-process-exists-q2',
  },
  {
    id: 'p3-sales-process-exists-q2',
    pillarId: 3,
    category: 'Sales Process & Scripts',
    tier: 3,
    text: 'I know the conversion rate at each stage of our sales process.',
    subtext: 'Process visibility requires stage-by-stage metrics',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-q3',
  },
];

// REVENUE CHAOTIC PATH (Triggered by p3-q3 score 1-2)
export const P3_REVENUE_CHAOTIC_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p3-revenue-chaotic-q1',
    pillarId: 3,
    category: 'Revenue Tracking & Predictability',
    tier: 3,
    text: 'I track revenue by source (channel, campaign, referral) weekly.',
    subtext: 'Consider whether you know which revenue streams are producing and which are not.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-revenue-chaotic-q2',
  },
  {
    id: 'p3-revenue-chaotic-q2',
    pillarId: 3,
    category: 'Revenue Tracking & Predictability',
    tier: 3,
    text: 'I know my customer acquisition cost (CAC) per channel.',
    subtext: 'Rate your awareness of how much it costs to acquire a new client from each source.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-revenue-chaotic-q3',
  },
  {
    id: 'p3-revenue-chaotic-q3',
    pillarId: 3,
    category: 'Revenue Tracking & Predictability',
    tier: 3,
    text: 'I have a sales pipeline with defined stages and conversion rates per stage.',
    subtext: 'Think about whether your pipeline has clear stages with measured drop-off between each one.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-revenue-chaotic-q4',
  },
  {
    id: 'p3-revenue-chaotic-q4',
    pillarId: 3,
    category: 'Revenue Tracking & Predictability',
    tier: 3,
    text: 'I review revenue metrics weekly and adjust strategy based on data.',
    subtext: 'Consider whether you make revenue decisions based on actual numbers rather than intuition.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-revenue-chaotic-q5',
  },
  {
    id: 'p3-revenue-chaotic-q5',
    pillarId: 3,
    category: 'Revenue Tracking & Predictability',
    tier: 3,
    text: 'How do you forecast revenue?',
    subtext: 'Your method reveals your level of predictability',
    responseType: 'select',
    options: [
      { value: 'dont-forecast', label: "I don't forecast" },
      { value: 'gut-feel', label: 'Gut feel' },
      { value: 'historical-average', label: 'Historical average' },
      { value: 'pipeline-based', label: 'Pipeline-based' },
      { value: 'detailed-model', label: 'Detailed modeling with confidence intervals' },
    ],
    defaultNext: 'p3-offer-ladder-q1',
  },
];

// REVENUE PREDICTABLE PATH (Triggered by p3-q3 score 3-5)
export const P3_REVENUE_PREDICTABLE_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p3-revenue-predictable-q1',
    pillarId: 3,
    category: 'Revenue Tracking & Predictability',
    tier: 3,
    text: 'My revenue forecasts are accurate within 10% month-over-month.',
    subtext: 'True predictability means tight accuracy',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-revenue-predictable-q2',
  },
  {
    id: 'p3-revenue-predictable-q2',
    pillarId: 3,
    category: 'Revenue Tracking & Predictability',
    tier: 3,
    text: 'I track leading indicators (pipeline growth, meeting volume) not just lagging (closed deals).',
    subtext: 'Leading indicators give you advance warning',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-offer-ladder-q1',
  },
];

// OFFER LADDER & RETENTION PATH (All users)
export const P3_OFFER_LADDER_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'p3-offer-ladder-q1',
    pillarId: 3,
    category: 'Offer Ladder & Client Retention',
    tier: 3,
    text: 'I have multiple products/services at different price points (offer ladder).',
    subtext: 'Think about whether you offer entry-level, mid-tier, and premium options for clients.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-offer-ladder-q2',
  },
  {
    id: 'p3-offer-ladder-q2',
    pillarId: 3,
    category: 'Offer Ladder & Client Retention',
    tier: 3,
    text: 'I have a system to upsell or cross-sell existing clients.',
    subtext: 'Consider whether you systematically offer additional value to clients already in your ecosystem.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-offer-ladder-q3',
  },
  {
    id: 'p3-offer-ladder-q3',
    pillarId: 3,
    category: 'Offer Ladder & Client Retention',
    tier: 3,
    text: 'My average client stays with me for more than 12 months.',
    subtext: 'Rate how long your typical client relationship lasts and whether retention is a strength.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p3-offer-ladder-q4',
  },
  {
    id: 'p3-offer-ladder-q4',
    pillarId: 3,
    category: 'Offer Ladder & Client Retention',
    tier: 3,
    text: 'I calculate and track client lifetime value.',
    subtext: 'Think about whether you know the total revenue an average client generates over time.',
    responseType: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    defaultNext: 'p4-q1', // Move to Pillar 4
  },
];

// ============================================================================
// EXPORT ALL PILLAR 3 QUESTIONS
// ============================================================================

export const PILLAR_3_QUESTIONS: AdaptiveQuestionNode[] = [
  ...P3_QUALIFIERS,
  ...P3_AVATAR_UNDEFINED_QUESTIONS,
  ...P3_AVATAR_FUZZY_QUESTIONS,
  ...P3_AVATAR_CLEAR_QUESTIONS,
  ...P3_SALES_PROCESS_NONE_QUESTIONS,
  ...P3_SALES_PROCESS_EXISTS_QUESTIONS,
  ...P3_REVENUE_CHAOTIC_QUESTIONS,
  ...P3_REVENUE_PREDICTABLE_QUESTIONS,
  ...P3_OFFER_LADDER_QUESTIONS,
];
