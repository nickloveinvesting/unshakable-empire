import type { DayProtocol } from "@/types/protocol";

export const incomeProtocol: DayProtocol[] = [
  {
    day: 1,
    title: "Cash Flow Snapshot",
    intention: "Map every dollar flowing in and out to understand your true financial picture.",
    tasks: [
      {
        id: "i1-t1",
        label: "List all sources of monthly income",
        description: "Include salary, side income, rental income, dividends, interest, and any other cash inflows.",
      },
      {
        id: "i1-t2",
        label: "Export the last 3 months of bank and credit card statements",
        description: "Download transactions to see actual spending, not what you think you spend.",
      },
      {
        id: "i1-t3",
        label: "Calculate your average monthly income and average monthly spending",
        description: "The gap between these two numbers is your wealth-building capacity.",
      },
    ],
    educationalContent:
      "Cash flow is the lifeblood of your financial empire. It does not matter how much you earn if you spend it all. The gap between income and expenses -- your savings rate -- is the most controllable factor in building wealth. A 20% savings rate means you are living on 80% of your income. Increasing that to 30% accelerates your wealth-building timeline by years. Most people who feel stretched are not under-earning; they have cash flow leaks they have never identified. The next 30 days will help you find them, plug them, and redirect that money toward building your empire.",
  },
  {
    day: 2,
    title: "Expense Categorization",
    intention: "Organize spending into clear categories to identify opportunities for optimization.",
    tasks: [
      {
        id: "i2-t1",
        label: "Categorize all expenses into: Fixed, Variable, and Discretionary",
        description: "Fixed: rent, insurance, loan payments. Variable: groceries, utilities. Discretionary: dining, entertainment.",
      },
      {
        id: "i2-t2",
        label: "Identify your top 5 spending categories by total amount",
        description: "Housing, transportation, and food typically dominate. See where your money actually goes.",
      },
      {
        id: "i2-t3",
        label: "Flag any recurring subscriptions or automatic charges you forgot about",
        description: "The average American has 12 paid subscriptions. Review every single one.",
      },
    ],
    educationalContent:
      "The 50/30/20 framework is a useful starting point: 50% of after-tax income on needs (housing, utilities, groceries, insurance, minimum debt payments), 30% on wants (dining, entertainment, travel, hobbies), and 20% on savings and extra debt payments. However, to build wealth faster, high performers aim for 50/20/30 -- with 30% going to savings and investing. The real power comes from auditing your actual numbers against these targets. Most people discover that their 'needs' category contains items that are actually 'wants' in disguise -- premium cable packages, new car payments when a used car would work, or a larger apartment than necessary.",
  },
  {
    day: 3,
    title: "Subscription Audit",
    intention: "Eliminate subscription waste -- the silent cash flow killer.",
    tasks: [
      {
        id: "i3-t1",
        label: "List every active subscription and its monthly cost",
        description: "Streaming, software, gym, meal kits, apps, cloud storage, magazines, boxes, memberships.",
      },
      {
        id: "i3-t2",
        label: "Rate each subscription: Essential, Nice-to-Have, or Cancel",
        description: "Be honest. If you have not used it in 30 days, it is probably not essential.",
      },
      {
        id: "i3-t3",
        label: "Cancel at least 2 subscriptions today and redirect the savings",
        description: "Even $30/month saved equals $360/year. Over 30 years invested at 8%, that is over $40,000.",
      },
    ],
    educationalContent:
      "Americans spend an average of $219 per month on subscriptions, and 42% of people are paying for subscriptions they have forgotten about. Subscription services are designed with frictionless sign-up and friction-filled cancellation because companies know inertia works in their favor. Fight back by doing a complete audit quarterly. A useful trick: switch all subscriptions to a single credit card, then review that card statement to see every recurring charge in one place. For services you want to keep, check if annual billing offers a discount (many give 15-20% off for paying yearly).",
  },
  {
    day: 4,
    title: "Fixed Expense Optimization",
    intention: "Reduce your largest fixed costs -- housing, insurance, and debt payments.",
    tasks: [
      {
        id: "i4-t1",
        label: "Review your housing costs as a percentage of gross income",
        description: "Target: 25-28% of gross income or less. Above 30% puts significant pressure on your cash flow.",
      },
      {
        id: "i4-t2",
        label: "Shop your auto and home insurance for better rates",
        description: "Get 3 competing quotes. Loyalty to one insurer rarely pays off -- rates vary significantly.",
      },
      {
        id: "i4-t3",
        label: "Review your cell phone and internet plans for potential savings",
        description: "Call your providers and negotiate or switch to a lower-cost plan that meets your actual usage.",
      },
    ],
    educationalContent:
      "Fixed expenses are the biggest lever in your budget because they recur every month without any action. Reducing a fixed expense by $100/month saves $1,200/year every year going forward with zero ongoing effort. The three largest categories for most households are housing, transportation, and insurance. If your housing costs exceed 30% of gross income, you are house-rich and cash-poor. Car payments average $700/month for new vehicles -- buying a 2-3 year old car can cut this in half while still getting a reliable vehicle with remaining warranty. These big-category optimizations create more savings than hundreds of small daily cutbacks combined.",
  },
  {
    day: 5,
    title: "Debt Inventory and Strategy",
    intention: "Map all debts and choose the optimal payoff strategy.",
    tasks: [
      {
        id: "i5-t1",
        label: "List all debts with balance, interest rate, minimum payment, and payoff date",
        description: "Include mortgage, auto, student loans, credit cards, personal loans, medical debt, and any other obligations.",
      },
      {
        id: "i5-t2",
        label: "Calculate your total monthly debt payments and debt-to-income ratio",
        description: "Total monthly debt payments divided by gross monthly income. Above 36% is a red flag.",
      },
      {
        id: "i5-t3",
        label: "Choose your payoff method: Avalanche (highest rate first) or Snowball (lowest balance first)",
        description: "Avalanche saves the most money. Snowball builds momentum with quick wins. Pick what you will stick with.",
      },
    ],
    educationalContent:
      "Not all debt is equal. High-interest debt (credit cards at 20%+) is an emergency that should be attacked aggressively. Moderate-interest debt (student loans at 5-7%, auto loans) should be paid on schedule while you build investments. Low-interest debt (mortgage at 3-4%) can actually be beneficial when your investments earn more than the loan costs. The avalanche method (paying off highest interest rate first) is mathematically optimal and saves the most money. The snowball method (smallest balance first) provides psychological wins that keep you motivated. Research shows the snowball method actually has higher completion rates because motivation matters more than math when it comes to behavior change.",
  },
  {
    day: 6,
    title: "Credit Card Optimization",
    intention: "Turn credit cards from a liability into a tool that works for you.",
    tasks: [
      {
        id: "i6-t1",
        label: "List all credit cards with their interest rate, annual fee, and rewards structure",
        description: "Understanding your card lineup helps you use the right card for each purchase.",
      },
      {
        id: "i6-t2",
        label: "Set up automatic full-balance payment on all credit cards",
        description: "Paying in full every month means you never pay interest. This is non-negotiable for wealth building.",
      },
      {
        id: "i6-t3",
        label: "Optimize your card usage to maximize cash back or points",
        description: "Use category-specific cards for groceries, gas, and dining to earn 3-5% back on everyday spending.",
      },
    ],
    educationalContent:
      "Credit cards are a powerful financial tool when used correctly and a devastating trap when used poorly. The cardinal rule: never carry a balance. Credit card interest rates (often 20-28%) compound monthly and can turn a $5,000 balance into years of payments. If you currently carry a balance, a 0% balance transfer offer can give you 12-21 months to pay it off interest-free. Once you are paying in full monthly, credit card rewards become free money -- top cards return 2-5% on spending categories, which can amount to $1,000-$3,000 per year for an average household. But rewards only benefit you if you are not paying interest.",
  },
  {
    day: 7,
    title: "Budgeting System Setup",
    intention: "Implement a budgeting system you will actually use consistently.",
    tasks: [
      {
        id: "i7-t1",
        label: "Choose a budgeting method: Zero-Based, Envelope, or Pay-Yourself-First",
        description: "Zero-based assigns every dollar a job. Envelope uses spending limits. Pay-yourself-first automates savings first.",
      },
      {
        id: "i7-t2",
        label: "Set up your chosen budgeting tool",
        description: "Options: YNAB, Monarch, spreadsheet, or the simple Pay-Yourself-First automated approach.",
      },
      {
        id: "i7-t3",
        label: "Create your first month's budget based on your cash flow analysis",
        description: "Use your actual spending data from Day 1 as the starting point, then adjust toward your goals.",
      },
    ],
    educationalContent:
      "The best budgeting system is the one you will actually use. If you are detail-oriented, zero-based budgeting (where every dollar is assigned to a category) provides maximum control. If you want simplicity, the Pay-Yourself-First method is unbeatable: automate savings and investments on payday, then spend the rest guilt-free. This requires only two actions -- setting up automatic transfers and spending less than what remains. Many high earners use this approach because it requires minimal ongoing maintenance. The key insight: a budget is not about restriction. It is about intentional allocation. Every dollar should have a purpose: spend, save, invest, or give.",
  },
  {
    day: 8,
    title: "Income Tax Optimization",
    intention: "Reduce your tax burden through legal strategies and maximize take-home pay.",
    tasks: [
      {
        id: "i8-t1",
        label: "Review your most recent tax return and identify your effective tax rate",
        description: "Effective rate = total tax paid / total income. This is the true percentage you pay.",
      },
      {
        id: "i8-t2",
        label: "Identify all deductions and credits you may be missing",
        description: "Student loan interest, educator expenses, energy credits, childcare credits, retirement contribution deductions.",
      },
      {
        id: "i8-t3",
        label: "Adjust your W-4 withholding if you consistently get a large refund",
        description: "A large refund means you gave the government an interest-free loan. Reduce withholding and invest the difference.",
      },
    ],
    educationalContent:
      "The U.S. tax code has over 75,000 pages of provisions, and many of them are designed to incentivize specific behaviors: saving for retirement, buying a home, starting a business, going to school, and giving to charity. If you are not taking advantage of these provisions, you are voluntarily paying more tax than required. The difference between your marginal tax rate (the rate on your last dollar) and your effective tax rate (the average rate on all dollars) reveals how much tax planning is already working for you. A large refund is not a bonus -- it is your money that you lent to the government at 0% interest. Adjust withholding so you break even or owe slightly at tax time, and invest the extra take-home pay throughout the year.",
  },
  {
    day: 9,
    title: "Side Income Assessment",
    intention: "Evaluate opportunities to create additional income streams beyond your primary job.",
    tasks: [
      {
        id: "i9-t1",
        label: "List your marketable skills, knowledge, and experience",
        description: "What do people ask you for help with? What do you know that others would pay to learn?",
      },
      {
        id: "i9-t2",
        label: "Research 3 potential side income opportunities that align with your skills",
        description: "Freelancing, consulting, online courses, tutoring, rental income, content creation, e-commerce.",
      },
      {
        id: "i9-t3",
        label: "Calculate the potential hourly return of each opportunity",
        description: "Not all side income is worth your time. Compare the effective hourly rate to your current earnings.",
      },
    ],
    educationalContent:
      "Multiple income streams are the hallmark of financial resilience. Relying on a single paycheck means one decision by one employer can eliminate 100% of your income overnight. Even a modest side income of $500-$1,000/month provides a psychological and financial buffer that reduces stress and accelerates wealth building. The most valuable side income leverages your existing expertise: a marketer doing freelance consulting, an accountant doing tax preparation, a teacher offering tutoring. These activities earn $50-$200+ per hour because they use skills you already have. Avoid trading time for minimum wage -- focus on opportunities where your unique knowledge creates disproportionate value.",
  },
  {
    day: 10,
    title: "Passive Income Foundations",
    intention: "Understand and begin building income streams that do not require your active time.",
    tasks: [
      {
        id: "i10-t1",
        label: "Learn the difference between active, portfolio, and passive income",
        description: "Active = you work for it. Portfolio = dividends and interest. Passive = business income without material participation.",
      },
      {
        id: "i10-t2",
        label: "Assess your current passive income (if any)",
        description: "Dividends, interest, rental income after property management, royalties, licensing fees, affiliate income.",
      },
      {
        id: "i10-t3",
        label: "Choose one passive income stream to develop over the next 12 months",
        description: "Be realistic: true passive income requires significant upfront investment of time, money, or both.",
      },
    ],
    educationalContent:
      "True passive income is rare and almost always requires significant upfront investment. Rental properties require capital and ongoing management (or management fees). Dividend portfolios require hundreds of thousands of dollars to generate meaningful income. Digital products (courses, ebooks, templates) require months of creation time before generating any revenue. The path to passive income is: (1) Build active income and save aggressively. (2) Invest savings in income-producing assets. (3) Reinvest returns until passive income covers your expenses. This process typically takes 10-20 years of disciplined saving and investing. Beware of anyone promising passive income with no upfront investment -- that is marketing, not reality.",
  },
  {
    day: 11,
    title: "Salary Negotiation Preparation",
    intention: "Prepare to earn what you are worth in your primary career.",
    tasks: [
      {
        id: "i11-t1",
        label: "Research market salary data for your role and experience level",
        description: "Use Glassdoor, Levels.fyi, Payscale, LinkedIn Salary, and industry salary surveys.",
      },
      {
        id: "i11-t2",
        label: "Document your key achievements, metrics, and impact over the past year",
        description: "Quantify your contributions: revenue generated, costs saved, efficiency improved, projects delivered.",
      },
      {
        id: "i11-t3",
        label: "Draft your salary negotiation talking points",
        description: "Frame the conversation around the value you deliver, not your personal financial needs.",
      },
    ],
    educationalContent:
      "The lifetime cost of not negotiating your salary is staggering. A single $5,000 raise at age 25, compounded through future raises and retirement contributions, can be worth over $600,000 by retirement. Yet most people never negotiate because they fear confrontation or believe their employer will offer fair pay automatically. Employers budget for negotiation -- they expect it and often have room to increase initial offers by 10-20%. The key is preparation: know the market rate for your role, document your measurable contributions, and practice your ask out loud. The best time to negotiate is when you have leverage: after a strong review, after completing a major project, or when you have an outside offer.",
  },
  {
    day: 12,
    title: "Career Income Trajectory",
    intention: "Plan your career moves strategically to maximize lifetime earnings.",
    tasks: [
      {
        id: "i12-t1",
        label: "Map your target income for 1, 3, and 5 years from now",
        description: "What would it take to earn 20%, 50%, and 100% more than you do today?",
      },
      {
        id: "i12-t2",
        label: "Identify the skills or credentials that would accelerate your income growth",
        description: "What promotions, certifications, or career pivots would produce the biggest income jumps?",
      },
      {
        id: "i12-t3",
        label: "Invest in one skill development activity this week",
        description: "Read a book, take an online course, attend a workshop, or schedule a conversation with a mentor.",
      },
    ],
    educationalContent:
      "Your earning potential is your single largest financial asset. A person earning $75,000/year who works for 30 more years will generate over $2.25 million in pre-tax income -- and that is without any raises. Strategic career development can double or triple that figure. The highest-ROI career investments are: (1) developing leadership and management skills, (2) building expertise in high-demand technical areas, (3) expanding your professional network, and (4) gaining negotiation skills. Job-hopping every 2-3 years in early career typically produces faster salary growth than loyalty to one employer, as internal raises average 3-5% while external moves average 10-20% increases.",
  },
  {
    day: 13,
    title: "Freelance and Consulting Income",
    intention: "Explore leveraging your expertise through freelance or consulting work.",
    tasks: [
      {
        id: "i13-t1",
        label: "Define your freelance or consulting service offering",
        description: "What specific problem can you solve? Who would pay for it? What is the deliverable?",
      },
      {
        id: "i13-t2",
        label: "Set your hourly or project-based rate",
        description: "A starting formula: take your desired annual income, divide by 1,000 for an hourly consulting rate.",
      },
      {
        id: "i13-t3",
        label: "Create a simple landing page or portfolio to attract clients",
        description: "Even a one-page website with your services, background, and contact info establishes credibility.",
      },
    ],
    educationalContent:
      "Consulting and freelancing are among the fastest paths to additional income because they leverage skills you already have. The key to commanding premium rates is specialization: a general freelance writer might earn $30/hour, while a financial services content specialist can charge $150-$300/hour. The narrower your niche, the fewer competitors you face and the more you can charge. Start by reaching out to your existing network -- former colleagues, industry contacts, and LinkedIn connections. Most freelancers find their first clients through warm introductions, not cold outreach. Begin with one or two clients to test the waters before scaling.",
  },
  {
    day: 14,
    title: "Week 2 Review: Cash Flow Optimization Plan",
    intention: "Consolidate your first two weeks of findings into an actionable cash flow plan.",
    tasks: [
      {
        id: "i14-t1",
        label: "Calculate your new monthly savings rate after optimizations",
        description: "How much more can you save and invest per month based on the changes you have identified?",
      },
      {
        id: "i14-t2",
        label: "Set up automatic transfers for your optimized savings amount",
        description: "Automate the improved savings rate before you have a chance to spend the freed-up cash.",
      },
      {
        id: "i14-t3",
        label: "Create an income growth action plan for the next 90 days",
        description: "What specific steps will you take to increase income: negotiation, side hustle launch, or skill development?",
      },
    ],
    educationalContent:
      "After two weeks of cash flow analysis, you should have a clear picture of where your money goes and where the opportunities are. The most impactful actions typically are: (1) eliminating high-interest debt, (2) reducing your largest fixed expenses, (3) automating a higher savings rate, and (4) creating at least one additional income stream. The compound effect of these changes is remarkable: saving an extra $500/month invested at 8% annual return grows to over $745,000 in 30 years. You are not just saving money -- you are building the foundation of an empire. The next two weeks focus on income growth and advanced strategies.",
  },
  {
    day: 15,
    title: "Business Revenue Analysis",
    intention: "If you own a business or side hustle, analyze revenue and profitability with precision.",
    tasks: [
      {
        id: "i15-t1",
        label: "Break down your business revenue by product, service, or customer segment",
        description: "Identify which offerings generate the most revenue and which are most profitable.",
      },
      {
        id: "i15-t2",
        label: "Calculate your profit margin on each revenue stream",
        description: "Revenue without profit is just busy work. Know your margins.",
      },
      {
        id: "i15-t3",
        label: "Identify your top 20% of customers or products that drive 80% of profit",
        description: "The Pareto Principle applies to most businesses. Focus your energy on the highest-value segments.",
      },
    ],
    educationalContent:
      "The Pareto Principle (80/20 rule) is remarkably consistent in business: 80% of your profit often comes from 20% of your customers or products. Once you identify this high-value segment, the strategy becomes clear: invest more time, marketing, and resources into serving and expanding that segment while reducing time spent on low-margin activities. Many business owners are so busy working in their business that they never step back to analyze which activities actually generate profit. Revenue is vanity; profit is sanity; cash flow is reality. A $500,000 business with 10% profit margins earns less than a $200,000 business with 30% margins.",
  },
  {
    day: 16,
    title: "Pricing Strategy Review",
    intention: "Evaluate whether your pricing captures the full value you deliver.",
    tasks: [
      {
        id: "i16-t1",
        label: "Compare your pricing to 5 competitors in your market",
        description: "Are you priced at, above, or below market? Does your pricing reflect your quality and positioning?",
      },
      {
        id: "i16-t2",
        label: "Calculate the cost of delivering your product or service",
        description: "Include direct costs, overhead, your time, and opportunity cost.",
      },
      {
        id: "i16-t3",
        label: "Test a 10-20% price increase on one offering",
        description: "Many businesses undercharge. A price increase goes straight to profit with no additional work.",
      },
    ],
    educationalContent:
      "Underpricing is the most common mistake among service providers and small business owners. The fear of losing customers leads to leaving significant money on the table. A 10% price increase on a $100,000 revenue business adds $10,000 in revenue with zero additional cost -- it goes directly to profit. Most businesses can implement a 10-15% price increase and lose fewer than 5% of customers. The math strongly favors higher prices: losing 5% of customers while increasing prices 15% results in higher profit. Price anchoring, tiered pricing, and value-based pricing (pricing based on the value you deliver, not the time you spend) are powerful strategies for capturing more of the value you create.",
  },
  {
    day: 17,
    title: "Recurring Revenue Models",
    intention: "Explore how to create predictable, recurring income streams.",
    tasks: [
      {
        id: "i17-t1",
        label: "Identify aspects of your work that could become recurring revenue",
        description: "Retainers, memberships, subscriptions, maintenance contracts, or ongoing service agreements.",
      },
      {
        id: "i17-t2",
        label: "Research subscription or membership models in your industry",
        description: "What are others offering on a recurring basis? What value keeps customers paying month after month?",
      },
      {
        id: "i17-t3",
        label: "Design one recurring revenue offering you could launch",
        description: "Define the deliverable, pricing, and minimum commitment period.",
      },
    ],
    educationalContent:
      "Recurring revenue transforms a business from a feast-or-famine cycle into a predictable income engine. A business with $10,000/month in recurring revenue starts every month knowing that income is already secured before doing any new sales. This stability allows you to plan, invest, and sleep better. Common models include: monthly retainers for professional services, membership communities with ongoing value, subscription products with regular delivery, and maintenance contracts for ongoing support. The key to retention is delivering consistent value that exceeds the monthly cost. Customer acquisition is 5-7x more expensive than retention, so recurring models that keep customers are inherently more profitable.",
  },
  {
    day: 18,
    title: "Debt Acceleration Strategy",
    intention: "Implement an aggressive plan to eliminate high-interest debt faster.",
    tasks: [
      {
        id: "i18-t1",
        label: "Calculate how much extra you can direct toward debt each month",
        description: "Use the savings from your expense optimization to accelerate debt payoff.",
      },
      {
        id: "i18-t2",
        label: "Research balance transfer or debt consolidation options",
        description: "A 0% balance transfer card or lower-rate personal loan can save hundreds or thousands in interest.",
      },
      {
        id: "i18-t3",
        label: "Set a specific debt-free date and track progress weekly",
        description: "Having a concrete target date creates urgency and motivation to stay on track.",
      },
    ],
    educationalContent:
      "High-interest debt is a wealth destroyer. Credit card debt at 24% APR effectively earns a negative 24% return on the balance. No investment consistently returns 24%, so paying off high-interest debt is the best guaranteed return available. The debt acceleration strategy: (1) Stop adding new debt. (2) Pay minimums on everything except your target debt. (3) Throw every extra dollar at the target debt. (4) When it is paid off, roll that payment into the next debt. This snowball of payments accelerates over time. A 0% balance transfer can buy you 12-21 months of interest-free payoff time -- just make sure you pay it off before the promotional rate expires, and avoid the trap of using the freed-up credit card.",
  },
  {
    day: 19,
    title: "Mortgage Optimization",
    intention: "Evaluate whether refinancing or restructuring your mortgage improves your cash flow.",
    tasks: [
      {
        id: "i19-t1",
        label: "Review your current mortgage terms: rate, balance, and remaining term",
        description: "Know exactly where you stand with your largest debt obligation.",
      },
      {
        id: "i19-t2",
        label: "Check current refinancing rates and calculate potential monthly savings",
        description: "A refinance makes sense when you can lower your rate by 0.75-1%+ and plan to stay 3+ years.",
      },
      {
        id: "i19-t3",
        label: "Evaluate biweekly payment strategy",
        description: "Paying half your monthly payment every two weeks results in one extra payment per year, saving years off your mortgage.",
      },
    ],
    educationalContent:
      "Your mortgage is likely your largest monthly expense, so even small optimizations have outsized impact. Refinancing to a lower rate can save hundreds per month, but factor in closing costs (typically 2-3% of the loan amount) to calculate your breakeven point. The biweekly payment hack is simple: instead of 12 monthly payments, you make 26 half-payments (equivalent to 13 full payments per year). This single extra payment per year can cut 4-7 years off a 30-year mortgage and save tens of thousands in interest. However, before accelerating mortgage payments, compare your mortgage rate to potential investment returns. If your mortgage rate is 3-4% and you can earn 7-8% investing, the math favors investing the extra money instead.",
  },
  {
    day: 20,
    title: "Student Loan Strategy",
    intention: "Optimize your student loan repayment for maximum cash flow and total savings.",
    tasks: [
      {
        id: "i20-t1",
        label: "List all student loans with servicer, balance, rate, and repayment plan",
        description: "Federal and private loans have very different options. Know which type you have.",
      },
      {
        id: "i20-t2",
        label: "Evaluate income-driven repayment plans for federal loans",
        description: "IDR plans cap payments at 10-20% of discretionary income and offer forgiveness after 20-25 years.",
      },
      {
        id: "i20-t3",
        label: "Assess whether Public Service Loan Forgiveness (PSLF) applies to your situation",
        description: "If you work for a qualifying employer, PSLF forgives remaining balance after 120 qualifying payments.",
      },
    ],
    educationalContent:
      "Student loan strategy depends heavily on your specific situation. For high-balance, low-rate federal loans, income-driven repayment with PSLF can result in significant forgiveness -- but only if you work for qualifying public service or nonprofit employers for 10 years. For private loans or those not pursuing forgiveness, refinancing to a lower rate can save thousands. The key decision: should you pay off aggressively or invest the difference? At loan rates below 5%, investing the extra money typically produces better long-term results due to the stock market's historical 7-10% annual return. Above 6-7%, paying off the debt provides a guaranteed return that is hard to beat.",
  },
  {
    day: 21,
    title: "Emergency Income Plan",
    intention: "Build a plan for maintaining income during unexpected job loss or business disruption.",
    tasks: [
      {
        id: "i21-t1",
        label: "Estimate how long your emergency fund would sustain you without income",
        description: "Divide your emergency fund by your monthly essential expenses.",
      },
      {
        id: "i21-t2",
        label: "Identify 3 ways you could generate income within 30 days if needed",
        description: "Freelancing, consulting, gig work, selling unused items, temporary employment, or leveraging your network.",
      },
      {
        id: "i21-t3",
        label: "Update your resume and LinkedIn profile as a proactive measure",
        description: "Having these ready eliminates delay and stress if you suddenly need to find new employment.",
      },
    ],
    educationalContent:
      "Financial resilience means having a plan for when things go wrong, not just when they go right. The average job search takes 3-6 months. If you were laid off today, would your emergency fund bridge that gap? Beyond savings, your professional network is your most valuable income insurance. Studies consistently show that 60-80% of jobs are filled through networking, not applications. Invest in relationships before you need them. Keep your LinkedIn profile updated, stay active in professional communities, and nurture relationships with former colleagues and industry contacts. This network is an asset that pays dividends throughout your career.",
  },
  {
    day: 22,
    title: "Digital Income Opportunities",
    intention: "Explore income opportunities in the digital economy.",
    tasks: [
      {
        id: "i22-t1",
        label: "Assess your potential for creating digital products",
        description: "Online courses, ebooks, templates, software tools, or digital downloads that sell while you sleep.",
      },
      {
        id: "i22-t2",
        label: "Research affiliate marketing and referral income in your niche",
        description: "Many companies pay 10-50% commissions for referring customers through affiliate programs.",
      },
      {
        id: "i22-t3",
        label: "Evaluate content creation as an income stream",
        description: "Blog, YouTube, podcast, or newsletter -- content builds audience and creates multiple monetization paths.",
      },
    ],
    educationalContent:
      "The digital economy has created income opportunities that did not exist a decade ago. Digital products -- online courses, templates, software -- have near-zero marginal cost after creation, meaning every additional sale is almost pure profit. A well-crafted online course can generate income for years with minimal ongoing effort. Content creation (blogs, YouTube, podcasts, newsletters) builds an audience that can be monetized through advertising, sponsorships, affiliate marketing, and product sales. The catch: building an audience takes months or years of consistent effort before generating meaningful income. Treat it as a long-term investment, not a get-rich-quick scheme.",
  },
  {
    day: 23,
    title: "Investment Income Growth",
    intention: "Grow passive income from your investment portfolio.",
    tasks: [
      {
        id: "i23-t1",
        label: "Calculate your current annual investment income",
        description: "Total dividends, interest, and distributions from all investment accounts.",
      },
      {
        id: "i23-t2",
        label: "Set a 12-month target for increasing investment income",
        description: "Increasing contributions and optimizing asset allocation can meaningfully boost investment income.",
      },
      {
        id: "i23-t3",
        label: "Explore high-yield savings accounts and money market funds for cash reserves",
        description: "Idle cash should earn competitive interest. Top high-yield savings accounts offer 4-5% APY.",
      },
    ],
    educationalContent:
      "Investment income grows through two mechanisms: contributing more capital and optimizing yield. Before chasing higher yields, ensure your emergency fund and short-term savings are in high-yield savings accounts earning competitive rates. Money sitting in a traditional bank savings account at 0.01% when high-yield accounts offer 4-5% is one of the most common and easily fixable financial mistakes. For longer-term investment income, a well-diversified portfolio of dividend-paying stocks, bonds, and REITs can generate 3-5% annual income. The power of reinvesting this income is enormous: $500,000 generating 4% produces $20,000/year, and reinvesting it grows the base for even more future income.",
  },
  {
    day: 24,
    title: "Tax-Advantaged Income Strategies",
    intention: "Use the tax code to keep more of every dollar you earn.",
    tasks: [
      {
        id: "i24-t1",
        label: "Review self-employment tax deductions if you have side income",
        description: "Home office, mileage, equipment, health insurance, retirement contributions, and professional development.",
      },
      {
        id: "i24-t2",
        label: "Explore the Qualified Business Income (QBI) deduction",
        description: "If you have pass-through business income, you may deduct up to 20% under Section 199A.",
      },
      {
        id: "i24-t3",
        label: "Maximize retirement account contributions to reduce taxable income",
        description: "Each dollar contributed to a pre-tax retirement account reduces your current year tax bill.",
      },
    ],
    educationalContent:
      "Self-employment and business ownership unlock tax deductions that W-2 employees cannot access. The home office deduction, vehicle mileage, health insurance premiums, retirement plan contributions (SEP-IRA up to 25% of net self-employment income), and the QBI deduction can collectively reduce your tax bill by thousands of dollars. The QBI deduction alone allows a 20% deduction on qualified business income for pass-through entities (sole proprietors, LLCs, S-Corps, partnerships), subject to income thresholds and limitations. If you have any self-employment income, even side hustle earnings, work with a tax professional to ensure you are capturing every legitimate deduction.",
  },
  {
    day: 25,
    title: "Negotiation Skills for Income Growth",
    intention: "Develop negotiation skills that increase income in every area of life.",
    tasks: [
      {
        id: "i25-t1",
        label: "Learn the BATNA framework (Best Alternative to a Negotiated Agreement)",
        description: "Your negotiating power comes from having alternatives. What is your best option if the negotiation fails?",
      },
      {
        id: "i25-t2",
        label: "Practice negotiating one bill or service rate this week",
        description: "Call your internet provider, insurance company, or a vendor and ask for a better rate.",
      },
      {
        id: "i25-t3",
        label: "Document three negotiation opportunities in your professional or business life",
        description: "Client rates, vendor costs, salary, contract terms -- where can negotiation increase your income or reduce costs?",
      },
    ],
    educationalContent:
      "Negotiation is one of the highest-ROI skills you can develop. A single successful salary negotiation can be worth $500,000+ over your career. A single client rate increase can add $10,000+ per year. Even routine negotiations -- cable bill, insurance premium, vendor pricing -- save hundreds to thousands annually. The foundation of effective negotiation is preparation: know the market rates, understand your leverage (your BATNA), and be willing to walk away. Most people accept the first number they are given because they have not prepared an alternative. The simple act of asking -- politely, with supporting data -- results in a better outcome 70%+ of the time. You do not get what you deserve; you get what you negotiate.",
  },
  {
    day: 26,
    title: "Income Protection Through Diversification",
    intention: "Build income resilience by diversifying your sources of income.",
    tasks: [
      {
        id: "i26-t1",
        label: "Map your current income sources and the percentage each represents",
        description: "If one source represents more than 70% of your income, you have dangerous concentration.",
      },
      {
        id: "i26-t2",
        label: "Identify 2-3 income sources you could develop within 6 months",
        description: "Consulting, rental income, dividend income, digital products, part-time work, or freelancing.",
      },
      {
        id: "i26-t3",
        label: "Take the first action step toward your next income stream today",
        description: "Send an email, post a listing, create an account, make a call -- momentum starts with one step.",
      },
    ],
    educationalContent:
      "Income diversification follows the same logic as investment diversification: do not put all your eggs in one basket. A household with income from employment, a side business, and investments is far more resilient than one relying entirely on a single employer. The ideal income portfolio evolves over time: in your 20s-30s, active income dominates (salary, freelancing). In your 40s-50s, you build portfolio income (dividends, interest). In your 60s+, passive income and portfolio income replace active income. Each income stream you add reduces your dependence on any single source and accelerates your path to financial freedom. Start where you are and add one new stream at a time.",
  },
  {
    day: 27,
    title: "Lifestyle Inflation Defense",
    intention: "Prevent lifestyle inflation from consuming your income growth.",
    tasks: [
      {
        id: "i27-t1",
        label: "Calculate how much your expenses have increased over the past 3 years",
        description: "Has your spending risen as fast as or faster than your income?",
      },
      {
        id: "i27-t2",
        label: "Implement a rule: save at least 50% of every raise or income increase",
        description: "This lets you enjoy some improvement in lifestyle while ensuring most of the increase builds wealth.",
      },
      {
        id: "i27-t3",
        label: "Identify one area where lifestyle inflation has crept in and create a cap",
        description: "Dining out, vehicle costs, clothing, or entertainment -- pick one and set a spending ceiling.",
      },
    ],
    educationalContent:
      "Lifestyle inflation is the silent wealth killer. As income rises, spending rises to match -- and the gap between income and expenses (your wealth-building capacity) stays the same or even shrinks. A doctor earning $300,000 with $290,000 in expenses builds less wealth than a teacher earning $60,000 with $40,000 in expenses. The 50% rule is a powerful antidote: commit to saving at least 50% of every raise, bonus, or income increase before you adjust your lifestyle. If you get a $10,000 raise, $5,000 goes automatically to investments and you enjoy $5,000 in improved lifestyle. Over a career with multiple raises, this single habit can generate hundreds of thousands in additional wealth.",
  },
  {
    day: 28,
    title: "Financial Systems and Automation",
    intention: "Build a fully automated financial system that runs with minimal intervention.",
    tasks: [
      {
        id: "i28-t1",
        label: "Automate all bill payments to avoid late fees and credit damage",
        description: "Set up autopay for every recurring bill: mortgage, utilities, insurance, credit cards, loans.",
      },
      {
        id: "i28-t2",
        label: "Automate savings and investment contributions on payday",
        description: "Set transfers to trigger on your payday so you pay yourself first before spending.",
      },
      {
        id: "i28-t3",
        label: "Set up a money flow system with dedicated accounts",
        description: "Checking for bills, checking for spending, high-yield savings for emergency fund, brokerage for investing.",
      },
    ],
    educationalContent:
      "A fully automated financial system is the operational backbone of your cash flow strategy. The ideal setup: (1) Paycheck deposits into a central checking account. (2) Automatic transfers on payday: retirement contributions from paycheck, savings to high-yield account, investments to brokerage, and bills from bills-only checking. (3) Remaining money is your guilt-free spending. This system requires 2-3 hours to set up and runs with almost zero maintenance. The psychological benefit is enormous: you never have to decide whether to save or invest because it happens automatically. Willpower is finite; systems are infinite. The wealthiest people do not have more discipline -- they have better systems.",
  },
  {
    day: 29,
    title: "Cash Flow Projections and Scenario Planning",
    intention: "Model your financial future under different income and expense scenarios.",
    tasks: [
      {
        id: "i29-t1",
        label: "Create a 12-month cash flow projection with your current plan",
        description: "Month by month, project income, expenses, savings, and net worth growth.",
      },
      {
        id: "i29-t2",
        label: "Model a best-case scenario: what if income increases 20% and expenses stay flat?",
        description: "See how aggressive income growth without lifestyle inflation transforms your trajectory.",
      },
      {
        id: "i29-t3",
        label: "Model a worst-case scenario: what if you lose your primary income for 6 months?",
        description: "Test whether your emergency fund, side income, and spending cuts would sustain you.",
      },
    ],
    educationalContent:
      "Scenario planning turns anxiety about the future into actionable preparation. By modeling best-case, expected, and worst-case outcomes, you can plan for each without being blindsided. The best-case scenario shows you the power of staying disciplined -- how quickly wealth compounds when income grows and expenses are controlled. The worst-case scenario reveals vulnerabilities: is your emergency fund adequate? Could side income cover essentials? How quickly could you reduce spending? Having a written plan for each scenario means you will make rational decisions under stress instead of emotional ones. The goal is not to predict the future but to be prepared for whatever it brings.",
  },
  {
    day: 30,
    title: "Income Protocol Completion and Commitment",
    intention: "Celebrate your cash flow transformation and commit to ongoing financial discipline.",
    tasks: [
      {
        id: "i30-t1",
        label: "Calculate your new monthly savings rate compared to Day 1",
        description: "Measure the concrete improvement in your wealth-building capacity over 30 days.",
      },
      {
        id: "i30-t2",
        label: "Write down your top 3 cash flow commitments going forward",
        description: "Automate savings, avoid lifestyle inflation, and grow income -- or your own personal priorities.",
      },
      {
        id: "i30-t3",
        label: "Set a 90-day check-in date to review your cash flow system",
        description: "Schedule a specific date to review whether your system is working and make adjustments.",
      },
      {
        id: "i30-t4",
        label: "Share your biggest cash flow insight with someone who needs to hear it",
        description: "Teaching reinforces learning and helps the people around you build stronger financial foundations.",
      },
    ],
    educationalContent:
      "Over the past 30 days, you have dissected your cash flow, eliminated waste, optimized expenses, developed income growth strategies, and built automated systems. This is the engine of your empire. Cash flow is what funds every other pillar: protection premiums, investment contributions, estate planning costs, and daily living. Guard it fiercely. The commitment you make today -- to track, optimize, and grow your cash flow -- will compound over decades into a level of financial freedom most people only dream about. You are not just managing money; you are engineering an unshakable financial future. Keep building.",
  },
];
