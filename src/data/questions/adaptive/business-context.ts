import type { AdaptiveQuestionNode } from '@/types/adaptive-quiz';

/**
 * Business Context Questions (Tier 1)
 * These 5 questions determine business stage and customize all future questions
 */
export const BUSINESS_CONTEXT_QUESTIONS: AdaptiveQuestionNode[] = [
  {
    id: 'context-revenue',
    pillarId: 0,
    category: 'Business Context',
    tier: 1,
    text: 'What is your approximate annual revenue?',
    subtext: 'This helps us customize questions to your business size',
    responseType: 'select',
    options: [
      { value: '$0-$250K', label: '$0 - $250K per year' },
      { value: '$250K-$500K', label: '$250K - $500K per year' },
      { value: '$500K-$1M', label: '$500K - $1M per year' },
      { value: '$1M-$2M', label: '$1M - $2M per year' },
      { value: '$2M-$5M', label: '$2M - $5M per year' },
      { value: '$5M+', label: '$5M+ per year' },
    ],
    defaultNext: 'context-team-size',
  },
  {
    id: 'context-team-size',
    pillarId: 0,
    category: 'Business Context',
    tier: 1,
    text: 'How many people work in your business (including you)?',
    subtext: 'Include full-time, part-time, and contractors',
    responseType: 'select',
    options: [
      { value: 'Solo', label: 'Just me (solo operator)' },
      { value: '1-5 people', label: '2-5 people' },
      { value: '6-15 people', label: '6-15 people' },
      { value: '16-30 people', label: '16-30 people' },
      { value: '31-50 people', label: '31-50 people' },
      { value: '50+ people', label: '50+ people' },
    ],
    defaultNext: 'context-hours',
  },
  {
    id: 'context-hours',
    pillarId: 0,
    category: 'Business Context',
    tier: 1,
    text: 'How many hours per week do you work on average?',
    subtext: 'Be honest — this helps us understand your current reality',
    responseType: 'select',
    options: [
      { value: 'Less than 40', label: 'Less than 40 hours' },
      { value: '40-50', label: '40-50 hours' },
      { value: '50-60', label: '50-60 hours' },
      { value: '60-70', label: '60-70 hours' },
      { value: '70+', label: '70+ hours' },
    ],
    defaultNext: 'context-business-age',
  },
  {
    id: 'context-business-age',
    pillarId: 0,
    category: 'Business Context',
    tier: 1,
    text: 'How long have you been in business?',
    subtext: 'Consider when you started generating revenue',
    responseType: 'select',
    options: [
      { value: 'Less than 1 year', label: 'Less than 1 year' },
      { value: '1-3 years', label: '1-3 years' },
      { value: '3-5 years', label: '3-5 years' },
      { value: '5-10 years', label: '5-10 years' },
      { value: '10+ years', label: '10+ years' },
    ],
    defaultNext: 'context-primary-role',
  },
  {
    id: 'context-primary-role',
    pillarId: 0,
    category: 'Business Context',
    tier: 1,
    text: 'What best describes your current role in the business?',
    subtext: 'Think about where you spend most of your time',
    responseType: 'select',
    options: [
      {
        value: 'I do everything (sales, delivery, operations)',
        label: 'I do everything (sales, delivery, operations)',
      },
      {
        value: 'I focus on sales, team handles delivery',
        label: 'I focus on sales, team handles delivery',
      },
      {
        value: 'I focus on strategy, team handles operations',
        label: 'I focus on strategy, team handles operations',
      },
      {
        value: "I'm rarely in day-to-day operations",
        label: "I'm rarely in day-to-day operations",
      },
    ],
    defaultNext: 'p1-q1', // First qualifier question for Pillar 1
  },
];
