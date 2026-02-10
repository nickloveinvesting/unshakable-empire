import type { DayProtocol } from "@/types/protocol";

export const protectionProtocol: DayProtocol[] = [
  {
    day: 1,
    title: "Emergency Fund Reality Check",
    intention: "Understand where you stand with your financial safety net and set a clear target.",
    tasks: [
      {
        id: "p1-t1",
        label: "Calculate your current emergency fund balance",
        description: "Log into your savings accounts and total up all liquid emergency reserves.",
      },
      {
        id: "p1-t2",
        label: "Determine your monthly essential expenses",
        description: "Add up rent/mortgage, utilities, insurance premiums, food, transportation, and minimum debt payments.",
      },
      {
        id: "p1-t3",
        label: "Calculate how many months of expenses your fund covers",
        description: "Divide your emergency fund balance by your monthly essentials to see your runway.",
      },
    ],
    educationalContent:
      "A fully funded emergency reserve should cover 3-6 months of essential living expenses. If you are self-employed or have variable income, aim for 6-12 months. This fund is your first line of defense against financial shocks -- job loss, medical emergencies, or unexpected repairs. Keep it in a high-yield savings account where it is liquid but still earning interest.",
  },
  {
    day: 2,
    title: "Emergency Fund Action Plan",
    intention: "Create a concrete plan to build or strengthen your emergency fund.",
    tasks: [
      {
        id: "p2-t1",
        label: "Set your emergency fund target amount",
        description: "Based on yesterday's assessment, choose your target: 3, 6, or 12 months of expenses.",
      },
      {
        id: "p2-t2",
        label: "Set up an automatic monthly transfer to your emergency savings",
        description: "Even $50/month creates momentum. Automate the transfer on payday so you pay yourself first.",
      },
      {
        id: "p2-t3",
        label: "Identify one expense to redirect toward your emergency fund this month",
        description: "Find a subscription, dining expense, or discretionary spend you can temporarily redirect.",
      },
    ],
    educationalContent:
      "The power of automation cannot be overstated. When saving is automatic, you remove the decision fatigue and willpower required to manually transfer funds each month. Studies show that people who automate their savings accumulate 3x more over time than those who rely on manual deposits. Start where you are and increase the amount quarterly.",
  },
  {
    day: 3,
    title: "Health Insurance Deep Dive",
    intention: "Ensure your health insurance coverage matches your actual needs and risk profile.",
    tasks: [
      {
        id: "p3-t1",
        label: "Review your current health insurance plan details",
        description: "Locate your policy documents and note your deductible, out-of-pocket max, copays, and network type.",
      },
      {
        id: "p3-t2",
        label: "List all prescriptions and recurring medical needs",
        description: "Document medications, specialist visits, and ongoing treatments to verify they are covered.",
      },
      {
        id: "p3-t3",
        label: "Check if your current providers are in-network",
        description: "Verify that your doctors, specialists, and preferred hospital are within your plan's network.",
      },
    ],
    educationalContent:
      "Health insurance is the foundation of financial protection. A single hospital stay can exceed $30,000 without coverage. When evaluating plans, do not just look at the monthly premium -- calculate your total potential annual cost by adding premiums plus the out-of-pocket maximum. An HSA-eligible high-deductible plan can be a powerful wealth-building tool if you are generally healthy.",
  },
  {
    day: 4,
    title: "Health Insurance Optimization",
    intention: "Maximize the value of your health benefits and reduce unnecessary healthcare costs.",
    tasks: [
      {
        id: "p4-t1",
        label: "Review HSA or FSA eligibility and contribution limits",
        description: "If eligible, confirm you are maximizing tax-advantaged health savings contributions.",
      },
      {
        id: "p4-t2",
        label: "Schedule any overdue preventive care appointments",
        description: "Most plans cover annual physicals, dental cleanings, and screenings at no cost.",
      },
      {
        id: "p4-t3",
        label: "Compare your current plan cost against alternatives",
        description: "If open enrollment is approaching, research comparable plans on your employer portal or healthcare.gov.",
      },
    ],
    educationalContent:
      "Health Savings Accounts (HSAs) are the only triple-tax-advantaged account in the U.S. tax code: contributions are tax-deductible, growth is tax-free, and withdrawals for qualified medical expenses are tax-free. After age 65, you can withdraw for any purpose (paying ordinary income tax like a traditional IRA). If you can afford to pay medical expenses out of pocket, letting your HSA grow invested is one of the most powerful long-term strategies available.",
  },
  {
    day: 5,
    title: "Life Insurance Foundation",
    intention: "Assess whether your life insurance coverage adequately protects your dependents.",
    tasks: [
      {
        id: "p5-t1",
        label: "List all current life insurance policies and coverage amounts",
        description: "Include employer-provided group life, individual term, and any permanent policies.",
      },
      {
        id: "p5-t2",
        label: "Calculate your life insurance need using the DIME method",
        description: "DIME = Debt + Income replacement (10-12x annual) + Mortgage payoff + Education funding for children.",
      },
      {
        id: "p5-t3",
        label: "Identify any coverage gap between current and needed amounts",
        description: "Subtract current coverage from your calculated need to find your gap.",
      },
    ],
    educationalContent:
      "The DIME method provides a comprehensive view of life insurance needs. Debt covers all outstanding obligations. Income replacement ensures your family maintains their standard of living for 10-12 years. Mortgage payoff eliminates the largest monthly expense. Education funds secure your children's future. For most families, a 20-30 year level term policy provides the best value. Avoid whole life unless you have maxed all other tax-advantaged vehicles and need permanent coverage for estate planning.",
  },
  {
    day: 6,
    title: "Life Insurance Action Steps",
    intention: "Close any life insurance gaps and ensure beneficiary designations are current.",
    tasks: [
      {
        id: "p6-t1",
        label: "Verify beneficiary designations on all life insurance policies",
        description: "Confirm primary and contingent beneficiaries are correct and up to date.",
      },
      {
        id: "p6-t2",
        label: "Get quotes for additional term life coverage if a gap exists",
        description: "Use comparison sites or contact a fee-only insurance advisor for competitive quotes.",
      },
      {
        id: "p6-t3",
        label: "Review employer life insurance portability options",
        description: "Understand whether your group coverage can convert to an individual policy if you leave your employer.",
      },
    ],
    educationalContent:
      "Beneficiary designations on life insurance policies supersede your will. This means even if your will says your assets go to your spouse, an outdated beneficiary designation naming an ex-spouse will be honored. Review these designations annually and after any major life event: marriage, divorce, birth of a child, or death of a beneficiary. Also consider naming a contingent beneficiary and, for larger policies, a trust as the beneficiary for added control.",
  },
  {
    day: 7,
    title: "Auto Insurance Review",
    intention: "Ensure your auto insurance provides proper protection without overpaying.",
    tasks: [
      {
        id: "p7-t1",
        label: "Review your current auto insurance declarations page",
        description: "Note your liability limits, collision/comprehensive deductibles, and any endorsements.",
      },
      {
        id: "p7-t2",
        label: "Verify your liability limits are at least 100/300/100",
        description: "Higher liability limits protect your assets. The cost difference for higher limits is often minimal.",
      },
      {
        id: "p7-t3",
        label: "Check if you qualify for any available discounts",
        description: "Multi-policy, safe driver, low mileage, defensive driving course, and professional association discounts.",
      },
    ],
    educationalContent:
      "Most people carry the state minimum liability coverage, which is dangerously low. If you cause an accident with injuries exceeding your policy limits, you are personally liable for the difference. With medical costs what they are, a serious accident can easily exceed $300,000 in claims. Raising your limits from state minimum to 100/300/100 (or 250/500/250 if you have significant assets) typically costs only $20-50 more per month. This is one of the highest-value insurance improvements you can make.",
  },
  {
    day: 8,
    title: "Homeowners or Renters Insurance",
    intention: "Protect your home and possessions against loss, theft, and liability claims.",
    tasks: [
      {
        id: "p8-t1",
        label: "Review your homeowners or renters insurance policy",
        description: "Check dwelling coverage, personal property limits, liability coverage, and deductible amounts.",
      },
      {
        id: "p8-t2",
        label: "Create or update a home inventory of valuable items",
        description: "Photograph or video your possessions room by room and store the record in the cloud.",
      },
      {
        id: "p8-t3",
        label: "Verify your personal property coverage is replacement cost, not actual cash value",
        description: "Replacement cost pays to replace items at current prices; actual cash value deducts depreciation.",
      },
    ],
    educationalContent:
      "A home inventory is the single most important thing you can do to ensure a smooth insurance claim. After a fire, theft, or natural disaster, you will need to prove what you owned and its value. Walk through every room with your phone camera, open drawers and closets, and narrate the contents. Store the video in cloud storage (not on a local drive that could be destroyed). Update annually or when you make significant purchases. Renters insurance is equally critical -- your landlord's policy covers the building, not your belongings or your liability.",
  },
  {
    day: 9,
    title: "Umbrella Insurance",
    intention: "Add an extra layer of liability protection above your auto and home policies.",
    tasks: [
      {
        id: "p9-t1",
        label: "Determine if you currently have an umbrella insurance policy",
        description: "Check with your insurance agent or review your policy portfolio.",
      },
      {
        id: "p9-t2",
        label: "Assess your need based on net worth and risk exposure",
        description: "Anyone with assets to protect -- home equity, savings, investments -- benefits from umbrella coverage.",
      },
      {
        id: "p9-t3",
        label: "Get a quote for a $1M umbrella policy",
        description: "Umbrella policies typically cost $200-$400/year for $1M in additional liability coverage.",
      },
    ],
    educationalContent:
      "An umbrella insurance policy provides liability coverage above and beyond your auto and homeowners policies. For a few hundred dollars per year, you get $1-5 million in additional protection. This covers scenarios like a serious car accident where injuries exceed your auto policy limits, someone getting injured on your property, or even a defamation lawsuit. If your net worth exceeds your auto and home liability limits combined, an umbrella policy is essential. It is one of the most cost-effective forms of insurance available.",
  },
  {
    day: 10,
    title: "Disability Insurance",
    intention: "Protect your most valuable asset -- your ability to earn income.",
    tasks: [
      {
        id: "p10-t1",
        label: "Check if you have disability insurance through your employer",
        description: "Review short-term and long-term disability benefits, including the percentage of income covered.",
      },
      {
        id: "p10-t2",
        label: "Calculate the gap between employer coverage and your actual income needs",
        description: "Most employer plans cover 60% of base salary and may cap at a certain amount.",
      },
      {
        id: "p10-t3",
        label: "Research individual disability insurance options",
        description: "Individual policies offer own-occupation coverage and are portable if you change jobs.",
      },
    ],
    educationalContent:
      "You are 3-4 times more likely to become disabled during your working years than to die. Yet most people have life insurance and skip disability coverage. If you could not work for 6 months or more, could your family maintain its lifestyle? Employer-provided disability insurance is a great start, but it typically covers only 60% of base salary (excluding bonuses), is taxable if your employer pays the premiums, and disappears when you leave the company. A supplemental individual policy with own-occupation definition ensures you are covered if you cannot perform your specific job, even if you could do other work.",
  },
  {
    day: 11,
    title: "Identity Theft Protection",
    intention: "Implement proactive measures to protect your identity and financial accounts.",
    tasks: [
      {
        id: "p11-t1",
        label: "Place a credit freeze at all three major bureaus",
        description: "Freeze your credit at Equifax, Experian, and TransUnion -- it is free and prevents unauthorized accounts.",
      },
      {
        id: "p11-t2",
        label: "Set up credit monitoring alerts",
        description: "Use a free service like Credit Karma or your bank's monitoring tool to get real-time alerts.",
      },
      {
        id: "p11-t3",
        label: "Review your credit reports for any unfamiliar accounts",
        description: "Pull free reports from AnnualCreditReport.com and check for accounts you did not open.",
      },
    ],
    educationalContent:
      "Identity theft affects over 15 million Americans annually, with average losses exceeding $1,000 per incident. A credit freeze is the single most effective preventive measure -- it blocks anyone from opening new credit accounts in your name. When you need to apply for credit, you can temporarily lift the freeze using a PIN. This is different from a fraud alert, which only requires creditors to verify your identity but does not block them from proceeding. Combining a freeze with active monitoring creates a strong defense layer.",
  },
  {
    day: 12,
    title: "Digital Security Audit",
    intention: "Secure your financial accounts against unauthorized access and cyber threats.",
    tasks: [
      {
        id: "p12-t1",
        label: "Enable two-factor authentication on all financial accounts",
        description: "Set up 2FA on banking, brokerage, retirement accounts, and email (use an authenticator app, not SMS).",
      },
      {
        id: "p12-t2",
        label: "Update passwords on your most critical financial accounts",
        description: "Use a password manager to generate and store unique, strong passwords for each account.",
      },
      {
        id: "p12-t3",
        label: "Check if your email has been compromised in known data breaches",
        description: "Visit haveibeenpwned.com to see if your email appears in any breach databases.",
      },
    ],
    educationalContent:
      "Your email account is the skeleton key to your financial life. Anyone with access to your email can reset passwords on banking, investment, and insurance accounts. Protect it with the strongest security available: a hardware security key or authenticator app (not SMS-based 2FA, which is vulnerable to SIM-swapping attacks). Use a reputable password manager like 1Password or Bitwarden to maintain unique passwords for every account. The small monthly cost of a password manager is trivial compared to the financial damage a compromised password can cause.",
  },
  {
    day: 13,
    title: "Property and Casualty Insurance Gaps",
    intention: "Identify coverage gaps across your property and casualty insurance portfolio.",
    tasks: [
      {
        id: "p13-t1",
        label: "Check if you need flood, earthquake, or wildfire supplemental coverage",
        description: "Standard homeowners policies exclude these perils. Check FEMA flood maps for your area.",
      },
      {
        id: "p13-t2",
        label: "Review your policy for scheduled personal property endorsements",
        description: "High-value items like jewelry, art, instruments, or collectibles may need separate scheduling.",
      },
      {
        id: "p13-t3",
        label: "Verify your dwelling coverage keeps pace with rebuilding costs",
        description: "Construction costs rise annually. Ensure your coverage amount reflects current rebuilding estimates.",
      },
    ],
    educationalContent:
      "One of the most common insurance mistakes is assuming your homeowners policy covers everything. It does not. Flooding is excluded from standard policies and requires a separate National Flood Insurance Program (NFIP) policy or a private flood policy. Earthquake damage requires a separate endorsement or policy. Even water damage from a burst pipe differs from flood damage in how it is covered. Review your policy's exclusions section carefully. If you live in a disaster-prone area, the cost of supplemental coverage is small compared to the catastrophic loss of an uninsured event.",
  },
  {
    day: 14,
    title: "Week 2 Review and Consolidation",
    intention: "Review your progress and consolidate all protection findings into a clear action list.",
    tasks: [
      {
        id: "p14-t1",
        label: "Review all notes and actions from Days 1-13",
        description: "Compile your insurance gaps, coverage amounts, and pending action items into one document.",
      },
      {
        id: "p14-t2",
        label: "Prioritize your top 3 protection gaps to address this month",
        description: "Rank by financial impact: which gap would hurt you most if left unaddressed?",
      },
      {
        id: "p14-t3",
        label: "Schedule appointments or calls needed to close your gaps",
        description: "Block time this week to call insurance agents, set up accounts, or submit applications.",
      },
    ],
    educationalContent:
      "Financial protection is not a one-time event -- it is an ongoing system. The value of this protocol is not just in identifying gaps but in creating a habit of regular review. Your insurance needs change with life events: getting married, having children, buying property, starting a business, or reaching new net worth milestones. Set a recurring calendar reminder to review your protection portfolio annually. Keep a simple document listing all policies, coverage amounts, premiums, renewal dates, and agent contact information.",
  },
  {
    day: 15,
    title: "Business Insurance Assessment",
    intention: "Evaluate whether your business or side income is properly insured.",
    tasks: [
      {
        id: "p15-t1",
        label: "Identify all income-generating activities that may need coverage",
        description: "Include freelance work, consulting, rental properties, online businesses, or side hustles.",
      },
      {
        id: "p15-t2",
        label: "Research general liability insurance requirements for your activities",
        description: "Many businesses need at minimum a general liability policy and professional liability (E&O) coverage.",
      },
      {
        id: "p15-t3",
        label: "Determine if you need professional liability or errors and omissions insurance",
        description: "If you provide advice, services, or professional expertise, E&O coverage protects against claims of negligence.",
      },
    ],
    educationalContent:
      "If you earn any income outside of traditional W-2 employment -- freelancing, consulting, rental income, or running a business -- your personal insurance policies likely do not cover business-related claims. A client who slips at your home office, a product that causes injury, or a professional recommendation that leads to a financial loss can all result in lawsuits that personal policies will not pay. Business insurance is the firewall between your business liabilities and your personal assets. Even sole proprietors and side-hustle operators should carry basic coverage.",
  },
  {
    day: 16,
    title: "Business Entity Protection",
    intention: "Ensure your business structure provides personal asset protection.",
    tasks: [
      {
        id: "p16-t1",
        label: "Review your current business entity structure",
        description: "Are you operating as a sole proprietor, LLC, S-Corp, or C-Corp? Each has different liability protections.",
      },
      {
        id: "p16-t2",
        label: "Assess whether an LLC or corporate structure would better protect personal assets",
        description: "An LLC creates a legal separation between business debts/lawsuits and your personal assets.",
      },
      {
        id: "p16-t3",
        label: "Verify your business entity is in good standing with your state",
        description: "Check that annual reports are filed and fees are paid to maintain your liability protection.",
      },
    ],
    educationalContent:
      "Operating as a sole proprietor means there is no legal distinction between you and your business. Every business debt and lawsuit is your personal responsibility. Forming an LLC or corporation creates a legal wall between your business and personal assets. However, this protection requires maintenance: you must keep business and personal finances strictly separate, file required annual reports, and maintain adequate capitalization. Piercing the corporate veil -- when courts ignore the entity's protection -- most commonly happens when business owners commingle personal and business funds or treat the entity as an alter ego.",
  },
  {
    day: 17,
    title: "Long-Term Care Planning",
    intention: "Begin planning for one of the largest potential expenses in later life.",
    tasks: [
      {
        id: "p17-t1",
        label: "Research the average cost of long-term care in your area",
        description: "Nursing homes average $90,000-$110,000 per year. Home health aides average $50,000-$60,000 per year.",
      },
      {
        id: "p17-t2",
        label: "Explore long-term care insurance options or hybrid policies",
        description: "Hybrid policies combine life insurance with LTC benefits, so premiums are never wasted.",
      },
      {
        id: "p17-t3",
        label: "Discuss long-term care preferences with your family",
        description: "Having this conversation now prevents crisis decision-making later.",
      },
    ],
    educationalContent:
      "Nearly 70% of people over 65 will need some form of long-term care. Medicare covers only short-term skilled nursing after a hospital stay, not ongoing custodial care. The average long-term care need lasts 3 years, but 20% of people need care for 5+ years. Traditional LTC insurance premiums have risen dramatically, leading many to choose hybrid life/LTC policies instead. These policies provide a death benefit if you never need LTC, but convert to LTC coverage if you do. The ideal time to purchase is in your 50s when premiums are lower and you are more likely to qualify medically.",
  },
  {
    day: 18,
    title: "Liability Exposure Assessment",
    intention: "Identify personal liability risks that could threaten your financial security.",
    tasks: [
      {
        id: "p18-t1",
        label: "List activities that increase your liability exposure",
        description: "Pool ownership, dog ownership, hosting events, teenage drivers, rental properties, serving on boards.",
      },
      {
        id: "p18-t2",
        label: "Review your liability coverage across all policies",
        description: "Add up liability limits on auto, home, umbrella, and business policies for your total protection.",
      },
      {
        id: "p18-t3",
        label: "Determine if your total liability coverage exceeds your net worth",
        description: "Your liability coverage should be at least equal to your total net worth to prevent asset seizure.",
      },
    ],
    educationalContent:
      "Liability exposure grows as your wealth grows, but most people do not adjust their coverage accordingly. The goal is to ensure your total liability coverage exceeds your net worth, including home equity, investment accounts, retirement savings (which have varying levels of protection depending on your state), and future earning potential. Courts can garnish wages and seize assets if a judgment exceeds your coverage. A simple umbrella policy provides millions in additional coverage at minimal cost and is the easiest way to close this gap.",
  },
  {
    day: 19,
    title: "Critical Document Organization",
    intention: "Organize all insurance and financial protection documents in one accessible location.",
    tasks: [
      {
        id: "p19-t1",
        label: "Create a master list of all insurance policies with key details",
        description: "Policy number, insurer, coverage amount, deductible, premium, renewal date, and agent contact.",
      },
      {
        id: "p19-t2",
        label: "Store digital copies of all policies in a secure cloud location",
        description: "Use encrypted cloud storage so documents are accessible even if physical copies are destroyed.",
      },
      {
        id: "p19-t3",
        label: "Share access credentials with a trusted person",
        description: "Ensure a spouse, family member, or attorney knows where to find your insurance information.",
      },
      {
        id: "p19-t4",
        label: "Set calendar reminders for all policy renewal dates",
        description: "Review coverage and shop for better rates 60 days before each renewal.",
      },
    ],
    educationalContent:
      "In a crisis, the last thing you want is to be hunting for policy numbers and agent phone numbers. Create a simple spreadsheet or document listing every insurance policy you hold. Include: policy type, insurance company, policy number, coverage amount, deductible, annual premium, renewal date, and your agent's contact information. Store this in encrypted cloud storage and share access with your spouse or a trusted family member. This document becomes invaluable during emergencies, estate settlement, or when working with a financial advisor.",
  },
  {
    day: 20,
    title: "Workers Compensation and Employment Protection",
    intention: "Ensure you are protected against workplace injuries and employment-related risks.",
    tasks: [
      {
        id: "p20-t1",
        label: "Review your employer's workers compensation coverage",
        description: "Understand what is covered, how to file a claim, and what your benefits would be.",
      },
      {
        id: "p20-t2",
        label: "If self-employed, research workers comp requirements in your state",
        description: "Some states require coverage even for sole proprietors in certain industries.",
      },
      {
        id: "p20-t3",
        label: "Review employment contracts for non-compete and severance provisions",
        description: "Understanding your employment agreement is a form of financial protection.",
      },
    ],
    educationalContent:
      "Workers compensation is a form of insurance that provides wage replacement and medical benefits to employees injured on the job. If you are an employee, your employer is required to carry this coverage in nearly every state. If you are self-employed or a business owner, you may not be covered unless you opt in. Understanding your rights and the claims process before an injury occurs puts you in a much stronger position. Similarly, reviewing your employment agreement helps you understand severance provisions, non-compete clauses, and what protections you have if your position is eliminated.",
  },
  {
    day: 21,
    title: "Tax Protection Strategies",
    intention: "Implement strategies that protect your income from unnecessary tax liability.",
    tasks: [
      {
        id: "p21-t1",
        label: "Verify your tax withholding is optimized for your situation",
        description: "Use the IRS Tax Withholding Estimator to check if you are over- or under-withholding.",
      },
      {
        id: "p21-t2",
        label: "Confirm you are maximizing all available tax deductions and credits",
        description: "Review: retirement contributions, HSA, mortgage interest, charitable giving, education credits.",
      },
      {
        id: "p21-t3",
        label: "Assess whether you need audit protection or tax liability insurance",
        description: "If your return is complex, audit protection services cover the cost of professional representation.",
      },
    ],
    educationalContent:
      "Tax optimization is a form of financial protection. Every dollar saved in taxes is a dollar that stays in your wealth-building system. Common overlooked deductions include: home office expenses for self-employed individuals, state and local taxes (SALT) up to $10,000, qualified business income deduction for pass-through entities, education credits, and charitable contribution strategies like donor-advised funds for bunching deductions. If you are not working with a CPA or tax advisor, you are likely leaving money on the table. The cost of professional tax preparation is almost always recouped in additional deductions found.",
  },
  {
    day: 22,
    title: "Asset Protection Structures",
    intention: "Explore legal structures that shield your assets from creditors and lawsuits.",
    tasks: [
      {
        id: "p22-t1",
        label: "Research asset protection trusts available in your state",
        description: "Some states allow domestic asset protection trusts (DAPTs) that shield assets from future creditors.",
      },
      {
        id: "p22-t2",
        label: "Understand which of your assets already have legal protection",
        description: "Retirement accounts (ERISA plans), homestead exemptions, and certain insurance products have built-in protection.",
      },
      {
        id: "p22-t3",
        label: "Consult with an asset protection attorney if your net worth exceeds $500K",
        description: "Professional guidance is essential for complex asset protection planning.",
      },
    ],
    educationalContent:
      "Different types of assets have different levels of legal protection from creditors. ERISA-qualified retirement plans (401k, pension) have unlimited federal protection from creditors. Traditional and Roth IRAs are protected up to about $1.5 million in bankruptcy. Your primary residence may have homestead protection depending on your state (Florida and Texas have unlimited homestead exemption). Life insurance cash values and annuities are protected in many states. Understanding these built-in protections helps you strategically position assets for maximum security.",
  },
  {
    day: 23,
    title: "Insurance Cost Optimization",
    intention: "Reduce insurance premiums without sacrificing essential coverage.",
    tasks: [
      {
        id: "p23-t1",
        label: "Bundle auto, home, and umbrella policies with one carrier for multi-policy discounts",
        description: "Bundling typically saves 10-25% on total premiums.",
      },
      {
        id: "p23-t2",
        label: "Increase deductibles on auto and home policies to reduce premiums",
        description: "Raising your deductible from $500 to $1,000 can save 10-15% on premiums.",
      },
      {
        id: "p23-t3",
        label: "Eliminate unnecessary coverage or riders",
        description: "Review each line item: do you still need roadside assistance, rental car coverage, or identity theft riders?",
      },
    ],
    educationalContent:
      "Insurance optimization is about paying the right amount for the right coverage -- not the least amount overall. Raising deductibles makes sense when you have an adequate emergency fund to cover the higher out-of-pocket cost. Bundling with one carrier simplifies your portfolio and usually unlocks significant discounts. However, always compare the bundled price against individual best-in-class policies. Sometimes the savings from bundling do not offset the better coverage or lower price available from a specialist insurer. Review your coverage annually and get competitive quotes every 2-3 years.",
  },
  {
    day: 24,
    title: "Cyber Insurance and Digital Protection",
    intention: "Protect against the growing risk of cyber fraud and digital financial crimes.",
    tasks: [
      {
        id: "p24-t1",
        label: "Review your bank and brokerage fraud protection policies",
        description: "Understand your liability limits if unauthorized transactions occur on your accounts.",
      },
      {
        id: "p24-t2",
        label: "Set up transaction alerts on all financial accounts",
        description: "Configure alerts for transactions above a threshold you set -- $50 is a good starting point.",
      },
      {
        id: "p24-t3",
        label: "Consider personal cyber insurance if not included in your homeowners policy",
        description: "Some homeowners policies now include cyber coverage; standalone policies are also available.",
      },
    ],
    educationalContent:
      "Cybercrime losses exceeded $10 billion in 2022 according to the FBI's Internet Crime Complaint Center. Common threats include phishing emails that steal login credentials, SIM-swapping attacks that hijack your phone number, and business email compromise schemes. Transaction alerts are your early warning system -- they notify you in real time when money moves. Many banks offer zero-liability fraud protection, but there are time limits for reporting. Understanding your bank's specific policies and setting up robust alerts can mean the difference between catching fraud early and discovering it when it is too late to recover funds.",
  },
  {
    day: 25,
    title: "Natural Disaster Preparedness",
    intention: "Ensure you are financially prepared for natural disasters and catastrophic events.",
    tasks: [
      {
        id: "p25-t1",
        label: "Review your disaster coverage: flood, earthquake, wind, wildfire",
        description: "Standard homeowners policies exclude most natural disasters. Verify your supplemental coverage.",
      },
      {
        id: "p25-t2",
        label: "Prepare a financial disaster kit",
        description: "Keep copies of critical documents, account information, and emergency cash in a fireproof safe or go-bag.",
      },
      {
        id: "p25-t3",
        label: "Verify your home inventory is up to date and stored off-site",
        description: "Your inventory should be in cloud storage or with a trusted person outside your immediate area.",
      },
    ],
    educationalContent:
      "The average natural disaster claim takes 30-60 days to process, and many claims are initially denied or underpaid. Having thorough documentation -- a current home inventory with photos and receipts, policy details readily accessible, and an understanding of your coverage and exclusions -- dramatically improves your claim outcome. Keep a physical kit with copies of insurance policies, identification documents, bank account information, and at least $500-$1,000 in cash in a fireproof safe. Also maintain digital copies in secure cloud storage accessible from any device.",
  },
  {
    day: 26,
    title: "Insurance for Life Transitions",
    intention: "Anticipate insurance needs for upcoming life changes and milestones.",
    tasks: [
      {
        id: "p26-t1",
        label: "Identify any life changes expected in the next 12 months",
        description: "Marriage, baby, home purchase, job change, retirement, child starting college, etc.",
      },
      {
        id: "p26-t2",
        label: "Research insurance implications for each anticipated change",
        description: "Each transition triggers coverage needs: new dependents need life insurance, new home needs homeowners, etc.",
      },
      {
        id: "p26-t3",
        label: "Create a timeline for insurance actions tied to your life milestones",
        description: "Map out when to purchase, adjust, or cancel coverage based on your transition timeline.",
      },
    ],
    educationalContent:
      "Major life transitions create both opportunities and vulnerabilities in your protection plan. Getting married may let you combine policies for savings but also increases your shared liability. Having a child dramatically increases your life and disability insurance needs. Buying a home adds homeowners insurance and may trigger umbrella policy needs. Changing jobs can mean losing employer-provided life and disability coverage during the transition. Proactive planning ensures continuous coverage and prevents the dangerous gap that occurs when people react to changes instead of anticipating them.",
  },
  {
    day: 27,
    title: "Professional Advisor Assessment",
    intention: "Evaluate whether you need professional guidance for your protection strategy.",
    tasks: [
      {
        id: "p27-t1",
        label: "Assess whether you work with a fee-only financial advisor",
        description: "Fee-only advisors do not earn commissions on products they recommend, reducing conflicts of interest.",
      },
      {
        id: "p27-t2",
        label: "Evaluate your insurance agent: captive vs. independent",
        description: "Independent agents can shop multiple carriers for the best coverage and price.",
      },
      {
        id: "p27-t3",
        label: "Determine if you need an estate planning attorney",
        description: "If your net worth exceeds $500K or you have dependents, professional estate planning is essential.",
      },
    ],
    educationalContent:
      "The professionals you choose to work with can dramatically impact your financial protection. A captive insurance agent represents one company and can only offer that company's products. An independent agent shops multiple carriers and can find better coverage at better prices. Similarly, a commission-based financial advisor may recommend products that pay them the highest commission rather than what is best for you. Fee-only advisors (look for the CFP designation and fee-only compensation) are legally required to act in your best interest. The cost of professional advice is almost always offset by better coverage, lower premiums, and strategies you would not have found on your own.",
  },
  {
    day: 28,
    title: "Annual Protection Review System",
    intention: "Build a repeatable system for reviewing your protection plan every year.",
    tasks: [
      {
        id: "p28-t1",
        label: "Create an annual insurance review checklist",
        description: "List every policy, coverage amount, and the key questions to ask at each review.",
      },
      {
        id: "p28-t2",
        label: "Schedule your annual review on your calendar",
        description: "Pick a consistent month each year (your birthday month works well) for your full protection audit.",
      },
      {
        id: "p28-t3",
        label: "Identify trigger events that warrant an immediate review",
        description: "Marriage, divorce, birth, death, home purchase, job change, large asset acquisition, inheritance.",
      },
    ],
    educationalContent:
      "The best protection plan is one that evolves with your life. An annual review ensures your coverage keeps pace with changes in your net worth, family situation, and risk exposure. During your annual review, check: Are all beneficiary designations current? Have your assets grown beyond your liability coverage? Do you have any new risks (teenage driver, home renovation, new business)? Have your insurance needs decreased (car paid off, mortgage reduced, children grown)? A systematic annual review prevents both gaps in coverage and overpaying for coverage you no longer need.",
  },
  {
    day: 29,
    title: "Protection Plan Stress Test",
    intention: "Test your protection plan against real-world disaster scenarios.",
    tasks: [
      {
        id: "p29-t1",
        label: "Scenario test: What happens if you are unable to work for 6 months?",
        description: "Calculate: emergency fund runway + disability benefits vs. your monthly obligations.",
      },
      {
        id: "p29-t2",
        label: "Scenario test: What happens if your home is destroyed?",
        description: "Review: dwelling coverage vs. rebuild cost, personal property coverage, additional living expenses coverage.",
      },
      {
        id: "p29-t3",
        label: "Scenario test: What happens if you are sued for $1 million?",
        description: "Total your liability coverage across all policies and compare to the claim amount.",
      },
    ],
    educationalContent:
      "Stress testing is how financial institutions verify their resilience, and you should do the same for your personal protection plan. Run through the most likely catastrophic scenarios for your situation and trace the financial impact through your coverage. Where does the coverage hold? Where does it break? This exercise reveals gaps that are not obvious when you look at individual policies in isolation. The scenarios most worth testing are: prolonged disability, death of primary earner, major lawsuit, catastrophic property loss, and identity theft. If any scenario reveals a gap that would cause financial ruin, that is your next priority.",
  },
  {
    day: 30,
    title: "Protection Protocol Completion and Commitment",
    intention: "Celebrate your progress and commit to ongoing financial protection vigilance.",
    tasks: [
      {
        id: "p30-t1",
        label: "Review your complete protection action list and mark completed items",
        description: "Celebrate the actions you have taken and acknowledge the progress you have made.",
      },
      {
        id: "p30-t2",
        label: "Identify your top 3 remaining action items and set deadlines",
        description: "Not everything can be done in 30 days. Set realistic deadlines for remaining tasks.",
      },
      {
        id: "p30-t3",
        label: "Write a one-paragraph protection mission statement",
        description: "Define what financial protection means to you and why it matters for your family.",
      },
      {
        id: "p30-t4",
        label: "Share one key insight from this protocol with someone you care about",
        description: "Teaching others reinforces your own knowledge and helps protect the people around you.",
      },
    ],
    educationalContent:
      "Completing this 30-day protection protocol puts you ahead of 90% of households when it comes to financial preparedness. But protection is not a destination -- it is a discipline. The habits you have built over these 30 days -- reviewing coverage, identifying gaps, documenting assets, and planning for contingencies -- are the foundation of lasting financial security. Your next step is to integrate these practices into your annual financial routine. Remember: the goal is not to eliminate all risk (that is impossible) but to ensure that no single event can destroy your financial foundation. You are building an unshakable empire -- and every empire needs strong walls.",
  },
];
