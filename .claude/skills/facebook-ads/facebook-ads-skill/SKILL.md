---
name: facebook-ads-skill
description: Master Facebook Ads for maximum ROI with precise targeting and data-driven optimization. Use for campaign structure and objectives, audience targeting (core/custom/lookalike), persona development, ad creative and copywriting, ad formats (image/video/carousel), placement optimization, pixel implementation, conversion tracking, budget allocation, A/B testing, ROAS/CPA/CTR/CPM analysis, retargeting funnels, scaling strategies, and troubleshooting underperforming campaigns.
---

# Facebook Ads Mastery Skill

Master data-driven Facebook advertising for maximum ROI and precision targeting.

---

## Core Principles

### Campaign Structure Hierarchy

```
Business Manager
  └─ Ad Account
       └─ Campaign (Objective)
            └─ Ad Set (Audience + Placement + Budget)
                 └─ Ad (Creative + Copy)
```

**Best Practice:**
- 1 Campaign = 1 Objective
- 3-5 Ad Sets per Campaign (different audiences)
- 2-3 Ads per Ad Set (different creatives)

---

## Campaign Objectives Framework

### Awareness Stage
- **Brand Awareness** - Maximize reach
- **Reach** - Show to most people

### Consideration Stage
- **Traffic** - Drive clicks to website
- **Engagement** - Boost posts, page likes
- **App Installs** - Drive downloads
- **Video Views** - Watch video content
- **Lead Generation** - Collect leads via forms
- **Messages** - Start conversations

### Conversion Stage
- **Conversions** - Drive purchases/actions
- **Catalog Sales** - Dynamic product ads
- **Store Traffic** - Drive offline visits

### Choosing the Right Objective

| Goal | Objective |
|------|-----------:|
| Build awareness | Brand Awareness / Reach |
| Drive website traffic | Traffic |
| Collect emails | Lead Generation |
| Sell products online | Conversions / Catalog Sales |
| Get app downloads | App Installs |
| Get messages/inquiries | Messages |
| Boost engagement | Engagement |

---

## Audience Targeting Mastery

### 1. Core Audiences (Manual Targeting)

#### Demographics
- Age range (minimum 18+)
- Gender (All, Male, Female)
- Location (Country, Region, City, ZIP)
- Language
- Education level
- Job title
- Relationship status
- Life events (Engaged, Newlywed, New parent)

#### Interests (The Gold Mine)

**How to find winning interests:**

1. **Layered Targeting** (Narrow Audience)
   ```
   Interest 1: "Small Business Owners"
   AND
   Interest 2: "Accounting Software"
   = Hyper-targeted audience
   ```

2. **Broad + Narrow Stacking**
   ```
   Age: 25-65
   Interest: "Entrepreneurship"
   AND (Narrow): "Marketing"
   AND (Narrow): "Facebook Marketing"
   ```

3. **Competitor Targeting**
   ```
   Interests:
   - [Competitor Brand 1]
   - [Competitor Brand 2]
   - [Industry Magazine]
   - [Industry Influencer]
   ```

#### Behaviors
- Purchase behavior (Engaged shoppers, High-value purchasers)
- Device usage (iPhone users, Android users)
- Travel (Frequent travelers, Commuters)
- Business (Small business owners, IT decision makers)

#### Connections
- People who like your Page
- Friends of people who like your Page
- Exclude people who like your Page (prospecting)

---

### 2. Custom Audiences (Your Data)

#### Website Traffic (via Pixel)

**Pixel Events:**
- View Content (visited product page)
- Add to Cart (added but didn't buy)
- Initiate Checkout (started checkout)
- Purchase (completed transaction)
- Lead (submitted form)

**Retargeting Funnel:**
```
30 days: All website visitors
14 days: Product page viewers (exclude buyers)
7 days: Cart abandoners (exclude buyers)
1 day: Checkout abandoners (HOT LEADS!)
```

**Pixel Implementation:** See `references/pixel-setup.md` for detailed code and event tracking.

#### Customer List Upload
- Email list (existing customers)
- Phone numbers
- App user IDs

#### Engagement Audiences
- Video viewers (25%, 50%, 75%, 95%)
- Instagram profile engagers
- Facebook Page engagers
- Lead form openers

---

### 3. Lookalike Audiences (Scaling Gold)

Facebook finds people similar to your best customers.

**Best Lookalike Sources:**
1. Purchasers (Top 1% - best ROI)
2. High LTV Customers (Top 5% spenders)
3. Email Subscribers (engaged list)
4. Website Visitors (180 days, min 1000 people)
5. Engaged Video Viewers (watched 75%+)

**Lookalike Size Strategy:**

| Audience % | Use Case | Quality |
|:----------:|:--------:|:-------:|
| 1% | Testing, highest quality | Excellent |
| 2-3% | Scaling winners | Very Good |
| 5-6% | Broad reach | Good |
| 10% | Max scale (lower quality) | Fair |

**Advanced Stacking:**
```
1% Lookalike (Purchasers)
AND
Interest: [Related topic]
AND
Age: 25-54
= Hyper-targeted lookalike
```

---

## Persona Development

### Framework: 5W Persona Builder

#### 1. WHO are they?
- Age range, gender, location
- Job title/role, income level
- Education level, relationship status

#### 2. WHAT do they want?
- Primary goal, pain points
- Desires, frustrations
- Current solutions (competitors)

#### 3. WHERE do they hang out?
- Facebook Groups
- Pages they follow
- Brands they like
- Influencers they follow
- Publications they read

#### 4. WHEN do they buy?
- Time of day, day of week
- Season/month
- Trigger events (life events, holidays)

#### 5. WHY will they buy from YOU?
- Unique value proposition
- Trust factors needed
- Social proof
- Objections to overcome

---

## Ad Creative & Copy

### Ad Formats

#### Image Ad
- Single image + text + CTA
- Best for: Simple message, product showcase
- Specs: 1080 x 1080 px (square)

#### Video Ad
- Video + text + CTA
- Best for: Storytelling, demos, testimonials
- Specs: 9:16 (Stories), 1:1 (Feed), 16:9 (Landscape)
- Length: 15-60 seconds ideal

#### Carousel Ad
- 2-10 swipeable cards
- Best for: Multiple products, features, step-by-step
- Specs: 1080 x 1080 px per card

#### Collection Ad
- Cover image/video + product grid
- Best for: E-commerce, browsing experience
- Mobile-only

### Creative Best Practices

**Image:**
- Bright, high-contrast colors
- Faces (increase engagement 30%)
- Text overlay (max 20% of image)
- Show product in use

**Video:**
- Hook in first 3 seconds
- Captions (85% watch without sound)
- Mobile-first (vertical 9:16)
- CTA in video + description

**Copy:**
- Start with benefit
- Use emoji sparingly
- Add urgency (Limited time, Sale ends)
- Clear CTA

### Copywriting Formula

**PAS (Problem-Agitate-Solution):**
```
Problem:   "Tired of slow website load times?"
Agitate:   "Every second costs you customers"
Solution:  "Our CDN speeds up your site 10x"
CTA:       "Start free trial →"
```

**AIDA:**
```
Attention:  Bold claim or question
Interest:   Benefit or feature
Desire:     Social proof, urgency
Action:     Clear CTA
```

---

## Placement Optimization

### Facebook Placements
- **Feed** - Main news feed
- **Stories** - Full-screen vertical ads
- **Reels** - Short-form video
- **In-Stream Video** - Mid-roll video ads
- **Messenger** - Message inbox
- **Right Column** - Desktop sidebar

### Instagram Placements
- **Feed** - Main feed
- **Stories** - Full-screen vertical
- **Reels** - Short-form video
- **Explorer** - Discovery tab
- **Messenger** - Message inbox

### Audience Network
- Third-party mobile apps & websites
- Expanded reach beyond Facebook/Instagram
- Lower cost, but less control

**Placement Strategy:**
- Test all placements first
- Disable underperforming ones
- Optimize budgets on winners

---

## Budget & Bid Management

### Budget Types

**Daily Budget:** Spend limit per day (recommended)
```
$50/day = $1,500/month (~30 days)
```

**Lifetime Budget:** Total spend over campaign duration
```
$500 lifetime over 10 days = $50/day average
```

**Cost Controls:**
- **Manual CPC** - You set max cost per click
- **Target CPA** - Optimize for conversions at target cost (needs 50+ conversions)
- **Target ROAS** - Maximize revenue at target return (e-commerce)
- **Maximize Conversions** - Most conversions within budget

---

## Key Metrics

**Impressions:** How many times ad shown
**Clicks:** How many clicked
**CTR (Click-Through Rate):** Clicks / Impressions x 100%
**CPC (Cost Per Click):** Total Spend / Clicks
**CPM (Cost Per Mille):** Cost per 1,000 impressions
**Conversions:** Desired actions (purchase, signup, lead)
**CVR (Conversion Rate):** Conversions / Clicks x 100%
**CPA (Cost Per Acquisition):** Total Spend / Conversions
**ROAS (Return on Ad Spend):** Revenue / Ad Spend

### ROAS Benchmarks

```
ROAS < 1x  = Losing money
ROAS = 2x  = Breaking even (after COGS)
ROAS = 3x  = Profitable
ROAS > 5x  = Excellent
```

---

## Conversion Tracking

For detailed UTM parameters, server-side tracking, and Conversion API setup, see `references/conversion-tracking.md`.

**Quick Setup:**
1. Install Facebook Pixel on website
2. Add UTM parameters to URLs
3. Track key events (View, Add to Cart, Purchase)
4. Verify pixel firing
5. Wait for conversion data before optimizing

---

## A/B Testing & Optimization

See `references/optimization.md` for detailed A/B testing frameworks, troubleshooting low CTR/CVR, and scaling strategies.

**Testing Rules:**
- Test one variable at a time
- Run until statistical significance
- Need 100+ conversions per variant
- 2 weeks minimum

---

## Scaling Strategies

### Vertical Scaling

Increase budget on winning campaigns

```
Day 1:  $100/day -> ROAS 5x
Day 3:  $150/day (+50%)
Day 7:  $200/day (+33%)
Day 14: $300/day (+50%)

Monitor: If ROAS drops below 3x, reduce budget
```

### Horizontal Scaling

Duplicate winning campaigns with new audiences

```
Original:   US, Age 25-35, Interests: Fitness
Duplicate 1: Canada, Age 25-35, Interests: Fitness
Duplicate 2: US, Age 35-45, Interests: Fitness
Duplicate 3: US, Age 25-35, Lookalike 1%
```

---

## Campaign Launch Checklist

**Setup:**
- [ ] Objective selected
- [ ] Budget set
- [ ] Targeting configured
- [ ] Conversion tracking installed
- [ ] UTM parameters added

**Creative:**
- [ ] 3+ ad variations created
- [ ] Images/videos meet specs
- [ ] Copy includes CTA
- [ ] Landing page ready

**Testing:**
- [ ] Preview ads on mobile & desktop
- [ ] Verify pixel firing
- [ ] Test checkout flow
- [ ] Check spelling/links

**Launch:**
- [ ] Campaign activated
- [ ] Monitor first 24 hours
- [ ] Adjust bids if needed
- [ ] Document in spreadsheet

---

## Additional Resources

- `references/conversion-tracking.md` - UTM parameters, Conversion API, server-side tracking
- `references/optimization.md` - A/B testing frameworks, troubleshooting, scaling
- `references/pixel-setup.md` - Facebook Pixel implementation and event tracking
