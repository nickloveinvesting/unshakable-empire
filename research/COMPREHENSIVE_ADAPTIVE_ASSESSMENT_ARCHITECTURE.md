# Comprehensive Adaptive Assessment Architecture
## Unshakable Empire Operating System — Complete Redesign Specification

**Version:** 2.0
**Date:** February 10, 2026
**Status:** Architecture & Research Phase
**Target:** Replace current 120-question linear system with intelligent adaptive assessment

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Core Design Philosophy](#core-design-philosophy)
3. [Assessment Strategy: 4-Tier Diagnostic System](#assessment-strategy-4-tier-diagnostic-system)
4. [Complete Question Architecture](#complete-question-architecture)
5. [Branching Logic & Decision Trees](#branching-logic--decision-trees)
6. [Scoring Algorithm](#scoring-algorithm)
7. [Technical Architecture](#technical-architecture)
8. [Implementation Roadmap](#implementation-roadmap)
9. [Migration Strategy](#migration-strategy)
10. [Quality Assurance & Validation](#quality-assurance--validation)

---

## Executive Summary

### The Problem
Current system: 120 questions, 25 minutes, single-pillar assessment, high abandonment risk.

### The Solution
**Adaptive 4-Pillar Assessment System**
- **40-55 questions total** (vs 120) — 8-12 minutes average
- **All 4 pillars assessed** in one session (vs pick-one-pillar)
- **Smart branching** goes DEEP on problem areas, skips what's working
- **Business stage detection** customizes questions to revenue/team size
- **Comprehensive results** show all 4 pillar scores + weakest recommendation

### The Guarantee
**No Diagnostic Accuracy Loss**
- Problem areas get 2-3x MORE questions than current system
- Strong areas get minimal questions (no waste)
- Business stage ensures relevance (solo operators don't answer team questions meant for 50-person companies)
- Validation questions catch contradictions

---

## Core Design Philosophy

### 1. The Overloaded Operator Cannot Spare 25 Minutes

**Target Persona:**
- Male, 35-55, $500K-$5M revenue
- Working 50-60+ hours/week
- 82% lose sleep over work
- Will abandon if assessment feels too long
- Needs to see value FAST

**Design Principle:** Respect their time by asking ONLY what matters to THEM.

### 2. Knowledge ≠ The Problem, Execution Is

**From Research:**
> "The problem is NOT knowledge — it is execution and infrastructure" — Target Audience Research

**Implication:** We don't need to ask EVERYTHING. We need to ask ENOUGH to identify:
1. Which pillar is most broken
2. Which specific systems are missing
3. What the first 30-day protocol should focus on

### 3. Business Stage Matters More Than People Think

A solo operator working 60hrs/week needs VERY different questions than an established $3M business with 25 employees.

**Example:**
- Solo operator answering "Does your team make decisions without you?" is irrelevant noise
- That same person answering "Are you the bottleneck in every sale?" is critical diagnostic

### 4. Go DEEP on Problems, Skip What's Working

**Current System Flaw:** Everyone answers all 30 questions per pillar regardless of maturity level.

**New Approach:**
- If someone scores 5/5 on "I have a weekly schedule," skip 4 basic time management questions
- If someone scores 1/5 on "I have a weekly schedule," ask 6 deep-dive questions about time chaos

**Result:** Better diagnosis in fewer questions.

---

## Assessment Strategy: 4-Tier Diagnostic System

### Tier 1: Business Context (3-5 Questions)

**Purpose:** Determine business stage and customize all future questions.

**Questions:**
1. **Revenue Band** (Select one)
   - $0-$250K/year
   - $250K-$500K/year
   - $500K-$1M/year
   - $1M-$2M/year
   - $2M-$5M/year
   - $5M+/year

2. **Team Size** (Select one)
   - Solo (just me)
   - 1-5 people
   - 6-15 people
   - 16-30 people
   - 31-50 people
   - 50+ people

3. **Weekly Hours Worked** (Select one)
   - Less than 40 hours
   - 40-50 hours
   - 50-60 hours
   - 60-70 hours
   - 70+ hours

4. **Business Age** (Select one)
   - Less than 1 year
   - 1-3 years
   - 3-5 years
   - 5-10 years
   - 10+ years

5. **Primary Role** (Select one)
   - I do everything (sales, delivery, operations)
   - I focus on sales, team handles delivery
   - I focus on strategy, team handles operations
   - I'm rarely in day-to-day operations

**Stage Classification Algorithm:**

```typescript
function classifyBusinessStage(context: BusinessContext): BusinessStage {
  const { revenue, teamSize, hoursWorked, primaryRole } = context;

  // Stage 1: Solo Operator - Overwhelmed
  if (teamSize === 'Solo' && hoursWorked >= '60-70' && revenue < '$500K') {
    return {
      stage: 'solo-overwhelmed',
      label: 'Solo Operator — Overwhelmed',
      pillarWeights: { ceo: 0.40, team: 0.05, revenue: 0.45, marketing: 0.10 },
      recommendFocus: 'CEO Command + Revenue',
    };
  }

  // Stage 2: Solo Operator - Optimizing
  if (teamSize === 'Solo' && hoursWorked < '60-70' && revenue >= '$250K') {
    return {
      stage: 'solo-optimizing',
      label: 'Solo Operator — Optimizing',
      pillarWeights: { ceo: 0.30, team: 0.15, revenue: 0.35, marketing: 0.20 },
      recommendFocus: 'Team hiring + Marketing scaling',
    };
  }

  // Stage 3: Small Team
  if (teamSize === '1-5 people' && revenue >= '$500K' && revenue <= '$2M') {
    return {
      stage: 'small-team',
      label: 'Small Team',
      pillarWeights: { ceo: 0.25, team: 0.30, revenue: 0.30, marketing: 0.15 },
      recommendFocus: 'Team independence + CEO delegation',
    };
  }

  // Stage 4: Growing Business
  if (teamSize === '6-15 people' && revenue >= '$1M' && revenue <= '$5M') {
    return {
      stage: 'growing',
      label: 'Growing Business',
      pillarWeights: { ceo: 0.25, team: 0.25, revenue: 0.25, marketing: 0.25 },
      recommendFocus: 'Balanced optimization across all pillars',
    };
  }

  // Stage 5: Established Business
  if ((teamSize === '16-30 people' || teamSize === '31-50 people') && revenue >= '$2M') {
    return {
      stage: 'established',
      label: 'Established Business',
      pillarWeights: { ceo: 0.20, team: 0.35, revenue: 0.25, marketing: 0.20 },
      recommendFocus: 'Team scalability + Systems documentation',
    };
  }

  // Stage 6: Enterprise
  if (teamSize === '50+ people' && revenue >= '$5M') {
    return {
      stage: 'enterprise',
      label: 'Enterprise',
      pillarWeights: { ceo: 0.25, team: 0.30, revenue: 0.20, marketing: 0.25 },
      recommendFocus: 'Leadership development + Market expansion',
    };
  }

  // Default: Growing
  return {
    stage: 'growing',
    label: 'Growing Business',
    pillarWeights: { ceo: 0.25, team: 0.25, revenue: 0.25, marketing: 0.25 },
  };
}
```

### Tier 2: Pillar Qualifiers (12 Questions — 3 per Pillar)

**Purpose:** Rapid assessment of each pillar's health. These questions determine which branches to take.

**Question Selection Criteria:**
1. Must be the MOST diagnostic question for that pillar
2. Answers 1-2 trigger deep-dive path
3. Answers 4-5 trigger skip logic for basics
4. Must work across all business stages

#### Pillar 1: CEO Command Center (3 Qualifiers)

**Q1.1: Weekly Operating Rhythm**
- **Text:** "I have a structured weekly schedule that I follow consistently."
- **Subtext:** "Think about whether you have a predictable weekly rhythm or if every week feels different."
- **Category:** Time & Focus
- **Branch Logic:**
  - 1-2 → TIME CHAOS PATH (ask 8-10 questions)
  - 3 → INCONSISTENT PATH (ask 5-6 questions)
  - 4-5 → STRUCTURED PATH (ask 3-4 questions)

**Q1.2: Strategic vs Reactive**
- **Text:** "I spend more time on strategic growth activities than putting out daily fires."
- **Subtext:** "Consider whether your days are spent building the future or reacting to urgent problems."
- **Category:** Time & Focus
- **Branch Logic:**
  - 1-2 → FIREFIGHTING MODE (deep dive on decision delegation)
  - 3-5 → Move to metrics qualifier

**Q1.3: Metrics Visibility**
- **Text:** "I review a business scorecard/dashboard at least weekly."
- **Subtext:** "Think about whether you have a single view of your key business numbers reviewed every week."
- **Category:** Metrics & Visibility
- **Branch Logic:**
  - 1-2 → NO METRICS PATH (build tracking questions)
  - 3-5 → METRICS EXIST PATH (optimization questions)

#### Pillar 2: Team Architecture (3 Qualifiers)

**Q2.1: Team Independence**
- **Text:** "My team can handle a full day without me being available."
- **Subtext:** "Think about what happens operationally when you are completely unavailable for a day."
- **Category:** Independence & Scalability
- **Branch Logic:**
  - Solo stage → Skip to Q2.3 (hiring readiness)
  - 1-2 → BOTTLENECK PATH (role clarity + delegation deep dive)
  - 3-5 → INDEPENDENT PATH (optimization questions)

**Q2.2: Role Clarity**
- **Text:** "Every team member has a written job description with clear outcomes."
- **Subtext:** "Think about whether each person knows exactly what success looks like in their role."
- **Category:** Role Clarity & Structure
- **Branch Logic:**
  - Solo stage → Skip
  - 1-2 → ROLE CONFUSION PATH (structure questions)
  - 3-5 → Move to performance

**Q2.3: Performance System**
- **Text:** "I track my team's performance with measurable KPIs weekly."
- **Subtext:** "Think about whether each team member has numbers you review on a weekly basis."
- **Category:** Performance & Accountability
- **Branch Logic:**
  - Solo stage → "Do you plan to hire in the next 6 months?"
  - 1-2 → NO ACCOUNTABILITY PATH
  - 3-5 → PERFORMANCE SYSTEM PATH

#### Pillar 3: Revenue Pipeline (3 Qualifiers)

**Q3.1: Avatar Clarity**
- **Text:** "I can describe my ideal client in specific detail (demographics, psychographics, pain points)."
- **Subtext:** "Think about whether you have a vivid, documented profile of who you serve best."
- **Category:** Avatar & Client Clarity
- **Branch Logic:**
  - 1-2 → AVATAR UNDEFINED PATH (identity questions)
  - 3 → FUZZY AVATAR PATH (refinement questions)
  - 4-5 → CLEAR AVATAR PATH (optimization)

**Q3.2: Sales Process**
- **Text:** "I have a documented, step-by-step sales process my team follows."
- **Subtext:** "Think about whether your sales workflow is written down and consistently executed."
- **Category:** Sales Process & Scripts
- **Branch Logic:**
  - 1-2 → NO PROCESS PATH (build from scratch questions)
  - 3-5 → PROCESS EXISTS PATH (optimization)

**Q3.3: Revenue Predictability**
- **Text:** "I can predict next month's revenue within 15% accuracy."
- **Subtext:** "Think about whether your revenue is predictable enough to forecast with confidence."
- **Category:** Revenue Tracking & Predictability
- **Branch Logic:**
  - 1-2 → CHAOTIC REVENUE PATH (tracking questions)
  - 3-5 → PREDICTABLE PATH (optimization)

#### Pillar 4: Conversion Intelligence (3 Qualifiers)

**Q4.1: Buyer Journey Mapping**
- **Text:** "I can map every stage of my buyer's journey from first touch to close."
- **Subtext:** "Think about whether you have a clear picture of every step a prospect takes before buying."
- **Category:** Buyer Journey & Tracking
- **Branch Logic:**
  - 1-2 → NO TRACKING PATH (funnel basics)
  - 3-5 → TRACKING EXISTS PATH (optimization)

**Q4.2: Marketing ROI**
- **Text:** "I know my return on ad spend (ROAS) for every paid channel."
- **Subtext:** "Think about whether you can calculate the revenue generated per dollar spent on each ad platform."
- **Category:** Marketing ROI & Spend
- **Branch Logic:**
  - 1-2 → NO ROI TRACKING (measurement questions)
  - 3-5 → ROI TRACKED (optimization)

**Q4.3: Automation & Sequences**
- **Text:** "I have automated email/SMS sequences that nurture leads without manual effort."
- **Subtext:** "Think about whether your lead nurture runs on autopilot or requires manual follow-up."
- **Category:** Automated Sequences & Systems
- **Branch Logic:**
  - 1-2 → MANUAL EVERYTHING PATH
  - 3-5 → AUTOMATION EXISTS PATH

### Tier 3: Deep-Dive Questions (25-35 Questions Total)

**Purpose:** Diagnose EXACTLY what's broken in problem areas.

**Question Count by Path:**
- If qualifier scores 1-2 (broken): Ask 6-8 deep-dive questions
- If qualifier scores 3 (partial): Ask 3-5 questions
- If qualifier scores 4-5 (working): Ask 1-2 optimization questions OR skip

**Total Questions Per Pillar:**
- Minimum: 3 qualifiers + 3 deep-dive = **6 questions**
- Average: 3 qualifiers + 8 deep-dive = **11 questions**
- Maximum: 3 qualifiers + 12 deep-dive = **15 questions**

**Total Assessment (All 4 Pillars):**
- Business context: 5 questions
- Qualifiers: 12 questions (3 × 4 pillars)
- Deep-dive: 20-40 questions (depends on maturity)
- **Total: 37-57 questions (avg 45 questions, ~10 minutes)**

### Tier 4: Validation & Calibration (5-8 Questions)

**Purpose:** Catch contradictions and validate scoring accuracy.

**Example Validation Questions:**

1. **CEO Time Validation:**
   - If user scored high on "structured schedule" but also high on "working 60+ hrs/week firefighting":
   - Ask: "In a typical week, how many hours do you spend on STRATEGIC work (planning, hiring, relationship-building) versus TACTICAL work (client delivery, urgent issues)?"
   - Recalibrate score if contradiction detected

2. **Team Independence Validation:**
   - If user scored high on "team can operate without me" but low on "documented SOPs":
   - Ask: "If you were unavailable for 2 weeks, which of these areas would break down?" (Checklist)
   - Adjust team independence score down if critical areas selected

3. **Revenue Predictability Validation:**
   - If user scored high on "predictable revenue" but low on "sales pipeline tracking":
   - Ask: "How do you forecast revenue? (Gut feel, pipeline stages, historical average, detailed model)"
   - Recalibrate if answer is "gut feel"

**Validation Triggers:**
- Contradiction detected (high score on outcome, low score on system that enables it)
- Extreme scores (all 5s or all 1s) — likely not thoughtful answers
- Business stage mismatch (solo operator claiming team runs without them)

---

## Complete Question Architecture

### Pillar 1: CEO Command Center

**Total Question Pool: 48 Questions**
- Qualifiers: 3
- Time Chaos Path: 12 questions
- Inconsistent Path: 8 questions
- Structured Path: 6 questions
- Decision Making Path: 7 questions
- Metrics Path: 6 questions
- Core Functions Path: 6 questions

#### TIME CHAOS PATH (Triggered by Q1.1 score 1-2)

**Diagnostic Focus:** Why is there no structure? What's eating the time?

1. **Hours Worked Detail:**
   - "How many hours per week do you work on average?"
   - Number input: [Select: <40, 40-50, 50-60, 60-70, 70-80, 80+]

2. **Firefighting Frequency:**
   - "How often does your day get derailed by urgent issues that only you can handle?"
   - Scale 1-5: Never → Daily

3. **Priority Clarity:**
   - "I can identify my top 3 priorities for the week before Monday morning."
   - Scale 1-5 (from original Q5)

4. **Task Delegation:**
   - "I know exactly which tasks only I should handle vs. what should be delegated."
   - Scale 1-5 (from original Q3)

5. **Pulled Into Wrong Work:**
   - "I rarely get pulled into tasks that someone else on my team could handle."
   - Scale 1-5 (from original Q6)

6. **Strategic Time Blocking:**
   - "I have blocked time each week specifically for business strategy and planning."
   - Scale 1-5 (from original Q4)

7. **Morning Routine:**
   - "I have a clear morning routine that sets up my day for CEO-level work."
   - Scale 1-5 (from original Q8)

8. **Email/Communication Batching:**
   - "I do not check email or messages more than 3 times per day."
   - Scale 1-5 (from original Q14)

9. **Weekly Review Habit:**
   - "I conduct a weekly review where I assess progress and plan the upcoming week."
   - Scale 1-5

10. **Time Audit:**
    - "When was the last time you tracked how you spend your time for a full week?"
    - Select: Never / More than a year ago / Within the last year / Within the last 3 months / Recently (last month)

11. **Biggest Time Leak:**
    - "What is your #1 time leak right now?"
    - Select: Client delivery work / Sales calls / Administrative tasks / Firefighting/emergencies / Team management / Email/communication / Unclear — everything feels urgent

12. **Vacation Test:**
    - "I can take a full week off without the business suffering."
    - Scale 1-5 (from original Q16)

**Path Completion:** Move to DECISION MAKING PATH if score on delegation questions (Q4, Q5) is also low.

#### INCONSISTENT PATH (Triggered by Q1.1 score 3)

**Diagnostic Focus:** Has structure, doesn't follow it. Why?

1. **Schedule Adherence:**
   - "What percentage of the time do you actually follow your planned schedule?"
   - Select: 0-20% / 20-40% / 40-60% / 60-80% / 80-100%

2. **Biggest Obstacle to Consistency:**
   - "What most often causes you to abandon your schedule?"
   - Select: Client emergencies / Team needs / Sales opportunities / Personal discipline / Poor planning / External interruptions

3. **Emergency Patterns:**
   - "Are your 'emergencies' truly unpredictable, or are they recurring patterns you could systematize?"
   - Select: Truly unpredictable / Mix of both / Mostly recurring patterns I haven't systematized

4. **Planning System:**
   - "How do you plan your week?"
   - Select: I don't really plan / Mental list / Written to-do list / Time-blocked calendar / Full weekly planning session with priorities

5. **Daily Shutdown Routine:**
   - "I have an end-of-day routine where I close open loops and plan tomorrow."
   - Scale 1-5

6. **Strategic vs Tactical Time Ratio:**
   - Continue to Q1.2 (Strategic vs Reactive qualifier) if not already answered

**Path Completion:** Move to METRICS PATH.

#### STRUCTURED PATH (Triggered by Q1.1 score 4-5)

**Diagnostic Focus:** Schedule exists. Is it the RIGHT schedule? Is strategy happening?

1. **Strategic vs Reactive (Q1.2 if not answered):**
   - "I spend more time on strategic growth activities than putting out daily fires."
   - Scale 1-5

2. **CEO Functions Allocation:**
   - "What percentage of your time goes to the five core CEO functions: Strategy, Relationships, Leadership, Finance, Sales oversight (not doing sales)?"
   - Select: 0-20% / 20-40% / 40-60% / 60-80% / 80-100%

3. **Calendar Audit:**
   - "If I looked at your calendar for last week, how many hours were dedicated to strategic work (planning, hiring, partnership-building)?"
   - Select: 0-2 hours / 2-5 hours / 5-10 hours / 10-15 hours / 15+ hours

4. **Leverage Activities:**
   - "I focus my time on the 20% of activities that drive 80% of results."
   - Scale 1-5

5. **Decision Authority:**
   - Continue to DECISION MAKING PATH

**Path Completion:** Move to METRICS PATH.

#### DECISION MAKING PATH (Parallel with Time paths)

**Entry Conditions:**
- Q1.2 score 1-2 (firefighting mode)
- OR team size >1 and delegation questions scored low

**Questions:**

1. **Team Decision Autonomy:**
   - "My team makes operational decisions without needing my approval."
   - Scale 1-5 (from original Q9)

2. **Decision Filters:**
   - "I have clear decision filters — I know which decisions require my input and which don't."
   - Scale 1-5 (from original Q10)

3. **Customer Issue Trust:**
   - "I trust my team to handle customer issues without my involvement."
   - Scale 1-5 (from original Q11)

4. **Recent Delegation:**
   - "I have delegated at least 3 major responsibilities in the last 90 days."
   - Scale 1-5 (from original Q12)

5. **Day-Away Test:**
   - "When I'm unavailable for a day, operations continue smoothly."
   - Scale 1-5 (from original Q13)

6. **Delegation Framework:**
   - "I have a documented delegation framework my team follows."
   - Scale 1-5 (from original Q15)

7. **Decision Bottleneck Awareness:**
   - "Which types of decisions are you the bottleneck on?"
   - Checklist: Hiring / Firing / Pricing / Client onboarding / Marketing spend / Vendor selection / Product/service changes / None — team handles these

**Path Completion:** Move to METRICS PATH.

#### METRICS PATH (Follows Time + Decision paths)

**Entry Conditions:**
- Q1.3 score determines depth

**Q1.3 Score 1-2 (No Metrics):**

1. **Top Revenue Activities:**
   - "I know my top 3 revenue-generating activities this month."
   - Scale 1-5 (from original Q18)

2. **Profit Margin Awareness:**
   - "I can tell you my gross profit margin within 5% accuracy right now."
   - Scale 1-5 (from original Q19)

3. **Lead Tracking:**
   - "I know exactly how many new leads came in this week and their source."
   - Scale 1-5 (from original Q21)

4. **Financial Forecast:**
   - "I have a financial forecast for the next 90 days."
   - Scale 1-5 (from original Q22)

5. **Team KPI Tracking:**
   - "I track my team's performance with measurable KPIs weekly."
   - Scale 1-5 (from original Q20)

6. **Scorecard Review Cadence:**
   - "How often do you review your business numbers?"
   - Select: Rarely / Monthly / Weekly / Daily

**Q1.3 Score 3-5 (Metrics Exist):**

1. **Leading vs Lagging Indicators:**
   - "My scorecard includes leading indicators (predictive) not just lagging (historical)."
   - Scale 1-5

2. **Scorecard Action:**
   - "When my scorecard shows a problem, I have a defined process for addressing it."
   - Scale 1-5

3. **Team Scorecard Visibility:**
   - "My team can see their performance metrics in real-time."
   - Scale 1-5

**Path Completion:** Move to CORE FUNCTIONS PATH.

#### CORE FUNCTIONS PATH (Final CEO pillar questions)

**Questions:**

1. **Five Functions Documentation:**
   - "How many of the five core functions (Sales, Operations, Delivery, Finance, Leadership) have documented processes?"
   - Select: 0 / 1 / 2 / 3 / 4 / All 5

2. **Function Ownership:**
   - "Each core function has a designated owner who is NOT me."
   - Scale 1-5 (from original Q29)

3. **Function Review Cadence:**
   - "I review all five core functions (Sales, Ops, Delivery, Finance, Leadership) at least monthly."
   - Scale 1-5 (from original Q27)

4. **Bottleneck Awareness:**
   - "I can identify which of the five functions is currently my biggest bottleneck."
   - Scale 1-5 (from original Q28)

5. **Weekly Meetings Structure:**
   - "I have weekly meetings structured around these five core functions."
   - Scale 1-5 (from original Q30)

6. **Process Documentation Status:**
   - "Which core functions have documented processes? (Select all that apply)"
   - Checklist: Sales / Operations / Delivery / Finance / Leadership / None yet

**PILLAR 1 COMPLETE** → Move to Pillar 2

---

### Pillar 2: Team Architecture

**Total Question Pool: 42 Questions**
- Qualifiers: 3
- Solo Path (no team): 4 questions
- Bottleneck Path: 10 questions
- Role Confusion Path: 8 questions
- No Accountability Path: 7 questions
- Performance System Path: 6 questions
- Culture Path: 4 questions

#### BUSINESS STAGE FILTER (Pre-Qualifier)

**If Business Stage = Solo Operator:**
→ Skip to SOLO PATH (4 questions only)

**If Business Stage = Small Team, Growing, Established, Enterprise:**
→ Continue with full Team Architecture assessment

#### SOLO PATH (Solo operators only)

**Purpose:** Assess hiring readiness and future team planning.

1. **Hiring Timeline:**
   - "Do you plan to hire your first team member in the next 6 months?"
   - Select: No plans / Maybe in 6-12 months / Yes, within 6 months / Yes, actively hiring now

2. **Hiring Blocker:**
   - "What's the #1 thing stopping you from hiring?"
   - Select: Can't afford it / Don't know what role to hire / Don't trust anyone to do it as well as I do / Don't have systems to train them / Haven't prioritized it

3. **Most Needed Role:**
   - "If you could hire one person tomorrow to take the biggest task off your plate, what would that role do?"
   - Text input (free response)

4. **Delegation Readiness:**
   - "I have at least 3 tasks I could delegate to someone if I hired them."
   - Scale 1-5

**TEAM PILLAR COMPLETE (Solo Path)** → Move to Pillar 3

**Scoring for Solo Path:**
- Base team score: 40/100 (default for no team)
- Hiring readiness bonus: +10 if actively hiring, +5 if planning within 6 months
- Delegation readiness bonus: +5 per point scored on Q4
- **Max solo score: 60/100** (acknowledges team building is future priority)

#### TEAM INDEPENDENCE PATH (Q2.1 score 1-2, team exists)

**Diagnostic Focus:** Why can't the business run without CEO?

1. **Quality Drop Test:**
   - "When I step away, the quality of work delivered to clients drops."
   - Scale 1-5 (inverted: 1 = always drops, 5 = no quality drop)

2. **Sales Dependence:**
   - "My team closes deals and serves clients without my direct involvement."
   - Scale 1-5 (from original Q27)

3. **Bottleneck Areas:**
   - "Which areas require you to be involved? (Select all that apply)"
   - Checklist: Sales/closing / Client onboarding / Quality control / Problem-solving / Decision-making / Hiring / All of the above

4. **Vacation Reality Check:**
   - "When was the last time you took 7 consecutive days completely off (no email, no calls)?"
   - Select: Never / More than 2 years ago / 1-2 years ago / Within the last year / Within the last 6 months

5. **SOP Documentation:**
   - "I have documented SOPs for at least 80% of recurring tasks."
   - Scale 1-5 (from original Q28)

6. **Process Documentation Quality:**
   - "If a new hire read your SOPs, could they execute tasks without asking questions?"
   - Scale 1-5

7. **Second-in-Command:**
   - "At least one team member could run the business for a week in my absence."
   - Scale 1-5 (from original Q26)

8. **Authority Levels:**
   - "My team members know exactly what decisions they can make without asking me."
   - Scale 1-5

9. **Proactive Problem-Solving:**
   - "My team solves problems independently rather than escalating everything to me."
   - Scale 1-5

10. **Weekly Team Check-In:**
    - "I have a structured weekly team meeting to align on priorities and remove blockers."
    - Scale 1-5

**Path Completion:** Continue to ROLE CLARITY assessment.

#### ROLE CLARITY PATH (Q2.2 score 1-2)

**Diagnostic Focus:** Why are roles unclear?

1. **Job Description Quality:**
   - "Do your job descriptions define OUTCOMES or just list tasks?"
   - Select: No job descriptions / Task lists only / Mix of tasks and outcomes / Clear outcome-based descriptions

2. **Org Chart:**
   - "I have an org chart that accurately reflects how the business operates."
   - Scale 1-5 (from original Q3)

3. **Role Overlap:**
   - "Role responsibilities do not overlap or create confusion between team members."
   - Scale 1-5 (from original Q8)

4. **Authority Definition:**
   - "Each role has defined authority — team members know what they CAN decide without asking."
   - Scale 1-5 (from original Q2)

5. **Onboarding Process:**
   - "New hires receive a structured onboarding process (not just shadowing)."
   - Scale 1-5 (from original Q5)

6. **Right Team Size:**
   - "I have the right number of people for my current revenue level."
   - Scale 1-5 (from original Q6)

7. **Career Growth Paths:**
   - "Each team member has a clear career growth path within the company."
   - Scale 1-5 (from original Q7)

8. **Hiring Based on Need:**
   - "I hire based on documented role needs, not just when I'm overwhelmed."
   - Scale 1-5

**Path Completion:** Continue to PERFORMANCE SYSTEM assessment.

#### PERFORMANCE SYSTEM PATH (Q2.3 score determines depth)

**Q2.3 Score 1-2 (No Performance System):**

1. **Individual KPIs:**
   - "Every team member knows their top 3 measurable KPIs."
   - Scale 1-5 (from original Q4)

2. **Performance Reviews:**
   - "I conduct formal performance reviews at least quarterly."
   - Scale 1-5 (from original Q9)

3. **Underperformer Action Speed:**
   - "Underperformers are addressed within 2 weeks of identifying the issue."
   - Scale 1-5 (from original Q10)

4. **Performance Visibility:**
   - "My team has daily or weekly scorecards tracking their individual metrics."
   - Scale 1-5 (from original Q11)

5. **Performance Improvement Process:**
   - "I have a documented performance improvement process."
   - Scale 1-5 (from original Q12)

6. **Top Performer Recognition:**
   - "Top performers are recognized and rewarded consistently."
   - Scale 1-5 (from original Q13)

7. **Tough Personnel Decisions:**
   - "I have fired or replaced at least one underperformer in the last 12 months."
   - Scale 1-5 (from original Q14)

**Q2.3 Score 3-5 (Performance System Exists):**

1. **Metrics Drive Behavior:**
   - "Team behavior changes when they see their performance metrics."
   - Scale 1-5

2. **Performance Conversations:**
   - "I have 1-on-1s with each team member at least monthly."
   - Scale 1-5

3. **Compensation Tied to Performance:**
   - "Compensation or bonuses are tied to measurable performance outcomes."
   - Scale 1-5

**Path Completion:** Continue to CULTURE assessment.

#### CULTURE PATH (All teams)

**Purpose:** Quick pulse on culture and retention.

1. **Team Support:**
   - "My team members genuinely support each other when problems arise."
   - Scale 1-5 (from original Q17)

2. **Retention Rate:**
   - "Employee turnover in the last 12 months is below 20%."
   - Scale 1-5 (from original Q18)

3. **Ownership Culture:**
   - "My team members take ownership of problems rather than passing blame."
   - Scale 1-5 (from original Q19)

4. **Vision Alignment:**
   - "My team stays because they believe in the company vision, not just the paycheck."
   - Scale 1-5 (from original Q22)

**TEAM PILLAR COMPLETE** → Move to Pillar 3

---

### Pillar 3: Revenue Pipeline

**Total Question Pool: 46 Questions**
- Qualifiers: 3
- Avatar Undefined Path: 8 questions
- Fuzzy Avatar Path: 5 questions
- Clear Avatar Path: 4 questions
- No Sales Process Path: 9 questions
- Process Exists Path: 5 questions
- Chaotic Revenue Path: 7 questions
- Predictable Revenue Path: 5 questions

#### AVATAR CLARITY PATH (Q3.1 determines depth)

**Q3.1 Score 1-2 (Avatar Undefined):**

1. **Current Avatar Description:**
   - "How do you currently describe your ideal client?"
   - Select: Anyone who can pay / Business owners / Specific industry (e.g., contractors) / Detailed persona (industry + revenue + pain points)

2. **Best Client Patterns:**
   - "Are your best clients similar to each other in meaningful ways?"
   - Select: No pattern / Some similarities / Very similar / Identical profile

3. **Client Pain Points:**
   - "I know the top 3 problems my ideal client is trying to solve."
   - Scale 1-5 (from original Q5)

4. **Referral Patterns:**
   - "I track which client segments generate the most referrals."
   - Scale 1-5 (from original Q8)

5. **Highest LTV Client:**
   - "I know which client type generates the highest lifetime value."
   - Scale 1-5 (from original Q2)

6. **Marketing Specificity:**
   - "My marketing speaks directly to my ideal client's specific situation."
   - Scale 1-5 (from original Q6)

7. **Saying No to Bad Fits:**
   - "I actively say 'no' to clients who don't fit my ideal profile."
   - Scale 1-5 (from original Q4)

8. **Avatar Documentation:**
   - "I have documented my ideal client avatar and shared it with my team."
   - Scale 1-5 (from original Q3)

**Q3.1 Score 3 (Fuzzy Avatar):**

1. **Multiple Avatars:**
   - "How many distinct ideal client profiles do you serve?"
   - Select: 1 (focused) / 2-3 (manageable) / 4-6 (too many) / 7+ (unfocused)

2. **Most Profitable Segment:**
   - "Of your client segments, which is the most profitable?"
   - Text input (free response)

3. **Focus Decision:**
   - "If you had to focus on just ONE avatar for the next 90 days, which would it be?"
   - Text input

4. **Avatar Refinement Blocker:**
   - "What's stopping you from narrowing your focus to one ideal avatar?"
   - Select: Fear of turning away revenue / Don't know which one to pick / Team resistance / Haven't prioritized it

5. **Client Success Patterns:**
   - "I can identify my top 10 most profitable clients and explain why they're profitable."
   - Scale 1-5 (from original Q7)

**Q3.1 Score 4-5 (Clear Avatar):**

1. **Avatar Evolution:**
   - "I review and refine my ideal client avatar at least annually."
   - Scale 1-5

2. **Team Avatar Alignment:**
   - "My entire team can describe our ideal client without prompting."
   - Scale 1-5

3. **Marketing-Avatar Fit:**
   - "Our marketing attracts our ideal avatar (vs. educating mismatched leads)."
   - Scale 1-5

4. **Avatar Profitability Tracking:**
   - "I track profitability by client avatar segment."
   - Scale 1-5

**Path Completion:** Move to SALES PROCESS assessment.

#### SALES PROCESS PATH (Q3.2 determines depth)

**Q3.2 Score 1-2 (No Sales Process):**

1. **Sales Variability:**
   - "Do your sales conversations follow a consistent structure, or does it vary every time?"
   - Select: Completely ad hoc / Mostly varies / Some consistency / Highly structured

2. **Discovery Questions:**
   - "My team uses discovery questions to diagnose client needs before presenting solutions."
   - Scale 1-5 (from original Q10)

3. **Solution-Focused Selling:**
   - "My sales conversations focus on solving problems rather than pitching features."
   - Scale 1-5 (from original Q11)

4. **Objection Handling:**
   - "I have objection-handling scripts or frameworks my team is trained on."
   - Scale 1-5 (from original Q12)

5. **Close Rate Awareness:**
   - "I measure close rate and know it within 5% accuracy."
   - Scale 1-5 (from original Q14)

6. **Sales Call Structure:**
   - "Every sales call or meeting follows a consistent structure."
   - Scale 1-5 (from original Q15)

7. **Follow-Up Sequences:**
   - "I have a follow-up sequence for leads who don't close immediately."
   - Scale 1-5 (from original Q16)

8. **Team Closing Independence:**
   - "My team can close deals without my involvement."
   - Scale 1-5 (from original Q13)

9. **Sales Training:**
   - "New hires receive structured sales training (not just 'shadow and figure it out')."
   - Scale 1-5

**Q3.2 Score 3-5 (Process Exists):**

1. **Process Adherence:**
   - "My team consistently follows the documented sales process."
   - Scale 1-5

2. **Sales Process Optimization:**
   - "I review and optimize our sales process at least quarterly based on data."
   - Scale 1-5

3. **Conversion Rate by Stage:**
   - "I know the conversion rate at each stage of our sales process."
   - Scale 1-5

4. **Sales Playbook:**
   - "Our sales process is documented in a playbook anyone can follow."
   - Scale 1-5

5. **CRM Usage:**
   - "Every sales interaction is logged in our CRM automatically or manually."
   - Scale 1-5

**Path Completion:** Move to REVENUE PREDICTABILITY assessment.

#### REVENUE PREDICTABILITY PATH (Q3.3 determines depth)

**Q3.3 Score 1-2 (Chaotic Revenue):**

1. **Revenue Source Tracking:**
   - "I track revenue by source (channel, campaign, referral) weekly."
   - Scale 1-5 (from original Q26)

2. **CAC Awareness:**
   - "I know my customer acquisition cost (CAC) per channel."
   - Scale 1-5 (from original Q27)

3. **Sales Pipeline Stages:**
   - "I have a sales pipeline with defined stages and conversion rates per stage."
   - Scale 1-5 (from original Q28)

4. **Revenue Review Cadence:**
   - "I review revenue metrics weekly and adjust strategy based on data."
   - Scale 1-5 (from original Q29)

5. **Revenue Growth Trend:**
   - "Revenue has grown consistently (quarter over quarter) in the last 12 months."
   - Scale 1-5 (from original Q30)

6. **Pipeline Visibility:**
   - "I can tell you how much revenue is in my pipeline right now and the probability of close."
   - Scale 1-5

7. **Forecast Method:**
   - "How do you forecast revenue?"
   - Select: I don't / Gut feel / Historical average / Pipeline-based / Detailed modeling with confidence intervals

**Q3.3 Score 3-5 (Predictable Revenue):**

1. **Forecast Accuracy:**
   - "My revenue forecasts are accurate within 10% month-over-month."
   - Scale 1-5

2. **Leading Indicators:**
   - "I track leading indicators (pipeline growth, meeting volume) not just lagging (closed deals)."
   - Scale 1-5

3. **Seasonal Adjustments:**
   - "My forecasting model accounts for seasonality and market trends."
   - Scale 1-5

4. **Revenue Diversification:**
   - "Revenue comes from multiple sources (not dependent on 1-2 clients or channels)."
   - Scale 1-5

5. **Recurring Revenue:**
   - "What percentage of your revenue is recurring (subscriptions, retainers)?"
   - Select: 0% / 1-20% / 21-40% / 41-60% / 61-80% / 81-100%

**Path Completion:** Move to OFFER LADDER & RETENTION (quick check).

#### OFFER LADDER & RETENTION PATH (All users)

**Purpose:** Quick assessment of offer structure and client longevity.

1. **Offer Ladder Existence:**
   - "I have multiple products/services at different price points (offer ladder)."
   - Scale 1-5 (from original Q17)

2. **Upsell System:**
   - "I have a system to upsell or cross-sell existing clients."
   - Scale 1-5 (from original Q18)

3. **Client Longevity:**
   - "My average client stays with me for more than 12 months."
   - Scale 1-5 (from original Q19)

4. **LTV Tracking:**
   - "I calculate and track client lifetime value."
   - Scale 1-5 (from original Q20)

5. **Referral System:**
   - "I have a documented referral program or system."
   - Scale 1-5 (from original Q24)

**REVENUE PILLAR COMPLETE** → Move to Pillar 4

---

### Pillar 4: Conversion Intelligence

**Total Question Pool: 44 Questions**
- Qualifiers: 3
- No Tracking Path: 10 questions
- Tracking Exists Path: 6 questions
- No ROI Tracking Path: 8 questions
- ROI Tracked Path: 5 questions
- Manual Everything Path: 8 questions
- Automation Exists Path: 4 questions

#### BUYER JOURNEY PATH (Q4.1 determines depth)

**Q4.1 Score 1-2 (No Tracking):**

1. **Source Attribution:**
   - "I track where every lead comes from (source attribution)."
   - Scale 1-5 (from original Q2)

2. **Drop-Off Awareness:**
   - "I know exactly where leads drop off in my funnel and why."
   - Scale 1-5 (from original Q3)

3. **Tracking Infrastructure:**
   - "I have tracking pixels/analytics installed on my website and landing pages."
   - Scale 1-5 (from original Q4)

4. **Funnel Review Cadence:**
   - "I review funnel metrics (click rates, conversion rates, drop-offs) at least weekly."
   - Scale 1-5 (from original Q5)

5. **Best Channel Awareness:**
   - "I can tell you which marketing channel has the best ROI right now."
   - Scale 1-5 (from original Q6)

6. **Time-to-Close Tracking:**
   - "I track time-to-close (how long from first contact to purchase)."
   - Scale 1-5 (from original Q7)

7. **Campaign Isolation:**
   - "I have separate tracking for each marketing campaign or channel."
   - Scale 1-5 (from original Q8)

8. **Funnel Stages Defined:**
   - "How many distinct stages are in your buyer's journey?"
   - Select: Don't know / 1-2 stages / 3-4 stages / 5-6 stages / 7+ stages

9. **Conversion Rate by Stage:**
   - "I know the conversion rate between each stage of my funnel."
   - Scale 1-5

10. **Analytics Tool:**
    - "Which analytics tools do you use?"
    - Checklist: None / Google Analytics / Facebook Pixel / CRM tracking / Custom dashboard / Heat mapping tools / Other

**Q4.1 Score 3-5 (Tracking Exists):**

1. **Funnel Optimization Frequency:**
   - "How often do you make changes to improve funnel conversion?"
   - Select: Rarely / Quarterly / Monthly / Weekly / Continuously testing

2. **Attribution Model:**
   - "Do you use first-touch, last-touch, or multi-touch attribution?"
   - Select: Don't know / Single-touch (first or last) / Multi-touch attribution

3. **Micro-Conversions:**
   - "I track micro-conversions (email opens, page visits, downloads) not just sales."
   - Scale 1-5

4. **Cohort Analysis:**
   - "I analyze conversion rates by cohort (source, time period, demographics)."
   - Scale 1-5

5. **Funnel Documentation:**
   - "Our buyer journey is documented and shared with the team."
   - Scale 1-5

6. **Drop-Off Root Cause:**
   - "When I see a drop-off in the funnel, I know how to diagnose why."
   - Scale 1-5

**Path Completion:** Move to MARKETING ROI assessment.

#### MARKETING ROI PATH (Q4.2 determines depth)

**Q4.2 Score 1-2 (No ROI Tracking):**

1. **Expected Return:**
   - "Every marketing dollar I spend has a measurable expected return."
   - Scale 1-5 (from original Q10)

2. **Cutting Underperformers:**
   - "I have stopped spending on at least one underperforming channel in the last 6 months."
   - Scale 1-5 (from original Q11)

3. **Data-Driven Budget:**
   - "My marketing budget is allocated based on data, not gut feeling."
   - Scale 1-5 (from original Q12)

4. **Cost Per Lead:**
   - "I can calculate cost-per-lead for each marketing channel."
   - Scale 1-5 (from original Q13)

5. **Budget Tied to Goals:**
   - "I have a monthly marketing budget that's tied to revenue goals."
   - Scale 1-5 (from original Q14)

6. **Testing New Channels:**
   - "I test new marketing channels or campaigns at least quarterly."
   - Scale 1-5 (from original Q15)

7. **Reinvesting in Winners:**
   - "I reinvest marketing profits back into the highest-performing channels."
   - Scale 1-5 (from original Q16)

8. **Marketing ROI Calculation:**
   - "Can you calculate the ROI of your marketing spend?"
   - Select: No idea / Rough estimate / Within 20% accuracy / Within 10% accuracy / Exact ROI tracked

**Q4.2 Score 3-5 (ROI Tracked):**

1. **Channel-Specific ROAS:**
   - "I know the ROAS (return on ad spend) for each paid channel."
   - Scale 1-5

2. **Organic vs Paid ROI:**
   - "I compare ROI of organic efforts (content, SEO) vs paid ads."
   - Scale 1-5

3. **LTV:CAC Ratio:**
   - "I track the ratio of lifetime value to customer acquisition cost."
   - Scale 1-5

4. **Attribution Window:**
   - "I understand the attribution window for each channel (immediate vs delayed conversions)."
   - Scale 1-5

5. **Incrementality Testing:**
   - "I run holdout tests to measure incremental lift from marketing spend."
   - Scale 1-5

**Path Completion:** Move to AUTOMATION assessment.

#### AUTOMATION & SEQUENCES PATH (Q4.3 determines depth)

**Q4.3 Score 1-2 (Manual Everything):**

1. **Lead Response Time:**
   - "Leads receive follow-up within 5 minutes of inquiry (automated or manual)."
   - Scale 1-5 (from original Q18)

2. **Nurture Sequence:**
   - "I have a documented lead nurture sequence of at least 5 touchpoints."
   - Scale 1-5 (from original Q19)

3. **CRM Automation:**
   - "My CRM tracks every interaction with every lead automatically."
   - Scale 1-5 (from original Q20)

4. **Re-Engagement Campaigns:**
   - "I have re-engagement campaigns for leads who went cold."
   - Scale 1-5 (from original Q21)

5. **Booking Automation:**
   - "My booking/sales process is partially or fully automated."
   - Scale 1-5 (from original Q22)

6. **Retargeting:**
   - "I use retargeting ads to re-engage website visitors."
   - Scale 1-5 (from original Q23)

7. **Review Collection:**
   - "I have automated review/testimonial collection from satisfied clients."
   - Scale 1-5 (from original Q24)

8. **Email Marketing Platform:**
   - "Which email/automation tools do you use?"
   - Checklist: None / MailChimp / ConvertKit / ActiveCampaign / HubSpot / GoHighLevel / Other CRM

**Q4.3 Score 3-5 (Automation Exists):**

1. **Sequence Performance:**
   - "I track open rates, click rates, and conversion rates for all email sequences."
   - Scale 1-5

2. **Segmentation:**
   - "My email lists are segmented by behavior, stage, or demographics."
   - Scale 1-5

3. **Automation Optimization:**
   - "I test and optimize email sequences at least quarterly."
   - Scale 1-5

4. **Multi-Channel Sequences:**
   - "My nurture sequences span multiple channels (email, SMS, retargeting ads)."
   - Scale 1-5

**Path Completion:** Move to REPEATABILITY assessment (final Pillar 4 section).

#### REPEATABILITY & SCALABILITY PATH (All users)

**Purpose:** Can marketing scale without breaking?

1. **Campaign Documentation:**
   - "My best-performing marketing campaigns are documented and repeatable."
   - Scale 1-5 (from original Q25)

2. **Marketing Playbook:**
   - "I could hand my marketing playbook to a new hire and they could execute it."
   - Scale 1-5 (from original Q26)

3. **Consistent Messaging:**
   - "My messaging is consistent across all channels (website, social, email, ads)."
   - Scale 1-5 (from original Q27)

4. **A/B Testing:**
   - "I test variations of ads, emails, or landing pages and optimize based on results."
   - Scale 1-5 (from original Q28)

5. **Marketing Calendar:**
   - "I have a content calendar or marketing plan for the next 90 days."
   - Scale 1-5 (from original Q29)

6. **Predictable Lead Flow:**
   - "My marketing generates leads predictably — I know roughly how many to expect each week."
   - Scale 1-5 (from original Q30)

**CONVERSION PILLAR COMPLETE** → Move to VALIDATION TIER (if needed) → RESULTS

---

## Branching Logic & Decision Trees

### Branching Engine TypeScript Interface

```typescript
// Question Node in the Adaptive Tree
interface AdaptiveQuestionNode {
  id: string;
  pillarId: PillarId;
  category: string;
  tier: 1 | 2 | 3 | 4; // Business context, Qualifier, Deep-dive, Validation
  text: string;
  subtext: string;
  responseType: 'scale' | 'select' | 'multiselect' | 'number' | 'text';
  options?: SelectOption[]; // For select/multiselect
  scaleMin?: number; // For scale questions
  scaleMax?: number;
  branches?: BranchCondition[]; // Conditional next questions
  defaultNext?: string; // Question ID to go to if no branch matches
  skipConditions?: SkipCondition[]; // Conditions under which to skip this question
  validationRules?: ValidationRule[]; // For Tier 4 validation
}

interface BranchCondition {
  condition: (answer: QuestionAnswer, context: AssessmentContext) => boolean;
  nextQuestionId: string;
  pathLabel?: string; // e.g., "TIME CHAOS PATH"
}

interface SkipCondition {
  check: (context: AssessmentContext) => boolean;
  reason: string; // e.g., "Solo operators skip team questions"
}

interface ValidationRule {
  triggerCondition: (answers: Record<string, QuestionAnswer>) => boolean;
  validationQuestionId: string;
  recalibrationLogic: (validationAnswer: QuestionAnswer) => ScoreAdjustment;
}

interface AssessmentContext {
  businessStage: BusinessStage;
  revenue: RevenueRange;
  teamSize: TeamSizeRange;
  hoursWorked: number;
  primaryRole: string;
  answersGiven: Record<string, QuestionAnswer>;
  currentPillarScores: Partial<Record<PillarId, number>>;
  questionsAsked: string[];
  pathsTaken: string[];
}

// Example: Pillar 1 Question 1 Branching
const P1_Q1: AdaptiveQuestionNode = {
  id: 'p1-q1',
  pillarId: 1,
  category: 'Time & Focus',
  tier: 2,
  text: 'I have a structured weekly schedule that I follow consistently.',
  subtext: 'Think about whether you have a predictable weekly rhythm or if every week feels different.',
  responseType: 'scale',
  scaleMin: 1,
  scaleMax: 5,
  branches: [
    {
      condition: (answer) => answer.value >= 1 && answer.value <= 2,
      nextQuestionId: 'p1-time-chaos-q1',
      pathLabel: 'TIME CHAOS PATH',
    },
    {
      condition: (answer) => answer.value === 3,
      nextQuestionId: 'p1-inconsistent-q1',
      pathLabel: 'INCONSISTENT PATH',
    },
    {
      condition: (answer) => answer.value >= 4 && answer.value <= 5,
      nextQuestionId: 'p1-structured-q1',
      pathLabel: 'STRUCTURED PATH',
    },
  ],
};

// Example: Solo Operator Skip Logic
const P2_Q1: AdaptiveQuestionNode = {
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
      check: (context) => context.businessStage === 'solo-overwhelmed' || context.businessStage === 'solo-optimizing',
      reason: 'Solo operators have no team, question not applicable',
    },
  ],
  branches: [
    {
      condition: (answer) => answer.value <= 2,
      nextQuestionId: 'p2-bottleneck-q1',
      pathLabel: 'BOTTLENECK PATH',
    },
    {
      condition: (answer) => answer.value >= 3,
      nextQuestionId: 'p2-independent-q1',
      pathLabel: 'INDEPENDENT TEAM PATH',
    },
  ],
};

// Example: Validation Question Trigger
const VALIDATION_CEO_TIME: AdaptiveQuestionNode = {
  id: 'validation-ceo-time-contradiction',
  pillarId: 1,
  category: 'Time & Focus',
  tier: 4,
  text: 'In a typical week, how many hours do you spend on STRATEGIC work (planning, hiring, relationship-building) versus TACTICAL work (client delivery, urgent issues)?',
  subtext: 'We want to calibrate your earlier answers.',
  responseType: 'select',
  options: [
    { value: 'strategic-80', label: '80% strategic, 20% tactical' },
    { value: 'strategic-60', label: '60% strategic, 40% tactical' },
    { value: 'balanced', label: '50/50 split' },
    { value: 'tactical-60', label: '40% strategic, 60% tactical' },
    { value: 'tactical-80', label: '20% strategic, 80% tactical' },
  ],
};

const CEO_TIME_VALIDATION: ValidationRule = {
  triggerCondition: (answers) => {
    const scheduleScore = answers['p1-q1']?.value || 0;
    const strategicScore = answers['p1-q2']?.value || 0;
    const hoursWorked = parseInt(answers['business-context-hours']?.value || '60');

    // Contradiction: Claims structured schedule + strategic focus, but works 70+ hours
    return scheduleScore >= 4 && strategicScore >= 4 && hoursWorked >= 70;
  },
  validationQuestionId: 'validation-ceo-time-contradiction',
  recalibrationLogic: (validationAnswer) => {
    if (validationAnswer.value === 'tactical-80' || validationAnswer.value === 'tactical-60') {
      return {
        adjustments: [
          { questionId: 'p1-q1', newScore: 2, reason: 'Validation revealed actual time chaos' },
          { questionId: 'p1-q2', newScore: 2, reason: 'Mostly tactical work, not strategic' },
        ],
      };
    }
    return { adjustments: [] };
  },
};
```

### Adaptive Scoring Algorithm

```typescript
interface CategoryScoreResult {
  category: string;
  questionsAsked: string[];
  questionCount: number;
  rawScore: number;
  maxPossible: number;
  percentage: number;
  weight: number; // Based on business stage
  weightedScore: number;
  band: Band;
}

interface PillarScoreResult {
  pillarId: PillarId;
  pillarLabel: string;
  categoryScores: CategoryScoreResult[];
  rawScore: number;
  maxPossible: number;
  percentage: number;
  stageWeightedPercentage: number; // Adjusted by business stage importance
  band: Band;
  weakestCategory: string;
  topRecommendation: string;
}

function calculateAdaptivePillarScore(
  pillarId: PillarId,
  answers: Record<string, QuestionAnswer>,
  questionsAsked: AdaptiveQuestionNode[],
  businessStage: BusinessStage
): PillarScoreResult {
  const pillar = PILLAR_MAP[pillarId];
  const categories = pillar.categories;

  // Group questions by category
  const categoryGroups = categories.map((category) => {
    const categoryQuestions = questionsAsked.filter((q) => q.category === category);
    const answered = categoryQuestions.filter((q) => answers[q.id] !== undefined);

    const rawScore = answered.reduce((sum, q) => {
      const answer = answers[q.id];
      return sum + normalizeAnswerToScore(answer, q);
    }, 0);

    const maxPossible = answered.length * 5; // Assuming 5-point scale normalized
    const percentage = maxPossible > 0 ? (rawScore / maxPossible) * 100 : 0;

    // Get weight for this category based on business stage
    const weight = getCategoryWeight(businessStage, pillarId, category);
    const weightedScore = percentage * weight;

    return {
      category,
      questionsAsked: answered.map((q) => q.id),
      questionCount: answered.length,
      rawScore,
      maxPossible,
      percentage: Math.round(percentage),
      weight,
      weightedScore,
      band: getBandForPercentage(Math.round(percentage)),
    };
  });

  // Calculate overall pillar score (weighted average)
  const totalWeight = categoryGroups.reduce((sum, cg) => sum + cg.weight, 0);
  const weightedSum = categoryGroups.reduce((sum, cg) => sum + cg.weightedScore, 0);
  const stageWeightedPercentage = totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;

  // Raw score (unweighted)
  const rawScore = categoryGroups.reduce((sum, cg) => sum + cg.rawScore, 0);
  const maxPossible = categoryGroups.reduce((sum, cg) => sum + cg.maxPossible, 0);
  const percentage = maxPossible > 0 ? Math.round((rawScore / maxPossible) * 100) : 0;

  const weakestCategory = categoryGroups.reduce((weakest, cg) =>
    cg.percentage < weakest.percentage ? cg : weakest
  ).category;

  return {
    pillarId,
    pillarLabel: pillar.label,
    categoryScores: categoryGroups,
    rawScore,
    maxPossible,
    percentage,
    stageWeightedPercentage,
    band: getBandForPercentage(stageWeightedPercentage),
    weakestCategory,
    topRecommendation: generateTopRecommendation(categoryGroups, businessStage),
  };
}

function getCategoryWeight(
  stage: BusinessStage,
  pillarId: PillarId,
  category: string
): number {
  // Weight adjustments based on business stage and category relevance
  const WEIGHT_MAP: Record<BusinessStage, Record<PillarId, Record<string, number>>> = {
    'solo-overwhelmed': {
      1: { 'Time & Focus': 1.5, 'Decision Making & Delegation': 1.2, 'Metrics & Visibility': 1.0, 'The Five Core Functions': 0.8 },
      2: { /* Team categories get low weight for solo */ },
      3: { 'Avatar & Client Clarity': 1.3, 'Sales Process & Scripts': 1.3, 'Offer Ladder & Client Retention': 1.0, 'Revenue Tracking & Predictability': 1.2 },
      4: { /* Marketing categories moderate weight */ },
    },
    // ... other stages
  };

  return WEIGHT_MAP[stage]?.[pillarId]?.[category] || 1.0;
}

function normalizeAnswerToScore(answer: QuestionAnswer, question: AdaptiveQuestionNode): number {
  switch (question.responseType) {
    case 'scale':
      return answer.value; // Already 1-5
    case 'select':
      // Map select answers to 1-5 scale based on option position or custom mapping
      return question.options?.findIndex((opt) => opt.value === answer.value) + 1 || 0;
    case 'multiselect':
      // Count number of positive selections
      return (answer.value as string[]).length;
    case 'number':
      // Normalize number to 1-5 scale based on question context
      return normalizeNumberToScale(answer.value, question);
    default:
      return 0;
  }
}

function generateTopRecommendation(
  categoryScores: CategoryScoreResult[],
  businessStage: BusinessStage
): string {
  const weakest = categoryScores.reduce((min, cs) => cs.percentage < min.percentage ? cs : min);

  // Generate recommendation based on weakest category and stage
  const recommendations: Record<string, string> = {
    'Time & Focus': 'Install a weekly CEO rhythm with time-blocked strategic work',
    'Decision Making & Delegation': 'Create decision filters and delegation framework',
    'Metrics & Visibility': 'Build a weekly scorecard with leading indicators',
    'The Five Core Functions': 'Document processes for all five core functions',
    'Role Clarity & Structure': 'Define roles with clear outcomes and authority levels',
    'Performance & Accountability': 'Implement weekly scorecards and quarterly reviews',
    'Culture & Retention': 'Clarify company values and build recognition systems',
    'Independence & Scalability': 'Document SOPs and build team decision authority',
    'Avatar & Client Clarity': 'Define detailed ideal client avatar and share with team',
    'Sales Process & Scripts': 'Document discovery-to-close process with scripts',
    'Offer Ladder & Client Retention': 'Build entry-to-lifetime value capture system',
    'Revenue Tracking & Predictability': 'Implement pipeline tracking and forecasting',
    'Buyer Journey & Tracking': 'Map all funnel stages and install tracking pixels',
    'Marketing ROI & Spend': 'Calculate ROAS per channel and cut losers',
    'Automated Sequences & Systems': 'Build 5+ touchpoint nurture sequence',
    'Repeatable & Scalable Marketing': 'Document winning campaigns in playbook',
  };

  return recommendations[weakest.category] || 'Focus on systematic improvement';
}
```

---

## Scoring Algorithm

### Multi-Pillar Scoring with Stage Weighting

```typescript
interface ComprehensiveAssessmentResult {
  businessStage: BusinessStage;
  completedAt: Date;
  questionCount: number;
  timeSpent: number; // seconds
  pillarScores: PillarScoreResult[];
  overallScore: number;
  overallBand: Band;
  weakestPillar: PillarScoreResult;
  strongestPillar: PillarScoreResult;
  recommendation: AssessmentRecommendation;
}

interface AssessmentRecommendation {
  focusPillar: PillarId;
  focusCategory: string;
  protocolSlug: PillarSlug;
  headline: string;
  description: string;
  firstThreeActions: string[];
  estimatedImpact: string;
}

function generateComprehensiveAssessment(
  answers: Record<string, QuestionAnswer>,
  questionsAsked: AdaptiveQuestionNode[],
  businessContext: BusinessContext
): ComprehensiveAssessmentResult {
  const businessStage = classifyBusinessStage(businessContext);

  // Calculate score for each pillar
  const pillarScores = ([1, 2, 3, 4] as PillarId[]).map((pillarId) =>
    calculateAdaptivePillarScore(
      pillarId,
      answers,
      questionsAsked.filter((q) => q.pillarId === pillarId),
      businessStage.stage
    )
  );

  // Apply stage weights to determine overall score
  const stageWeights = businessStage.pillarWeights;
  const weightedSum =
    pillarScores[0].stageWeightedPercentage * stageWeights.ceo +
    pillarScores[1].stageWeightedPercentage * stageWeights.team +
    pillarScores[2].stageWeightedPercentage * stageWeights.revenue +
    pillarScores[3].stageWeightedPercentage * stageWeights.marketing;

  const overallScore = Math.round(weightedSum);
  const overallBand = getBandForPercentage(overallScore);

  const weakestPillar = pillarScores.reduce((weakest, ps) =>
    ps.stageWeightedPercentage < weakest.stageWeightedPercentage ? ps : weakest
  );

  const strongestPillar = pillarScores.reduce((strongest, ps) =>
    ps.stageWeightedPercentage > strongest.stageWeightedPercentage ? ps : strongest
  );

  const recommendation = generateRecommendation(weakestPillar, businessStage);

  return {
    businessStage: businessStage.stage,
    completedAt: new Date(),
    questionCount: questionsAsked.length,
    timeSpent: 0, // Track client-side
    pillarScores,
    overallScore,
    overallBand,
    weakestPillar,
    strongestPillar,
    recommendation,
  };
}

function generateRecommendation(
  weakestPillar: PillarScoreResult,
  businessStage: BusinessStage
): AssessmentRecommendation {
  const pillarSlug = PILLAR_MAP[weakestPillar.pillarId].slug;
  const weakestCategory = weakestPillar.weakestCategory;

  // Detailed recommendation logic based on pillar + category + stage
  const recommendations: Record<PillarId, Record<string, AssessmentRecommendation>> = {
    1: {
      'Time & Focus': {
        focusPillar: 1,
        focusCategory: 'Time & Focus',
        protocolSlug: 'ceo-command',
        headline: 'Your time is chaos. We fix that first.',
        description: 'You're working 50-60+ hours a week but still drowning in fires. The 30-day CEO Command protocol installs a weekly rhythm that separates strategy from execution. In 30 days, you'll have predictable CEO time and clear priorities.',
        firstThreeActions: [
          'Week 1: Time audit — track every hour for 7 days',
          'Week 2: Install weekly CEO rhythm (strategy block, scorecard review, team sync)',
          'Week 3: Build decision filters — what hits your desk vs what doesn't',
        ],
        estimatedImpact: 'Reclaim 10-15 hours/week within 30 days',
      },
      // ... other categories
    },
    // ... other pillars
  };

  return recommendations[weakestPillar.pillarId][weakestCategory] || {
    focusPillar: weakestPillar.pillarId,
    focusCategory: weakestCategory,
    protocolSlug: pillarSlug,
    headline: `Fix your ${weakestPillar.pillarLabel} first`,
    description: `Your ${weakestPillar.pillarLabel} scored ${weakestPillar.percentage}% — this is holding back your growth.`,
    firstThreeActions: [],
    estimatedImpact: 'Measurable improvement in 30 days',
  };
}
```

---

## Technical Architecture

### Data Models

```typescript
// Assessment Session
interface AssessmentSession {
  id: string;
  user_id: string;
  started_at: Date;
  completed_at: Date | null;
  business_context: BusinessContext;
  business_stage: BusinessStage;
  answers: Record<string, QuestionAnswer>;
  questions_asked: string[]; // Question IDs in order
  paths_taken: string[]; // Path labels taken
  validation_triggered: boolean;
  time_spent_seconds: number;
  is_adaptive: boolean; // true for new system, false for legacy
  version: string; // 'v2-adaptive' or 'v1-linear'
}

// Assessment Result
interface AssessmentResult {
  id: string;
  session_id: string;
  user_id: string;
  completed_at: Date;
  business_stage: BusinessStage;
  question_count: number;
  time_spent_seconds: number;

  // Pillar scores
  pillar_scores: PillarScoreResult[];
  overall_score: number;
  overall_band: Band;
  weakest_pillar_id: PillarId;
  strongest_pillar_id: PillarId;

  // Recommendation
  recommended_pillar_id: PillarId;
  recommended_category: string;
  recommended_protocol_slug: PillarSlug;
  recommendation_headline: string;
  recommendation_description: string;
  first_actions: string[];

  // Metadata
  is_retake: boolean;
  previous_assessment_id: string | null;
}

// Question Answer
interface QuestionAnswer {
  question_id: string;
  question_text: string;
  value: number | string | string[] | boolean;
  answered_at: Date;
  time_spent_seconds: number;
}

// Business Context
interface BusinessContext {
  revenue: RevenueRange;
  teamSize: TeamSizeRange;
  hoursWorked: string;
  businessAge: string;
  primaryRole: string;
}
```

### Supabase Schema Updates

```sql
-- New table: assessment_sessions_v2
CREATE TABLE assessment_sessions_v2 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  business_context JSONB NOT NULL,
  business_stage TEXT NOT NULL,
  answers JSONB DEFAULT '{}',
  questions_asked TEXT[] DEFAULT ARRAY[]::TEXT[],
  paths_taken TEXT[] DEFAULT ARRAY[]::TEXT[],
  validation_triggered BOOLEAN DEFAULT false,
  time_spent_seconds INTEGER DEFAULT 0,
  is_adaptive BOOLEAN DEFAULT true,
  version TEXT DEFAULT 'v2-adaptive',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- New table: assessment_results_v2
CREATE TABLE assessment_results_v2 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES assessment_sessions_v2(id),
  user_id UUID REFERENCES auth.users(id),
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  business_stage TEXT NOT NULL,
  question_count INTEGER NOT NULL,
  time_spent_seconds INTEGER NOT NULL,

  pillar_scores JSONB NOT NULL,
  overall_score INTEGER NOT NULL,
  overall_band TEXT NOT NULL,
  weakest_pillar_id INTEGER NOT NULL,
  strongest_pillar_id INTEGER NOT NULL,

  recommended_pillar_id INTEGER NOT NULL,
  recommended_category TEXT NOT NULL,
  recommended_protocol_slug TEXT NOT NULL,
  recommendation_headline TEXT NOT NULL,
  recommendation_description TEXT NOT NULL,
  first_actions JSONB NOT NULL,

  is_retake BOOLEAN DEFAULT false,
  previous_assessment_id UUID REFERENCES assessment_results_v2(id),

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for querying
CREATE INDEX idx_assessment_sessions_v2_user ON assessment_sessions_v2(user_id, completed_at DESC);
CREATE INDEX idx_assessment_results_v2_user ON assessment_results_v2(user_id, completed_at DESC);

-- RLS Policies
ALTER TABLE assessment_sessions_v2 ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_results_v2 ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions" ON assessment_sessions_v2
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions" ON assessment_sessions_v2
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions" ON assessment_sessions_v2
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own results" ON assessment_results_v2
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own results" ON assessment_results_v2
  FOR INSERT WITH CHECK (auth.uid() = user_id);
```

### File Structure

```
src/
├── data/
│   ├── questions/
│   │   ├── index.ts (current 120 questions - KEEP for legacy)
│   │   ├── adaptive/
│   │   │   ├── business-context.ts
│   │   │   ├── pillar-1-ceo-command.ts
│   │   │   ├── pillar-2-team.ts
│   │   │   ├── pillar-3-revenue.ts
│   │   │   ├── pillar-4-conversion.ts
│   │   │   ├── validation-questions.ts
│   │   │   └── index.ts
│   ├── scoring.ts (current bands - KEEP)
│   └── adaptive-scoring.ts (NEW)
├── lib/
│   ├── engine.ts (current linear engine - KEEP for legacy)
│   ├── adaptive-engine.ts (NEW - branching logic)
│   ├── business-stage-classifier.ts (NEW)
│   └── question-tree.ts (NEW - tree traversal)
├── stores/
│   ├── quiz-store.ts (current - KEEP for legacy)
│   └── adaptive-quiz-store.ts (NEW)
├── app/
│   ├── (public)/
│   │   ├── assess/ (current single-pillar - KEEP)
│   │   └── assess-adaptive/ (NEW multi-pillar)
│   │       ├── page.tsx (landing - explain new assessment)
│   │       ├── start/page.tsx (business context collection)
│   │       ├── quiz/page.tsx (adaptive quiz UI)
│   │       └── results/page.tsx (4-pillar results + recommendation)
│   └── actions/
│       ├── assessment.ts (current - KEEP)
│       └── adaptive-assessment.ts (NEW)
├── types/
│   ├── quiz.ts (current - KEEP)
│   └── adaptive-quiz.ts (NEW)
└── components/
    ├── QuizCard.tsx (current - can reuse)
    ├── AdaptiveQuizCard.tsx (NEW - handles multiple response types)
    ├── ResultsRadar.tsx (current - can reuse)
    └── ComprehensiveResults.tsx (NEW - 4-pillar dashboard)
```

---

## Implementation Roadmap

### Phase 1: Foundation & Question Architecture (Week 1-2)

**Deliverables:**
- [ ] Complete question tree data structure for all 4 pillars
- [ ] Business stage classification algorithm
- [ ] Branching logic decision trees
- [ ] Question pool validation (ensure all paths covered)

**Files to Create:**
- `src/data/questions/adaptive/*.ts`
- `src/types/adaptive-quiz.ts`
- `src/lib/business-stage-classifier.ts`

**Testing:**
- Unit tests for business stage classifier
- Path coverage tests (ensure every score combination has a valid path)
- Question count validation (min/avg/max within targets)

### Phase 2: Adaptive Engine & Scoring (Week 2-3)

**Deliverables:**
- [ ] Adaptive branching engine
- [ ] Question tree traversal logic
- [ ] Stage-weighted scoring algorithm
- [ ] Validation question triggers
- [ ] Comprehensive results generation

**Files to Create:**
- `src/lib/adaptive-engine.ts`
- `src/lib/question-tree.ts`
- `src/data/adaptive-scoring.ts`

**Testing:**
- Integration tests for branching paths
- Scoring accuracy validation
- Edge case testing (all 1s, all 5s, contradictions)

### Phase 3: UI & State Management (Week 3-4)

**Deliverables:**
- [ ] Adaptive quiz store (Zustand)
- [ ] Business context collection UI
- [ ] Adaptive quiz card component (handles multiple response types)
- [ ] Progress tracking UI
- [ ] Comprehensive results page (4-pillar dashboard)

**Files to Create:**
- `src/stores/adaptive-quiz-store.ts`
- `src/app/(public)/assess-adaptive/*`
- `src/components/AdaptiveQuizCard.tsx`
- `src/components/ComprehensiveResults.tsx`

**Testing:**
- E2E testing for full assessment flow
- Mobile responsiveness testing
- Accessibility testing

### Phase 4: Backend & Database (Week 4-5)

**Deliverables:**
- [ ] Supabase schema migration
- [ ] Server actions for adaptive assessment
- [ ] Session persistence (save progress)
- [ ] Results storage with full metadata

**Files to Create:**
- Supabase migration files
- `src/app/actions/adaptive-assessment.ts`

**Testing:**
- Database integrity tests
- RLS policy validation
- Performance testing (query optimization)

### Phase 5: Migration & Rollout (Week 5-6)

**Deliverables:**
- [ ] Feature flag system (toggle between v1 and v2)
- [ ] A/B test infrastructure
- [ ] User migration strategy
- [ ] Analytics tracking (completion rates, time spent, drop-off points)

**Testing:**
- A/B test with real users (50/50 split)
- Completion rate comparison
- Diagnostic accuracy validation (do recommendations match?)
- User feedback collection

### Phase 6: Optimization & Refinement (Ongoing)

**Deliverables:**
- [ ] Question pool optimization based on data
- [ ] Branching logic refinement
- [ ] Recommendation accuracy improvements
- [ ] Edge case handling

**Metrics to Track:**
- Completion rate (target: >85%)
- Average time spent (target: 8-10 minutes)
- Drop-off points
- Recommendation acceptance (do users start the recommended protocol?)
- Retake improvement (do scores improve on retake?)

---

## Migration Strategy

### Parallel Systems Approach

**Phase 1: Build V2 Alongside V1 (Weeks 1-5)**
- Keep current `/assess` fully functional
- Build new `/assess-adaptive` in parallel
- No disruption to existing users

**Phase 2: Controlled Rollout (Weeks 5-6)**

**Option A: Feature Flag (Recommended)**
```typescript
// Feature flag in environment
const USE_ADAPTIVE_ASSESSMENT = process.env.NEXT_PUBLIC_ADAPTIVE_ASSESSMENT === 'true';

// In landing page
function AssessLanding() {
  if (USE_ADAPTIVE_ASSESSMENT) {
    return <AdaptiveAssessmentLanding />;
  }
  return <CurrentAssessmentLanding />;
}
```

**Option B: User Segment Testing**
- New users (signed up after launch date) → V2
- Existing users → V1 (with option to try V2)
- Pilot users → V2

**Option C: Progressive Enhancement**
- All users see V2
- "Switch to quick assessment (legacy)" option available
- Track which users prefer which version

**Phase 3: Data Comparison (Weeks 6-8)**

Compare V1 vs V2:
- Completion rates
- Time to complete
- User satisfaction (post-assessment survey)
- Recommendation quality (did it feel accurate?)
- Protocol engagement (do users start the recommended protocol?)

**Phase 4: Full Migration (Week 9+)**

If V2 performs better:
1. Make V2 default for all users
2. Deprecate V1 (keep for 30 days with warning)
3. Archive V1 code
4. Update all docs/links to V2

If V1 performs better:
1. Keep V1 as default
2. Offer V2 as "comprehensive assessment" option
3. Refine V2 based on learnings

---

## Quality Assurance & Validation

### Pre-Launch Validation Checklist

**Question Quality:**
- [ ] All 200+ questions reviewed for clarity
- [ ] No duplicate questions
- [ ] Subtext provides helpful context
- [ ] Questions work across all business stages

**Branching Logic:**
- [ ] All paths lead to valid next questions
- [ ] No dead ends
- [ ] No infinite loops
- [ ] Skip logic tested for all business stages

**Scoring Accuracy:**
- [ ] Category scores sum correctly
- [ ] Stage weighting applied correctly
- [ ] Validation questions trigger appropriately
- [ ] Band assignments match percentages

**User Experience:**
- [ ] Assessment completable in 8-12 minutes
- [ ] Progress bar accurate
- [ ] Back button works correctly
- [ ] Can save and resume
- [ ] Mobile responsive
- [ ] Accessible (keyboard navigation, screen readers)

**Technical:**
- [ ] Database schema handles all data types
- [ ] RLS policies secure
- [ ] No data loss on network interruption
- [ ] Performance tested (handles 1000+ concurrent users)

### Validation Test Scenarios

**Scenario 1: Solo Operator - Overwhelmed**
- Revenue: $300K/year
- Team: Solo
- Hours: 70+/week
- Expected: Skip team questions, deep-dive on CEO time, heavy revenue questions

**Scenario 2: Small Team - Growing**
- Revenue: $1.2M/year
- Team: 8 people
- Hours: 50-60/week
- Expected: Full team assessment, balanced across pillars

**Scenario 3: Established Business - Optimizing**
- Revenue: $4M/year
- Team: 35 people
- Hours: 40-50/week
- Expected: Optimization questions, skip basics, focus on systems

**Scenario 4: Contradiction Detection**
- User claims: Structured schedule (5/5), strategic focus (5/5)
- User also claims: 70+ hrs/week, firefighting daily
- Expected: Validation question triggers, scores recalibrated

**Scenario 5: All High Scores (Sanity Check)**
- User answers 5/5 on everything
- Expected: Validation questions, or flag for manual review

**Scenario 6: All Low Scores (Critical State)**
- User answers 1-2 on most questions
- Expected: All deep-dive paths triggered, maximum questions asked, clear recommendation

---

## Appendix: Question Count Summary

### Current System
- **Total Questions:** 120 (30 per pillar)
- **Time to Complete:** ~25 minutes
- **Pillar Coverage:** 1 pillar per assessment
- **Abandonment Risk:** High (long commitment for first impression)

### Adaptive System V2
- **Business Context:** 5 questions
- **Qualifiers:** 12 questions (3 × 4 pillars)
- **Deep-Dive:** 20-40 questions (adaptive based on maturity)
- **Validation:** 0-8 questions (triggered by contradictions)
- **Total Range:** 37-65 questions
- **Average:** 45 questions (~10 minutes)
- **Pillar Coverage:** All 4 pillars in one session
- **Abandonment Risk:** Lower (faster, more engaging, adaptive)

### Efficiency Gain
- **Time Reduction:** 50-60% (25 min → 10 min)
- **Diagnostic Depth:** Maintained or improved (deep-dive on problems)
- **Comprehensive Coverage:** 4 pillars vs 1
- **Recommendation Quality:** Higher (compare all pillars, stage-weighted)

---

## Next Steps - Decision Required

**We have completed:**
✅ Deep research and analysis of current system
✅ Target audience research and pain points
✅ Complete adaptive architecture design
✅ Branching logic for all 4 pillars
✅ Scoring algorithm with stage weighting
✅ Technical architecture and database schema
✅ Implementation roadmap (6-week plan)
✅ Migration strategy with A/B testing
✅ Quality assurance framework

**Decision Points:**

1. **Approve this architecture?**
   - Yes → Move to Phase 1 (build question tree)
   - Modify → What needs to change?

2. **Implementation timeline?**
   - Aggressive (4 weeks) - focus, fast iteration
   - Standard (6 weeks) - thorough testing
   - Conservative (8 weeks) - A/B test for 2+ weeks

3. **Migration approach?**
   - Feature flag (safest)
   - User segment (pilot first)
   - Progressive enhancement (bold)

4. **First action?**
   - Write all 200+ adaptive questions with full text
   - Build business stage classifier
   - Create database migration
   - Design comprehensive results UI

**I recommend:** Approve architecture → Start with question writing (most critical) → Build in parallel with V1 → A/B test before full migration.

Ready to proceed when you give the green light. 🚀
