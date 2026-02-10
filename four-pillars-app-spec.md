# Four Pillars Business Accountability App — Technical Specification
## For Claude Code / Antigravity Development

**Version:** 1.0
**Date:** February 9, 2026
**Brand:** The Unshakable Empire Operating System — Dr. Toby Potter
**Target Stack:** Next.js + React + Tailwind CSS + Supabase (or Firebase) + Stripe

---

## TABLE OF CONTENTS

1. Pillar Deep-Dive Extraction (from Toby's webinars)
2. Quiz Scoring Engine Architecture
3. Assessment Questions Per Pillar (30 each)
4. Scoring Rubric & Interpretation Logic
5. Daily Protocol Architecture Per Pillar
6. If-Then Branching Logic Map
7. Data Models
8. Technical Implementation Notes for Claude Code

---

## 1. PILLAR DEEP-DIVE EXTRACTION

### Source Material
Extracted from two live webinars (Jan 27, 2026 and Feb 5, 2026) plus team meeting (Feb 9, 2026) and project knowledge base.

---

### PILLAR 1: CEO COMMAND CENTER (Operating Rhythm)

**Toby's exact framing:** "We install a weekly rhythm that transforms you, the CEO, from a firefighter to an actual CEO."

**Core Problem It Solves:**
- CEO is reactive all day — putting out fires, not leading growth
- No cadence moving business toward profitability and predictability
- 97% of businesses they work with have this as the #1 broken pillar
- CEO makes every decision; nothing moves without their approval

**What Gets Installed:**
1. Weekly CEO rhythm/cadence
2. Five Core Functions mapping: Sales, Operations, Delivery, Finance, Leadership — CEO oversees but does NOT do these
3. Leak identification framework: Time leaks, Money leaks, Quality leaks
4. CEO cadence of metrics and priorities — daily scorecard
5. Decision filters — issues that should NOT hit the CEO's desk

**Key Concepts (Toby's Language):**
- "Your week becomes predictable and growth becomes intentional"
- "Right now, your growth is accidental"
- "These deals do not hit your desk. Look at Michael Dell, Jeff Bezos, Bill Gates — they don't answer the questions you're dealing with"
- The 5 core functions: Sales, Operations, Delivery, Finance, Leadership
- Time audit — "what is important, what isn't"
- "I am an alpha male, a control freak — and when I realized what was holding me back, it was just that"

**Result Statement:** "Your week becomes predictable and growth becomes intentional."

**Self-Diagnostic Indicators:**
- Working 60+ hours/week
- Business does nothing without you
- No time for strategy — too busy with fires
- Every decision requires your approval
- If you took 30 days off, business declines or collapses

---

### PILLAR 2: TEAM ARCHITECTURE (People Who Execute Without You)

**Toby's exact framing:** "We're going to put people in that execute without you."

**Core Problem It Solves:**
- CEO is the bottleneck — team can't function independently
- Quality drops when CEO is not around
- Business can't scale because it depends entirely on one person
- Revolving door of employees — hire, train, lose, repeat
- Team members won't make decisions without CEO approval

**What Gets Installed:**
1. Role clarity — every person knows their outcomes, authority, and responsibilities
2. Performance metrics per role
3. Accountability systems that operate without micromanagement
4. "Role characters" — defined outcomes with authority
5. Daily scorecards per team member
6. The "Unshakable Culture"

**Key Concepts (Toby's Language):**
- "The Unshakable Culture — a team that not only drinks the Kool-Aid, but they make it. They're in the kitchen every day."
- "When somebody's having a bad day, somebody's lifting up. When something goes wrong, they don't place blame — they say, how can I help?"
- "They're givers, not takers"
- "People stay because they believe in the vision. If you have a revolving door, it's because they've lost the passion of the vision and they lose hope"
- "We removed the word sales. We solve problems. We're customer service problem solving consultants."
- "Burn the boats mentality"
- Biggest expense = team turnover (recruit, interview, hire, onboard, train → they walk out)

**Result Statement:** "Your business runs whether you're there or not. That creates scalability."

**Self-Diagnostic Indicators:**
- Team cannot close high-ticket items without CEO present
- Quality drops when CEO steps away
- Employees leave within 6-12 months regularly
- No clear role definitions or performance metrics
- CEO micromanages every team member

---

### PILLAR 3: REVENUE PIPELINE (Predictable Scalable Income)

**Toby's exact framing:** "Install a system that identifies your most profitable clients, builds an offer ladder that captures the full value of that client, and creates tracking that shows exactly what's working."

**Core Problem It Solves:**
- Don't know who the perfect client/avatar is ("One that pays" is the #1 answer)
- No offer ladder — one-time transactions instead of lifetime clients
- Sales team doesn't have a repeatable process
- No tracking of what's actually driving revenue
- Revenue is unpredictable — no systemic growth model

**What Gets Installed:**
1. Perfect avatar definition (detailed, not "anyone who pays")
2. Offer ladder — entry to lifetime client value capture
3. Scripted sales process: Discover → Diagnose → Close
4. Elite tracking and conversion metrics
5. "Solutions, not sales" framework
6. Client lifetime value modeling

**Key Concepts (Toby's Language):**
- "Stop being sales and start being solutions. Nobody wants to be sold, but everybody wants a problem solved."
- Avatar example: Plumber said "anybody with plumbing problems" — "Oh, you gotta be kidding me"
- "That client that comes back time and time and time again — that's a client for life"
- Offer ladder shows: where they came in, their value, what they need, how to keep them ongoing
- "We don't sell anything. I removed the word sales. If I heard anybody say 'I'm here to sell this,' they got in trouble."

**Result Statement:** "Revenue becomes predictable and growth becomes systemic."

**Self-Diagnostic Indicators:**
- Can't describe ideal client beyond "someone who pays"
- No documented sales process or scripts
- Revenue varies wildly month to month
- Most clients are one-time transactions
- Don't know which clients generate the most profit

---

### PILLAR 4: CONVERSION INTELLIGENCE (Marketing & Tracking)

**Toby's exact framing:** "We install tracking at every stage of your buyer's journey. Identify the drop-offs and build repeatable sequences that converts every lead to revenue."

**Core Problem It Solves:**
- Don't know which marketing activities drive profit
- Marketing feels like gambling — throwing darts in the dark
- Can't optimize what you can't measure
- No visibility into buyer journey stages
- Wasting money on wrong channels (Toby: "Google SEO is dead — Google is a resume")

**What Gets Installed:**
1. Buyer journey tracking at every stage
2. Drop-off identification system — where and why leads leave
3. Repeatable closing sequences (McDonald's analogy — same result everywhere)
4. Messaging and positioning optimization
5. ROI tracking per marketing channel
6. Automated lead-to-revenue conversion sequences

**Key Concepts (Toby's Language):**
- McDonald's analogy: "I got the same exact quarter pounder with cheese in London that I got in the US. Why? Because it was repeatable."
- "Every dollar in, we know you're gonna get $35 back"
- "If you're spending time, money and energy on Google SEO, trust me, that is wasted money. Google is a resume."
- Track every stage: Ad → Landing Page → Website → Booking → Call → Close — "Where did they drop off and why?"
- "Build repeatable closing sequences so that nobody can screw up"

**Result Statement:** "Stop guessing. Every marketing dollar is accounted for."

**Self-Diagnostic Indicators:**
- Don't know which marketing channel brings best ROI
- No tracking on lead sources or conversion rates
- Marketing budget spent without measurable results
- No documented buyer journey or funnel stages
- Can't tell which activities drive actual revenue

---

### PILLAR 5: CAPITAL READINESS (Bonus — Unlocked After Pillars 1-4)

**NOT part of the app quiz/protocol system.** This is the upsell to Legacy/Empire program.

**Toby's framing:** "Once the four pillars are implemented and running, we now make you eligible for pillar five."

**What it includes:** Financial infrastructure, forecasting, reporting, pitch-ready documentation, Kevin Harrington / Wolf Den investor access.

**Key stat:** "72% of Shark Tank deals that are agreed to on TV fall out after due diligence because the business isn't structured."

---

## 2. QUIZ SCORING ENGINE ARCHITECTURE

### Entry Flow

```
[Landing Page / Ad]
        ↓
[Pillar Selection Screen]
  "Which area needs the most help?"
  □ CEO Cadence (Leadership & Time)
  □ Team Architecture (People & Culture)
  □ Revenue Pipeline (Sales & Clients)
  □ Conversion Intelligence (Marketing & Tracking)
  □ All Four (→ triggers upsell path)
        ↓
[Assessment Quiz — 30 questions for selected pillar]
        ↓
[Score Report — 1 to 100 scale]
        ↓
[Pricing / Enrollment — $150/month per pillar]
        ↓
[Daily Protocol Dashboard]
```

### Scoring Method

Each pillar has 30 multiple-choice questions. Each answer is scored 1-5 (1 = severe gap, 5 = strong).

- **Maximum possible score per pillar:** 150 (30 × 5)
- **Display as percentage:** Score / 150 × 100 = X%
- **Toby's framing:** "Less than 20% of achievable opportunity"

### Score Interpretation Bands

| Score Range | Label | Color | Recommendation |
|---|---|---|---|
| 0-20% (0-30) | Critical | Red | Immediate intervention needed — this pillar is broken |
| 21-40% (31-60) | Weak | Orange | Major gaps — daily protocols essential |
| 41-60% (61-90) | Developing | Yellow | Foundation exists but not executing consistently |
| 61-80% (91-120) | Strong | Light Green | Systems in place, needs optimization |
| 81-100% (121-150) | Elite | Green | Operating at high level — maintain and refine |

### Multi-Pillar Logic

If user selects multiple pillars:
- Run assessment for EACH selected pillar (30 questions each)
- Generate composite dashboard showing all pillar scores
- Prioritize worst-scoring pillar for daily protocols first
- Toby's rule: "We always start with Pillar 1 — CEO is the problem 97% of the time"
- If all 4 selected → trigger upsell conversation to Empire program ($5K-$12.5K)

### Per-Pillar Pricing (from meeting transcript)

- 1 pillar: $150/month ($5/day)
- 2 pillars: $250/month ($8.33/day)
- 3 pillars: $350/month ($11.67/day)
- All 4: Requires call → Legacy/Empire upsell path

---

## 3. ASSESSMENT QUESTIONS PER PILLAR

### Question Format
All questions are multiple choice with 5 options scored 1-5.
Scale: 1 = Strongly Disagree/Never, 2 = Disagree/Rarely, 3 = Neutral/Sometimes, 4 = Agree/Often, 5 = Strongly Agree/Always

---

### PILLAR 1: CEO COMMAND CENTER — 30 Questions

**Category A: Time & Focus (Questions 1-8)**

1. I have a structured weekly schedule that I follow consistently.
2. I spend more time on strategic growth activities than putting out daily fires.
3. I know exactly which tasks only I should handle vs. what should be delegated.
4. I have blocked time each week specifically for business strategy and planning.
5. I can identify my top 3 priorities for the week before Monday morning.
6. I rarely get pulled into tasks that someone else on my team could handle.
7. I work 45 hours or fewer per week on average.
8. I have a clear morning routine that sets up my day for CEO-level work.

**Category B: Decision Making & Delegation (Questions 9-16)**

9. My team makes operational decisions without needing my approval.
10. I have clear decision filters — I know which decisions require my input and which don't.
11. I trust my team to handle customer issues without my involvement.
12. I have delegated at least 3 major responsibilities in the last 90 days.
13. When I'm unavailable for a day, operations continue smoothly.
14. I do not check email or messages more than 3 times per day.
15. I have a documented delegation framework my team follows.
16. I can take a full week off without the business suffering.

**Category C: Metrics & Visibility (Questions 17-22)**

17. I review a business scorecard/dashboard at least weekly.
18. I know my top 3 revenue-generating activities this month.
19. I can tell you my gross profit margin within 5% accuracy right now.
20. I track my team's performance with measurable KPIs weekly.
21. I know exactly how many new leads came in this week and their source.
22. I have a financial forecast for the next 90 days.

**Category D: The Five Core Functions (Questions 23-30)**

23. I have a documented process for how Sales operates in my business.
24. I have a documented process for how Operations/Delivery runs.
25. I have a documented process for Finance/Accounting oversight.
26. I have a clear Leadership development plan for my team.
27. I review all five core functions (Sales, Ops, Delivery, Finance, Leadership) at least monthly.
28. I can identify which of the five functions is currently my biggest bottleneck.
29. Each core function has a designated owner who is NOT me.
30. I have weekly meetings structured around these five core functions.

---

### PILLAR 2: TEAM ARCHITECTURE — 30 Questions

**Category A: Role Clarity & Structure (Questions 1-8)**

1. Every team member has a written job description with clear outcomes.
2. Each role has defined authority — team members know what they CAN decide without asking.
3. I have an org chart that accurately reflects how the business operates.
4. Every team member knows their top 3 measurable KPIs.
5. New hires receive a structured onboarding process (not just shadowing).
6. I have the right number of people for my current revenue level.
7. Each team member has a clear career growth path within the company.
8. Role responsibilities do not overlap or create confusion between team members.

**Category B: Performance & Accountability (Questions 9-16)**

9. I conduct formal performance reviews at least quarterly.
10. Underperformers are addressed within 2 weeks of identifying the issue.
11. My team has daily or weekly scorecards tracking their individual metrics.
12. I have a documented performance improvement process.
13. Top performers are recognized and rewarded consistently.
14. I have fired or replaced at least one underperformer in the last 12 months.
15. My team meets weekly to review progress and address blockers.
16. Each team member can explain how their work directly impacts company revenue.

**Category C: Culture & Retention (Questions 17-24)**

17. My team members genuinely support each other when problems arise.
18. Employee turnover in the last 12 months is below 20%.
19. My team members take ownership of problems rather than passing blame.
20. I would describe my company culture as strong and unified.
21. Team members proactively suggest improvements without being asked.
22. My team stays because they believe in the company vision, not just the paycheck.
23. I have a process for gathering team feedback regularly.
24. New hires consistently say the culture matches what was described in interviews.

**Category D: Independence & Scalability (Questions 25-30)**

25. My team can handle a full day without me being available.
26. At least one team member could run the business for a week in my absence.
27. My team closes deals and serves clients without my direct involvement.
28. I have documented SOPs for at least 80% of recurring tasks.
29. When I hire, I have a proven process for finding the right cultural fit.
30. My business could add 50% more revenue without adding proportional staff.

---

### PILLAR 3: REVENUE PIPELINE — 30 Questions

**Category A: Avatar & Client Clarity (Questions 1-8)**

1. I can describe my ideal client in specific detail (demographics, psychographics, pain points).
2. I know which client type generates the highest lifetime value.
3. I have documented my ideal client avatar and shared it with my team.
4. I actively say "no" to clients who don't fit my ideal profile.
5. I know the top 3 problems my ideal client is trying to solve.
6. My marketing speaks directly to my ideal client's specific situation.
7. I can identify my top 10 most profitable clients and explain why they're profitable.
8. I track which client segments generate the most referrals.

**Category B: Sales Process & Scripts (Questions 9-16)**

9. I have a documented, step-by-step sales process my team follows.
10. My team uses discovery questions to diagnose client needs before presenting solutions.
11. My sales conversations focus on solving problems rather than pitching features.
12. I have objection-handling scripts or frameworks my team is trained on.
13. My team can close deals without my involvement.
14. I measure close rate and know it within 5% accuracy.
15. Every sales call or meeting follows a consistent structure.
16. I have a follow-up sequence for leads who don't close immediately.

**Category C: Offer Ladder & Client Retention (Questions 17-24)**

17. I have multiple products/services at different price points (offer ladder).
18. I have a system to upsell or cross-sell existing clients.
19. My average client stays with me for more than 12 months.
20. I calculate and track client lifetime value.
21. I have a client onboarding process that sets expectations and builds loyalty.
22. I proactively reach out to past clients for repeat business or referrals.
23. My offer ladder captures increasing value from clients over time.
24. I have a documented referral program or system.

**Category D: Revenue Tracking & Predictability (Questions 25-30)**

25. I can predict next month's revenue within 15% accuracy.
26. I track revenue by source (channel, campaign, referral) weekly.
27. I know my customer acquisition cost (CAC) per channel.
28. I have a sales pipeline with defined stages and conversion rates per stage.
29. I review revenue metrics weekly and adjust strategy based on data.
30. Revenue has grown consistently (quarter over quarter) in the last 12 months.

---

### PILLAR 4: CONVERSION INTELLIGENCE — 30 Questions

**Category A: Buyer Journey & Tracking (Questions 1-8)**

1. I can map every stage of my buyer's journey from first touch to close.
2. I track where every lead comes from (source attribution).
3. I know exactly where leads drop off in my funnel and why.
4. I have tracking pixels/analytics installed on my website and landing pages.
5. I review funnel metrics (click rates, conversion rates, drop-offs) at least weekly.
6. I can tell you which marketing channel has the best ROI right now.
7. I track time-to-close (how long from first contact to purchase).
8. I have separate tracking for each marketing campaign or channel.

**Category B: Marketing ROI & Spend (Questions 9-16)**

9. I know my return on ad spend (ROAS) for every paid channel.
10. Every marketing dollar I spend has a measurable expected return.
11. I have stopped spending on at least one underperforming channel in the last 6 months.
12. My marketing budget is allocated based on data, not gut feeling.
13. I can calculate cost-per-lead for each marketing channel.
14. I have a monthly marketing budget that's tied to revenue goals.
15. I test new marketing channels or campaigns at least quarterly.
16. I reinvest marketing profits back into the highest-performing channels.

**Category C: Automated Sequences & Systems (Questions 17-24)**

17. I have automated email/SMS sequences that nurture leads without manual effort.
18. Leads receive follow-up within 5 minutes of inquiry (automated or manual).
19. I have a documented lead nurture sequence of at least 5 touchpoints.
20. My CRM tracks every interaction with every lead automatically.
21. I have re-engagement campaigns for leads who went cold.
22. My booking/sales process is partially or fully automated.
23. I use retargeting ads to re-engage website visitors.
24. I have automated review/testimonial collection from satisfied clients.

**Category D: Repeatable & Scalable Marketing (Questions 25-30)**

25. My best-performing marketing campaigns are documented and repeatable.
26. I could hand my marketing playbook to a new hire and they could execute it.
27. My messaging is consistent across all channels (website, social, email, ads).
28. I test variations of ads, emails, or landing pages and optimize based on results.
29. I have a content calendar or marketing plan for the next 90 days.
30. My marketing generates leads predictably — I know roughly how many to expect each week.

---

## 4. SCORING RUBRIC & INTERPRETATION LOGIC

### Per-Category Scoring

Each pillar has 4 categories (A, B, C, D). Categories score independently to identify SPECIFIC weaknesses within a pillar.

**Category Score = Sum of answers in category / Max possible for category × 100**

Example: Category A (8 questions) — if user scores 24 out of 40 = 60%

### Score Report Output (per pillar)

```json
{
  "pillar": "CEO Command Center",
  "overall_score": 45,
  "overall_percentage": 30,
  "band": "Weak",
  "categories": {
    "time_focus": { "score": 18, "max": 40, "percentage": 45, "band": "Developing" },
    "decision_delegation": { "score": 12, "max": 40, "percentage": 30, "band": "Weak" },
    "metrics_visibility": { "score": 10, "max": 30, "percentage": 33, "band": "Weak" },
    "five_core_functions": { "score": 5, "max": 40, "percentage": 12, "band": "Critical" }
  },
  "priority_category": "five_core_functions",
  "daily_protocol_focus": "Map and assign ownership of 5 core functions",
  "toby_insight": "97% of the businesses we work with — the CEO is the problem, the bottleneck."
}
```

### Interpretation Copy (displayed to user)

**Critical (0-20%):**
"Your [pillar] is severely broken. Without immediate intervention, your business cannot scale. This is the #1 thing holding you back — and the good news is, it's fixable. We start here."

**Weak (21-40%):**
"You have major gaps in [pillar]. You know something's wrong but haven't been able to fix it. The daily protocols in this program will give you the exact actions to close these gaps in 30-90 days."

**Developing (41-60%):**
"You've built some foundation in [pillar], but you're not executing consistently. This is where most business owners get stuck — they know what to do but don't do it daily. The protocol system changes that."

**Strong (61-80%):**
"Your [pillar] has solid systems. We're going to optimize what's working and fill the remaining gaps. You're closer than you think to running on autopilot."

**Elite (81-100%):**
"You're operating at a high level in [pillar]. Maintain your systems and focus your energy on the pillars that scored lower. This one is working."

---

## 5. DAILY PROTOCOL ARCHITECTURE PER PILLAR

### How Daily Protocols Work

Each pillar generates a 30-day protocol sequence based on the user's weakest category within that pillar. Protocols are daily tasks (checkbox + optional input) that build progressively.

**Structure:** Each day has 3-5 actionable tasks. Tasks are categorized as:
- **Action** (do something specific)
- **Measure** (record a number or metric)
- **Reflect** (journal/note on a prompt)

---

### PILLAR 1: CEO COMMAND CENTER — Daily Protocols

**Week 1: Time Audit & Awareness**

| Day | Tasks |
|---|---|
| 1 | ACTION: Write down every task you did today and how long it took. MEASURE: Total hours worked. REFLECT: Which tasks could someone else have done? |
| 2 | ACTION: Categorize yesterday's tasks as $10/hr, $100/hr, or $1000/hr work. MEASURE: % of time on $1000/hr tasks. REFLECT: What's one $10/hr task you'll delegate this week? |
| 3 | ACTION: Create a "CEO-Only" task list — things ONLY you can do. MEASURE: How many items are on it? (Target: under 5). REFLECT: What are you holding onto that isn't on this list? |
| 4 | ACTION: Block 2 hours of "strategic time" on tomorrow's calendar — no meetings, no fires. MEASURE: Did you protect that block yesterday? (Y/N). REFLECT: What would you work on if you had 2 uninterrupted hours? |
| 5 | ACTION: Identify your top 3 fire-fighting triggers this week. MEASURE: How many times were you pulled into a fire today? REFLECT: Which fire could have been prevented with a system? |
| 6 | ACTION: Draft your ideal weekly schedule — assign CEO blocks, team blocks, and off blocks. MEASURE: Hours allocated to strategy vs. operations. REFLECT: What has to change for this schedule to become real? |
| 7 | ACTION: Review your week. MEASURE: How many hours did you work? How many were CEO-level? REFLECT: What's one thing you'll do differently next week? |

**Week 2: Decision Filters & Delegation**

| Day | Tasks |
|---|---|
| 8 | ACTION: List every decision you made today. MEASURE: How many required YOU specifically? REFLECT: Which decisions could your team make with clear guidelines? |
| 9 | ACTION: Write 3 decision rules your team can follow without asking you (e.g., "Any refund under $500 — approve it"). MEASURE: Number of decisions that hit your desk today. REFLECT: What's the worst that happens if your team makes a wrong call? |
| 10 | ACTION: Delegate one recurring task to a team member today with written instructions. MEASURE: Time saved by this delegation (estimate weekly). REFLECT: Did the result meet your standard? If not, what instruction was missing? |
| 11 | ACTION: Create an "If X, Then Y" decision guide for your team's 3 most common questions to you. MEASURE: Questions from team today. REFLECT: Which question keeps coming back that shouldn't? |
| 12 | ACTION: Do NOT answer any non-urgent team question for 4 hours today. MEASURE: How many resolved themselves? REFLECT: What did you do with that reclaimed time? |
| 13 | ACTION: Assign one team member as "decision maker of the day" for operational issues. MEASURE: Issues handled without you. REFLECT: How did it feel to step back? |
| 14 | ACTION: Weekly review — how many decisions did you make this week vs. last week? MEASURE: Decrease in decisions made by you. REFLECT: What's working in your delegation system? |

**Week 3: Scorecard & Metrics Installation**

| Day | Tasks |
|---|---|
| 15 | ACTION: Define your top 5 business KPIs (revenue, leads, close rate, customer satisfaction, profit margin). MEASURE: Record today's number for each. REFLECT: Which KPI surprised you? |
| 16 | ACTION: Create a simple weekly scorecard (spreadsheet or paper) with your 5 KPIs. MEASURE: Fill in today's numbers. REFLECT: Which number do you want to move most? |
| 17 | ACTION: Assign one KPI to each team member to own and report on weekly. MEASURE: Did each person report their number today? REFLECT: Who needs more clarity on their KPI? |
| 18 | ACTION: Set a 90-day target for each KPI. MEASURE: Gap between current and target. REFLECT: Which KPI will have the biggest impact on revenue if improved? |
| 19 | ACTION: Review your scorecard. Identify the #1 underperforming metric. MEASURE: What specifically caused underperformance? REFLECT: Is this a people problem, process problem, or visibility problem? |
| 20 | ACTION: Create a 15-minute daily standup agenda for your team based on scorecard metrics. MEASURE: Did you hold the standup today? REFLECT: What came up that you wouldn't have caught otherwise? |
| 21 | ACTION: Weekly scorecard review — compare Week 3 to Week 1 baseline. MEASURE: Which KPIs improved? Which declined? REFLECT: What's the single biggest insight from 3 weeks of tracking? |

**Week 4: Five Core Functions Mapping**

| Day | Tasks |
|---|---|
| 22 | ACTION: Map your Sales function — who owns it? What's the process? Where's it breaking? MEASURE: Rate Sales health 1-10. REFLECT: What's the #1 fix needed? |
| 23 | ACTION: Map your Operations/Delivery function — same exercise. MEASURE: Rate Operations health 1-10. REFLECT: Where are clients falling through cracks? |
| 24 | ACTION: Map your Finance function — who tracks money? How often? What's missing? MEASURE: Rate Finance health 1-10. REFLECT: Do you know your cash position within $1K accuracy? |
| 25 | ACTION: Map your Leadership function — how are you developing your team? Who's next in line? MEASURE: Rate Leadership health 1-10. REFLECT: If you left for 30 days, who would lead? |
| 26 | ACTION: Map your Delivery function — from sale to fulfillment, what's the client experience? MEASURE: Rate Delivery health 1-10. REFLECT: Where do clients complain most? |
| 27 | ACTION: Rank all 5 functions from weakest to strongest. Create an action item for your weakest. MEASURE: Weakest function score. REFLECT: Why has this been neglected? |
| 28 | ACTION: Schedule a weekly "CEO Command Center" meeting with yourself — 1 hour reviewing all 5 functions. MEASURE: Did you hold it? REFLECT: What did you discover? |
| 29 | ACTION: Write your CEO Weekly Rhythm — what you do Mon-Fri by time block. MEASURE: % of week allocated to CEO-level work. REFLECT: Compare to Day 1 — how has your time changed? |
| 30 | ACTION: 30-day assessment — retake the Pillar 1 quiz. MEASURE: New score vs. original. REFLECT: What's the single biggest change you made this month? |

---

### PILLAR 2: TEAM ARCHITECTURE — Daily Protocols

**Week 1: Role Audit**
Days 1-7: Audit each team member's actual daily activities vs. their job description. Document gaps. Create a "right seat, right person" matrix.

**Week 2: Performance Systems**
Days 8-14: Install individual KPIs per role. Create daily scorecards. Set up weekly 1-on-1 review meetings. Document the performance improvement process.

**Week 3: Culture Building**
Days 15-21: Define company values with team input. Create recognition systems. Implement team feedback loops. Start team-led problem solving sessions.

**Week 4: Independence Testing**
Days 22-30: Progressively step back. Day 22: 2-hour absence. Day 25: half-day absence. Day 28: full-day absence. Measure what breaks and what holds. Document SOPs for any failures.

---

### PILLAR 3: REVENUE PIPELINE — Daily Protocols

**Week 1: Avatar Deep-Dive**
Days 1-7: Profile top 10 clients. Identify patterns. Document the detailed ideal avatar. Share with team. Score current client base against avatar fit.

**Week 2: Sales Process Documentation**
Days 8-14: Map current sales flow. Script discovery questions. Script objection handling. Role-play with team. Install "solutions not sales" language.

**Week 3: Offer Ladder Construction**
Days 15-21: Map all products/services by price. Identify gaps. Create upsell paths. Build client journey from entry to lifetime value. Document referral system.

**Week 4: Revenue Tracking Installation**
Days 22-30: Set up pipeline tracking. Define stages. Calculate conversion rates per stage. Forecast next 90 days. Create weekly revenue review cadence.

---

### PILLAR 4: CONVERSION INTELLIGENCE — Daily Protocols

**Week 1: Funnel Mapping**
Days 1-7: Map every touchpoint from prospect awareness to purchase. Install tracking at each stage. Identify current drop-off points. Benchmark current conversion rates.

**Week 2: Channel Audit**
Days 8-14: List every marketing channel and spend. Calculate ROI per channel. Kill underperformers. Double down on winners. Set up A/B testing.

**Week 3: Automation Build**
Days 15-21: Create lead nurture email sequence (5+ touchpoints). Set up automated follow-up for new leads (under 5 minutes). Build re-engagement campaign for cold leads.

**Week 4: Repeatable System**
Days 22-30: Document marketing playbook someone else could run. Create content calendar. Build reporting dashboard. Set weekly marketing review meeting. Forecast next 90 days of marketing-driven revenue.

---

## 6. IF-THEN BRANCHING LOGIC MAP

### Entry Branching

```
IF user selects 1 pillar:
  → 30 questions for that pillar
  → Score report
  → Pricing: $150/month
  → Daily protocol for 30 days

IF user selects 2 pillars:
  → 60 questions (30 per pillar)
  → Dual score report with comparison
  → Pricing: $250/month
  → Daily protocol: Start with lowest-scoring pillar for first 30 days
  → Switch to second pillar days 31-60

IF user selects 3 pillars:
  → 90 questions
  → Triple score report
  → Pricing: $350/month
  → Protocol sequence: worst → middle → best scoring

IF user selects All 4:
  → Show message: "Business owners who need all four pillars benefit most from our
     hands-on Empire program. Let's talk about the best path for you."
  → CTA: Book a Call (routes to Legacy/Empire sales team)
  → Still offer self-serve at $400/month as alternative
```

### Protocol Assignment Branching

```
FOR each pillar assessment:
  CALCULATE category scores (A, B, C, D)
  FIND lowest scoring category
  ASSIGN daily protocol focus based on weakest category

  IF category_A (foundational) is lowest:
    → Protocol starts with basics (audit, awareness, baseline)
  IF category_B (process/systems) is lowest:
    → Protocol starts with documentation and installation
  IF category_C (culture/retention OR tracking) is lowest:
    → Protocol starts with people/measurement systems
  IF category_D (advanced/scalability) is lowest:
    → Protocol starts with optimization and scaling exercises
```

### Completion & Upsell Logic

```
IF user completes 30-day protocol AND retakes quiz:
  IF score improved 20%+:
    → Celebrate. Suggest next pillar or deeper program.
  IF score improved <20%:
    → "The system works when you work it. Let's identify what's blocking you."
    → Offer: Book a 1-on-1 call with Toby's team (routes to Empire sales)
  IF score decreased:
    → "Something changed. Let's diagnose what happened."
    → Direct CTA to book a call

IF user scores 80%+ on all purchased pillars:
  → Unlock Pillar 5 teaser content (Capital Readiness)
  → CTA: "You're ready for the next level. Let's talk about getting capital-ready."
  → Routes to Empire/Legacy program sales
```

---

## 7. DATA MODELS

### User

```typescript
interface User {
  id: string;
  email: string;
  name: string;
  business_name: string;
  business_type: string;
  annual_revenue: string; // range selection
  team_size: number;
  hours_per_week: number;
  created_at: Date;
  subscription_tier: 'single' | 'double' | 'triple' | 'all';
  active_pillars: number[]; // [1], [1,3], [1,2,3,4]
  stripe_customer_id: string;
}
```

### Assessment

```typescript
interface Assessment {
  id: string;
  user_id: string;
  pillar_id: number; // 1-4
  answers: { question_id: number; answer: number }[]; // 30 answers, 1-5 each
  overall_score: number;
  overall_percentage: number;
  category_scores: {
    a: { score: number; max: number; percentage: number };
    b: { score: number; max: number; percentage: number };
    c: { score: number; max: number; percentage: number };
    d: { score: number; max: number; percentage: number };
  };
  band: 'critical' | 'weak' | 'developing' | 'strong' | 'elite';
  weakest_category: 'a' | 'b' | 'c' | 'd';
  completed_at: Date;
  is_retake: boolean;
  previous_assessment_id?: string;
}
```

### DailyProtocol

```typescript
interface DailyProtocol {
  id: string;
  pillar_id: number;
  day_number: number; // 1-30
  week_number: number; // 1-4
  category_focus: 'a' | 'b' | 'c' | 'd';
  tasks: {
    id: string;
    type: 'action' | 'measure' | 'reflect';
    prompt: string;
    input_type: 'checkbox' | 'number' | 'text' | 'scale';
  }[];
}
```

### DailyCheckIn

```typescript
interface DailyCheckIn {
  id: string;
  user_id: string;
  protocol_id: string;
  pillar_id: number;
  day_number: number;
  completed_at: Date;
  responses: {
    task_id: string;
    completed: boolean;
    value?: string | number;
  }[];
  completion_percentage: number; // % of tasks completed that day
}
```

---

## 8. TECHNICAL IMPLEMENTATION NOTES FOR CLAUDE CODE

### Priority Build Order

1. **Assessment Quiz Engine** — This is the lead magnet and entry point. Build first.
2. **Score Report** — Visual gauge + category breakdown. Second priority.
3. **Stripe Checkout** — $150/month per pillar recurring. Third.
4. **Daily Protocol Dashboard** — Check-in UI with progress tracking. Fourth.
5. **Progress Analytics** — Weekly/monthly trend charts. Fifth.

### Key Technical Decisions

- **PWA (Progressive Web App)** — works on phone AND desktop, no app store needed
- **Supabase** — PostgreSQL + Auth + Real-time subscriptions (free tier generous)
- **Stripe** — recurring billing, per-pillar pricing, proration handling
- **Vercel** — deploy Next.js with zero config

### Claude Code Prompt Suggestions

**To scaffold the project:**
```
Create a Next.js 14 PWA with Tailwind CSS, Supabase for auth and database,
and Stripe for payments. The app is a business assessment and daily
accountability platform with 4 "pillars." Users take a 30-question quiz
per pillar, get scored on a 1-100 scale with 4 sub-categories, then enroll
in a 30-day daily protocol with checkbox tasks. Include user auth, a
dashboard, and Stripe subscription at $150/month per pillar.
```

**To build the quiz engine:**
```
Build a multi-step quiz component in React. It accepts an array of 30
questions with 5-point Likert scale answers. Questions are grouped into
4 categories (A: 8 questions, B: 8 questions, C: 6 questions, D: 8
questions). After completion, calculate: overall score (sum/150 × 100),
per-category scores, identify weakest category, and assign a band
(critical/weak/developing/strong/elite). Display results as a visual
gauge chart with category breakdown bars.
```

**To build the daily protocol:**
```
Build a daily check-in dashboard. Each day has 3-5 tasks of type
action (checkbox), measure (number input), or reflect (text input).
Show a calendar view of completed days. Track completion percentage.
After day 30, prompt user to retake the assessment quiz and compare
scores. Store all check-in data in Supabase.
```

---

## APPENDIX: TOBY'S KEY PHRASES FOR UI COPY

Use these throughout the app for brand consistency:

- "You don't have a knowledge problem. You have an execution problem."
- "Motivation and information without education leads to frustration." (Ziglar quote Toby uses)
- "If it's going to be, it's up to me."
- "Stop being sales. Start being solutions."
- "Whatever the mind can conceive, the body will achieve."
- "Faith and fear both demand you believe in something you can't see."
- "Staying stuck is the most expensive decision you'll ever make."
- "We don't coach. We partner with you to execute."
- "Systems create time."
- "Install the infrastructure. Scale your business."
- "The gap between $500K and $5M isn't more effort — it's infrastructure."
- "The Unshakable Culture — a team that doesn't just drink the Kool-Aid, they make it."
