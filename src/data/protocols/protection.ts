import type { DayProtocol } from "@/types/protocol";

export const protectionProtocol: DayProtocol[] = [
  // ───────────────────────────────────────────────
  // WEEK 1 — Time Audit & Awareness
  // ───────────────────────────────────────────────
  {
    day: 1,
    title: "The Time Truth",
    intention:
      "Before you can reclaim your time, you have to see where it actually goes. Today is about radical honesty with yourself.",
    tasks: [
      {
        id: "d1-t1",
        label: "Write down every task you did today and how long it took",
        description:
          "Carry a notepad or use your phone. Log every activity from the moment you start working until you stop — emails, calls, meetings, fires, deep work, everything. No task is too small to record.",
      },
      {
        id: "d1-t2",
        label: "Measure your total hours worked today",
        description:
          "Add up every logged minute. Get an exact count of how many hours you actually spent working today — not how many hours you think you worked.",
      },
      {
        id: "d1-t3",
        label: "Reflect: which tasks could someone else have done?",
        description:
          "Review your log with fresh eyes. Highlight every task that did not require your unique expertise, relationships, or decision-making authority. Be brutally honest.",
      },
    ],
    educationalContent:
      "Most CEOs dramatically overestimate how much time they spend on strategic work and underestimate how much time disappears into low-value tasks. The time audit is the single most eye-opening exercise in the entire CEO Command Center protocol. When you see in black and white that you spent 45 minutes answering emails that your assistant could have handled, or two hours troubleshooting an operations issue your manager should own, the case for change makes itself. You cannot manage what you do not measure — and your time is the most finite resource your business has.",
  },
  {
    day: 2,
    title: "The Dollar Value of Your Hours",
    intention:
      "Not all work is created equal. Today you will assign a dollar value to every task and see where your highest-leverage hours actually go.",
    tasks: [
      {
        id: "d2-t1",
        label: "Categorize yesterday's tasks as $10/hr, $100/hr, or $1000/hr work",
        description:
          "Go through your Day 1 time log. $10/hr tasks are things anyone can do (data entry, scheduling, basic emails). $100/hr tasks require skill but not you specifically (project management, standard client calls). $1000/hr tasks are CEO-level — vision, strategy, key relationships, high-value deals.",
      },
      {
        id: "d2-t2",
        label: "Measure: what percentage of your time went to $1000/hr tasks?",
        description:
          "Calculate the percentage. Most first-time CEOs discover they spend less than 10% of their time on $1000/hr work. Record this number — it is your baseline.",
      },
      {
        id: "d2-t3",
        label: "Reflect: identify one $10/hr task you will delegate this week",
        description:
          "Pick the easiest win. Choose one low-value task you do repeatedly and commit to handing it off this week. Write down who will take it, when you will train them, and what 'good enough' looks like.",
      },
    ],
    educationalContent:
      "Here is the math that changes everything: if your business generates $500K in revenue and you work 2,000 hours a year, your time is worth $250/hr at minimum. Every hour you spend on $10/hr work — filing, scheduling, basic email — costs your business $240 in lost opportunity. The CEO's job is not to do things right; it is to make sure the right things get done. Delegation is not about being lazy. It is about respecting the value of your position and the potential of your team. The fastest-growing companies are led by CEOs who ruthlessly protect their highest-value hours.",
  },
  {
    day: 3,
    title: "The CEO-Only List",
    intention:
      "Clarity is power. Today you will define the short list of tasks that truly require you — and only you — to perform.",
    tasks: [
      {
        id: "d3-t1",
        label: "Create a CEO-Only task list — things ONLY you can do",
        description:
          "Write down every task that genuinely cannot be done by anyone else in your organization. These are tasks that require your unique vision, your key relationships, your signature authority, or your strategic judgment.",
      },
      {
        id: "d3-t2",
        label: "Measure: how many items are on it? (Target: under 5)",
        description:
          "Count the items. If your list has more than five items, you are still holding on to work that could be delegated. Challenge each item: is this truly CEO-only, or is it CEO-comfortable?",
      },
      {
        id: "d3-t3",
        label: "Reflect: what are you holding onto that is not on this list?",
        description:
          "This is the hard question. What tasks do you keep doing out of habit, perfectionism, or distrust? Those are the biggest drains on your leadership capacity. Write them down.",
      },
    ],
    educationalContent:
      "The difference between a CEO and an operator is the length of their task list. Operators do everything. CEOs do only what only they can do. Your CEO-Only list should be shockingly short: set the vision, make high-stakes decisions, cultivate key relationships, develop leaders, and allocate capital. Everything else — even things you are great at, even things you enjoy — belongs to someone else. The hardest part of becoming a true CEO is letting go of the work that made you successful as an individual contributor. But your business will never outgrow your capacity to lead if you are buried in tasks your team should own.",
  },
  {
    day: 4,
    title: "Strategic Time Blocks",
    intention:
      "Your calendar reveals your true priorities. Today you will carve out protected strategic time and defend it like revenue.",
    tasks: [
      {
        id: "d4-t1",
        label: "Block 2 hours of strategic time on tomorrow's calendar — no meetings, no fires",
        description:
          "Open your calendar right now and block two consecutive hours for CEO-level strategic work. Label it 'CEO Strategic Block' and treat it as the most important meeting of your day. No phone, no email, no interruptions.",
      },
      {
        id: "d4-t2",
        label: "Measure: did you protect yesterday's strategic block? (Y/N)",
        description:
          "If you set a block yesterday, answer honestly: did you keep it? If not, what invaded it? Track this daily — the pattern of what breaks your blocks reveals your biggest operational gaps.",
      },
      {
        id: "d4-t3",
        label: "Reflect: what would you work on if you had 2 uninterrupted hours?",
        description:
          "Write down the one project, strategy, or relationship that would move the needle most if you gave it two full hours of focused attention. This is likely the work you have been avoiding because the urgent keeps crowding out the important.",
      },
    ],
    educationalContent:
      "Research from Cal Newport and others shows that a CEO's most valuable output comes from deep, uninterrupted thinking — yet the average executive is interrupted every 11 minutes and takes 25 minutes to regain full focus. That means most CEOs never actually do deep work during a normal business day. Strategic time blocks are not a luxury; they are a business necessity. The companies that innovate, pivot, and grow fastest are led by executives who fiercely protect thinking time. Your team can survive without you for two hours. Your business cannot survive without your strategic vision indefinitely.",
  },
  {
    day: 5,
    title: "Fire-Fighting Forensics",
    intention:
      "Every fire you fight as CEO reveals a system that is missing or broken. Today you will diagnose your fire triggers so you can prevent them.",
    tasks: [
      {
        id: "d5-t1",
        label: "Identify your top 3 fire-fighting triggers this week",
        description:
          "Look back over the past five days. What pulled you out of CEO-level work and into firefighting mode? Name the three most common or most disruptive triggers. Be specific: 'client complaint about delivery timeline' not 'client issues.'",
      },
      {
        id: "d5-t2",
        label: "Measure: how many times were you pulled into a fire today?",
        description:
          "Track it in real time. Every time someone brings you a problem that is not on your CEO-Only list, make a tally mark. Count them at the end of the day.",
      },
      {
        id: "d5-t3",
        label: "Reflect: which fire could have been prevented with a system?",
        description:
          "Choose the most recurring fire from your list. Ask: what process, checklist, decision rule, or team empowerment would have prevented this from ever reaching my desk? Write down the system that would solve it.",
      },
    ],
    educationalContent:
      "Firefighting feels productive because it is urgent, visible, and you get immediate feedback when you solve the problem. But it is a trap. Every fire you fight personally reinforces your team's dependency on you and prevents you from doing the strategic work that would eliminate fires permanently. The CEO who spends their day solving problems is a very expensive employee — not a leader. The goal is not to fight fires faster; it is to install the sprinkler systems so fires do not start. Every recurring problem is a missing system. Your job is to build the systems, not to be the system.",
  },
  {
    day: 6,
    title: "The Ideal CEO Week",
    intention:
      "Today you will design the weekly schedule that reflects who you need to become as a CEO — not who you have been as an operator.",
    tasks: [
      {
        id: "d6-t1",
        label: "Draft your ideal weekly schedule — assign CEO blocks, team blocks, and off blocks",
        description:
          "Map out Monday through Friday. Allocate specific time blocks for: CEO strategic work, team development and meetings, client-facing activities, administrative necessities, and personal recovery. Be intentional about every hour.",
      },
      {
        id: "d6-t2",
        label: "Measure: hours allocated to strategy vs. operations",
        description:
          "In your ideal schedule, count the hours dedicated to strategic CEO work versus operational execution. Your target: at least 40% of your work week should be CEO-level strategic time.",
      },
      {
        id: "d6-t3",
        label: "Reflect: what has to change for this schedule to become real?",
        description:
          "Compare your ideal schedule to your current reality. What gaps exist? What needs to be delegated, automated, or eliminated to make this schedule possible within 90 days? Write down the three biggest changes required.",
      },
    ],
    educationalContent:
      "Your calendar is the physical manifestation of your priorities. If you say strategy matters but your calendar is wall-to-wall meetings and reactive tasks, your actions contradict your words. The ideal CEO week is not aspirational — it is architectural. You are designing the structure your leadership will operate within. The most effective CEOs batch similar activities together: strategy on Monday mornings, team one-on-ones on Tuesday afternoons, client development on Wednesdays. This reduces context-switching and creates predictability for your team. Your schedule will not become ideal overnight, but without a target, you will never get there.",
  },
  {
    day: 7,
    title: "Week 1 Review — The Awareness Reckoning",
    intention:
      "Step back and see the full picture of your first week. Awareness without action is just entertainment — today you turn insight into commitment.",
    tasks: [
      {
        id: "d7-t1",
        label: "Review your week: how many hours did you work? How many were CEO-level?",
        description:
          "Total your hours for the week. Then calculate how many of those hours were spent on tasks from your CEO-Only list. Express it as a percentage. This is your Week 1 CEO Effectiveness Score.",
      },
      {
        id: "d7-t2",
        label: "Measure: compare your actual week to your ideal week from Day 6",
        description:
          "Lay your ideal schedule next to your actual time log. Where are the biggest gaps? Which blocks got protected and which got invaded? Document the variance.",
      },
      {
        id: "d7-t3",
        label: "Reflect: what is one thing you will do differently next week?",
        description:
          "Choose one specific, actionable change for Week 2. Not a vague intention like 'delegate more' but a concrete commitment like 'I will not answer Slack messages between 9 and 11 AM.' Write it down and share it with an accountability partner.",
      },
    ],
    educationalContent:
      "Week 1 is about truth-telling. Most CEOs who complete this week discover they spend 70-80% of their time on work that someone earning a fraction of their compensation could do. That realization stings — but it is the catalyst for transformation. The gap between your current schedule and your ideal schedule represents trapped revenue, delayed growth, and unnecessary stress. Every percentage point you shift from operational to strategic work compounds over time. A CEO who moves from 10% strategic to 40% strategic does not just quadruple their strategic output — they create the space for their business to grow beyond their personal capacity.",
  },

  // ───────────────────────────────────────────────
  // WEEK 2 — Decision Filters & Delegation
  // ───────────────────────────────────────────────
  {
    day: 8,
    title: "The Decision Inventory",
    intention:
      "You are making far more decisions than a CEO should. Today you will catalog every decision to find the ones you should never touch again.",
    tasks: [
      {
        id: "d8-t1",
        label: "List every decision you made today",
        description:
          "From the moment you started working, write down every decision — big and small. Approving an expense, answering a client question, choosing a vendor, resolving a team conflict. Capture them all.",
      },
      {
        id: "d8-t2",
        label: "Measure: how many decisions required YOU specifically?",
        description:
          "Review your list and mark each decision as 'CEO-required' or 'could have been delegated.' Count the totals. Most CEOs find that fewer than 20% of their daily decisions truly require their involvement.",
      },
      {
        id: "d8-t3",
        label: "Reflect: which decisions could your team make with clear guidelines?",
        description:
          "Identify the delegatable decisions that keep landing on your desk. For each one, ask: what guideline, rule, or authority level would my team need to handle this without me? Write down the top three.",
      },
    ],
    educationalContent:
      "Decision fatigue is real and scientifically proven. Every decision you make — no matter how small — depletes the same mental resource pool you need for your highest-stakes choices. A CEO who spends the morning approving purchase orders and resolving scheduling conflicts has less cognitive capacity available when a strategic opportunity appears in the afternoon. The solution is not making decisions faster; it is making fewer decisions. Every decision you successfully delegate is one more unit of mental energy preserved for the choices that actually move your business forward.",
  },
  {
    day: 9,
    title: "Decision Rules for Your Team",
    intention:
      "Your team asks you questions because they do not have clear decision-making frameworks. Today you will give them the rules to decide on their own.",
    tasks: [
      {
        id: "d9-t1",
        label: "Write 3 decision rules your team can follow without asking you",
        description:
          "Based on your Day 8 analysis, create three clear, specific rules. Example: 'Any expense under $500 is auto-approved by the department manager.' 'Client reschedule requests are handled by the account manager — no CEO approval needed.' Make them unambiguous.",
      },
      {
        id: "d9-t2",
        label: "Measure: number of decisions that hit your desk today",
        description:
          "Keep a running count of every decision someone brings to you or you involve yourself in. Compare this to yesterday's count. The goal is a downward trend starting this week.",
      },
      {
        id: "d9-t3",
        label: "Reflect: what is the worst that happens if your team makes a wrong call?",
        description:
          "For each decision rule you created, imagine the worst-case scenario if your team gets it wrong. Most of the time, the cost of a bad delegated decision is far less than the cost of bottlenecking every decision through you.",
      },
    ],
    educationalContent:
      "The reason your team keeps coming to you is not that they are incapable — it is that you have not given them permission and parameters to decide. Decision rules transform your team from order-takers into decision-makers. The best decision rules share three traits: they are specific enough to apply without interpretation, they define the boundaries of authority clearly, and they include an escalation path for edge cases. When you publish these rules, you are not losing control. You are scaling your judgment across the organization. One CEO's decision-making ability is a bottleneck. A team of empowered decision-makers is a growth engine.",
  },
  {
    day: 10,
    title: "The Delegation Handoff",
    intention:
      "Delegation is not dumping. Today you will execute a proper delegation handoff with written instructions and clear expectations.",
    tasks: [
      {
        id: "d10-t1",
        label: "Delegate one recurring task to a team member today with written instructions",
        description:
          "Choose a task you do weekly or daily that is not on your CEO-Only list. Write step-by-step instructions. Include: what the task is, why it matters, what 'done well' looks like, common mistakes to avoid, and who to ask if they get stuck.",
      },
      {
        id: "d10-t2",
        label: "Measure: estimate the weekly time saved by this delegation",
        description:
          "Calculate how many minutes or hours per week this task currently costs you. Multiply by 50 weeks. That is the annual time you are reclaiming for CEO-level work.",
      },
      {
        id: "d10-t3",
        label: "Reflect: did the result meet your standard? If not, what instruction was missing?",
        description:
          "After the task is completed, review the output. If it falls short of your expectations, do not take the task back — improve the instructions. The gap is almost always in the briefing, not in the person.",
      },
    ],
    educationalContent:
      "The number one reason delegation fails is unclear instructions, not incompetent team members. When you have done a task for years, you have internalized dozens of micro-decisions that you make unconsciously. Your team does not have that context. Effective delegation requires what military strategists call 'commander's intent' — explain the desired outcome and the boundaries, then trust your people to find the path. Write instructions once, refine them through feedback, and you create a reusable asset that works even when you hire the next person. The short-term investment in documentation pays exponential dividends in long-term freedom.",
  },
  {
    day: 11,
    title: "The If-Then Playbook",
    intention:
      "Most team questions follow patterns. Today you will build a decision playbook that handles the most common scenarios without your involvement.",
    tasks: [
      {
        id: "d11-t1",
        label:
          "Create an 'If X, Then Y' decision guide for your team's 3 most common questions",
        description:
          "Identify the three questions your team asks you most frequently. For each one, write a clear If-Then rule. Example: 'If a client requests a refund under $200, then process it immediately and log the reason. If over $200, escalate to [manager name].'",
      },
      {
        id: "d11-t2",
        label: "Measure: how many questions from your team today?",
        description:
          "Track every question, request, or decision that a team member brings to you today. Record the question and who asked it. This data reveals your delegation gaps.",
      },
      {
        id: "d11-t3",
        label: "Reflect: which question keeps coming back that should not?",
        description:
          "Look for the repeat offenders — questions you have answered multiple times. These are the highest-value candidates for your If-Then playbook because eliminating them creates permanent time savings.",
      },
    ],
    educationalContent:
      "The If-Then playbook is one of the most powerful tools in the CEO Command Center. It codifies your judgment into a scalable system. Every time you answer a team question, you are solving a problem once. Every time you add that answer to the playbook, you are solving it forever. The best-run organizations operate on playbooks, not on the CEO's availability. McDonald's does not need a genius running each location because the systems are the genius. Your business may not be McDonald's, but the principle is identical: the more of your decision-making you can systematize, the less your business depends on your physical presence.",
  },
  {
    day: 12,
    title: "The CEO Silence Test",
    intention:
      "Today you will test a radical hypothesis: your team can solve most problems without you if you simply stop answering.",
    tasks: [
      {
        id: "d12-t1",
        label: "Do NOT answer any non-urgent team question for 4 hours today",
        description:
          "Set the boundary clearly: tell your team you are in a strategic block and will not be available for non-emergency issues from [start time] to [end time]. Define what constitutes a genuine emergency (hint: very few things qualify).",
      },
      {
        id: "d12-t2",
        label: "Measure: how many questions resolved themselves?",
        description:
          "At the end of your 4-hour block, review the questions or messages that came in. How many were already resolved by the time you looked? How many turned out to not need your input at all? Track the numbers.",
      },
      {
        id: "d12-t3",
        label: "Reflect: what did you do with that reclaimed time?",
        description:
          "Honestly assess how you used those four hours. Did you do CEO-level strategic work? Did you catch up on tasks? Did you feel anxious about being unavailable? Your emotional response reveals how dependent you have become on being needed.",
      },
    ],
    educationalContent:
      "The CEO Silence Test is uncomfortable by design. Most business owners have trained their teams — often unintentionally — to bring every question upstairs. And most business owners have trained themselves to feel important when their phone buzzes with requests. But constant availability is not leadership; it is codependency. When you go silent for four hours, one of two things happens: your team steps up and solves problems on their own, or they sit and wait. If they step up, you have proof that you are the bottleneck. If they wait, you have proof that you have not empowered them — which is still your problem to solve, not theirs.",
  },
  {
    day: 13,
    title: "The Decision Maker of the Day",
    intention:
      "Leadership development happens by doing, not by watching. Today you will give a team member the authority to lead in your absence.",
    tasks: [
      {
        id: "d13-t1",
        label:
          "Assign one team member as 'decision maker of the day' for operational issues",
        description:
          "Choose your most capable team member. Give them explicit authority: 'Today, all operational decisions go through [name], not me. I trust their judgment. If something is truly strategic or irreversible, they will loop me in.' Announce it to the team.",
      },
      {
        id: "d13-t2",
        label: "Measure: how many issues were handled without you?",
        description:
          "At the end of the day, debrief with your decision maker. How many issues came up? How did they handle them? What decisions did they make? Track the total number resolved without your involvement.",
      },
      {
        id: "d13-t3",
        label: "Reflect: how did it feel to step back?",
        description:
          "This is about your emotional relationship with control. Did you feel relief? Anxiety? Pride in your team member? Frustration at how they handled something? Your feelings reveal whether you are truly ready to lead at the CEO level or still clinging to operator mode.",
      },
    ],
    educationalContent:
      "You cannot build a leadership pipeline if you never let anyone lead. The 'decision maker of the day' exercise does three things simultaneously: it gives your team member real leadership experience, it tests your delegation systems under live conditions, and it forces you to confront your own control tendencies. The CEOs who scale beyond themselves are the ones who find genuine satisfaction in watching their people grow. If your team member makes a different decision than you would have — but the outcome is acceptable — that is not a failure. That is evidence that your organization can function without you, which is the ultimate measure of leadership success.",
  },
  {
    day: 14,
    title: "Week 2 Review — The Delegation Scorecard",
    intention:
      "Measure the concrete impact of one week of intentional delegation. The numbers tell the story your ego will not.",
    tasks: [
      {
        id: "d14-t1",
        label:
          "Weekly review: how many decisions did you make this week vs. last week?",
        description:
          "Compare your decision counts from Week 2 to your Day 8 baseline. Calculate the percentage decrease. Every decision you did not make is a decision your team made — which means your organization is getting stronger.",
      },
      {
        id: "d14-t2",
        label: "Measure: the decrease in decisions made by you",
        description:
          "Document the exact number. If you went from 40 decisions per day to 25, that is a 37% reduction. That represents real cognitive energy reclaimed for strategic work. Celebrate progress, even if it is incremental.",
      },
      {
        id: "d14-t3",
        label: "Reflect: what is working in your delegation system?",
        description:
          "Identify the wins. Which decision rules did your team follow successfully? Which delegated tasks were handled well? What felt easier this week compared to last week? Double down on what is working.",
      },
    ],
    educationalContent:
      "Two weeks in, you should be feeling a shift — and possibly some discomfort. The shift comes from reclaimed time and reduced decision load. The discomfort comes from loosening control. Both are signs of progress. The leaders who build great organizations are the ones who become comfortable with 'good enough' on operational decisions so they can pursue 'excellent' on strategic ones. Your team will make mistakes — that is part of the growth process. The cost of those mistakes is almost always less than the cost of you continuing to be the bottleneck. Trust is not given in one moment; it is built through repeated small acts of letting go.",
  },

  // ───────────────────────────────────────────────
  // WEEK 3 — Scorecard & Metrics Installation
  // ───────────────────────────────────────────────
  {
    day: 15,
    title: "The Five Numbers That Matter",
    intention:
      "You cannot lead what you do not measure. Today you will define the five vital signs of your business and record your baseline.",
    tasks: [
      {
        id: "d15-t1",
        label:
          "Define your top 5 business KPIs: revenue, leads, close rate, customer satisfaction, profit margin",
        description:
          "These five metrics tell you whether your business is healthy, growing, or in trouble. Customize them for your business if needed, but do not exceed five. Simplicity is the point — these are the numbers you check every single week.",
      },
      {
        id: "d15-t2",
        label: "Measure: record today's number for each KPI",
        description:
          "Pull the actual data for each KPI right now. If you cannot find the number easily, that is itself a critical finding — it means you are flying blind on that metric. Record what you have, even if some numbers are estimates.",
      },
      {
        id: "d15-t3",
        label: "Reflect: which KPI surprised you?",
        description:
          "Look at your five numbers. Which one was better than expected? Which one was worse? The gaps between your perception and reality are where the biggest opportunities and biggest risks hide.",
      },
    ],
    educationalContent:
      "Every CEO needs a dashboard, and it should fit on a single page. The five KPIs you choose should pass the 'so what' test: if this number changes, does it directly impact revenue, profitability, or growth? Revenue tells you if the market wants what you sell. Leads tell you if your pipeline is healthy. Close rate tells you if your sales process works. Customer satisfaction tells you if you will keep the revenue you have. Profit margin tells you if the revenue is actually making you money. If you master these five numbers, you will catch problems before they become crises and opportunities before your competitors do.",
  },
  {
    day: 16,
    title: "Build Your Weekly Scorecard",
    intention:
      "A CEO without a scorecard is a pilot without instruments. Today you will build the simple tracking system that becomes your command center.",
    tasks: [
      {
        id: "d16-t1",
        label: "Create a simple weekly scorecard with your 5 KPIs",
        description:
          "Use a spreadsheet, a whiteboard, or even a notebook. Columns: KPI name, last week's number, this week's number, target, trend (up/down/flat). Keep it simple enough that updating it takes less than 15 minutes per week.",
      },
      {
        id: "d16-t2",
        label: "Measure: fill in today's numbers",
        description:
          "Populate your scorecard with current data. For KPIs tracked weekly, use this week's numbers. For KPIs tracked monthly, prorate or use the most recent data point. The goal is to have no blank cells.",
      },
      {
        id: "d16-t3",
        label: "Reflect: which number do you want to move most?",
        description:
          "Look at your completed scorecard. If you could wave a magic wand and improve one number by 20%, which would have the biggest impact on your business? That is your leading indicator — the number that moves everything else.",
      },
    ],
    educationalContent:
      "The scorecard is the heartbeat monitor of your business. It is not a report you read passively — it is a tool that drives action. The best scorecards share three characteristics: they are updated consistently (same day, same time, every week), they include targets so you know whether a number is good or bad, and they show trends over time so you can spot momentum before it is obvious. Do not overthink the format. A Google Sheet works. A whiteboard works. What matters is that you look at these five numbers every single week, without exception, for the rest of your time as CEO.",
  },
  {
    day: 17,
    title: "Assign KPI Ownership",
    intention:
      "A number without an owner is a number nobody improves. Today you will make every KPI someone's personal responsibility.",
    tasks: [
      {
        id: "d17-t1",
        label: "Assign one KPI to each team member to own and report on weekly",
        description:
          "Match each KPI to the person who has the most direct influence over it. The sales lead owns revenue and close rate. The marketing person owns leads. The operations manager owns customer satisfaction. Make the assignment explicit and public.",
      },
      {
        id: "d17-t2",
        label: "Measure: did each person report their number today?",
        description:
          "Ask each KPI owner to report their number by end of day. Track who reported and who did not. Unreported numbers are the first sign of an accountability gap.",
      },
      {
        id: "d17-t3",
        label: "Reflect: who needs more clarity on their KPI?",
        description:
          "Did any team member struggle to find their number, question why it matters, or seem unclear on how to influence it? Those are coaching opportunities. A KPI owner who does not understand their metric cannot improve it.",
      },
    ],
    educationalContent:
      "Ownership changes behavior. When a number belongs to everyone, no one improves it. When a number belongs to one person, they think about it, track it, and take action on it. KPI ownership is not about blame — it is about focus. The person who owns a KPI should be able to answer three questions at any time: What is the current number? Is it on track? What are you doing to improve it? When your team members can answer those questions confidently, you have installed a management operating system that works whether you are in the room or not. That is the difference between a business that depends on you and a business that is led by you.",
  },
  {
    day: 18,
    title: "The 90-Day Targets",
    intention:
      "Without targets, metrics are just numbers. Today you will set 90-day goals that give your scorecard teeth.",
    tasks: [
      {
        id: "d18-t1",
        label: "Set a 90-day target for each KPI",
        description:
          "For each of your five KPIs, define where you want that number to be in 90 days. Make the target specific, measurable, and ambitious but achievable. 'Increase revenue' is not a target. 'Increase monthly revenue from $80K to $100K' is a target.",
      },
      {
        id: "d18-t2",
        label: "Measure: calculate the gap between current and target",
        description:
          "For each KPI, subtract today's number from your 90-day target. This gap is the work in front of you. Rank the gaps from largest to smallest — the biggest gap is either your biggest problem or your biggest opportunity.",
      },
      {
        id: "d18-t3",
        label:
          "Reflect: which KPI will have the biggest impact on revenue if improved?",
        description:
          "Not all KPIs are equally powerful. A 10% improvement in close rate might matter more than a 10% increase in leads. Identify the KPI with the highest revenue leverage and make it your primary focus for the next 90 days.",
      },
    ],
    educationalContent:
      "The 90-day time horizon is the CEO's sweet spot. It is long enough to achieve meaningful change but short enough to maintain urgency. Annual goals feel distant and lose motivational power. Weekly goals are too reactive. Ninety days gives you enough time to implement a new system, train your team, and see measurable results. When setting targets, apply the 'uncomfortable but possible' test: if the target does not make you slightly nervous, it is too easy. If it feels impossible, it is too far. The right target stretches your team's capacity without breaking their belief that it can be done.",
  },
  {
    day: 19,
    title: "Diagnose the Underperformer",
    intention:
      "Every underperforming metric has a root cause. Today you will stop guessing and start diagnosing with a structured framework.",
    tasks: [
      {
        id: "d19-t1",
        label:
          "Review your scorecard and identify the number-one underperforming metric",
        description:
          "Look at your five KPIs. Which one has the biggest gap between current performance and target? Which one has been declining or flat the longest? That is your underperformer. Focus all of today's analysis on this single metric.",
      },
      {
        id: "d19-t2",
        label: "Measure: what specifically caused the underperformance?",
        description:
          "Dig into the data. Is the problem in volume (not enough activity), conversion (activity not producing results), or value (results not generating enough revenue)? Get specific. 'Sales are down' is not a diagnosis. 'We had 30% fewer discovery calls this month because lead flow dropped' is a diagnosis.",
      },
      {
        id: "d19-t3",
        label:
          "Reflect: is this a people problem, process problem, or visibility problem?",
        description:
          "People problems mean the wrong person is in the role or they need training. Process problems mean the system is broken or missing. Visibility problems mean the data is not being tracked or reviewed. Each type requires a different solution. Name which one it is.",
      },
    ],
    educationalContent:
      "CEOs who rely on gut instinct to diagnose business problems are playing an expensive guessing game. The people-process-visibility framework gives you a structured way to find root causes. People problems are the most emotionally difficult to address but often the most impactful: one underperformer in a key role can drag an entire metric down. Process problems are the most common: the system either does not exist, has a gap, or is not being followed. Visibility problems are the most insidious: you cannot fix what you cannot see. Start with visibility — make sure you have accurate data. Then check the process. Only after those two are solid should you conclude it is a people issue.",
  },
  {
    day: 20,
    title: "The Daily Standup",
    intention:
      "Install a daily rhythm that keeps your team aligned, accountable, and connected to the metrics that matter.",
    tasks: [
      {
        id: "d20-t1",
        label:
          "Create a 15-minute daily standup agenda based on your scorecard metrics",
        description:
          "Design a tight agenda: each KPI owner reports their number and one priority for the day (2 minutes each). Then one round of 'stuck on' where anyone can flag a blocker. No problem-solving in the standup — just flag and assign follow-ups. Total time: 15 minutes maximum.",
      },
      {
        id: "d20-t2",
        label: "Measure: did you hold the standup today?",
        description:
          "Execute the standup. Time it. Did it stay under 15 minutes? Did every KPI owner report? Track completion as a binary: you either held it or you did not. Consistency matters more than perfection.",
      },
      {
        id: "d20-t3",
        label:
          "Reflect: what came up that you would not have caught otherwise?",
        description:
          "After the standup, note any issue, trend, or insight that surfaced because of the structured check-in. The daily standup is an early warning system. If it is working, it surfaces problems when they are small and solvable.",
      },
    ],
    educationalContent:
      "The daily standup is the single most effective meeting format for small and mid-sized businesses. In 15 minutes, you get a pulse on every critical metric, surface blockers before they become crises, and create team-wide visibility into priorities. The keys to a successful standup: same time every day (morning is best), standing up (it keeps it short), focused on metrics not stories, and absolutely no problem-solving during the meeting. Problems get flagged and assigned, then solved offline. If your standup regularly runs over 15 minutes, you have too many people in it, you are allowing tangents, or you do not have a strong enough facilitator. Fix those, and this meeting becomes your team's most valuable 15 minutes.",
  },
  {
    day: 21,
    title: "Week 3 Review — The Metrics Milestone",
    intention:
      "Three weeks of tracking gives you the data to see trends. Today you will compare your scorecard to your Week 1 baseline and extract the insights.",
    tasks: [
      {
        id: "d21-t1",
        label: "Weekly scorecard review: compare Week 3 to your Week 1 baseline",
        description:
          "Pull out your Day 15 baseline numbers and compare them to today's numbers. For each KPI, calculate the change — both in absolute terms and as a percentage. Three weeks is enough to see early trends.",
      },
      {
        id: "d21-t2",
        label: "Measure: which KPIs improved? Which declined?",
        description:
          "Categorize each KPI: improving, declining, or flat. For improving metrics, identify what drove the improvement. For declining metrics, identify the root cause. For flat metrics, ask whether the target is realistic or the actions are insufficient.",
      },
      {
        id: "d21-t3",
        label:
          "Reflect: what is the single biggest insight from 3 weeks of tracking?",
        description:
          "Step back from the individual numbers and look for the pattern. What has three weeks of measurement taught you about your business that you did not know — or did not want to admit — before you started tracking?",
      },
    ],
    educationalContent:
      "Three weeks of consistent measurement is enough to separate signal from noise. Random fluctuations smooth out, and genuine trends become visible. The most common insight CEOs report at this stage is some version of: 'I thought we were doing better than we are in [area]' or 'I had no idea this metric was so strong.' Both reactions are valuable because they replace assumption with evidence. From this point forward, your scorecard is not an exercise — it is infrastructure. It is how you lead. The businesses that grow predictably are the ones that measure relentlessly. Everything else is hope, and hope is not a strategy.",
  },

  // ───────────────────────────────────────────────
  // WEEK 4 — Five Core Functions Mapping
  // ───────────────────────────────────────────────
  {
    day: 22,
    title: "Sales Function Audit",
    intention:
      "Sales is the engine of revenue. Today you will map it, measure it, and find where it is leaking.",
    tasks: [
      {
        id: "d22-t1",
        label:
          "Map your Sales function: who owns it? What is the process? Where is it breaking?",
        description:
          "Document your entire sales process from lead generation to closed deal. Who is responsible for each stage? What tools do they use? Where do leads stall or fall out of the pipeline? Where is there no defined process at all?",
      },
      {
        id: "d22-t2",
        label: "Measure: rate your Sales function health on a scale of 1-10",
        description:
          "Be honest. A 10 means your sales process is predictable, scalable, and not dependent on any single person. A 1 means you have no process and you are the entire sales team. Record your score.",
      },
      {
        id: "d22-t3",
        label: "Reflect: what is the number-one fix needed in Sales?",
        description:
          "If you could only change one thing about your sales function, what would have the biggest impact? More leads? Better conversion? A defined follow-up process? A dedicated salesperson? Name the single most impactful fix.",
      },
    ],
    educationalContent:
      "Sales is one of the five core functions every business must have working to operate as a true enterprise rather than a self-employment gig. The most common Sales dysfunction in small businesses is that the CEO is the sales department. When the CEO sells, growth is capped at the CEO's personal capacity. The first step to scaling sales is documenting the process so it can be taught, measured, and eventually transferred. If your sales process lives only in your head, it is not a process — it is a habit. And habits do not scale. Map it, write it down, and identify the one constraint that, if removed, would unlock the most revenue growth.",
  },
  {
    day: 23,
    title: "Operations Function Audit",
    intention:
      "Operations is how you deliver on your promises. Today you will examine whether your delivery machine is built to scale or built to break.",
    tasks: [
      {
        id: "d23-t1",
        label:
          "Map your Operations and Delivery function: who runs it? What is the process? Where is it breaking?",
        description:
          "Document the journey from 'client says yes' to 'client receives value.' Every handoff, every step, every system. Who owns each phase? Where do things slow down, get lost, or require the CEO's intervention?",
      },
      {
        id: "d23-t2",
        label: "Measure: rate your Operations function health on a scale of 1-10",
        description:
          "A 10 means your operations run smoothly without you, quality is consistent, and the team can handle growth. A 1 means you personally manage every project and clients regularly fall through the cracks. Record your score.",
      },
      {
        id: "d23-t3",
        label: "Reflect: where are clients falling through the cracks?",
        description:
          "Think about the last three client complaints or missed deadlines. Where in your operations process did the breakdown occur? Is it a handoff problem, a capacity problem, a communication problem, or a systems problem?",
      },
    ],
    educationalContent:
      "Operations is where reputation is built or destroyed. You can have the best sales team in the world, but if you cannot deliver on your promises, every new client becomes a future detractor. The most dangerous phase in operations is the handoff — from sales to onboarding, from onboarding to delivery, from delivery to follow-up. Each handoff is a moment where information can get lost, expectations can get misaligned, and clients can feel forgotten. Map every handoff in your operations process. For each one, ask: is there a system that ensures nothing falls through? If the answer is 'we just remember' or 'I handle it personally,' that is your vulnerability.",
  },
  {
    day: 24,
    title: "Finance Function Audit",
    intention:
      "Money is the oxygen of your business. Today you will examine whether your financial systems give you the visibility and control you need.",
    tasks: [
      {
        id: "d24-t1",
        label:
          "Map your Finance function: who tracks money? How often? What is missing?",
        description:
          "Document how money flows through your business. Who handles invoicing, collections, payroll, expense management, and financial reporting? How frequently do you review financial statements? What financial data do you wish you had but do not?",
      },
      {
        id: "d24-t2",
        label: "Measure: rate your Finance function health on a scale of 1-10",
        description:
          "A 10 means you have real-time financial visibility, strong cash flow management, clean books, and forward-looking financial projections. A 1 means you check your bank balance and hope for the best. Record your score.",
      },
      {
        id: "d24-t3",
        label:
          "Reflect: do you know your cash position within $1,000 accuracy right now?",
        description:
          "Without looking at your accounts, what is your cash position? Now check the actual number. The gap between your guess and reality reveals how connected (or disconnected) you are from the financial pulse of your business.",
      },
    ],
    educationalContent:
      "CEOs who do not know their numbers are not leading — they are guessing. Financial visibility is not about being an accountant; it is about knowing three things at all times: how much cash you have, how much is coming in over the next 30-60-90 days, and how much is going out. Revenue is vanity, profit is sanity, and cash flow is reality. Many businesses with strong revenue fail because they run out of cash. Your finance function should give you a weekly cash flow forecast, a monthly P&L review, and a quarterly balance sheet check. If those three reports are not landing on your desk on a consistent schedule, your finance function has a gap that could threaten your entire business.",
  },
  {
    day: 25,
    title: "Leadership Function Audit",
    intention:
      "Your business will never outgrow the capacity of your leadership team. Today you will assess whether you are building leaders or just managing workers.",
    tasks: [
      {
        id: "d25-t1",
        label:
          "Map your Leadership function: how are you developing your team? Who is next in line?",
        description:
          "Document your current leadership development activities. Do you have regular one-on-ones? Are you investing in training? Is there a succession plan for key roles? Can anyone on your team step into your shoes for 30 days?",
      },
      {
        id: "d25-t2",
        label: "Measure: rate your Leadership function health on a scale of 1-10",
        description:
          "A 10 means you have a leadership pipeline, regular development conversations, and at least two people who could run the business in your absence. A 1 means you are the only leader and no one else can make decisions. Record your score.",
      },
      {
        id: "d25-t3",
        label: "Reflect: if you left for 30 days, who would lead?",
        description:
          "This is the ultimate leadership test. If you disappeared for a month, would the business survive? Grow? Struggle? Collapse? The answer reveals the true strength of your leadership function. Name the person who would take over — or acknowledge that no one could.",
      },
    ],
    educationalContent:
      "The leadership function is the one most CEOs neglect because it does not feel urgent — until it is. When your best team member quits, when you get sick, when a growth opportunity requires you to focus elsewhere, the absence of a leadership pipeline becomes a crisis overnight. Developing leaders is not about sending people to seminars. It is about three practices: regular one-on-ones where you coach rather than direct, progressively increasing decision-making authority (like the Day 13 exercise), and honest conversations about career growth and capability gaps. The CEO's ultimate job is to make themselves replaceable in day-to-day operations. That requires intentionally developing the people around you.",
  },
  {
    day: 26,
    title: "Delivery Function Audit",
    intention:
      "Client experience is your brand in action. Today you will walk the entire client journey and find the moments that make or break loyalty.",
    tasks: [
      {
        id: "d26-t1",
        label:
          "Map your Delivery function: from sale to fulfillment, what is the client experience?",
        description:
          "Walk through the entire client journey step by step. What happens after they say yes? How are they onboarded? How is the product or service delivered? How do you follow up? How do you measure satisfaction? Document every touchpoint.",
      },
      {
        id: "d26-t2",
        label: "Measure: rate your Delivery function health on a scale of 1-10",
        description:
          "A 10 means clients consistently rave about their experience, refer others without being asked, and renew or repurchase automatically. A 1 means delivery is inconsistent, clients complain, and you lose business to poor experience. Record your score.",
      },
      {
        id: "d26-t3",
        label: "Reflect: where do clients complain most?",
        description:
          "Think about the last five client complaints, negative reviews, or moments of friction. Is there a pattern? Do complaints cluster around a specific phase of delivery? That cluster is where your biggest improvement opportunity lives.",
      },
    ],
    educationalContent:
      "Delivery is distinct from operations in an important way: operations is your internal process, but delivery is the client's experience of that process. You can have efficient operations and still deliver a poor client experience if communication is lacking, expectations are mismanaged, or the personal touch is missing. The moments that matter most in delivery are the transitions: the handoff from sales to onboarding (where excitement needs to be maintained), the mid-delivery check-in (where problems can be caught early), and the post-delivery follow-up (where loyalty is built or lost). Map these moments, assign ownership, and install systems to ensure consistency.",
  },
  {
    day: 27,
    title: "The Five Functions Ranking",
    intention:
      "Now that you have audited all five core functions, it is time to face the truth about which one needs the most urgent attention.",
    tasks: [
      {
        id: "d27-t1",
        label:
          "Rank all 5 functions from weakest to strongest and create an action item for your weakest",
        description:
          "List your five function scores side by side: Sales, Operations, Finance, Leadership, Delivery. Rank them from lowest to highest. For the weakest function, write one specific action item you will complete in the next 7 days to begin strengthening it.",
      },
      {
        id: "d27-t2",
        label: "Measure: what is your weakest function score?",
        description:
          "Record the score and the function name. This is the bottleneck of your business. No matter how strong your other functions are, your business can only grow as fast as your weakest function allows. This is your constraint.",
      },
      {
        id: "d27-t3",
        label: "Reflect: why has this function been neglected?",
        description:
          "Be honest with yourself. Is it neglected because you do not enjoy it? Because you do not have expertise in it? Because you assumed it would take care of itself? Understanding why it was neglected is the key to ensuring it does not stay neglected.",
      },
    ],
    educationalContent:
      "The Theory of Constraints tells us that every system has exactly one bottleneck at any given time, and improving anything other than the bottleneck does not improve the system. Your weakest core function is your business's bottleneck. Pouring resources into your strongest function while your weakest function crumbles is like putting a bigger engine in a car with flat tires. The counterintuitive truth is that the biggest ROI in your business right now is in the area you have been avoiding most. CEOs tend to spend time on functions they enjoy and are good at, while neglecting the ones that make them uncomfortable. The discipline to work on your weakest function, not your favorite one, is what separates builders from hobbyists.",
  },
  {
    day: 28,
    title: "The CEO Command Center Meeting",
    intention:
      "Today you will hold your first formal CEO Command Center meeting — a weekly strategic review of all five functions. This is the meeting that runs your business.",
    tasks: [
      {
        id: "d28-t1",
        label:
          "Schedule a weekly CEO Command Center meeting with yourself — 1 hour reviewing all 5 functions",
        description:
          "Block one hour every week, same day and time, for your CEO Command Center review. The agenda: review your scorecard, check each of the five functions, identify the number-one priority for the coming week, and make one strategic decision. Put it on your calendar as a recurring, non-negotiable meeting.",
      },
      {
        id: "d28-t2",
        label: "Measure: did you hold it today?",
        description:
          "Execute the meeting today as a pilot run. Set a timer for 60 minutes. Walk through each function, review your KPIs, and document your decisions. Track whether you completed it and how long it actually took.",
      },
      {
        id: "d28-t3",
        label: "Reflect: what did you discover?",
        description:
          "After your first Command Center meeting, note the insights that emerged from looking at all five functions together. What connections did you see between functions? What priority became obvious when you stepped back and looked at the full picture?",
      },
    ],
    educationalContent:
      "The weekly CEO Command Center meeting is the capstone habit of this entire protocol. It is where everything comes together — your scorecard, your five functions, your strategic priorities. This meeting is not a team meeting; it is a meeting with yourself. It is the one hour per week where you stop working IN the business and work ON the business. The most successful CEOs treat this meeting as sacred. They do not cancel it for client calls. They do not skip it when things are busy. They do not let fires invade it. Because this is the meeting where you catch the fires before they start, spot the opportunities before they pass, and make the decisions that shape the next quarter, year, and decade of your business.",
  },
  {
    day: 29,
    title: "The CEO Weekly Rhythm",
    intention:
      "Today you will codify your ideal weekly operating rhythm — the schedule that ensures you lead like a CEO, not survive like an operator.",
    tasks: [
      {
        id: "d29-t1",
        label:
          "Write your CEO Weekly Rhythm — what you do Monday through Friday by time block",
        description:
          "Map out your ideal week with specific time blocks for: CEO Command Center meeting, strategic work blocks, team one-on-ones, daily standups, client-facing time, administrative necessities, and personal recovery. Every hour should have a purpose.",
      },
      {
        id: "d29-t2",
        label:
          "Measure: what percentage of your week is allocated to CEO-level work?",
        description:
          "Add up all the hours in your weekly rhythm dedicated to strategic, CEO-level activities (vision, high-value relationships, scorecard review, leadership development). Divide by total work hours. Your target is at least 40%.",
      },
      {
        id: "d29-t3",
        label: "Reflect: compare to Day 1 — how has your time allocation changed?",
        description:
          "Pull out your Day 1 time log. Compare the percentage of CEO-level work then to your new weekly rhythm now. Document the shift. This is the tangible evidence of your transformation from operator to executive over the past 29 days.",
      },
    ],
    educationalContent:
      "Your CEO Weekly Rhythm is not a rigid schedule — it is a strategic framework. It answers the question: if I run my week according to this rhythm, will my business get the leadership it needs? The best weekly rhythms have three elements: consistency (your team knows when they can reach you and when they cannot), flexibility (buffer time for the unexpected), and intentionality (every block has a purpose tied to a function or KPI). Compare your Day 1 time audit to your new rhythm and you will see the transformation in stark terms. The CEO who tracked their time on Day 1 is not the same leader who is designing their weekly rhythm on Day 29. That growth is the point of this entire protocol.",
  },
  {
    day: 30,
    title: "The 30-Day Transformation Assessment",
    intention:
      "Thirty days ago you started a journey from operator to CEO. Today you will measure how far you have come and set the course for what comes next.",
    tasks: [
      {
        id: "d30-t1",
        label: "30-day assessment: retake the Pillar 1 quiz",
        description:
          "Go back to the Pillar 1 CEO Command Center assessment and answer every question again with your current reality — not where you were 30 days ago. Be honest. Record your new score.",
      },
      {
        id: "d30-t2",
        label: "Measure: compare your new score to your original score",
        description:
          "Calculate the difference between your Day 1 score and your Day 30 score. Document which areas improved most, which areas still need work, and which areas surprised you. The gap between your two scores is the measurable impact of 30 days of intentional CEO development.",
      },
      {
        id: "d30-t3",
        label:
          "Reflect: what is the single biggest change you made this month?",
        description:
          "Looking back over 30 days, identify the one shift — in behavior, mindset, or systems — that had the greatest impact on how you lead. This is your keystone habit. Protect it, build on it, and never go back to the way things were.",
      },
    ],
    educationalContent:
      "Completing the CEO Command Center 30-day protocol is not the end — it is the foundation. You now have the tools, systems, and habits to lead your business like a true CEO: a time-awareness practice that keeps you focused on high-value work, a delegation system that empowers your team and frees your capacity, a scorecard that gives you weekly visibility into your business's vital signs, and a five-function framework that ensures nothing critical gets neglected. The businesses that thrive are not led by CEOs who work the hardest. They are led by CEOs who work on the right things. You have spent 30 days learning what those right things are. Now the real work begins: doing them consistently, week after week, quarter after quarter, until the empire you are building operates with the precision and power that your vision demands.",
  },
];
