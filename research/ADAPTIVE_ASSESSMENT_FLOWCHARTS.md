# Adaptive Assessment Visual Flowcharts

This document contains complete visual flowcharts for the adaptive assessment system across all 4 pillars. These Mermaid diagrams show the if/then branching logic that determines which questions users see based on their answers.

---

## Business Stage Detection Flow

```mermaid
flowchart TD
    Start([Start Assessment]) --> Q1[Q1: Weekly Revenue]
    Q1 --> CheckRev{Revenue?}
    CheckRev -->|$0-10k| Q2a[Q2a: Do you have a team?]
    CheckRev -->|$10k-50k| Q2b[Q2b: How many people?]
    CheckRev -->|$50k-150k| Q2c[Q2c: How many people?]
    CheckRev -->|$150k-500k| Q2d[Q2d: How many people?]
    CheckRev -->|$500k+| Stage5[Enterprise Stage]

    Q2a -->|No| Q3a[Q3a: Hours/week?]
    Q2a -->|Yes| Stage2[Small Team]

    Q3a -->|60+| Stage1Solo[Solo - Overwhelmed]
    Q3a -->|45-60| Stage1Busy[Solo - Standard]
    Q3a -->|&lt;45| Stage1Opt[Solo - Optimizing]

    Q2b -->|1-5| Stage2
    Q2b -->|6+| Stage3[Growing Business]

    Q2c -->|6-20| Stage3
    Q2c -->|20+| Stage4[Established Business]

    Q2d -->|20-50| Stage4
    Q2d -->|50+| Stage5

    Stage1Solo --> Pillar1
    Stage1Busy --> Pillar1
    Stage1Opt --> Pillar1
    Stage2 --> Pillar1
    Stage3 --> Pillar1
    Stage4 --> Pillar1
    Stage5 --> Pillar1

    Pillar1[Begin Pillar Questions]

    style Start fill:#fbbf24
    style Stage1Solo fill:#ef4444
    style Stage1Busy fill:#f59e0b
    style Stage1Opt fill:#10b981
    style Stage2 fill:#3b82f6
    style Stage3 fill:#8b5cf6
    style Stage4 fill:#06b6d4
    style Stage5 fill:#14b8a6
```

---

## Pillar 1: CEO Command Center Flow

```mermaid
flowchart TD
    Start([CEO Command Center]) --> Q1[Q1: Structured weekly schedule?<br/>1-5 Scale]

    Q1 -->|1-2 Disagree| TimeChaos[TIME CHAOS PATH]
    Q1 -->|3 Neutral| TimeInconsistent[INCONSISTENT PATH]
    Q1 -->|4-5 Agree| TimeStructured[STRUCTURED PATH]

    TimeChaos --> Q2a[Q2a: Hours worked/week?]
    Q2a -->|60+| Overwhelmed[CEO Overwhelm Subpath]
    Q2a -->|45-60| Standard[Standard Subpath]
    Q2a -->|&lt;45| Optimizing[Optimization Subpath]

    Overwhelmed --> Q3aa[Q3aa: Firefighting daily?]
    Overwhelmed --> Q3ab[Q3ab: Clear priorities?]
    Overwhelmed --> Q3ac[Q3ac: Strategic planning time?]
    Overwhelmed --> Q3ad[Q3ad: Delegate effectively?]
    Overwhelmed --> Q3ae[Q3ae: Weekly review habit?]

    Standard --> Q3ba[Q3ba: Time blocking?]
    Standard --> Q3bb[Q3bb: Priority clarity?]
    Standard --> Q3bc[Q3bc: Decision framework?]

    Optimizing --> Q3ca[Q3ca: Strategic vs tactical?]
    Optimizing --> Q3cb[Q3cb: KPI tracking?]

    TimeInconsistent --> Q2b[Q2b: Follow schedule consistently?]
    Q2b --> Q3da[Q3da: Biggest obstacle?]
    Q2b --> Q3db[Q3db: Emergency patterns?]
    Q2b --> Q3dc[Q3dc: Planning system?]

    TimeStructured --> Q2c[Q2c: Strategy vs firefighting?]
    Q2c -->|1-2 Firefighting| Q3ea[Q3ea: Why firefighting?]
    Q2c -->|3-5 Strategic| DecisionPath[DECISION PATH]

    DecisionPath --> Q4a[Q4a: Decision framework exists?]
    Q4a -->|1-2 No| Q5aa[Q5aa: Bottleneck decisions?]
    Q4a -->|3-5 Yes| MetricsPath[METRICS PATH]

    Q5aa --> Q5ab[Q5ab: Delegation authority?]

    MetricsPath --> Q5ba[Q5ba: KPIs defined?]
    Q5ba -->|1-2 No| Q6aa[Q6aa: Revenue visibility?]
    Q5ba -->|3-5 Yes| CoreFunctions[CORE FUNCTIONS PATH]

    Q6aa --> Q6ab[Q6ab: Leading indicators?]

    CoreFunctions --> Q6ba[Q6ba: Five functions time?]
    Q6ba --> Q7aa[Q7aa: Strategy time?]
    Q6ba --> Q7ab[Q7ab: Relationship time?]

    Q3aa --> Score1[Calculate CEO Score]
    Q3ab --> Score1
    Q3ac --> Score1
    Q3ad --> Score1
    Q3ae --> Score1
    Q3ba --> Score1
    Q3bb --> Score1
    Q3bc --> Score1
    Q3ca --> Score1
    Q3cb --> Score1
    Q3da --> Score1
    Q3db --> Score1
    Q3dc --> Score1
    Q3ea --> Score1
    Q5ab --> Score1
    Q6ab --> Score1
    Q7aa --> Score1
    Q7ab --> Score1

    Score1 --> Pillar2[Continue to Team Architecture]

    style Start fill:#fbbf24
    style TimeChaos fill:#ef4444
    style TimeInconsistent fill:#f59e0b
    style TimeStructured fill:#10b981
    style Overwhelmed fill:#ef4444
    style Score1 fill:#3b82f6
```

---

## Pillar 2: Team Architecture Flow

```mermaid
flowchart TD
    Start([Team Architecture]) --> CheckStage{Business Stage?}

    CheckStage -->|Solo| SoloSkip[Skip Most Team Questions]
    CheckStage -->|Small/Growing/Established| TeamFull[Full Team Assessment]

    SoloSkip --> Q1solo[Q1: Plan to hire?]
    Q1solo -->|Yes| Q2solo[Q2: Biggest hiring concern?]
    Q1solo -->|No| Score2Solo[Minimal Team Score]
    Q2solo --> Score2Solo
    Score2Solo --> Pillar3[Continue to Revenue]

    TeamFull --> Q1[Q1: Clear org chart?<br/>1-5 Scale]
    Q1 -->|1-2 Disagree| RoleChaos[ROLE CHAOS PATH]
    Q1 -->|3 Neutral| RoleUnclear[UNCLEAR ROLES PATH]
    Q1 -->|4-5 Agree| RoleClear[CLEAR ROLES PATH]

    RoleChaos --> Q2a[Q2a: Written job descriptions?]
    Q2a -->|1-2| Q3aa[Q3aa: Role overlap/gaps?]
    Q2a -->|3-5| Q3ab[Q3ab: Responsibility clarity?]

    Q3aa --> Q3ac[Q3ac: Hiring based on need?]
    Q3ab --> Q3ac
    Q3ac --> Q3ad[Q3ad: Onboarding process?]

    RoleUnclear --> Q2b[Q2b: Team knows priorities?]
    Q2b --> Q3ba[Q3ba: Cross-training exists?]
    Q3ba --> Q3bb[Q3bb: Backup coverage?]

    RoleClear --> PerformancePath[PERFORMANCE PATH]

    PerformancePath --> Q4a[Q4a: Performance metrics?]
    Q4a -->|1-2 No| Q5aa[Q5aa: How track performance?]
    Q4a -->|3-5 Yes| Q5ab[Q5ab: Regular reviews?]

    Q5aa --> Q5ac[Q5ac: Accountability system?]
    Q5ab --> Q5ac
    Q5ac --> Q5ad[Q5ad: Feedback loop?]

    Q5ad --> CulturePath[CULTURE PATH]

    CulturePath --> Q6a[Q6a: Core values defined?]
    Q6a -->|1-2 No| Q7aa[Q7aa: Culture by default?]
    Q6a -->|3-5 Yes| Q7ab[Q7ab: Values hiring filter?]

    Q7aa --> Q7ac[Q7ac: Team morale?]
    Q7ab --> Q7ac
    Q7ac --> Q7ad[Q7ad: Retention rate?]

    Q7ad --> IndependencePath[INDEPENDENCE PATH]

    IndependencePath --> Q8a[Q8a: Business runs without you?]
    Q8a -->|1-2 No| Q9aa[Q9aa: Bottleneck areas?]
    Q8a -->|3-5 Yes| Q9ab[Q9ab: Vacation test?]

    Q9aa --> Q9ac[Q9ac: Documented processes?]
    Q9ab --> Q9ac
    Q9ac --> Q9ad[Q9ad: Decision authority?]

    Q3ad --> Score2[Calculate Team Score]
    Q3bb --> Score2
    Q9ad --> Score2

    Score2 --> Pillar3

    style Start fill:#fbbf24
    style RoleChaos fill:#ef4444
    style RoleUnclear fill:#f59e0b
    style RoleClear fill:#10b981
    style SoloSkip fill:#6b7280
    style Score2 fill:#3b82f6
```

---

## Pillar 3: Revenue Pipeline Flow

```mermaid
flowchart TD
    Start([Revenue Pipeline]) --> Q1[Q1: Ideal client avatar defined?<br/>1-5 Scale]

    Q1 -->|1-2 Disagree| AvatarUnclear[AVATAR UNCLEAR PATH]
    Q1 -->|3 Neutral| AvatarFuzzy[FUZZY AVATAR PATH]
    Q1 -->|4-5 Agree| AvatarClear[CLEAR AVATAR PATH]

    AvatarUnclear --> Q2a[Q2a: Target everyone?]
    Q2a --> Q3aa[Q3aa: Best clients similar?]
    Q3aa --> Q3ab[Q3ab: Client pain points?]
    Q3ab --> Q3ac[Q3ac: Referral patterns?]
    Q3ac --> Q3ad[Q3ad: Marketing message?]

    AvatarFuzzy --> Q2b[Q2b: Multiple avatars?]
    Q2b --> Q3ba[Q3ba: Most profitable segment?]
    Q3ba --> Q3bb[Q3bb: Focus on one?]

    AvatarClear --> SalesPath[SALES PROCESS PATH]

    SalesPath --> Q4a[Q4a: Sales process documented?]
    Q4a -->|1-2 No| Q5aa[Q5aa: Sales steps vary?]
    Q4a -->|3-5 Yes| Q5ab[Q5ab: Team follows process?]

    Q5aa --> Q5ac[Q5ac: Closing rate?]
    Q5ab --> Q5ac
    Q5ac --> Q5ad[Q5ad: Sales scripts exist?]
    Q5ad --> Q5ae[Q5ae: Objection handling?]

    Q5ae --> OfferPath[OFFER LADDER PATH]

    OfferPath --> Q6a[Q6a: Multiple price points?]
    Q6a -->|1-2 No| Q7aa[Q7aa: Upsell opportunities?]
    Q6a -->|3-5 Yes| Q7ab[Q7ab: Client ascension path?]

    Q7aa --> Q7ac[Q7ac: Backend offers?]
    Q7ab --> Q7ac
    Q7ac --> Q7ad[Q7ad: Recurring revenue?]
    Q7ad --> Q7ae[Q7ae: Client LTV known?]

    Q7ae --> RetentionPath[RETENTION PATH]

    RetentionPath --> Q8a[Q8a: Retention rate?]
    Q8a --> Q8b[Q8b: Churn reasons?]
    Q8b --> Q8c[Q8c: Client feedback loop?]

    Q8c --> TrackingPath[TRACKING PATH]

    TrackingPath --> Q9a[Q9a: Revenue by source?]
    Q9a -->|1-2 No| Q10aa[Q10aa: Track leads?]
    Q9a -->|3-5 Yes| Q10ab[Q10ab: Forecast accuracy?]

    Q10aa --> Q10ac[Q10ac: CAC known?]
    Q10ab --> Q10ac
    Q10ac --> Q10ad[Q10ad: Pipeline visibility?]
    Q10ad --> Q10ae[Q10ae: Revenue predictable?]

    Q3ad --> Score3[Calculate Revenue Score]
    Q3bb --> Score3
    Q8c --> Score3
    Q10ae --> Score3

    Score3 --> Pillar4[Continue to Conversion]

    style Start fill:#fbbf24
    style AvatarUnclear fill:#ef4444
    style AvatarFuzzy fill:#f59e0b
    style AvatarClear fill:#10b981
    style Score3 fill:#3b82f6
```

---

## Pillar 4: Conversion Intelligence Flow

```mermaid
flowchart TD
    Start([Conversion Intelligence]) --> Q1[Q1: Buyer journey mapped?<br/>1-5 Scale]

    Q1 -->|1-2 Disagree| JourneyUnknown[JOURNEY UNKNOWN PATH]
    Q1 -->|3 Neutral| JourneyPartial[PARTIAL JOURNEY PATH]
    Q1 -->|4-5 Agree| JourneyClear[CLEAR JOURNEY PATH]

    JourneyUnknown --> Q2a[Q2a: Track touchpoints?]
    Q2a --> Q3aa[Q3aa: Awareness stage tracking?]
    Q3aa --> Q3ab[Q3ab: Consideration tracking?]
    Q3ab --> Q3ac[Q3ac: Decision stage tracking?]
    Q3ac --> Q3ad[Q3ad: Drop-off points known?]
    Q3ad --> Q3ae[Q3ae: Conversion rate by stage?]

    JourneyPartial --> Q2b[Q2b: Full funnel visibility?]
    Q2b --> Q3ba[Q3ba: Biggest gaps?]
    Q3ba --> Q3bb[Q3bb: Attribution model?]

    JourneyClear --> ROIPath[MARKETING ROI PATH]

    ROIPath --> Q4a[Q4a: Marketing ROI measured?]
    Q4a -->|1-2 No| Q5aa[Q5aa: Track ad spend?]
    Q4a -->|3-5 Yes| Q5ab[Q5ab: ROI by channel?]

    Q5aa --> Q5ac[Q5ac: Cost per lead?]
    Q5ab --> Q5ac
    Q5ac --> Q5ad[Q5ad: Best channels known?]
    Q5ad --> Q5ae[Q5ae: Budget allocation data-driven?]

    Q5ae --> AutomationPath[AUTOMATION PATH]

    AutomationPath --> Q6a[Q6a: Email sequences automated?]
    Q6a -->|1-2 No| Q7aa[Q7aa: Manual follow-up?]
    Q6a -->|3-5 Yes| Q7ab[Q7ab: Segmentation exists?]

    Q7aa --> Q7ac[Q7ac: Lead nurture system?]
    Q7ab --> Q7ac
    Q7ac --> Q7ad[Q7ad: Retargeting campaigns?]
    Q7ad --> Q7ae[Q7ae: CRM automation?]
    Q7ae --> Q7af[Q7af: Abandoned cart recovery?]

    Q7af --> ScalePath[SCALABILITY PATH]

    ScalePath --> Q8a[Q8a: Marketing repeatable?]
    Q8a -->|1-2 No| Q9aa[Q9aa: One-off campaigns?]
    Q8a -->|3-5 Yes| Q9ab[Q9ab: Documented playbooks?]

    Q9aa --> Q9ac[Q9ac: Testing framework?]
    Q9ab --> Q9ac
    Q9ac --> Q9ad[Q9ad: Scale without breaking?]
    Q9ad --> Q9ae[Q9ae: Team can execute?]

    Q3ae --> Score4[Calculate Conversion Score]
    Q3bb --> Score4
    Q9ae --> Score4

    Score4 --> Results[Generate Results]

    style Start fill:#fbbf24
    style JourneyUnknown fill:#ef4444
    style JourneyPartial fill:#f59e0b
    style JourneyClear fill:#10b981
    style Score4 fill:#3b82f6
    style Results fill:#10b981
```

---

## Complete Assessment Flow (High-Level)

```mermaid
flowchart TD
    Start([Start Assessment]) --> Stage[Detect Business Stage<br/>3 questions]

    Stage --> P1[Pillar 1: CEO Command<br/>8-12 adaptive questions]
    P1 --> P2[Pillar 2: Team Architecture<br/>2-13 adaptive questions]
    P2 --> P3[Pillar 3: Revenue Pipeline<br/>10-14 adaptive questions]
    P3 --> P4[Pillar 4: Conversion Intelligence<br/>10-13 adaptive questions]

    P4 --> Calculate[Calculate All Scores<br/>Apply Stage Weighting]

    Calculate --> Results[Results Dashboard]

    Results --> Pillar1Score[Pillar 1: X%]
    Results --> Pillar2Score[Pillar 2: Y%]
    Results --> Pillar3Score[Pillar 3: Z%]
    Results --> Pillar4Score[Pillar 4: W%]

    Pillar1Score --> Recommend[Recommend Weakest Pillar]
    Pillar2Score --> Recommend
    Pillar3Score --> Recommend
    Pillar4Score --> Recommend

    Recommend --> Protocol[Generate 30-Day Protocol<br/>for Weakest Pillar]

    Protocol --> Dashboard[Dashboard Access]

    style Start fill:#fbbf24
    style Stage fill:#f59e0b
    style P1 fill:#3b82f6
    style P2 fill:#8b5cf6
    style P3 fill:#10b981
    style P4 fill:#06b6d4
    style Calculate fill:#fbbf24
    style Results fill:#10b981
    style Recommend fill:#ef4444
    style Protocol fill:#fbbf24
```

---

## Question Count Summary by Path

### Pillar 1: CEO Command Center
- **Time Chaos Path (1-2)**: 3-8 questions depending on hours worked
  - Overwhelmed (60+ hrs): 8 questions total
  - Standard (45-60 hrs): 6 questions total
  - Optimizing (<45 hrs): 5 questions total
- **Inconsistent Path (3)**: 6 questions
- **Structured Path (4-5)**: 5-9 questions depending on metrics maturity

**Total Range**: 5-9 questions per user

---

### Pillar 2: Team Architecture
- **Solo Stage**: 2 questions (skip most team questions)
- **Role Chaos Path**: 7 questions
- **Unclear Roles Path**: 6 questions
- **Clear Roles Path**: 10-13 questions (full assessment)

**Total Range**: 2-13 questions depending on stage/maturity

---

### Pillar 3: Revenue Pipeline
- **Avatar Unclear Path**: 8 questions
- **Fuzzy Avatar Path**: 6 questions
- **Clear Avatar Path**: 10-14 questions (full pipeline assessment)

**Total Range**: 6-14 questions per user

---

### Pillar 4: Conversion Intelligence
- **Journey Unknown Path**: 9 questions
- **Partial Journey Path**: 7 questions
- **Clear Journey Path**: 10-13 questions

**Total Range**: 7-13 questions per user

---

## Total Assessment Length

**Business Stage Detection**: 3 questions

**Pillar Questions**:
- Minimum path: 5 + 2 + 6 + 7 = **20 pillar questions**
- Average path: 7 + 7 + 10 + 10 = **34 pillar questions**
- Maximum path: 9 + 13 + 14 + 13 = **49 pillar questions**

**Total Assessment Length**:
- **Minimum**: 23 questions (~5 minutes)
- **Average**: 37 questions (~8 minutes)
- **Maximum**: 52 questions (~11 minutes)

**Current System**: 120 questions (~25 minutes)

**Efficiency Gain**: 50-70% reduction in time while maintaining accuracy through adaptive branching.

---

## Branching Rules Summary

### Answer Scale Mapping
- **1-2 (Strongly Disagree/Disagree)**: Problem exists → Ask detailed diagnostic questions
- **3 (Neutral)**: Inconsistent/Partial → Ask moderate depth questions
- **4-5 (Agree/Strongly Agree)**: System exists → Skip basics, ask advanced questions

### Business Stage Weighting
Each business stage has different pillar priorities:

| Stage | CEO Time | Team | Revenue | Marketing |
|-------|----------|------|---------|-----------|
| Solo - Overwhelmed | 40% | 10% | 40% | 10% |
| Solo - Optimizing | 30% | 15% | 35% | 20% |
| Small Team | 25% | 30% | 30% | 15% |
| Growing | 25% | 25% | 25% | 25% |
| Established | 20% | 35% | 25% | 20% |
| Enterprise | 25% | 30% | 20% | 25% |

### Path Skip Logic
- **Solo operators**: Skip most team architecture questions (2 instead of 10+)
- **High scores (4-5)**: Skip basic questions, go straight to advanced
- **Low scores (1-2)**: Deep dive into problem areas with diagnostic questions
- **Stage-based**: Certain questions only shown to specific business stages

---

## Next Steps

1. **Review these flowcharts** - Do the branching paths make sense?
2. **Identify any missing paths** - Are there scenarios we haven't covered?
3. **Validate question pools** - Do we need to add/remove questions?
4. **Approve framework** - Ready to move to implementation?

Once approved, we'll implement:
- Question tree data structure
- Branching engine
- UI for adaptive quiz
- Multi-pillar results page
- Recommendation algorithm
