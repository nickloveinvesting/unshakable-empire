import type { PillarId } from '@/types/quiz';

interface QuestionTemplate {
  id: string;
  text: string;
  subtext: string;
  category: string;
}

const PILLAR_QUESTIONS: Record<number, QuestionTemplate[]> = {
  // ──────────────────────────────────────────────────────────────────────────
  // PILLAR 1: CEO COMMAND CENTER (30 questions)
  // ──────────────────────────────────────────────────────────────────────────
  1: [
    // Category: Time & Focus (Q1-8)
    {
      id: 'p1-q1',
      text: 'I have a structured weekly schedule that I follow consistently.',
      subtext: 'Think about whether you have a predictable weekly rhythm or if every week feels different.',
      category: 'Time & Focus',
    },
    {
      id: 'p1-q2',
      text: 'I spend more time on strategic growth activities than putting out daily fires.',
      subtext: 'Consider whether your days are spent building the future or reacting to urgent problems.',
      category: 'Time & Focus',
    },
    {
      id: 'p1-q3',
      text: 'I know exactly which tasks only I should handle vs. what should be delegated.',
      subtext: 'Rate your clarity on what truly requires the CEO versus what others could own.',
      category: 'Time & Focus',
    },
    {
      id: 'p1-q4',
      text: 'I have blocked time each week specifically for business strategy and planning.',
      subtext: 'Think about whether dedicated strategy time is on your calendar every week.',
      category: 'Time & Focus',
    },
    {
      id: 'p1-q5',
      text: 'I can identify my top 3 priorities for the week before Monday morning.',
      subtext: 'Consider whether you start each week with crystal-clear focus or figure it out as you go.',
      category: 'Time & Focus',
    },
    {
      id: 'p1-q6',
      text: 'I rarely get pulled into tasks that someone else on my team could handle.',
      subtext: 'Rate how often you end up doing work that belongs to someone else on the team.',
      category: 'Time & Focus',
    },
    {
      id: 'p1-q7',
      text: 'I work 45 hours or fewer per week on average.',
      subtext: 'Think about your actual weekly hours and whether your schedule is sustainable.',
      category: 'Time & Focus',
    },
    {
      id: 'p1-q8',
      text: 'I have a clear morning routine that sets up my day for CEO-level work.',
      subtext: 'Consider whether your morning routine primes you for high-impact leadership or reactive mode.',
      category: 'Time & Focus',
    },

    // Category: Decision Making & Delegation (Q9-16)
    {
      id: 'p1-q9',
      text: 'My team makes operational decisions without needing my approval.',
      subtext: 'Think about whether your team can move forward on day-to-day decisions without waiting on you.',
      category: 'Decision Making & Delegation',
    },
    {
      id: 'p1-q10',
      text: 'I have clear decision filters — I know which decisions require my input and which don\'t.',
      subtext: 'Consider whether you have defined criteria for what escalates to you versus what doesn\'t.',
      category: 'Decision Making & Delegation',
    },
    {
      id: 'p1-q11',
      text: 'I trust my team to handle customer issues without my involvement.',
      subtext: 'Rate your confidence that client problems get resolved well without your direct intervention.',
      category: 'Decision Making & Delegation',
    },
    {
      id: 'p1-q12',
      text: 'I have delegated at least 3 major responsibilities in the last 90 days.',
      subtext: 'Think about whether you have actively shifted significant work off your plate recently.',
      category: 'Decision Making & Delegation',
    },
    {
      id: 'p1-q13',
      text: 'When I\'m unavailable for a day, operations continue smoothly.',
      subtext: 'Consider what happens to the business when you step away for a full day.',
      category: 'Decision Making & Delegation',
    },
    {
      id: 'p1-q14',
      text: 'I do not check email or messages more than 3 times per day.',
      subtext: 'Rate your discipline in batching communication instead of being constantly reactive.',
      category: 'Decision Making & Delegation',
    },
    {
      id: 'p1-q15',
      text: 'I have a documented delegation framework my team follows.',
      subtext: 'Think about whether delegation in your business is systematic or happens ad hoc.',
      category: 'Decision Making & Delegation',
    },
    {
      id: 'p1-q16',
      text: 'I can take a full week off without the business suffering.',
      subtext: 'Consider whether the business would run smoothly if you were completely unplugged for seven days.',
      category: 'Decision Making & Delegation',
    },

    // Category: Metrics & Visibility (Q17-22)
    {
      id: 'p1-q17',
      text: 'I review a business scorecard/dashboard at least weekly.',
      subtext: 'Think about whether you have a single view of your key business numbers reviewed every week.',
      category: 'Metrics & Visibility',
    },
    {
      id: 'p1-q18',
      text: 'I know my top 3 revenue-generating activities this month.',
      subtext: 'Consider whether you can name the activities driving the most revenue right now.',
      category: 'Metrics & Visibility',
    },
    {
      id: 'p1-q19',
      text: 'I can tell you my gross profit margin within 5% accuracy right now.',
      subtext: 'Rate your awareness of your actual profitability, not just top-line revenue.',
      category: 'Metrics & Visibility',
    },
    {
      id: 'p1-q20',
      text: 'I track my team\'s performance with measurable KPIs weekly.',
      subtext: 'Think about whether each team member has numbers you review on a weekly basis.',
      category: 'Metrics & Visibility',
    },
    {
      id: 'p1-q21',
      text: 'I know exactly how many new leads came in this week and their source.',
      subtext: 'Consider whether you can pinpoint lead volume and where those leads originated.',
      category: 'Metrics & Visibility',
    },
    {
      id: 'p1-q22',
      text: 'I have a financial forecast for the next 90 days.',
      subtext: 'Rate whether you have a forward-looking financial projection guiding your decisions.',
      category: 'Metrics & Visibility',
    },

    // Category: The Five Core Functions (Q23-30)
    {
      id: 'p1-q23',
      text: 'I have a documented process for how Sales operates in my business.',
      subtext: 'Think about whether your sales function has a written, repeatable process anyone can follow.',
      category: 'The Five Core Functions',
    },
    {
      id: 'p1-q24',
      text: 'I have a documented process for how Operations/Delivery runs.',
      subtext: 'Consider whether your operations and fulfillment processes are documented and consistent.',
      category: 'The Five Core Functions',
    },
    {
      id: 'p1-q25',
      text: 'I have a documented process for Finance/Accounting oversight.',
      subtext: 'Rate whether your financial management has clear processes and regular oversight.',
      category: 'The Five Core Functions',
    },
    {
      id: 'p1-q26',
      text: 'I have a clear Leadership development plan for my team.',
      subtext: 'Think about whether you are intentionally developing leaders within your organization.',
      category: 'The Five Core Functions',
    },
    {
      id: 'p1-q27',
      text: 'I review all five core functions (Sales, Ops, Delivery, Finance, Leadership) at least monthly.',
      subtext: 'Consider whether you regularly assess every major area of your business, not just the urgent ones.',
      category: 'The Five Core Functions',
    },
    {
      id: 'p1-q28',
      text: 'I can identify which of the five functions is currently my biggest bottleneck.',
      subtext: 'Rate your clarity on which core function is most holding back your growth right now.',
      category: 'The Five Core Functions',
    },
    {
      id: 'p1-q29',
      text: 'Each core function has a designated owner who is NOT me.',
      subtext: 'Think about whether someone else is accountable for each major business function.',
      category: 'The Five Core Functions',
    },
    {
      id: 'p1-q30',
      text: 'I have weekly meetings structured around these five core functions.',
      subtext: 'Consider whether your meeting cadence covers all five functions systematically.',
      category: 'The Five Core Functions',
    },
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // PILLAR 2: TEAM ARCHITECTURE (30 questions)
  // ──────────────────────────────────────────────────────────────────────────
  2: [
    // Category: Role Clarity & Structure (Q1-8)
    {
      id: 'p2-q1',
      text: 'Every team member has a written job description with clear outcomes.',
      subtext: 'Think about whether each person knows exactly what success looks like in their role.',
      category: 'Role Clarity & Structure',
    },
    {
      id: 'p2-q2',
      text: 'Each role has defined authority — team members know what they CAN decide without asking.',
      subtext: 'Consider whether your team members have clearly defined decision-making power.',
      category: 'Role Clarity & Structure',
    },
    {
      id: 'p2-q3',
      text: 'I have an org chart that accurately reflects how the business operates.',
      subtext: 'Rate whether your organizational structure is documented and matches reality.',
      category: 'Role Clarity & Structure',
    },
    {
      id: 'p2-q4',
      text: 'Every team member knows their top 3 measurable KPIs.',
      subtext: 'Think about whether each person can name the specific metrics they are measured on.',
      category: 'Role Clarity & Structure',
    },
    {
      id: 'p2-q5',
      text: 'New hires receive a structured onboarding process (not just shadowing).',
      subtext: 'Consider whether new employees follow a defined onboarding plan with milestones and training.',
      category: 'Role Clarity & Structure',
    },
    {
      id: 'p2-q6',
      text: 'I have the right number of people for my current revenue level.',
      subtext: 'Rate whether your team size is properly matched to your current business volume.',
      category: 'Role Clarity & Structure',
    },
    {
      id: 'p2-q7',
      text: 'Each team member has a clear career growth path within the company.',
      subtext: 'Think about whether your people see a future with your company beyond their current role.',
      category: 'Role Clarity & Structure',
    },
    {
      id: 'p2-q8',
      text: 'Role responsibilities do not overlap or create confusion between team members.',
      subtext: 'Consider whether there is clarity on who owns what, with no territorial gray areas.',
      category: 'Role Clarity & Structure',
    },

    // Category: Performance & Accountability (Q9-16)
    {
      id: 'p2-q9',
      text: 'I conduct formal performance reviews at least quarterly.',
      subtext: 'Think about whether you have a structured review process happening on a regular cadence.',
      category: 'Performance & Accountability',
    },
    {
      id: 'p2-q10',
      text: 'Underperformers are addressed within 2 weeks of identifying the issue.',
      subtext: 'Consider how quickly you act when someone is not meeting expectations.',
      category: 'Performance & Accountability',
    },
    {
      id: 'p2-q11',
      text: 'My team has daily or weekly scorecards tracking their individual metrics.',
      subtext: 'Rate whether your team members have visible, real-time performance tracking.',
      category: 'Performance & Accountability',
    },
    {
      id: 'p2-q12',
      text: 'I have a documented performance improvement process.',
      subtext: 'Think about whether you have a formal PIP or improvement plan you follow consistently.',
      category: 'Performance & Accountability',
    },
    {
      id: 'p2-q13',
      text: 'Top performers are recognized and rewarded consistently.',
      subtext: 'Consider whether your best people feel valued and incentivized to keep excelling.',
      category: 'Performance & Accountability',
    },
    {
      id: 'p2-q14',
      text: 'I have fired or replaced at least one underperformer in the last 12 months.',
      subtext: 'Rate your willingness to make tough personnel decisions when performance lags.',
      category: 'Performance & Accountability',
    },
    {
      id: 'p2-q15',
      text: 'My team meets weekly to review progress and address blockers.',
      subtext: 'Think about whether you have a consistent weekly team meeting focused on execution.',
      category: 'Performance & Accountability',
    },
    {
      id: 'p2-q16',
      text: 'Each team member can explain how their work directly impacts company revenue.',
      subtext: 'Consider whether every person understands the revenue connection of their daily work.',
      category: 'Performance & Accountability',
    },

    // Category: Culture & Retention (Q17-24)
    {
      id: 'p2-q17',
      text: 'My team members genuinely support each other when problems arise.',
      subtext: 'Think about whether your team rallies together or points fingers when things go wrong.',
      category: 'Culture & Retention',
    },
    {
      id: 'p2-q18',
      text: 'Employee turnover in the last 12 months is below 20%.',
      subtext: 'Consider your retention rate and whether people are staying or leaving frequently.',
      category: 'Culture & Retention',
    },
    {
      id: 'p2-q19',
      text: 'My team members take ownership of problems rather than passing blame.',
      subtext: 'Rate the level of personal accountability and ownership in your team culture.',
      category: 'Culture & Retention',
    },
    {
      id: 'p2-q20',
      text: 'I would describe my company culture as strong and unified.',
      subtext: 'Think about whether your team shares common values and a sense of mission.',
      category: 'Culture & Retention',
    },
    {
      id: 'p2-q21',
      text: 'Team members proactively suggest improvements without being asked.',
      subtext: 'Consider whether your people bring ideas to the table or wait to be told what to do.',
      category: 'Culture & Retention',
    },
    {
      id: 'p2-q22',
      text: 'My team stays because they believe in the company vision, not just the paycheck.',
      subtext: 'Rate whether your team is motivated by purpose or purely by compensation.',
      category: 'Culture & Retention',
    },
    {
      id: 'p2-q23',
      text: 'I have a process for gathering team feedback regularly.',
      subtext: 'Think about whether you systematically collect and act on employee feedback.',
      category: 'Culture & Retention',
    },
    {
      id: 'p2-q24',
      text: 'New hires consistently say the culture matches what was described in interviews.',
      subtext: 'Consider whether the experience of working at your company matches the expectations set during hiring.',
      category: 'Culture & Retention',
    },

    // Category: Independence & Scalability (Q25-30)
    {
      id: 'p2-q25',
      text: 'My team can handle a full day without me being available.',
      subtext: 'Think about what happens operationally when you are completely unavailable for a day.',
      category: 'Independence & Scalability',
    },
    {
      id: 'p2-q26',
      text: 'At least one team member could run the business for a week in my absence.',
      subtext: 'Consider whether you have a capable second-in-command who can lead without you.',
      category: 'Independence & Scalability',
    },
    {
      id: 'p2-q27',
      text: 'My team closes deals and serves clients without my direct involvement.',
      subtext: 'Rate whether revenue generation and client delivery happen independently of you.',
      category: 'Independence & Scalability',
    },
    {
      id: 'p2-q28',
      text: 'I have documented SOPs for at least 80% of recurring tasks.',
      subtext: 'Think about how much of your operations is captured in written standard operating procedures.',
      category: 'Independence & Scalability',
    },
    {
      id: 'p2-q29',
      text: 'When I hire, I have a proven process for finding the right cultural fit.',
      subtext: 'Consider whether your hiring process reliably identifies people who thrive in your culture.',
      category: 'Independence & Scalability',
    },
    {
      id: 'p2-q30',
      text: 'My business could add 50% more revenue without adding proportional staff.',
      subtext: 'Rate whether your current team and systems could handle significant revenue growth.',
      category: 'Independence & Scalability',
    },
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // PILLAR 3: REVENUE PIPELINE (30 questions)
  // ──────────────────────────────────────────────────────────────────────────
  3: [
    // Category: Avatar & Client Clarity (Q1-8)
    {
      id: 'p3-q1',
      text: 'I can describe my ideal client in specific detail (demographics, psychographics, pain points).',
      subtext: 'Think about whether you have a vivid, documented profile of who you serve best.',
      category: 'Avatar & Client Clarity',
    },
    {
      id: 'p3-q2',
      text: 'I know which client type generates the highest lifetime value.',
      subtext: 'Consider whether you have identified which clients are the most profitable long-term.',
      category: 'Avatar & Client Clarity',
    },
    {
      id: 'p3-q3',
      text: 'I have documented my ideal client avatar and shared it with my team.',
      subtext: 'Rate whether your team can consistently identify and attract the right clients.',
      category: 'Avatar & Client Clarity',
    },
    {
      id: 'p3-q4',
      text: 'I actively say "no" to clients who don\'t fit my ideal profile.',
      subtext: 'Think about your discipline in turning away revenue that does not align with your best-fit client.',
      category: 'Avatar & Client Clarity',
    },
    {
      id: 'p3-q5',
      text: 'I know the top 3 problems my ideal client is trying to solve.',
      subtext: 'Consider whether you deeply understand the specific pain points driving your ideal client to seek help.',
      category: 'Avatar & Client Clarity',
    },
    {
      id: 'p3-q6',
      text: 'My marketing speaks directly to my ideal client\'s specific situation.',
      subtext: 'Rate whether your messaging resonates with your target audience or feels generic.',
      category: 'Avatar & Client Clarity',
    },
    {
      id: 'p3-q7',
      text: 'I can identify my top 10 most profitable clients and explain why they\'re profitable.',
      subtext: 'Think about whether you know who your best clients are and what makes them so valuable.',
      category: 'Avatar & Client Clarity',
    },
    {
      id: 'p3-q8',
      text: 'I track which client segments generate the most referrals.',
      subtext: 'Consider whether you know which types of clients are most likely to send you new business.',
      category: 'Avatar & Client Clarity',
    },

    // Category: Sales Process & Scripts (Q9-16)
    {
      id: 'p3-q9',
      text: 'I have a documented, step-by-step sales process my team follows.',
      subtext: 'Think about whether your sales workflow is written down and consistently executed.',
      category: 'Sales Process & Scripts',
    },
    {
      id: 'p3-q10',
      text: 'My team uses discovery questions to diagnose client needs before presenting solutions.',
      subtext: 'Consider whether your sales conversations start with understanding the prospect\'s situation.',
      category: 'Sales Process & Scripts',
    },
    {
      id: 'p3-q11',
      text: 'My sales conversations focus on solving problems rather than pitching features.',
      subtext: 'Rate whether your approach leads with the client\'s pain or with your product details.',
      category: 'Sales Process & Scripts',
    },
    {
      id: 'p3-q12',
      text: 'I have objection-handling scripts or frameworks my team is trained on.',
      subtext: 'Think about whether your team has prepared responses for common pushback and objections.',
      category: 'Sales Process & Scripts',
    },
    {
      id: 'p3-q13',
      text: 'My team can close deals without my involvement.',
      subtext: 'Consider whether deals get done even when you are not in the room or on the call.',
      category: 'Sales Process & Scripts',
    },
    {
      id: 'p3-q14',
      text: 'I measure close rate and know it within 5% accuracy.',
      subtext: 'Rate your awareness of the percentage of prospects that convert to paying clients.',
      category: 'Sales Process & Scripts',
    },
    {
      id: 'p3-q15',
      text: 'Every sales call or meeting follows a consistent structure.',
      subtext: 'Think about whether your sales interactions follow a repeatable framework or vary every time.',
      category: 'Sales Process & Scripts',
    },
    {
      id: 'p3-q16',
      text: 'I have a follow-up sequence for leads who don\'t close immediately.',
      subtext: 'Consider whether you have a systematic way to stay in front of prospects who are not yet ready.',
      category: 'Sales Process & Scripts',
    },

    // Category: Offer Ladder & Client Retention (Q17-24)
    {
      id: 'p3-q17',
      text: 'I have multiple products/services at different price points (offer ladder).',
      subtext: 'Think about whether you offer entry-level, mid-tier, and premium options for clients.',
      category: 'Offer Ladder & Client Retention',
    },
    {
      id: 'p3-q18',
      text: 'I have a system to upsell or cross-sell existing clients.',
      subtext: 'Consider whether you systematically offer additional value to clients already in your ecosystem.',
      category: 'Offer Ladder & Client Retention',
    },
    {
      id: 'p3-q19',
      text: 'My average client stays with me for more than 12 months.',
      subtext: 'Rate how long your typical client relationship lasts and whether retention is a strength.',
      category: 'Offer Ladder & Client Retention',
    },
    {
      id: 'p3-q20',
      text: 'I calculate and track client lifetime value.',
      subtext: 'Think about whether you know the total revenue an average client generates over time.',
      category: 'Offer Ladder & Client Retention',
    },
    {
      id: 'p3-q21',
      text: 'I have a client onboarding process that sets expectations and builds loyalty.',
      subtext: 'Consider whether new clients go through a structured experience that starts the relationship strong.',
      category: 'Offer Ladder & Client Retention',
    },
    {
      id: 'p3-q22',
      text: 'I proactively reach out to past clients for repeat business or referrals.',
      subtext: 'Rate whether you have a system for re-engaging former clients rather than only chasing new ones.',
      category: 'Offer Ladder & Client Retention',
    },
    {
      id: 'p3-q23',
      text: 'My offer ladder captures increasing value from clients over time.',
      subtext: 'Think about whether each step in your offer ladder delivers more value and generates more revenue.',
      category: 'Offer Ladder & Client Retention',
    },
    {
      id: 'p3-q24',
      text: 'I have a documented referral program or system.',
      subtext: 'Consider whether you have a formal process that incentivizes and tracks client referrals.',
      category: 'Offer Ladder & Client Retention',
    },

    // Category: Revenue Tracking & Predictability (Q25-30)
    {
      id: 'p3-q25',
      text: 'I can predict next month\'s revenue within 15% accuracy.',
      subtext: 'Think about whether your revenue is predictable enough to forecast with confidence.',
      category: 'Revenue Tracking & Predictability',
    },
    {
      id: 'p3-q26',
      text: 'I track revenue by source (channel, campaign, referral) weekly.',
      subtext: 'Consider whether you know which revenue streams are producing and which are not.',
      category: 'Revenue Tracking & Predictability',
    },
    {
      id: 'p3-q27',
      text: 'I know my customer acquisition cost (CAC) per channel.',
      subtext: 'Rate your awareness of how much it costs to acquire a new client from each source.',
      category: 'Revenue Tracking & Predictability',
    },
    {
      id: 'p3-q28',
      text: 'I have a sales pipeline with defined stages and conversion rates per stage.',
      subtext: 'Think about whether your pipeline has clear stages with measured drop-off between each one.',
      category: 'Revenue Tracking & Predictability',
    },
    {
      id: 'p3-q29',
      text: 'I review revenue metrics weekly and adjust strategy based on data.',
      subtext: 'Consider whether you make revenue decisions based on actual numbers rather than intuition.',
      category: 'Revenue Tracking & Predictability',
    },
    {
      id: 'p3-q30',
      text: 'Revenue has grown consistently (quarter over quarter) in the last 12 months.',
      subtext: 'Rate whether your business has shown steady revenue growth over the past year.',
      category: 'Revenue Tracking & Predictability',
    },
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // PILLAR 4: CONVERSION INTELLIGENCE (30 questions)
  // ──────────────────────────────────────────────────────────────────────────
  4: [
    // Category: Buyer Journey & Tracking (Q1-8)
    {
      id: 'p4-q1',
      text: 'I can map every stage of my buyer\'s journey from first touch to close.',
      subtext: 'Think about whether you have a clear picture of every step a prospect takes before buying.',
      category: 'Buyer Journey & Tracking',
    },
    {
      id: 'p4-q2',
      text: 'I track where every lead comes from (source attribution).',
      subtext: 'Consider whether you can trace each lead back to the specific channel or campaign that generated it.',
      category: 'Buyer Journey & Tracking',
    },
    {
      id: 'p4-q3',
      text: 'I know exactly where leads drop off in my funnel and why.',
      subtext: 'Rate your understanding of where prospects disengage and the reasons behind it.',
      category: 'Buyer Journey & Tracking',
    },
    {
      id: 'p4-q4',
      text: 'I have tracking pixels/analytics installed on my website and landing pages.',
      subtext: 'Think about whether you have the technical tracking in place to measure visitor behavior.',
      category: 'Buyer Journey & Tracking',
    },
    {
      id: 'p4-q5',
      text: 'I review funnel metrics (click rates, conversion rates, drop-offs) at least weekly.',
      subtext: 'Consider whether you regularly analyze the performance of each stage of your funnel.',
      category: 'Buyer Journey & Tracking',
    },
    {
      id: 'p4-q6',
      text: 'I can tell you which marketing channel has the best ROI right now.',
      subtext: 'Rate your ability to identify your highest-returning marketing channel at this moment.',
      category: 'Buyer Journey & Tracking',
    },
    {
      id: 'p4-q7',
      text: 'I track time-to-close (how long from first contact to purchase).',
      subtext: 'Think about whether you measure the average sales cycle length for your business.',
      category: 'Buyer Journey & Tracking',
    },
    {
      id: 'p4-q8',
      text: 'I have separate tracking for each marketing campaign or channel.',
      subtext: 'Consider whether you can isolate performance data for individual campaigns or channels.',
      category: 'Buyer Journey & Tracking',
    },

    // Category: Marketing ROI & Spend (Q9-16)
    {
      id: 'p4-q9',
      text: 'I know my return on ad spend (ROAS) for every paid channel.',
      subtext: 'Think about whether you can calculate the revenue generated per dollar spent on each ad platform.',
      category: 'Marketing ROI & Spend',
    },
    {
      id: 'p4-q10',
      text: 'Every marketing dollar I spend has a measurable expected return.',
      subtext: 'Consider whether you invest in marketing with clear ROI targets or spend without expectations.',
      category: 'Marketing ROI & Spend',
    },
    {
      id: 'p4-q11',
      text: 'I have stopped spending on at least one underperforming channel in the last 6 months.',
      subtext: 'Rate your willingness to cut marketing spend that is not delivering results.',
      category: 'Marketing ROI & Spend',
    },
    {
      id: 'p4-q12',
      text: 'My marketing budget is allocated based on data, not gut feeling.',
      subtext: 'Think about whether your spending decisions are driven by performance data or intuition.',
      category: 'Marketing ROI & Spend',
    },
    {
      id: 'p4-q13',
      text: 'I can calculate cost-per-lead for each marketing channel.',
      subtext: 'Consider whether you know exactly how much each lead costs you by source.',
      category: 'Marketing ROI & Spend',
    },
    {
      id: 'p4-q14',
      text: 'I have a monthly marketing budget that\'s tied to revenue goals.',
      subtext: 'Rate whether your marketing investment is aligned with specific revenue targets.',
      category: 'Marketing ROI & Spend',
    },
    {
      id: 'p4-q15',
      text: 'I test new marketing channels or campaigns at least quarterly.',
      subtext: 'Think about whether you regularly experiment with new ways to reach your audience.',
      category: 'Marketing ROI & Spend',
    },
    {
      id: 'p4-q16',
      text: 'I reinvest marketing profits back into the highest-performing channels.',
      subtext: 'Consider whether you systematically double down on what is working best.',
      category: 'Marketing ROI & Spend',
    },

    // Category: Automated Sequences & Systems (Q17-24)
    {
      id: 'p4-q17',
      text: 'I have automated email/SMS sequences that nurture leads without manual effort.',
      subtext: 'Think about whether your lead nurture runs on autopilot or requires manual follow-up.',
      category: 'Automated Sequences & Systems',
    },
    {
      id: 'p4-q18',
      text: 'Leads receive follow-up within 5 minutes of inquiry (automated or manual).',
      subtext: 'Consider whether your response time to new leads is fast enough to maximize conversion.',
      category: 'Automated Sequences & Systems',
    },
    {
      id: 'p4-q19',
      text: 'I have a documented lead nurture sequence of at least 5 touchpoints.',
      subtext: 'Rate whether you have a multi-step follow-up process that keeps you top of mind.',
      category: 'Automated Sequences & Systems',
    },
    {
      id: 'p4-q20',
      text: 'My CRM tracks every interaction with every lead automatically.',
      subtext: 'Think about whether all lead activity is captured in your CRM without manual data entry.',
      category: 'Automated Sequences & Systems',
    },
    {
      id: 'p4-q21',
      text: 'I have re-engagement campaigns for leads who went cold.',
      subtext: 'Consider whether you have a system to revive interest from leads that stopped responding.',
      category: 'Automated Sequences & Systems',
    },
    {
      id: 'p4-q22',
      text: 'My booking/sales process is partially or fully automated.',
      subtext: 'Rate how much of your scheduling and sales workflow runs without manual intervention.',
      category: 'Automated Sequences & Systems',
    },
    {
      id: 'p4-q23',
      text: 'I use retargeting ads to re-engage website visitors.',
      subtext: 'Think about whether you bring back visitors who left your site without converting.',
      category: 'Automated Sequences & Systems',
    },
    {
      id: 'p4-q24',
      text: 'I have automated review/testimonial collection from satisfied clients.',
      subtext: 'Consider whether social proof is gathered systematically after successful client outcomes.',
      category: 'Automated Sequences & Systems',
    },

    // Category: Repeatable & Scalable Marketing (Q25-30)
    {
      id: 'p4-q25',
      text: 'My best-performing marketing campaigns are documented and repeatable.',
      subtext: 'Think about whether your winning campaigns are captured in a playbook anyone can execute.',
      category: 'Repeatable & Scalable Marketing',
    },
    {
      id: 'p4-q26',
      text: 'I could hand my marketing playbook to a new hire and they could execute it.',
      subtext: 'Consider whether your marketing processes are documented well enough for someone new to follow.',
      category: 'Repeatable & Scalable Marketing',
    },
    {
      id: 'p4-q27',
      text: 'My messaging is consistent across all channels (website, social, email, ads).',
      subtext: 'Rate whether your brand voice and value proposition are unified everywhere you show up.',
      category: 'Repeatable & Scalable Marketing',
    },
    {
      id: 'p4-q28',
      text: 'I test variations of ads, emails, or landing pages and optimize based on results.',
      subtext: 'Think about whether you run A/B tests and make data-driven improvements to your marketing.',
      category: 'Repeatable & Scalable Marketing',
    },
    {
      id: 'p4-q29',
      text: 'I have a content calendar or marketing plan for the next 90 days.',
      subtext: 'Consider whether you have a forward-looking plan for content and campaigns.',
      category: 'Repeatable & Scalable Marketing',
    },
    {
      id: 'p4-q30',
      text: 'My marketing generates leads predictably — I know roughly how many to expect each week.',
      subtext: 'Rate whether your lead flow is consistent and predictable or sporadic and unpredictable.',
      category: 'Repeatable & Scalable Marketing',
    },
  ],
};

export function getQuestionsForPillar(pillarId: PillarId) {
  return (PILLAR_QUESTIONS[pillarId] || []).map((q) => ({
    id: q.id,
    category: q.category,
    text: q.text,
    subtext: q.subtext,
  }));
}
