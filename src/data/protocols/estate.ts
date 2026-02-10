import type { DayProtocol } from "@/types/protocol";

export const estateProtocol: DayProtocol[] = [
  {
    day: 1,
    title: "Estate Planning Foundation",
    intention: "Understand why estate planning matters and assess your current state.",
    tasks: [
      {
        id: "e1-t1",
        label: "Determine whether you currently have a will or trust in place",
        description: "If you die without a will (intestate), the state decides how your assets are distributed.",
      },
      {
        id: "e1-t2",
        label: "List your immediate family members and dependents",
        description: "Spouse, children, parents, and anyone who depends on you financially or would inherit from you.",
      },
      {
        id: "e1-t3",
        label: "Identify your primary estate planning goals",
        description: "Asset protection, minimizing taxes, providing for dependents, charitable giving, business succession.",
      },
    ],
    educationalContent:
      "Estate planning is not just for the wealthy -- it is for anyone who has people they care about, assets they want to protect, or wishes they want honored. Without a will, your state's intestacy laws determine who inherits your property, who becomes guardian of your minor children, and how your affairs are settled. This process (probate) is public, slow, and expensive. A basic estate plan -- will, power of attorney, healthcare directive, and beneficiary designations -- takes 2-4 hours with an attorney and costs $500-$2,000. The cost of not having one is measured in family conflict, legal fees, and outcomes you would never have chosen.",
  },
  {
    day: 2,
    title: "Last Will and Testament",
    intention: "Understand what a will does and take steps to create or update yours.",
    tasks: [
      {
        id: "e2-t1",
        label: "Learn what a will covers: asset distribution, guardianship, and executor appointment",
        description: "A will names who gets your property, who raises your children, and who manages the process.",
      },
      {
        id: "e2-t2",
        label: "Choose your executor -- the person who will carry out your will's instructions",
        description: "Pick someone responsible, organized, and willing. Consider naming an alternate executor.",
      },
      {
        id: "e2-t3",
        label: "If you have minor children, choose a guardian and discuss it with them",
        description: "This is the most important decision in your will. Failing to name a guardian lets a judge decide.",
      },
    ],
    educationalContent:
      "Your will is the foundational document of your estate plan. It does three critical things: (1) Names who receives your property (beneficiaries). (2) Designates a guardian for minor children. (3) Appoints an executor to manage the estate settlement process. Important limitations: a will only controls assets in your individual name. Assets held jointly, in trusts, or with beneficiary designations (retirement accounts, life insurance) pass outside the will. This is why beneficiary designations must align with your overall plan. A will must go through probate -- a court-supervised process that is public, can take 6-18 months, and typically costs 3-7% of the estate value in legal fees.",
  },
  {
    day: 3,
    title: "Revocable Living Trust",
    intention: "Evaluate whether a revocable living trust should be part of your estate plan.",
    tasks: [
      {
        id: "e3-t1",
        label: "Learn the key differences between a will and a revocable living trust",
        description: "A trust avoids probate, provides privacy, and allows seamless asset management if you become incapacitated.",
      },
      {
        id: "e3-t2",
        label: "Assess whether a trust makes sense for your situation",
        description: "Generally beneficial if you own real estate, have assets over $100K, want privacy, or live in a high-probate-cost state.",
      },
      {
        id: "e3-t3",
        label: "Research estate planning attorneys in your area",
        description: "Ask for referrals from your financial advisor, CPA, or trusted friends who have completed estate planning.",
      },
    ],
    educationalContent:
      "A revocable living trust is a legal entity that holds your assets during your lifetime and distributes them after death without going through probate. While you are alive, you maintain full control as the trustee and can modify or revoke the trust at any time. The benefits: (1) Avoids probate -- assets transfer immediately and privately. (2) Incapacity planning -- your successor trustee manages assets seamlessly if you become unable to. (3) Privacy -- unlike a will, which becomes public record during probate, a trust remains private. (4) Multi-state property -- if you own real estate in multiple states, a trust avoids probate in each state. The cost of a trust is higher than a simple will ($1,500-$5,000), but for most homeowners, the probate savings alone justify the expense.",
  },
  {
    day: 4,
    title: "Funding Your Trust",
    intention: "Ensure your trust actually works by transferring assets into it.",
    tasks: [
      {
        id: "e4-t1",
        label: "Understand what 'funding a trust' means",
        description: "A trust only controls assets that have been retitled in the trust's name. An unfunded trust is useless.",
      },
      {
        id: "e4-t2",
        label: "List all assets that should be transferred into your trust",
        description: "Real estate, bank accounts, brokerage accounts, business interests, and valuable personal property.",
      },
      {
        id: "e4-t3",
        label: "Begin the retitling process for your primary assets",
        description: "Real estate requires a new deed. Bank and brokerage accounts need title changes with the institution.",
      },
    ],
    educationalContent:
      "The most common estate planning failure is creating a trust and then not funding it. An unfunded trust is like an empty safe -- it exists but protects nothing. Funding a trust means retitling assets so the trust is the owner: your home deed is transferred to the trust, bank accounts are retitled in the trust's name, and brokerage accounts are updated. This does not trigger any tax consequences for a revocable trust because you are still the beneficial owner. Note: retirement accounts (401k, IRA) and life insurance should NOT be retitled to the trust -- instead, the trust should be named as the beneficiary if that aligns with your plan. Work with your attorney to create a funding checklist specific to your assets.",
  },
  {
    day: 5,
    title: "Power of Attorney",
    intention: "Designate someone to make financial decisions on your behalf if you cannot.",
    tasks: [
      {
        id: "e5-t1",
        label: "Understand the two types: Durable Financial Power of Attorney and Springing POA",
        description: "Durable POA takes effect immediately. Springing POA activates only upon incapacitation.",
      },
      {
        id: "e5-t2",
        label: "Choose your financial agent (attorney-in-fact)",
        description: "Select someone you trust completely with your finances. Consider naming a successor agent.",
      },
      {
        id: "e5-t3",
        label: "Discuss your financial values and wishes with your chosen agent",
        description: "They need to understand your investment philosophy, charitable intentions, and financial priorities.",
      },
    ],
    educationalContent:
      "A Durable Financial Power of Attorney is arguably the most important document in your estate plan for your lifetime. If you become incapacitated without one -- through illness, accident, or cognitive decline -- your family must petition a court for guardianship or conservatorship. This court process is expensive ($5,000-$15,000+), time-consuming (weeks to months), public, and emotionally draining. During that time, no one can access your accounts, pay your bills, or manage your investments. A properly drafted POA allows your chosen agent to step in immediately and seamlessly manage your finances. Choose your agent carefully: this person will have broad authority over your financial life.",
  },
  {
    day: 6,
    title: "Healthcare Directive and Living Will",
    intention: "Document your medical treatment preferences and designate a healthcare proxy.",
    tasks: [
      {
        id: "e6-t1",
        label: "Create or update your Advance Healthcare Directive",
        description: "This document specifies your wishes regarding life-sustaining treatment, resuscitation, and organ donation.",
      },
      {
        id: "e6-t2",
        label: "Designate a Healthcare Proxy (Medical Power of Attorney)",
        description: "Choose someone who understands your values and can make medical decisions if you cannot communicate.",
      },
      {
        id: "e6-t3",
        label: "Have a detailed conversation with your healthcare proxy about your wishes",
        description: "Discuss end-of-life preferences, quality of life values, and specific scenarios so they can honor your intentions.",
      },
    ],
    educationalContent:
      "An Advance Healthcare Directive (also called a Living Will) and Healthcare Proxy work together to ensure your medical wishes are honored when you cannot speak for yourself. The directive specifies your preferences: Do you want life-sustaining treatment if you are terminally ill? Under what conditions would you want artificial nutrition or ventilation? Do you want to be an organ donor? The healthcare proxy gives someone legal authority to make medical decisions based on your stated wishes and their understanding of your values. Without these documents, medical decisions default to state law and family members may disagree about your care, leading to anguish and legal battles at the worst possible time.",
  },
  {
    day: 7,
    title: "Beneficiary Designation Audit",
    intention: "Ensure all beneficiary designations are current, correct, and aligned with your estate plan.",
    tasks: [
      {
        id: "e7-t1",
        label: "Pull beneficiary records for all accounts that use beneficiary designations",
        description: "401(k), IRA, Roth IRA, life insurance, annuities, HSA, 529 plans, brokerage TOD designations.",
      },
      {
        id: "e7-t2",
        label: "Verify that primary and contingent beneficiaries are correct on every account",
        description: "Check names, percentages, and whether designations have been updated after life changes.",
      },
      {
        id: "e7-t3",
        label: "Update any outdated designations immediately",
        description: "Contact the custodian or insurer to submit new beneficiary forms where needed.",
      },
    ],
    educationalContent:
      "Beneficiary designations are the most overlooked and most consequential element of estate planning. These designations supersede your will and trust for the accounts they apply to. If your 401(k) beneficiary form still names an ex-spouse, they will receive the account -- regardless of what your will says, regardless of what your current spouse expects. This creates devastating outcomes that are entirely preventable. Review designations on every account annually and after every major life event. For each account, name both a primary and contingent beneficiary. Consider whether per stirpes (passes to the beneficiary's heirs if they predecease you) or per capita (divides equally among surviving beneficiaries) distribution is appropriate.",
  },
  {
    day: 8,
    title: "Digital Estate Planning",
    intention: "Ensure your digital assets and accounts are accessible and protected after death.",
    tasks: [
      {
        id: "e8-t1",
        label: "Create an inventory of all digital accounts and assets",
        description: "Email, social media, cloud storage, cryptocurrency, domain names, online businesses, digital subscriptions.",
      },
      {
        id: "e8-t2",
        label: "Document access credentials in a secure, accessible location",
        description: "Use a password manager with emergency access features, or a sealed letter with your attorney.",
      },
      {
        id: "e8-t3",
        label: "Set up legacy contacts or inactive account managers where available",
        description: "Google, Apple, Facebook, and other platforms offer legacy settings. Configure them now.",
      },
    ],
    educationalContent:
      "Digital assets are an increasingly significant part of modern estates, yet most estate plans do not address them. Cryptocurrency wallets without accessible private keys are lost forever -- an estimated $140 billion in Bitcoin is permanently inaccessible. Online businesses, domain names, and social media accounts with significant followings have real monetary value. Photos stored only in cloud accounts may be inaccessible to grieving family members. Create a comprehensive digital asset inventory, store credentials securely (a password manager with emergency access is ideal), and configure legacy settings on platforms that offer them. Include instructions for digital assets in your estate plan so your executor knows what exists and how to access it.",
  },
  {
    day: 9,
    title: "Life Insurance in Estate Planning",
    intention: "Understand how life insurance integrates with your estate plan for maximum benefit.",
    tasks: [
      {
        id: "e9-t1",
        label: "Review how life insurance proceeds will be distributed",
        description: "Life insurance passes to beneficiaries outside of probate, making it an efficient wealth transfer tool.",
      },
      {
        id: "e9-t2",
        label: "Evaluate whether an Irrevocable Life Insurance Trust (ILIT) would benefit you",
        description: "An ILIT keeps life insurance proceeds out of your taxable estate for estate tax purposes.",
      },
      {
        id: "e9-t3",
        label: "Ensure life insurance coverage is adequate for estate liquidity needs",
        description: "If your estate has illiquid assets (real estate, business), life insurance can provide cash for taxes and expenses.",
      },
    ],
    educationalContent:
      "Life insurance plays a dual role in estate planning: it provides financial security for dependents and creates liquidity for the estate. If your estate consists primarily of illiquid assets (a business, real estate, or art), your heirs may need to sell assets quickly to pay estate taxes, debts, and settlement costs. Life insurance proceeds provide immediate cash to cover these obligations without a forced sale. For estates that may be subject to estate tax (currently over $13.61 million for individuals, $27.22 million for married couples), an Irrevocable Life Insurance Trust (ILIT) keeps the insurance proceeds out of the taxable estate. The trust owns the policy, so the death benefit is not included in your estate. This is one of the most effective estate tax reduction strategies available.",
  },
  {
    day: 10,
    title: "Joint Ownership and Titling",
    intention: "Review how your assets are titled and understand the estate planning implications.",
    tasks: [
      {
        id: "e10-t1",
        label: "Review the titling of all major assets: real estate, vehicles, bank and investment accounts",
        description: "Is each asset in your name alone, joint with rights of survivorship, tenants in common, or in a trust?",
      },
      {
        id: "e10-t2",
        label: "Understand how each titling method affects asset transfer at death",
        description: "Joint tenancy passes automatically to the surviving owner. Tenants in common goes through probate.",
      },
      {
        id: "e10-t3",
        label: "Determine if any assets need to be retitled to align with your estate plan",
        description: "Incorrect titling can override your will and trust, sending assets to unintended recipients.",
      },
    ],
    educationalContent:
      "Asset titling is the hidden mechanism that determines who actually receives your property at death, often overriding your will. Property held as joint tenants with rights of survivorship passes automatically to the surviving co-owner, bypassing the will entirely. This is often desirable for a married couple's home but can create problems in second marriages or blended families. Tenants in common allows each owner to leave their share to whomever they choose through their will. Community property states have additional rules. Review every asset title carefully and ensure it aligns with your overall estate plan. A single misaligned title can undermine years of careful planning.",
  },
  {
    day: 11,
    title: "Estate Tax Planning Basics",
    intention: "Understand estate taxes and whether your estate may be subject to them.",
    tasks: [
      {
        id: "e11-t1",
        label: "Learn the current federal estate tax exemption and rate",
        description: "The exemption is $13.61 million per individual (2024). Amounts above the exemption are taxed at 40%.",
      },
      {
        id: "e11-t2",
        label: "Determine if your state has a separate estate or inheritance tax",
        description: "12 states and DC have estate taxes, and 6 states have inheritance taxes, often with lower exemptions.",
      },
      {
        id: "e11-t3",
        label: "Estimate your total taxable estate including life insurance and retirement accounts",
        description: "Your taxable estate may be larger than your net worth -- it includes life insurance death benefits you own.",
      },
    ],
    educationalContent:
      "While the current federal estate tax exemption of $13.61 million per individual ($27.22 million for married couples) shelters most estates, this exemption is scheduled to sunset in 2026, potentially dropping to approximately $7 million per individual. State estate taxes are a more immediate concern: states like Massachusetts and Oregon have exemptions as low as $1 million. Your taxable estate includes everything you own or control: home, investments, retirement accounts, life insurance death benefits (if you own the policy), business interests, and personal property. Married couples can use portability to combine their exemptions, but this requires filing an estate tax return for the first spouse to die, even if no tax is owed.",
  },
  {
    day: 12,
    title: "Gifting Strategies",
    intention: "Use strategic gifting to transfer wealth to heirs while reducing your taxable estate.",
    tasks: [
      {
        id: "e12-t1",
        label: "Understand the annual gift tax exclusion",
        description: "You can gift up to $18,000 per recipient per year (2024) without any gift tax reporting or consequences.",
      },
      {
        id: "e12-t2",
        label: "Evaluate whether annual gifting should be part of your estate plan",
        description: "A couple with 3 children can gift $108,000/year ($18,000 x 2 parents x 3 children) with no tax impact.",
      },
      {
        id: "e12-t3",
        label: "Explore 529 plan superfunding as an accelerated gifting strategy",
        description: "You can contribute 5 years of annual exclusion gifts at once to a 529 plan ($90,000 per beneficiary in 2024).",
      },
    ],
    educationalContent:
      "Strategic gifting is one of the simplest and most effective estate planning tools. The annual gift tax exclusion ($18,000 per recipient in 2024) allows you to transfer significant wealth over time with no tax consequences for either party. A married couple with three children and three grandchildren can transfer $216,000 per year ($18,000 x 2 donors x 6 recipients) -- that is over $2 million per decade, completely tax-free. Gifts of appreciated assets transfer the donor's cost basis to the recipient, so consider this for assets with low basis. In contrast, assets inherited at death receive a stepped-up basis, eliminating capital gains. This basis rule influences whether it is better to gift during life or transfer at death.",
  },
  {
    day: 13,
    title: "Charitable Estate Planning",
    intention: "Integrate charitable giving into your estate plan for tax benefits and legacy impact.",
    tasks: [
      {
        id: "e13-t1",
        label: "Identify causes or organizations you want to support through your estate",
        description: "Consider charities, educational institutions, religious organizations, or community foundations.",
      },
      {
        id: "e13-t2",
        label: "Learn about charitable remainder trusts and charitable lead trusts",
        description: "CRTs provide income to you now and the remainder to charity. CLTs provide income to charity now and the remainder to heirs.",
      },
      {
        id: "e13-t3",
        label: "Consider naming a charity as the beneficiary of your IRA or retirement account",
        description: "Retirement accounts are the most tax-efficient assets to leave to charity because charities pay no income tax on withdrawals.",
      },
    ],
    educationalContent:
      "Charitable estate planning creates a powerful trifecta: it supports causes you care about, reduces estate taxes, and can provide income during your lifetime. The most tax-efficient charitable bequest is leaving retirement account assets (IRA, 401k) to charity. These accounts are subject to both estate tax and income tax when inherited by individuals, but charities receive them tax-free. Meanwhile, leave assets with a stepped-up basis (real estate, stocks) to heirs, who receive them income-tax-free. A Donor-Advised Fund (DAF) in your estate plan allows your family to continue your charitable legacy by making grants to charities of their choosing. A charitable remainder trust can provide income to you or your heirs for life, with the remainder going to charity.",
  },
  {
    day: 14,
    title: "Week 2 Review: Estate Document Checklist",
    intention: "Confirm your core estate documents are in place or scheduled for creation.",
    tasks: [
      {
        id: "e14-t1",
        label: "Complete the estate document checklist",
        description: "Will, revocable trust, financial POA, healthcare directive, HIPAA authorization -- check or schedule each.",
      },
      {
        id: "e14-t2",
        label: "Identify any missing documents and schedule action to create them",
        description: "If any core documents are missing, book a consultation with an estate planning attorney this week.",
      },
      {
        id: "e14-t3",
        label: "Organize existing estate documents in one secure, accessible location",
        description: "Physical originals in a fireproof safe, digital copies in encrypted cloud storage, and location shared with executor.",
      },
    ],
    educationalContent:
      "The five essential estate planning documents are: (1) Last Will and Testament -- directs asset distribution and names guardians. (2) Revocable Living Trust -- avoids probate and manages incapacity. (3) Durable Financial Power of Attorney -- authorizes someone to manage your finances. (4) Advance Healthcare Directive / Living Will -- specifies medical treatment preferences. (5) HIPAA Authorization -- allows designated people to access your medical information. Without all five, there are gaps that can cause delay, expense, and family conflict. Store original documents in a fireproof safe (not a bank safe deposit box, which may be sealed at death). Give your executor and agents copies, and ensure they know where originals are located.",
  },
  {
    day: 15,
    title: "Guardianship and Minor Children Planning",
    intention: "Ensure your children are cared for according to your wishes if both parents are unavailable.",
    tasks: [
      {
        id: "e15-t1",
        label: "Select primary and backup guardians for minor children",
        description: "Consider values, parenting style, financial stability, location, and the guardian's willingness.",
      },
      {
        id: "e15-t2",
        label: "Discuss your choice with the potential guardians and get their agreement",
        description: "Never assume someone is willing to take on this responsibility. Have the conversation.",
      },
      {
        id: "e15-t3",
        label: "Consider separating guardianship of children from financial management",
        description: "The best person to raise your children may not be the best person to manage their inheritance.",
      },
    ],
    educationalContent:
      "Naming a guardian for minor children is the most emotionally difficult and most important decision in estate planning. If both parents die without a named guardian, a court will decide who raises your children -- and the court may not choose the person you would have chosen. Key considerations: Does the potential guardian share your values and parenting philosophy? Can they handle the financial and emotional responsibility? Are they in a stable life situation? Is their location workable? Many parents separate the roles: a guardian raises the children while a trustee manages the inheritance. This prevents overburdening one person and ensures professional financial management of your children's assets. Review guardian designations as your children grow and your relationships evolve.",
  },
  {
    day: 16,
    title: "Special Needs Planning",
    intention: "Address estate planning for family members with disabilities or special needs.",
    tasks: [
      {
        id: "e16-t1",
        label: "Determine if any beneficiaries receive government benefits that could be affected by inheritance",
        description: "SSI, Medicaid, and other means-tested benefits can be lost if a beneficiary inherits directly.",
      },
      {
        id: "e16-t2",
        label: "Research Special Needs Trusts (SNTs) or ABLE accounts",
        description: "These tools preserve government benefit eligibility while providing supplemental support.",
      },
      {
        id: "e16-t3",
        label: "Write a Letter of Intent for any special needs family members",
        description: "Document care routines, preferences, medical needs, and your vision for their quality of life.",
      },
    ],
    educationalContent:
      "A direct inheritance or gift to a person with disabilities who receives means-tested government benefits (SSI, Medicaid) can disqualify them from those benefits. A Special Needs Trust (also called Supplemental Needs Trust) solves this: assets in the trust supplement government benefits without replacing them. The trust can pay for things government programs do not cover: vacations, entertainment, technology, education, and quality of life enhancements. If you have a family member with special needs, every part of your estate plan must be coordinated to protect their benefits: will, trust, life insurance beneficiaries, and the estate plans of grandparents and other relatives who might leave assets to them. An ABLE account (Achieving a Better Life Experience) is a simpler option for smaller amounts, allowing up to $100,000 without affecting SSI eligibility.",
  },
  {
    day: 17,
    title: "Business Succession Planning",
    intention: "Create a plan for your business to continue or transition after your death or disability.",
    tasks: [
      {
        id: "e17-t1",
        label: "Determine what would happen to your business if you died tomorrow",
        description: "Without a succession plan, your business may be forced to close or sell at a steep discount.",
      },
      {
        id: "e17-t2",
        label: "Identify potential successors: family members, partners, key employees, or outside buyers",
        description: "Who has the ability, desire, and resources to continue the business?",
      },
      {
        id: "e17-t3",
        label: "Obtain a business valuation or estimate for estate planning purposes",
        description: "Knowing your business's fair market value is essential for estate tax planning and equitable distribution.",
      },
    ],
    educationalContent:
      "Business succession planning is critical for business owners, yet fewer than 30% of family businesses have a formal succession plan. Without one, a business owner's death can trigger: forced liquidation at fire-sale prices, loss of key customer and vendor relationships, employee departures, and estate tax bills that force a sale. Key succession tools include: buy-sell agreements (funded with life insurance) that provide a pre-arranged buyer and funds at an agreed price, key person insurance to cover the financial impact of losing a critical team member, and gradual ownership transition to identified successors. Start planning at least 5-10 years before your intended exit to maximize value and minimize disruption.",
  },
  {
    day: 18,
    title: "Buy-Sell Agreements",
    intention: "Protect your business interests and provide liquidity for your estate through buy-sell planning.",
    tasks: [
      {
        id: "e18-t1",
        label: "Determine if you need a buy-sell agreement (any business with co-owners)",
        description: "Buy-sell agreements define what happens to ownership shares when an owner dies, becomes disabled, or exits.",
      },
      {
        id: "e18-t2",
        label: "Understand the three types: Cross-Purchase, Entity Redemption, and Hybrid",
        description: "Each has different tax, insurance, and structural implications. Consult with an attorney.",
      },
      {
        id: "e18-t3",
        label: "Ensure the agreement is funded with adequate life and disability insurance",
        description: "An unfunded buy-sell is just a promise. Insurance provides the cash to execute the agreement.",
      },
    ],
    educationalContent:
      "A buy-sell agreement is a contract between business co-owners that pre-determines what happens to an owner's interest upon death, disability, retirement, or desire to sell. It serves three critical purposes: (1) It prevents unwanted people (such as an owner's heirs or ex-spouse) from becoming business partners. (2) It establishes a fair price for the business interest, preventing disputes. (3) It provides liquidity so the deceased owner's family receives cash instead of an illiquid business interest. The agreement must be funded -- typically with life insurance and disability insurance. Without funding, the surviving owners may not have the cash to buy the deceased's share, forcing a sale or creating a hostile partnership with the heirs.",
  },
  {
    day: 19,
    title: "Retirement Account Estate Planning",
    intention: "Optimize how your retirement accounts transfer to heirs with minimum tax impact.",
    tasks: [
      {
        id: "e19-t1",
        label: "Understand the SECURE Act's 10-year distribution rule for inherited IRAs",
        description: "Most non-spouse beneficiaries must now empty inherited IRAs within 10 years, accelerating taxes.",
      },
      {
        id: "e19-t2",
        label: "Evaluate Roth conversion strategies to reduce future tax burden on heirs",
        description: "Converting Traditional IRA to Roth means you pay the tax now so your heirs inherit tax-free.",
      },
      {
        id: "e19-t3",
        label: "Review whether your retirement account beneficiaries should be individuals or your trust",
        description: "Naming a trust as IRA beneficiary adds control but may accelerate required distributions.",
      },
    ],
    educationalContent:
      "The SECURE Act of 2019 fundamentally changed retirement account inheritance. Previously, non-spouse beneficiaries could stretch IRA distributions over their lifetime (the 'stretch IRA'). Now, most must empty the account within 10 years of the owner's death, potentially pushing heirs into higher tax brackets. This makes Roth conversions especially valuable: by converting Traditional IRA funds to Roth (paying tax now at your rate), your heirs inherit tax-free Roth funds. Even with the 10-year rule, Roth distributions have no tax impact. Strategic partial Roth conversions during lower-income years (early retirement, between jobs, or before Social Security starts) can dramatically reduce the total tax burden across generations.",
  },
  {
    day: 20,
    title: "Real Estate in Estate Planning",
    intention: "Address how real property will transfer efficiently within your estate plan.",
    tasks: [
      {
        id: "e20-t1",
        label: "Review the titling of all real estate you own",
        description: "Is each property titled in your name, jointly, in a trust, or in an LLC?",
      },
      {
        id: "e20-t2",
        label: "Understand the stepped-up basis benefit for inherited real estate",
        description: "Heirs receive a cost basis equal to the property's fair market value at your death, eliminating capital gains.",
      },
      {
        id: "e20-t3",
        label: "Transfer real property into your trust if appropriate",
        description: "Real estate in a trust avoids probate and allows for seamless management if you become incapacitated.",
      },
    ],
    educationalContent:
      "Real estate presents unique estate planning challenges because it is illiquid, often high-value, and subject to location-specific laws. The stepped-up basis at death is one of the most valuable tax benefits in the entire code: if you bought a property for $200,000 and it is worth $800,000 at death, your heirs' cost basis is $800,000 -- they can sell immediately and pay zero capital gains tax on $600,000 of appreciation. This is why gifting real estate during life (which transfers your original low basis) is usually inferior to transferring at death (which steps up the basis). Transfer real estate into your revocable living trust to avoid probate, which is especially important if you own property in multiple states -- without a trust, your estate goes through probate in each state where you own real property.",
  },
  {
    day: 21,
    title: "Irrevocable Trusts for Asset Protection and Tax Planning",
    intention: "Explore advanced trust strategies for wealth protection and estate tax reduction.",
    tasks: [
      {
        id: "e21-t1",
        label: "Learn the difference between revocable and irrevocable trusts",
        description: "Revocable trusts provide no asset protection or tax benefits. Irrevocable trusts provide both, but you give up control.",
      },
      {
        id: "e21-t2",
        label: "Evaluate whether an irrevocable trust would benefit your estate plan",
        description: "Generally beneficial if your estate may be subject to estate taxes or if you need creditor protection.",
      },
      {
        id: "e21-t3",
        label: "Research common irrevocable trust types: ILIT, GRAT, SLAT, QPRT",
        description: "Each serves a specific purpose. An estate planning attorney can recommend the right structure.",
      },
    ],
    educationalContent:
      "Irrevocable trusts are powerful tools, but they involve giving up ownership and control of the assets placed in them. The trade-off: assets in an irrevocable trust are generally protected from creditors and excluded from your taxable estate. Common types include: (1) ILIT (Irrevocable Life Insurance Trust) -- keeps life insurance proceeds out of your estate. (2) GRAT (Grantor Retained Annuity Trust) -- transfers appreciation to heirs with minimal gift tax. (3) SLAT (Spousal Lifetime Access Trust) -- removes assets from your estate while your spouse retains indirect access. (4) QPRT (Qualified Personal Residence Trust) -- transfers your home to heirs at a reduced gift tax value. These strategies require professional guidance and are most beneficial for estates approaching or exceeding the estate tax exemption.",
  },
  {
    day: 22,
    title: "Family Communication and Letter of Intent",
    intention: "Communicate your estate plan and personal wishes to your family to prevent conflict.",
    tasks: [
      {
        id: "e22-t1",
        label: "Write a Letter of Intent to your family",
        description: "This non-legal document explains your decisions, your values, and your wishes beyond what legal documents cover.",
      },
      {
        id: "e22-t2",
        label: "Schedule a family meeting to discuss your estate plan at a high level",
        description: "You need not share every detail, but your family should understand the plan exists and where to find it.",
      },
      {
        id: "e22-t3",
        label: "Document funeral and memorial preferences",
        description: "Burial vs. cremation, service preferences, and any pre-arrangements you have made.",
      },
    ],
    educationalContent:
      "The number one cause of family conflict after a death is not the estate plan itself but the lack of communication about it. When family members are surprised by the contents of a will or trust, emotions run high and litigation often follows. A proactive family conversation -- even a brief one -- can prevent years of conflict. You do not need to share account balances or specific asset values. Instead, communicate: (1) That an estate plan exists and where to find it. (2) Who the executor/trustee is and why you chose them. (3) Your general intentions and the values behind your decisions. (4) Any unequal distributions and the reasoning. A Letter of Intent, though not legally binding, provides context and emotional connection that legal documents cannot.",
  },
  {
    day: 23,
    title: "Executor and Trustee Selection",
    intention: "Choose the right people or institutions to manage your estate and trusts.",
    tasks: [
      {
        id: "e23-t1",
        label: "Evaluate your current executor and trustee choices",
        description: "Are they still willing, capable, and appropriate for the role?",
      },
      {
        id: "e23-t2",
        label: "Consider whether a professional fiduciary or corporate trustee is appropriate",
        description: "For complex estates or family dynamics, a professional trustee provides objectivity and expertise.",
      },
      {
        id: "e23-t3",
        label: "Discuss expectations and responsibilities with your chosen fiduciaries",
        description: "Ensure they understand the time commitment, legal duties, and your specific expectations.",
      },
    ],
    educationalContent:
      "Choosing the right executor and trustee is as important as the estate plan itself. An executor manages the probate process: gathering assets, paying debts and taxes, and distributing property. This typically takes 12-18 months and requires organization, financial literacy, and patience. A trustee manages trust assets, which can span decades for trusts that benefit minor children or provide lifetime income to a surviving spouse. The ideal fiduciary is trustworthy, financially competent, organized, and able to be impartial. For large or complex estates, or when family dynamics are contentious, a professional trustee (bank trust department or independent trust company) provides objectivity and expertise for an annual fee of 0.5-1.5% of trust assets.",
  },
  {
    day: 24,
    title: "Protecting Heirs from Themselves",
    intention: "Build safeguards into your estate plan to protect beneficiaries from poor decisions.",
    tasks: [
      {
        id: "e24-t1",
        label: "Assess whether any beneficiaries need protection from themselves",
        description: "Consider age, maturity, spending habits, substance issues, susceptibility to predators or bad influences.",
      },
      {
        id: "e24-t2",
        label: "Learn about spendthrift provisions and incentive trusts",
        description: "Spendthrift clauses protect trust assets from beneficiaries' creditors. Incentive provisions reward positive behavior.",
      },
      {
        id: "e24-t3",
        label: "Determine appropriate distribution schedules for each beneficiary",
        description: "Options: immediate lump sum, staged distributions (1/3 at 25, 1/3 at 30, 1/3 at 35), or lifetime trust.",
      },
    ],
    educationalContent:
      "Leaving a large inheritance outright to a young or irresponsible beneficiary can be destructive. Studies show that one-third of heirs who receive a lump-sum inheritance have negative savings within two years. Trusts with structured distributions protect against this: instead of receiving everything at once, a beneficiary might receive distributions at ages 25, 30, and 35, or receive income only with the principal preserved for the next generation. Spendthrift provisions prevent beneficiaries from pledging trust assets to creditors or assigning their interest to others. Incentive provisions can reward education completion, employment, or matching charitable contributions. The goal is not to control from the grave but to create a structure that supports wise decision-making.",
  },
  {
    day: 25,
    title: "Blended Family Estate Planning",
    intention: "Address the unique challenges of estate planning with stepchildren, ex-spouses, and blended families.",
    tasks: [
      {
        id: "e25-t1",
        label: "Identify potential conflicts between your current spouse and children from prior relationships",
        description: "The most common conflict: surviving spouse has access to all assets and children from prior relationships receive nothing.",
      },
      {
        id: "e25-t2",
        label: "Explore trust structures that protect both your spouse and your children",
        description: "A QTIP trust provides income to your surviving spouse while preserving the principal for your children.",
      },
      {
        id: "e25-t3",
        label: "Review and update all beneficiary designations with blended family considerations",
        description: "Ensure designations reflect your actual wishes, not a default from a previous relationship.",
      },
    ],
    educationalContent:
      "Blended families create estate planning challenges that default legal rules handle poorly. If you leave everything to your current spouse and they remarry or change their own estate plan, your children from a prior relationship may inherit nothing. A QTIP trust (Qualified Terminable Interest Property) solves this elegantly: it provides income to your surviving spouse for life, ensuring they are cared for, while preserving the trust principal for distribution to your children after the spouse passes. Other tools include prenuptial agreements that address estate planning, separate trusts for separate property, and clear beneficiary designations that reflect your specific family structure. Open communication with your spouse about your estate planning intentions is essential in blended family situations.",
  },
  {
    day: 26,
    title: "Long-Term Care and Medicaid Planning",
    intention: "Plan for long-term care costs without depleting your entire estate.",
    tasks: [
      {
        id: "e26-t1",
        label: "Research Medicaid eligibility rules in your state",
        description: "Medicaid covers long-term care but has strict asset and income limits. Rules vary significantly by state.",
      },
      {
        id: "e26-t2",
        label: "Understand Medicaid's look-back period for asset transfers",
        description: "Gifts or transfers made within 5 years of applying for Medicaid may trigger a penalty period.",
      },
      {
        id: "e26-t3",
        label: "Evaluate long-term care insurance as part of your estate preservation strategy",
        description: "LTC insurance preserves your assets by covering care costs that would otherwise deplete your estate.",
      },
    ],
    educationalContent:
      "Long-term care is the single largest threat to estate preservation. The average nursing home costs $90,000-$120,000 per year, and the average stay is 2.5 years. Without insurance or advance planning, this can consume a significant portion of a lifetime's savings. Medicaid will cover long-term care costs, but only after you have spent down nearly all of your assets (the exact amount varies by state). The 5-year look-back period means that transferring assets to family members shortly before applying for Medicaid results in a penalty period during which you must pay for care yourself. Planning must begin well in advance -- ideally 5-10 years or more before care is needed. Options include LTC insurance, irrevocable trusts established outside the look-back period, and Medicaid-compliant annuities.",
  },
  {
    day: 27,
    title: "Tax Basis Planning and Wealth Transfer",
    intention: "Optimize the tax basis of assets you transfer to maximize what your heirs actually keep.",
    tasks: [
      {
        id: "e27-t1",
        label: "Identify your lowest cost-basis assets",
        description: "These are the assets with the most built-in capital gains -- real estate, stocks, and business interests purchased long ago.",
      },
      {
        id: "e27-t2",
        label: "Understand when to gift assets during life vs. transfer at death",
        description: "Gifts carry over your cost basis. Inherited assets receive a stepped-up basis. This difference can save tens of thousands.",
      },
      {
        id: "e27-t3",
        label: "Evaluate which assets to leave to charity vs. heirs based on tax efficiency",
        description: "Leave highly-taxed assets (retirement accounts) to charity and low-basis assets (real estate) to heirs.",
      },
    ],
    educationalContent:
      "Tax basis planning is one of the most overlooked opportunities in estate planning. When you gift an asset during your lifetime, the recipient inherits your original cost basis. If you bought stock for $10,000 and it is now worth $100,000, gifting it to your child means they have a $10,000 basis and will owe capital gains tax on $90,000 when they sell. However, if they inherit the same stock at your death, their basis is stepped up to $100,000 (the value at death), and they can sell immediately with zero capital gains tax. This stepped-up basis is one of the most valuable tax provisions in the code. The optimal strategy: gift high-basis assets (or cash) during life and hold low-basis, highly appreciated assets until death for the step-up.",
  },
  {
    day: 28,
    title: "Estate Plan Review Triggers and Maintenance",
    intention: "Build a system to keep your estate plan current as your life changes.",
    tasks: [
      {
        id: "e28-t1",
        label: "Create a list of life events that trigger an estate plan review",
        description: "Marriage, divorce, birth, death, move to new state, significant asset change, law changes, health changes.",
      },
      {
        id: "e28-t2",
        label: "Schedule an annual estate plan review on your calendar",
        description: "Pick a date each year to review documents, beneficiaries, titling, and fiduciary designations.",
      },
      {
        id: "e28-t3",
        label: "Create a relationship with an estate planning attorney for ongoing updates",
        description: "Having an attorney who knows your family and plan makes updates faster and less expensive.",
      },
    ],
    educationalContent:
      "An estate plan is not a set-it-and-forget-it document. Life changes, tax law changes, and relationship changes all require updates. The most common triggers for estate plan review: (1) Marriage or divorce. (2) Birth or adoption of a child or grandchild. (3) Death of a beneficiary, executor, or trustee. (4) Moving to a different state (state laws vary significantly). (5) Significant change in net worth. (6) Change in tax laws. (7) Change in health status. (8) Starting or selling a business. At minimum, review your plan annually even if nothing has changed, to confirm everything remains aligned with your wishes. A 30-minute annual review can prevent catastrophic oversights that take years and thousands of dollars to fix.",
  },
  {
    day: 29,
    title: "Estate Plan Stress Test",
    intention: "Test your estate plan against real-world scenarios to find gaps.",
    tasks: [
      {
        id: "e29-t1",
        label: "Scenario: You die tomorrow. Walk through exactly what happens",
        description: "Who is notified? Who manages your affairs? Where do your assets go? What problems arise?",
      },
      {
        id: "e29-t2",
        label: "Scenario: You become permanently incapacitated. What happens?",
        description: "Who manages your finances? Who makes medical decisions? Is there a gap in authority or access?",
      },
      {
        id: "e29-t3",
        label: "Scenario: You and your spouse die simultaneously. What happens to your children?",
        description: "Is guardianship clearly designated? Can the guardian access funds? Is the trust funded and functional?",
      },
    ],
    educationalContent:
      "Stress testing your estate plan reveals gaps that are invisible on paper. Walk through each scenario step by step: Who discovers the situation first? Can they find your documents? Do they know who to call? Can your executor access your accounts? Are there delays caused by missing documents, incorrect titling, or outdated beneficiary designations? Do your children have a guardian who can act immediately? Will there be enough liquid cash to cover expenses during the settlement period? These questions expose real-world problems that legal documents alone cannot solve. Share the results of this exercise with your attorney and make any necessary updates.",
  },
  {
    day: 30,
    title: "Estate Protocol Completion and Legacy Commitment",
    intention: "Celebrate your estate planning progress and commit to protecting your legacy.",
    tasks: [
      {
        id: "e30-t1",
        label: "Review your complete estate planning action list and mark completed items",
        description: "Acknowledge the significant work you have done to protect your family and legacy.",
      },
      {
        id: "e30-t2",
        label: "Identify your top 3 remaining estate planning priorities and set deadlines",
        description: "Complex items like trust creation or business succession planning may take additional time.",
      },
      {
        id: "e30-t3",
        label: "Write a legacy statement: what do you want your life to mean?",
        description: "Beyond money, what values, lessons, and impact do you want to leave behind?",
      },
      {
        id: "e30-t4",
        label: "Share your estate plan's existence and location with key people",
        description: "Your executor, spouse, adult children, and attorney should all know where your documents are.",
      },
    ],
    educationalContent:
      "Completing this 30-day estate planning protocol puts you in the top 10% of Americans when it comes to estate preparedness. Over 60% of American adults have no estate plan at all, and many who do have plans that are outdated or unfunded. Your estate plan is more than a collection of legal documents -- it is a declaration of your values, your love for your family, and your intention to protect what you have built. The financial aspect ensures your wealth transfers efficiently. The personal aspect ensures your wishes are honored and your family is spared unnecessary conflict and expense. You are building an unshakable empire -- and an empire endures only when the succession plan is as strong as the foundation.",
  },
];
