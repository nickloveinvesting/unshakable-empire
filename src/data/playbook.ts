export interface PlaybookEntry {
  id: string;
  pillarId: number;
  pillarSlug: 'ceo-command' | 'team-culture' | 'revenue-systems' | 'conversion-mastery';
  dayNumber: number;
  title: string;
  category: string;
  content: string;
  keyTakeaway: string;
}

export const PLAYBOOK_ENTRIES: PlaybookEntry[] = [
  // CEO Command Center - Pillar 1
  {
    id: 'p1-d1',
    pillarId: 1,
    pillarSlug: 'ceo-command',
    dayNumber: 1,
    title: 'The Time Truth Audit',
    category: 'Time Audit & Awareness',
    content: "Most CEOs dramatically overestimate how much time they spend on strategic work and underestimate how much time disappears into low-value tasks. The time audit is the single most eye-opening exercise in the entire CEO Command Center protocol. When you see in black and white that you spent 45 minutes answering emails that your assistant could have handled, or two hours troubleshooting an operations issue your manager should own, the case for change makes itself. You cannot manage what you do not measure — and your time is the most finite resource your business has.",
    keyTakeaway: 'You cannot manage what you do not measure — your time is the most finite resource your business has.'
  },
  {
    id: 'p1-d2',
    pillarId: 1,
    pillarSlug: 'ceo-command',
    dayNumber: 2,
    title: 'The $10/$100/$1000 Hour Framework',
    category: 'Time Audit & Awareness',
    content: "Here is the math that changes everything: if your business generates $500K in revenue and you work 2,000 hours a year, your time is worth $250/hr at minimum. Every hour you spend on $10/hr work — filing, scheduling, basic email — costs your business $240 in lost opportunity. The CEO's job is not to do things right; it is to make sure the right things get done. Delegation is not about being lazy. It is about respecting the value of your position and the potential of your team. The fastest-growing companies are led by CEOs who ruthlessly protect their highest-value hours.",
    keyTakeaway: 'Every hour you spend on $10/hr work costs your business $240 in lost opportunity.'
  },
  {
    id: 'p1-d11',
    pillarId: 1,
    pillarSlug: 'ceo-command',
    dayNumber: 11,
    title: 'The If-Then Playbook',
    category: 'Decision Filters & Delegation',
    content: "The If-Then playbook is one of the most powerful tools in the CEO Command Center. It codifies your judgment into a scalable system. Every time you answer a team question, you are solving a problem once. Every time you add that answer to the playbook, you are solving it forever. The best-run organizations operate on playbooks, not on the CEO's availability. McDonald's does not need a genius running each location because the systems are the genius. Your business may not be McDonald's, but the principle is identical: the more of your decision-making you can systematize, the less your business depends on your physical presence.",
    keyTakeaway: "McDonald's doesn't need a genius running each location because the systems are the genius."
  },
  {
    id: 'p1-d15',
    pillarId: 1,
    pillarSlug: 'ceo-command',
    dayNumber: 15,
    title: 'The Five Numbers That Matter',
    category: 'Scorecard & Metrics Installation',
    content: "Every CEO needs a dashboard, and it should fit on a single page. The five KPIs you choose should pass the 'so what' test: if this number changes, does it directly impact revenue, profitability, or growth? Revenue tells you if the market wants what you sell. Leads tell you if your pipeline is healthy. Close rate tells you if your sales process works. Customer satisfaction tells you if you will keep the revenue you have. Profit margin tells you if the revenue is actually making you money. If you master these five numbers, you will catch problems before they become crises and opportunities before your competitors do.",
    keyTakeaway: 'Five KPIs should fit on one page and pass the "so what" test for business impact.'
  },

  // Team Culture - Pillar 2
  {
    id: 'p2-d3',
    pillarId: 2,
    pillarSlug: 'team-culture',
    dayNumber: 3,
    title: 'Right Seat, Right Person Matrix',
    category: 'Role Audit',
    content: "The Unshakable Culture is a team that not only drinks the Kool-Aid, but they make it. A person who is highly skilled but culturally toxic will poison your entire organization. They hit their numbers while destroying morale around them. Conversely, someone who embodies your values but lacks skill is worth investing in — culture is harder to teach than competency. The matrix forces you to separate emotion from evaluation. You may love someone personally but if they score low on both axes, keeping them is unfair to the rest of your team who carries the weight. Build the matrix. Trust the data.",
    keyTakeaway: 'Culture is harder to teach than competency — high culture, low skill is trainable; the reverse is dangerous.'
  },
  {
    id: 'p2-d15',
    pillarId: 2,
    pillarSlug: 'team-culture',
    dayNumber: 15,
    title: 'Draft Core Values',
    category: 'Culture Building',
    content: "The Unshakable Culture starts with values that are non-negotiable, not aspirational. Most companies list values like 'integrity' and 'excellence' — words so generic they mean nothing. Your values should be specific enough to make hiring decisions, firing decisions, and daily behavior decisions. 'Givers, not takers' means you will let go of someone who hits their numbers but hoards information from teammates. 'Burn the boats mentality' means you will invest in someone who is all-in even if they are still developing their skills. Values are not what you say — they are who you keep and who you let go.",
    keyTakeaway: 'Values are not what you say — they are who you keep and who you let go.'
  },
  {
    id: 'p2-d23',
    pillarId: 2,
    pillarSlug: 'team-culture',
    dayNumber: 23,
    title: 'Debrief and First SOP',
    category: 'Independence Testing',
    content: "An SOP is a promise to your team: 'You will never be left wondering what to do in this situation again.' Most businesses operate on tribal knowledge — information that lives in one person's head. When that person is out sick, on vacation, or quits, the knowledge leaves with them. SOPs transfer tribal knowledge into organizational knowledge. They are the foundation of a business that runs without you. Every time something breaks in your absence, you have found a gap in your SOPs. Today you close one. Over time, you will build a playbook so complete that any competent person could step into any role and operate effectively on day one.",
    keyTakeaway: 'SOPs transfer tribal knowledge into organizational knowledge — the foundation of a business that runs without you.'
  },

  // Revenue Systems - Pillar 3
  {
    id: 'p3-d2',
    pillarId: 3,
    pillarSlug: 'revenue-systems',
    dayNumber: 2,
    title: 'Client Demographics Deep-Dive',
    category: 'Avatar & Client Analysis',
    content: "Demographics are the skeleton of your ideal client avatar. When someone says their target market is 'anyone with plumbing problems,' that is NOT an avatar -- that is a prayer. An avatar has a specific industry, a specific company size, a specific revenue range, and a specific geographic footprint. The more specific you get, the more powerful your marketing and sales become. You stop wasting time on leads that will never close and start attracting clients who are pre-qualified before they ever talk to you. Today you are mining your own data for the demographic fingerprint of your best clients. The answers are already in your business -- you just have not looked for them yet.",
    keyTakeaway: `"Anyone with plumbing problems" is not an avatar — it's a prayer. Get specific.`
  },
  {
    id: 'p3-d10',
    pillarId: 3,
    pillarSlug: 'revenue-systems',
    dayNumber: 10,
    title: 'Solutions-Based Pitch Rewrite',
    category: 'Sales Process Optimization',
    content: "Features tell, solutions sell. When you lead with 'we have a 99.9% uptime SLA and 256-bit encryption,' you are speaking your language, not your client's language. When you lead with 'we make sure your business never goes offline and your data never gets stolen,' you are speaking to their fear and their desired outcome. The best pitch in the world is not about you at all -- it is entirely about the client. It says: I understand your problem. I have solved it before. Here is what life looks like after we fix it. That is solutions, not sales. The companies that dominate their markets are not the ones with the most features -- they are the ones that articulate the problem and the transformation better than anyone else.",
    keyTakeaway: `The best pitch is not about you at all — it's entirely about the client and their transformation.`
  },
  {
    id: 'p3-d18',
    pillarId: 3,
    pillarSlug: 'revenue-systems',
    dayNumber: 18,
    title: 'Client Lifetime Value Calculation',
    category: 'Offer Ladder & Lifetime Value',
    content: "Client lifetime value is the most important number in your business that you are probably not tracking. When you know your LTV, you know exactly how much you can afford to spend to acquire a client and still be profitable. If your average client is worth $25,000 over their lifetime, spending $2,500 to acquire them is a 10x return. But if you do not know your LTV, you are guessing -- and most businesses guess low, which means they underinvest in marketing and sales. That client that comes back time and time and time again -- that is a client for life. And a client for life is worth exponentially more than a one-time buyer. Your offer ladder exists to maximize LTV by giving clients reasons to keep buying, keep growing, and keep referring.",
    keyTakeaway: `If you don't know your LTV, you're guessing — and most businesses guess low and underinvest.`
  },

  // Conversion Mastery - Pillar 4
  {
    id: 'p4-d3',
    pillarId: 4,
    pillarSlug: 'conversion-mastery',
    dayNumber: 3,
    title: 'Install and Verify Tracking at Every Stage',
    category: 'Funnel Mapping & Baseline',
    content: "Installing tracking is not glamorous work but it is the foundation of every dollar of marketing ROI you will ever measure. Think of it this way: if you run a McDonald's, you know exactly how many burgers you sold, how much each cost to make, and what your profit margin is on every item. Same quarter pounder with cheese in London as in the US. Why? Because it was repeatable and measurable. Your marketing needs the same precision. Every stage of your funnel should have a number attached to it. If it does not, you are running your business on feelings instead of facts.",
    keyTakeaway: 'Same quarter pounder with cheese in London as in the US — because it was repeatable and measurable.'
  },
  {
    id: 'p4-d11',
    pillarId: 4,
    pillarSlug: 'conversion-mastery',
    dayNumber: 11,
    title: 'Identify Top and Bottom Performing Channels',
    category: 'Channel Performance Audit',
    content: "Here is a hard truth: most businesses spread their marketing budget across too many channels and do none of them well. They are on every social platform, running ads everywhere, posting content that nobody sees, and wondering why nothing works. The answer is focus. When you identify your top 2 channels and go deep on them, your results compound. When you keep spending on channels that do not work because 'you might miss something,' you are subsidizing failure. Kill the losers. Feed the winners. That is the discipline that separates businesses that scale from businesses that stall.",
    keyTakeaway: "Kill the losers. Feed the winners. That's the discipline that separates businesses that scale from those that stall."
  },
  {
    id: 'p4-d25',
    pillarId: 4,
    pillarSlug: 'conversion-mastery',
    dayNumber: 25,
    title: 'Automate Review and Testimonial Collection',
    category: 'Systems & Continuous Optimization',
    content: "Social proof is the most powerful conversion tool you have and most businesses leave it to chance. They wait for reviews to show up organically instead of systematically requesting them. The data is clear: 93% of consumers say online reviews influence their purchase decisions. A product with 5 reviews is 270% more likely to be purchased than one with no reviews. Automate the ask so it happens every time, with every satisfied client, without anyone on your team having to remember. Build repeatable closing sequences so that nobody can screw up -- and review collection should be part of that sequence, not an afterthought.",
    keyTakeaway: 'A product with 5 reviews is 270% more likely to be purchased than one with no reviews.'
  },
];
