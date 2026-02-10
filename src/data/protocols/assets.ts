import type { DayProtocol } from "@/types/protocol";

export const assetsProtocol: DayProtocol[] = [
  {
    day: 1,
    title: "Net Worth Snapshot",
    intention: "Establish a clear baseline of your total net worth to measure progress.",
    tasks: [
      {
        id: "a1-t1",
        label: "List all assets and their current values",
        description: "Include bank accounts, investment accounts, retirement accounts, real estate, vehicles, and personal property.",
      },
      {
        id: "a1-t2",
        label: "List all liabilities and outstanding balances",
        description: "Include mortgage, auto loans, student loans, credit cards, personal loans, and any other debts.",
      },
      {
        id: "a1-t3",
        label: "Calculate your net worth (assets minus liabilities)",
        description: "This single number is the most important metric in your financial life.",
      },
    ],
    educationalContent:
      "Your net worth is the scoreboard of your financial life. It tells you whether you are building wealth or falling behind. Track it monthly and watch the trend line rather than fixating on any single data point. A useful rule: your target net worth by a given age should be roughly (your age x annual pre-tax income / 10). If you are 40 earning $100,000, target a net worth of $400,000. This is a guideline, not a judgment -- what matters most is the direction you are moving.",
  },
  {
    day: 2,
    title: "Investment Account Inventory",
    intention: "Map every investment account you own and understand what each holds.",
    tasks: [
      {
        id: "a2-t1",
        label: "List all investment and retirement accounts",
        description: "401(k), IRA, Roth IRA, brokerage, HSA, 529 plans, and any old employer retirement accounts.",
      },
      {
        id: "a2-t2",
        label: "Log into each account and record current balances and holdings",
        description: "Note what is invested in each account: funds, stocks, bonds, or cash sitting idle.",
      },
      {
        id: "a2-t3",
        label: "Identify any orphaned or forgotten accounts",
        description: "Old 401(k)s from previous employers are frequently forgotten. Check your records.",
      },
    ],
    educationalContent:
      "Americans leave behind an estimated $1.65 trillion in forgotten retirement accounts from previous employers. If you have changed jobs multiple times, you may have old 401(k) accounts sitting with former employers. These accounts often remain invested but may be in suboptimal fund choices with higher fees. Consolidating old accounts into a rollover IRA gives you more control, lower fees, and better investment options. However, if your old employer plan has institutional-class funds with very low expense ratios, it may be worth keeping. Evaluate each account individually.",
  },
  {
    day: 3,
    title: "Asset Allocation Assessment",
    intention: "Understand your current investment mix and whether it matches your risk tolerance and time horizon.",
    tasks: [
      {
        id: "a3-t1",
        label: "Calculate your overall asset allocation across all accounts",
        description: "What percentage is in stocks, bonds, real estate, cash, and alternative investments?",
      },
      {
        id: "a3-t2",
        label: "Compare your allocation to a target based on your age and risk tolerance",
        description: "A common starting point: (110 minus your age) = stock percentage, remainder in bonds and alternatives.",
      },
      {
        id: "a3-t3",
        label: "Identify any significant over- or under-allocations",
        description: "Look for drift: has market movement pushed your allocation away from your target?",
      },
    ],
    educationalContent:
      "Asset allocation -- the mix of stocks, bonds, and other assets -- determines approximately 90% of your long-term investment returns. Individual stock selection matters far less than most people think. Your allocation should reflect three factors: time horizon (when you need the money), risk tolerance (how much volatility you can stomach), and risk capacity (how much loss you can financially absorb). A 30-year-old saving for retirement 35 years away can afford 80-90% stocks. A 60-year-old five years from retirement needs more stability. The key is having a deliberate allocation, not one that happened by accident.",
  },
  {
    day: 4,
    title: "Retirement Account Optimization",
    intention: "Maximize the tax advantages of your retirement accounts.",
    tasks: [
      {
        id: "a4-t1",
        label: "Verify you are contributing enough to get the full employer 401(k) match",
        description: "Not capturing the full match is leaving free money on the table -- this is priority number one.",
      },
      {
        id: "a4-t2",
        label: "Review current contribution rates against annual limits",
        description: "2024 limits: $23,000 for 401(k), $7,000 for IRA, plus $7,500/$1,000 catch-up if 50+.",
      },
      {
        id: "a4-t3",
        label: "Determine whether Roth or Traditional contributions are better for your situation",
        description: "If you expect higher taxes in retirement, Roth contributions grow and are withdrawn tax-free.",
      },
    ],
    educationalContent:
      "The employer 401(k) match is the highest guaranteed return in investing. A 50% match on 6% of salary is an instant 50% return on your money before any market gains. Always contribute at least enough to capture the full match. Beyond that, the Roth vs. Traditional decision depends on whether you believe your tax rate will be higher or lower in retirement. Early-career professionals in lower brackets often benefit from Roth (pay lower taxes now, withdraw tax-free later). High earners in peak earning years may benefit from Traditional (deduct at high rates now, withdraw at potentially lower rates later). Ideally, maintain both types for tax diversification.",
  },
  {
    day: 5,
    title: "Investment Fee Audit",
    intention: "Identify and eliminate excessive investment fees that silently erode your wealth.",
    tasks: [
      {
        id: "a5-t1",
        label: "Look up the expense ratio of every fund in your portfolio",
        description: "Check fund fact sheets or Morningstar for each fund's annual expense ratio.",
      },
      {
        id: "a5-t2",
        label: "Calculate the dollar amount you pay in fees annually",
        description: "Multiply each account balance by its expense ratio to see the real cost.",
      },
      {
        id: "a5-t3",
        label: "Identify any funds with expense ratios above 0.50%",
        description: "Broad-market index funds are available for 0.03-0.10%. Anything above 0.50% needs justification.",
      },
    ],
    educationalContent:
      "Investment fees compound against you just as returns compound for you. A 1% annual fee on a $500,000 portfolio costs $5,000 per year. Over 30 years, that 1% fee can consume over 25% of your total wealth. The shift from actively managed funds (average expense ratio 0.60-1.00%) to low-cost index funds (0.03-0.10%) is one of the most impactful financial moves you can make. Research consistently shows that after fees, the vast majority of actively managed funds underperform their benchmark index over 10+ year periods. Keep your fees below 0.20% on average and you will outperform most investors simply by paying less in drag.",
  },
  {
    day: 6,
    title: "Index Fund Strategy",
    intention: "Build a simple, effective core portfolio using low-cost index funds.",
    tasks: [
      {
        id: "a6-t1",
        label: "Research a three-fund portfolio strategy",
        description: "A total US stock market fund, a total international fund, and a total bond market fund can cover 100% of your needs.",
      },
      {
        id: "a6-t2",
        label: "Compare index fund options at your brokerage",
        description: "Vanguard, Fidelity, and Schwab all offer near-zero-cost index funds. Compare expense ratios.",
      },
      {
        id: "a6-t3",
        label: "Determine your target allocation among the three funds",
        description: "Example: 60% US stock, 25% international stock, 15% bonds. Adjust for your age and risk tolerance.",
      },
    ],
    educationalContent:
      "The three-fund portfolio is one of the most elegant and effective investment strategies available. It provides exposure to thousands of stocks and bonds worldwide in just three funds. John Bogle, founder of Vanguard, championed this approach, and decades of data support it. The beauty is its simplicity: you avoid analysis paralysis, sector bets, and the temptation to time the market. Rebalance once or twice per year, increase contributions when possible, and let time and compound growth do the work. This strategy outperforms the vast majority of professional money managers over 20+ year periods.",
  },
  {
    day: 7,
    title: "Tax-Loss Harvesting",
    intention: "Learn to use investment losses strategically to reduce your tax bill.",
    tasks: [
      {
        id: "a7-t1",
        label: "Review your taxable brokerage account for positions with unrealized losses",
        description: "Any position currently worth less than what you paid for it has a harvestable loss.",
      },
      {
        id: "a7-t2",
        label: "Understand wash sale rules before making any trades",
        description: "You cannot buy a substantially identical security within 30 days before or after selling at a loss.",
      },
      {
        id: "a7-t3",
        label: "Calculate potential tax savings from harvesting current losses",
        description: "Capital losses offset capital gains dollar-for-dollar, plus up to $3,000 of ordinary income annually.",
      },
    ],
    educationalContent:
      "Tax-loss harvesting turns market downturns into tax advantages. When you sell an investment at a loss in a taxable account, you can use that loss to offset capital gains and up to $3,000 of ordinary income per year. Unused losses carry forward indefinitely. The key rule to remember is the wash sale rule: if you buy a substantially identical security within 30 days of selling at a loss, the IRS disallows the deduction. The workaround is to replace the sold position with a similar but not identical fund -- for example, selling a Vanguard S&P 500 fund and buying a Fidelity total market fund. This maintains your market exposure while capturing the tax benefit.",
  },
  {
    day: 8,
    title: "Real Estate as an Asset Class",
    intention: "Evaluate real estate's role in your overall investment strategy.",
    tasks: [
      {
        id: "a8-t1",
        label: "Calculate your current real estate exposure",
        description: "Include primary residence equity, rental properties, REITs, and real estate funds.",
      },
      {
        id: "a8-t2",
        label: "Assess whether your real estate allocation is appropriate for your portfolio",
        description: "Many Americans are over-allocated to real estate through their primary residence.",
      },
      {
        id: "a8-t3",
        label: "Research REIT options for real estate exposure without direct ownership",
        description: "REITs provide real estate returns, liquidity, and diversification without being a landlord.",
      },
    ],
    educationalContent:
      "Real estate is a powerful wealth-building tool, but many people are unintentionally over-concentrated. If your home represents 60% or more of your net worth, your wealth is highly dependent on a single illiquid asset in a single geographic market. Diversifying through publicly traded REITs (Real Estate Investment Trusts) adds real estate exposure with daily liquidity and broad geographic diversification. REITs are required to distribute at least 90% of taxable income as dividends, making them attractive for income investors. Consider holding REITs in tax-advantaged accounts since their dividends are taxed as ordinary income.",
  },
  {
    day: 9,
    title: "Alternative Investments",
    intention: "Explore whether alternative investments have a place in your portfolio.",
    tasks: [
      {
        id: "a9-t1",
        label: "Learn about common alternative asset classes",
        description: "Private equity, venture capital, commodities, precious metals, cryptocurrency, collectibles, and private credit.",
      },
      {
        id: "a9-t2",
        label: "Assess whether you are an accredited investor",
        description: "Income over $200K ($300K joint) or net worth over $1M (excluding primary residence) qualifies you.",
      },
      {
        id: "a9-t3",
        label: "Determine an appropriate allocation to alternatives (if any)",
        description: "Most financial planners suggest 0-15% in alternatives. Never invest more than you can afford to lose.",
      },
    ],
    educationalContent:
      "Alternative investments can provide diversification benefits because they often have low correlation with traditional stocks and bonds. However, they typically come with higher fees, lower liquidity, less transparency, and more complexity. Before investing in alternatives, ensure your core portfolio of low-cost index funds is fully funded and your emergency reserves are solid. Alternatives are the icing, not the cake. Cryptocurrency, in particular, should be treated as a high-risk speculative allocation -- not a core holding. If you do include alternatives, keep them to 5-15% of your total portfolio and only use money you can afford to lose entirely.",
  },
  {
    day: 10,
    title: "Tax-Advantaged Account Strategy",
    intention: "Optimize the order in which you fund your tax-advantaged accounts.",
    tasks: [
      {
        id: "a10-t1",
        label: "Map out all available tax-advantaged accounts",
        description: "401(k), IRA, Roth IRA, HSA, 529, SEP-IRA, Solo 401(k), backdoor Roth.",
      },
      {
        id: "a10-t2",
        label: "Determine the optimal contribution order for your situation",
        description: "Typical priority: 401(k) to match > HSA max > Roth IRA max > 401(k) max > taxable brokerage.",
      },
      {
        id: "a10-t3",
        label: "Set up or increase contributions to the next account in your priority list",
        description: "If you are not maximizing the top priority, take action today to increase contributions.",
      },
    ],
    educationalContent:
      "The order in which you fund accounts matters enormously over a lifetime. The general priority is: (1) Employer 401(k) up to the full match -- this is free money. (2) Max out your HSA if eligible -- triple tax advantage. (3) Max out a Roth IRA -- tax-free growth and withdrawal. (4) Go back and max out your 401(k) to the annual limit. (5) Consider a backdoor Roth IRA if your income exceeds Roth limits. (6) Fund taxable brokerage accounts. If you are self-employed, a SEP-IRA or Solo 401(k) allows much higher contribution limits. Every dollar in a tax-advantaged account works harder than a dollar in a taxable account because you keep more of the returns.",
  },
  {
    day: 11,
    title: "Portfolio Rebalancing",
    intention: "Learn and implement a disciplined rebalancing strategy.",
    tasks: [
      {
        id: "a11-t1",
        label: "Compare your current allocation to your target allocation",
        description: "Market movements cause drift. Check if any asset class has drifted more than 5% from target.",
      },
      {
        id: "a11-t2",
        label: "Choose a rebalancing method: calendar-based or threshold-based",
        description: "Calendar: rebalance quarterly or annually. Threshold: rebalance when any class drifts 5%+ from target.",
      },
      {
        id: "a11-t3",
        label: "Execute rebalancing trades if your portfolio has drifted significantly",
        description: "Preferably rebalance by directing new contributions to underweight classes rather than selling overweight ones.",
      },
    ],
    educationalContent:
      "Rebalancing is the discipline of selling what has gone up and buying what has gone down to maintain your target allocation. It feels counterintuitive but it systematically forces you to buy low and sell high. The simplest approach: set a calendar reminder to rebalance once or twice per year. When possible, rebalance by directing new contributions to the underweight asset class rather than selling (this avoids triggering taxable gains in taxable accounts). In tax-advantaged accounts like your 401(k) or IRA, there are no tax consequences to rebalancing trades, so you can rebalance freely.",
  },
  {
    day: 12,
    title: "Dividend Strategy",
    intention: "Understand how dividends work and whether a dividend strategy fits your plan.",
    tasks: [
      {
        id: "a12-t1",
        label: "Calculate total dividend income across your portfolio",
        description: "Check year-to-date distributions in each account to see how much passive income dividends generate.",
      },
      {
        id: "a12-t2",
        label: "Ensure dividends are set to reinvest automatically (DRIP)",
        description: "Automatic reinvestment compounds your returns. Verify DRIP is enabled in all accounts.",
      },
      {
        id: "a12-t3",
        label: "Understand the tax implications of dividends in taxable accounts",
        description: "Qualified dividends are taxed at capital gains rates; ordinary dividends are taxed as income.",
      },
    ],
    educationalContent:
      "Dividends are powerful but widely misunderstood. A stock paying a 3% dividend is not giving you free money -- the stock price drops by the dividend amount on the ex-dividend date. The total return (price appreciation plus dividends) is what matters. However, dividends do provide behavioral benefits: they create a tangible income stream that makes investors less likely to panic-sell during downturns. For tax efficiency, hold dividend-paying investments in tax-advantaged accounts when possible. In taxable accounts, prioritize qualified dividends (held 60+ days) which are taxed at the lower capital gains rate rather than ordinary income rates.",
  },
  {
    day: 13,
    title: "Bond Allocation Strategy",
    intention: "Ensure your fixed-income allocation provides the stability and income your portfolio needs.",
    tasks: [
      {
        id: "a13-t1",
        label: "Review your current bond or fixed-income holdings",
        description: "Include bond funds, treasury securities, CDs, money market funds, and I Bonds.",
      },
      {
        id: "a13-t2",
        label: "Assess whether your bond duration matches your timeline",
        description: "Shorter duration bonds fluctuate less; longer duration bonds offer higher yields but more volatility.",
      },
      {
        id: "a13-t3",
        label: "Research I Bonds and Treasury securities for risk-free inflation protection",
        description: "I Bonds adjust for inflation and can be purchased directly from TreasuryDirect.gov.",
      },
    ],
    educationalContent:
      "Bonds serve two critical roles in a portfolio: reducing volatility and providing income. When stocks drop 30%, a bond allocation limits your total portfolio decline and provides stability to rebalance from. The bond allocation debate often centers on total bond market funds versus Treasury-only funds. Treasuries carry no credit risk (backed by the U.S. government) and tend to perform best during stock market crashes. I Bonds are a unique offering: they are inflation-adjusted, backed by the government, tax-deferred, and state-tax-free. You can purchase up to $10,000 per person per year directly from TreasuryDirect.gov. They are one of the best risk-free investments available.",
  },
  {
    day: 14,
    title: "Week 2 Review: Investment Policy Statement",
    intention: "Document your investment strategy in a written Investment Policy Statement.",
    tasks: [
      {
        id: "a14-t1",
        label: "Draft your Investment Policy Statement (IPS)",
        description: "Include: goals, time horizon, risk tolerance, target allocation, rebalancing rules, and fund selection criteria.",
      },
      {
        id: "a14-t2",
        label: "Review all notes from Days 1-13 and consolidate action items",
        description: "Create a prioritized list of changes to implement in your portfolio.",
      },
      {
        id: "a14-t3",
        label: "Set a date to implement your top-priority portfolio changes",
        description: "Do not let analysis paralysis prevent action. Schedule a specific date to execute.",
      },
    ],
    educationalContent:
      "An Investment Policy Statement is a written document that guides your investment decisions. It removes emotion from the process by pre-committing to a strategy during calm, rational moments. When markets crash and fear takes over, you pull out your IPS and follow the plan instead of panic-selling. Your IPS should include: your investment objectives, time horizon for each goal, target asset allocation, acceptable drift ranges before rebalancing, criteria for selecting funds (e.g., expense ratio below 0.20%), and rules for when you will and will not make changes. This document is your anchor during market turbulence.",
  },
  {
    day: 15,
    title: "529 Education Savings Plans",
    intention: "Optimize college savings or evaluate whether a 529 plan fits your situation.",
    tasks: [
      {
        id: "a15-t1",
        label: "Determine if a 529 plan is appropriate for your education savings needs",
        description: "529 plans offer tax-free growth for qualified education expenses at any accredited institution.",
      },
      {
        id: "a15-t2",
        label: "Research your state's 529 plan for potential state tax deductions",
        description: "Over 30 states offer tax deductions or credits for contributions to their state's plan.",
      },
      {
        id: "a15-t3",
        label: "Review the investment options and fees in your current or prospective 529",
        description: "Many state plans use age-based portfolios that automatically become more conservative as the child ages.",
      },
    ],
    educationalContent:
      "529 plans are the most tax-efficient way to save for education. Contributions grow tax-free and withdrawals for qualified education expenses are tax-free at the federal level. Many states also offer a state income tax deduction for contributions. Starting in 2024, unused 529 funds can be rolled into a Roth IRA for the beneficiary (up to $35,000 lifetime, subject to annual Roth contribution limits, and the account must have been open 15+ years). This addresses the biggest objection to 529 plans: the fear of over-funding. You can also change the beneficiary to another family member at any time, making these accounts flexible across generations.",
  },
  {
    day: 16,
    title: "HSA as an Investment Vehicle",
    intention: "Maximize the investment potential of your Health Savings Account.",
    tasks: [
      {
        id: "a16-t1",
        label: "Check if your HSA provider allows investing beyond the cash balance",
        description: "Many HSA providers let you invest funds above a minimum cash threshold in mutual funds or ETFs.",
      },
      {
        id: "a16-t2",
        label: "Select low-cost index fund investments for your HSA",
        description: "If your provider has limited options, consider transferring to a provider like Fidelity with better investment choices.",
      },
      {
        id: "a16-t3",
        label: "Develop a strategy for paying medical expenses out of pocket to let HSA grow",
        description: "Pay current medical bills from your checking account and let HSA investments compound tax-free.",
      },
    ],
    educationalContent:
      "The HSA is the only account in the tax code with triple tax advantages: tax-deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses. But here is the advanced strategy: there is no time limit on reimbursement. You can pay medical expenses out of pocket today, save the receipts, and reimburse yourself from the HSA years or decades later -- after the investments have grown tax-free. After age 65, the HSA functions like a traditional IRA for non-medical expenses (withdrawals taxed as income but no penalty). This makes the HSA one of the most powerful wealth-building tools available, not just a medical spending account.",
  },
  {
    day: 17,
    title: "Backdoor Roth IRA Strategy",
    intention: "Understand and potentially implement the backdoor Roth IRA strategy if you are a high earner.",
    tasks: [
      {
        id: "a17-t1",
        label: "Determine if your income exceeds the Roth IRA contribution limits",
        description: "2024 limits: $161,000 for single filers, $240,000 for married filing jointly (modified AGI).",
      },
      {
        id: "a17-t2",
        label: "Understand the backdoor Roth IRA process if you exceed income limits",
        description: "Contribute to a non-deductible Traditional IRA, then convert to Roth. Be aware of the pro-rata rule.",
      },
      {
        id: "a17-t3",
        label: "Check for existing Traditional IRA balances that would trigger the pro-rata rule",
        description: "Pre-tax Traditional IRA balances complicate backdoor Roth conversions. Consider rolling them into a 401(k).",
      },
    ],
    educationalContent:
      "The backdoor Roth IRA is a legal strategy that allows high-income earners to contribute to a Roth IRA despite exceeding income limits. The process: (1) Contribute to a non-deductible Traditional IRA. (2) Convert the balance to a Roth IRA. The critical issue is the pro-rata rule: if you have existing pre-tax Traditional IRA balances, the conversion is partially taxable based on the ratio of pre-tax to after-tax IRA funds across all your IRAs. The solution: roll existing Traditional IRA balances into your employer's 401(k) before executing the backdoor Roth. A mega backdoor Roth through your 401(k) (if your plan allows after-tax contributions) can enable even larger Roth conversions.",
  },
  {
    day: 18,
    title: "International Diversification",
    intention: "Evaluate and optimize your international investment exposure.",
    tasks: [
      {
        id: "a18-t1",
        label: "Calculate your current international stock and bond allocation",
        description: "Include international index funds, foreign stock holdings, and emerging market exposure.",
      },
      {
        id: "a18-t2",
        label: "Compare your international allocation to global market capitalization",
        description: "Non-US stocks represent approximately 40% of global market cap. Many portfolios are significantly underweight.",
      },
      {
        id: "a18-t3",
        label: "Research the tax implications of international investments",
        description: "Foreign tax credits may offset taxes paid to other countries on international dividends.",
      },
    ],
    educationalContent:
      "Home bias -- the tendency to invest disproportionately in your home country's markets -- is one of the most common portfolio mistakes. US stocks represent about 60% of global market cap, yet many American investors hold 90%+ in domestic equities. International diversification reduces country-specific risk and has historically smoothed portfolio returns. There are extended periods where international stocks outperform US stocks (2000-2009, for example). A 25-40% allocation to international stocks provides meaningful diversification without excessive currency risk. Hold international funds in taxable accounts when possible to capture the Foreign Tax Credit.",
  },
  {
    day: 19,
    title: "Concentrated Stock Positions",
    intention: "Assess and manage the risk of concentrated positions in individual stocks.",
    tasks: [
      {
        id: "a19-t1",
        label: "Identify any single stock representing more than 10% of your portfolio",
        description: "Include employer stock from RSUs, stock options, ESPP shares, and individual stock picks.",
      },
      {
        id: "a19-t2",
        label: "Develop a plan to diversify concentrated positions over time",
        description: "Consider selling a fixed amount monthly, using a 10b5-1 plan, or donating appreciated shares to charity.",
      },
      {
        id: "a19-t3",
        label: "Understand the tax implications of selling concentrated positions",
        description: "Long-term gains (held 1+ years) are taxed at preferential rates. Harvest losses to offset gains.",
      },
    ],
    educationalContent:
      "A concentrated stock position is one of the most dangerous risks in personal finance. Enron employees lost their retirement savings because they held mostly Enron stock. Even great companies can decline dramatically -- a single stock can lose 50-90% of its value while the broad market recovers. If any single holding exceeds 10% of your portfolio, you have meaningful concentration risk. The emotional attachment to a stock that has made you money (or that your employer gave you) makes this hard, but the math is clear: diversification is the only free lunch in investing. Systematically reduce concentrated positions over 12-24 months to spread out the tax impact.",
  },
  {
    day: 20,
    title: "Behavioral Finance and Investor Psychology",
    intention: "Recognize and defend against the psychological biases that destroy investment returns.",
    tasks: [
      {
        id: "a20-t1",
        label: "Identify your biggest behavioral investing weakness",
        description: "Common biases: panic selling, chasing performance, overconfidence, loss aversion, recency bias.",
      },
      {
        id: "a20-t2",
        label: "Set up guardrails to prevent emotional investment decisions",
        description: "Automate contributions, use a written IPS, add a 48-hour waiting period before any trade.",
      },
      {
        id: "a20-t3",
        label: "Commit to a rule: no portfolio changes based on news headlines",
        description: "Write down this commitment and post it where you will see it during market turbulence.",
      },
    ],
    educationalContent:
      "The average stock fund investor earns 3-4% less per year than the funds they invest in. The reason is not bad fund selection -- it is bad behavior. Investors buy after prices have risen (greed) and sell after prices have fallen (fear), systematically buying high and selling low. This behavior gap costs more than fees, taxes, or poor fund selection combined. The antidote is automation and pre-commitment: automate contributions so you invest consistently regardless of market conditions, write an Investment Policy Statement so you follow a plan instead of emotions, and add a mandatory 48-hour cooling period before making any changes to your portfolio. The best portfolio is one you can stick with.",
  },
  {
    day: 21,
    title: "Estate and Beneficiary Review for Investment Accounts",
    intention: "Ensure all investment accounts have correct beneficiary designations and estate alignment.",
    tasks: [
      {
        id: "a21-t1",
        label: "Review beneficiary designations on every retirement and investment account",
        description: "Check primary and contingent beneficiaries on 401(k), IRA, Roth IRA, brokerage, and life insurance.",
      },
      {
        id: "a21-t2",
        label: "Verify TOD (Transfer on Death) designations on taxable accounts",
        description: "TOD designations allow taxable accounts to pass directly to heirs without probate.",
      },
      {
        id: "a21-t3",
        label: "Ensure designations align with your estate plan and will",
        description: "Beneficiary designations override wills. Misalignment creates legal conflicts and unintended outcomes.",
      },
    ],
    educationalContent:
      "Beneficiary designations are one of the most overlooked aspects of investment management. These designations override your will, meaning if your 401(k) beneficiary is an ex-spouse from a form you filled out 15 years ago, they will receive the account regardless of what your current will says. Review every account's beneficiary designation annually and after any life change. For each account, name a primary beneficiary and a contingent beneficiary (who inherits if the primary predeceases you). For inherited IRAs, the 2019 SECURE Act now requires most non-spouse beneficiaries to empty the account within 10 years, which has significant tax planning implications.",
  },
  {
    day: 22,
    title: "Socially Responsible and ESG Investing",
    intention: "Evaluate whether values-aligned investing has a place in your portfolio.",
    tasks: [
      {
        id: "a22-t1",
        label: "Learn what ESG (Environmental, Social, Governance) investing means",
        description: "ESG funds screen companies based on environmental practices, social impact, and governance quality.",
      },
      {
        id: "a22-t2",
        label: "Review available ESG fund options at your brokerage",
        description: "Compare fees, holdings, and performance of ESG alternatives to your current funds.",
      },
      {
        id: "a22-t3",
        label: "Decide whether to incorporate ESG criteria into your investment strategy",
        description: "Values-aligned investing can complement your core strategy without sacrificing long-term returns.",
      },
    ],
    educationalContent:
      "ESG investing has grown rapidly, with over $35 trillion in assets globally. The evidence on ESG performance is mixed: some studies show comparable or slightly better risk-adjusted returns, while others show slight underperformance due to reduced diversification and higher fees. If values-aligned investing is important to you, look for ESG index funds with low expense ratios (0.10-0.20%) rather than actively managed ESG funds with higher fees. Also examine what the ESG label actually means -- the criteria vary significantly between providers. A total market index fund already includes the best-governed companies; ESG funds simply overweight them.",
  },
  {
    day: 23,
    title: "Taxable Account Tax Efficiency",
    intention: "Optimize your taxable brokerage account for maximum after-tax returns.",
    tasks: [
      {
        id: "a23-t1",
        label: "Review asset location across your accounts",
        description: "Place tax-inefficient assets (bonds, REITs) in tax-advantaged accounts and tax-efficient assets (index funds) in taxable accounts.",
      },
      {
        id: "a23-t2",
        label: "Switch to tax-managed or ETF versions of funds in taxable accounts",
        description: "ETFs are generally more tax-efficient than mutual funds due to their creation/redemption mechanism.",
      },
      {
        id: "a23-t3",
        label: "Set up specific lot identification for your brokerage account",
        description: "This allows you to choose which shares to sell for maximum tax efficiency when you rebalance.",
      },
    ],
    educationalContent:
      "Asset location -- where you hold different types of investments -- can add 0.25-0.75% to your after-tax returns annually. The principle: place the most tax-inefficient investments in tax-advantaged accounts and the most tax-efficient investments in taxable accounts. Tax-inefficient holdings include bonds (interest taxed as ordinary income), REITs (dividends taxed as ordinary income), and actively managed funds (frequent capital gains distributions). Tax-efficient holdings include broad US stock index funds, international stock index funds, and municipal bonds (tax-free interest). This single optimization costs nothing to implement and generates meaningful after-tax improvement over decades.",
  },
  {
    day: 24,
    title: "Rental Property Analysis",
    intention: "Evaluate rental real estate as a wealth-building strategy.",
    tasks: [
      {
        id: "a24-t1",
        label: "Analyze current rental properties (if any) for true cash-on-cash return",
        description: "Include all expenses: mortgage, taxes, insurance, maintenance, vacancy, property management.",
      },
      {
        id: "a24-t2",
        label: "Research the 1% rule and cap rate for your local market",
        description: "The 1% rule: monthly rent should be at least 1% of purchase price. Cap rate = net operating income / price.",
      },
      {
        id: "a24-t3",
        label: "Assess whether rental real estate fits your time, capital, and risk tolerance",
        description: "Direct ownership requires active management. REITs offer passive exposure without landlord responsibilities.",
      },
    ],
    educationalContent:
      "Rental real estate builds wealth through four mechanisms: cash flow (monthly rent minus expenses), appreciation (property value growth), mortgage paydown (tenant pays your mortgage), and tax benefits (depreciation shelters cash flow from taxes). However, most new investors underestimate expenses and overestimate returns. A realistic expense ratio for rental properties is 40-50% of gross rent (including vacancies, maintenance, property management, insurance, taxes, and capital expenditures). If you do not enjoy property management or cannot comfortably handle a $10,000 emergency repair, REITs provide similar returns with complete liquidity and no 2am phone calls.",
  },
  {
    day: 25,
    title: "Retirement Projections",
    intention: "Model your retirement readiness and identify any savings gaps.",
    tasks: [
      {
        id: "a25-t1",
        label: "Use a retirement calculator to project your retirement savings trajectory",
        description: "Input current savings, annual contributions, expected returns (7% nominal), and years to retirement.",
      },
      {
        id: "a25-t2",
        label: "Estimate your annual retirement spending needs",
        description: "A common estimate is 70-80% of pre-retirement income, but calculate your actual expected expenses.",
      },
      {
        id: "a25-t3",
        label: "Apply the 4% rule to determine if your projected savings support your spending",
        description: "The 4% rule: you can safely withdraw 4% of your portfolio in year one, adjusted for inflation annually.",
      },
    ],
    educationalContent:
      "The 4% rule, based on the Trinity Study, suggests that a diversified portfolio can sustain a 4% initial withdrawal rate (adjusted for inflation) over a 30-year retirement with high historical success rates. For a $60,000 annual need, you would need $1.5 million (60,000 / 0.04). However, the 4% rule has limitations: it is based on historical US market returns, assumes a 30-year retirement, and does not account for flexibility. More conservative planners use 3.5%. More aggressive approaches use dynamic withdrawal strategies that adjust spending based on portfolio performance. The key insight: run the numbers now so you know exactly where you stand and what adjustments to make.",
  },
  {
    day: 26,
    title: "Social Security Optimization",
    intention: "Understand your Social Security benefits and develop a claiming strategy.",
    tasks: [
      {
        id: "a26-t1",
        label: "Create or log into your account at ssa.gov to review your estimated benefits",
        description: "Check your earnings history for accuracy and review benefit estimates at ages 62, 67, and 70.",
      },
      {
        id: "a26-t2",
        label: "Understand the impact of claiming age on your lifetime benefits",
        description: "Benefits increase approximately 8% per year for each year you delay from 62 to 70.",
      },
      {
        id: "a26-t3",
        label: "Factor Social Security into your retirement income plan",
        description: "Social Security replaces roughly 40% of pre-retirement income for average earners.",
      },
    ],
    educationalContent:
      "The claiming age decision for Social Security is one of the most impactful financial decisions you will make. Claiming at 62 (the earliest) permanently reduces your benefit by 25-30% compared to your full retirement age (67 for most). Delaying to 70 increases your benefit by about 24% beyond full retirement age. For most healthy individuals, delaying to 70 maximizes lifetime benefits because the breakeven point is typically around age 80, and average life expectancy is about 85. For married couples, the higher earner should almost always delay to 70, as their benefit becomes the survivor benefit for the spouse. Create your ssa.gov account today to verify your earnings record and benefit estimates.",
  },
  {
    day: 27,
    title: "Charitable Giving Strategy",
    intention: "Align your charitable giving with tax-efficient wealth transfer strategies.",
    tasks: [
      {
        id: "a27-t1",
        label: "Review your current charitable giving and its tax treatment",
        description: "Are you itemizing deductions? If not, charitable contributions may not reduce your taxes.",
      },
      {
        id: "a27-t2",
        label: "Research donor-advised funds as a charitable giving vehicle",
        description: "DAFs allow you to bunch contributions in one year, get the deduction now, and distribute to charities over time.",
      },
      {
        id: "a27-t3",
        label: "Consider donating appreciated stock instead of cash",
        description: "Donating stock held 1+ years avoids capital gains tax and provides a deduction for the full market value.",
      },
    ],
    educationalContent:
      "Strategic charitable giving can significantly reduce your tax burden while supporting causes you care about. The most powerful technique: donate appreciated stock (or mutual fund shares) held for more than one year directly to a charity or donor-advised fund. You avoid paying capital gains tax on the appreciation and receive a tax deduction for the full current market value. A donor-advised fund (DAF) adds flexibility: contribute a large amount in a high-income year to maximize the deduction, then distribute grants to individual charities over many years. If you do not itemize deductions due to the standard deduction, bunching two years of charitable giving into one year via a DAF can push you above the itemizing threshold.",
  },
  {
    day: 28,
    title: "Investment Account Security and Access",
    intention: "Secure your investment accounts and ensure trusted people can access them if needed.",
    tasks: [
      {
        id: "a28-t1",
        label: "Enable two-factor authentication on all brokerage and retirement accounts",
        description: "Use an authenticator app rather than SMS for stronger security.",
      },
      {
        id: "a28-t2",
        label: "Document account access instructions for a trusted person",
        description: "In an emergency, someone needs to know what accounts exist and how to access them.",
      },
      {
        id: "a28-t3",
        label: "Review and update your Trusted Contact designation at each brokerage",
        description: "SEC rules allow brokerages to contact your Trusted Contact if they suspect exploitation or incapacitation.",
      },
    ],
    educationalContent:
      "Investment account security requires both protection from unauthorized access and ensured access for authorized people in emergencies. Every major brokerage now offers a Trusted Contact designation -- a person the firm can reach out to if they notice unusual account activity, suspect financial exploitation, or cannot reach you. This is different from a power of attorney but serves as an important safety net. Separately, maintain a secure document (encrypted or stored with your attorney) listing all accounts, institutions, and access information so your family or executor can manage your investments if you become incapacitated or pass away.",
  },
  {
    day: 29,
    title: "Portfolio Stress Test",
    intention: "Test how your portfolio would perform in historical market downturns.",
    tasks: [
      {
        id: "a29-t1",
        label: "Model how your current allocation would have performed in the 2008 financial crisis",
        description: "The S&P 500 dropped 57% from peak to trough. What would your total portfolio have lost?",
      },
      {
        id: "a29-t2",
        label: "Assess whether you could emotionally and financially withstand a 40-50% stock decline",
        description: "If the answer is no, your stock allocation may be too aggressive for your risk tolerance.",
      },
      {
        id: "a29-t3",
        label: "Verify your withdrawal plan (if retired) survives a prolonged downturn",
        description: "Sequence of returns risk is the biggest threat to retirees. Ensure you have 2-3 years of spending in safe assets.",
      },
    ],
    educationalContent:
      "Stress testing reveals whether your risk tolerance on paper matches your risk tolerance in reality. In the 2008 crisis, a 100% stock portfolio lost 57%. A 60/40 portfolio lost about 35%. A 40/60 portfolio lost about 20%. Which of these could you live through without selling? Your honest answer determines your appropriate allocation. Remember: the worst time to discover you cannot handle volatility is during a crash, when selling locks in losses and prevents recovery. For retirees, the concept of a cash bucket (1-3 years of spending in high-yield savings or short-term bonds) provides a buffer so you never have to sell stocks during a downturn to fund living expenses.",
  },
  {
    day: 30,
    title: "Assets Protocol Completion and Forward Plan",
    intention: "Consolidate your progress and commit to a long-term investment discipline.",
    tasks: [
      {
        id: "a30-t1",
        label: "Review your Investment Policy Statement and update with any changes from this protocol",
        description: "Your IPS should now reflect your finalized allocation, fund selections, and rebalancing rules.",
      },
      {
        id: "a30-t2",
        label: "Set up automatic investment contributions if not already in place",
        description: "Automation is the single most powerful wealth-building habit. Set it and let compound interest work.",
      },
      {
        id: "a30-t3",
        label: "Schedule quarterly portfolio check-ins on your calendar",
        description: "Review allocation, rebalance if needed, and check beneficiary designations quarterly.",
      },
      {
        id: "a30-t4",
        label: "Calculate your projected net worth in 10 years based on your current plan",
        description: "Seeing the long-term trajectory reinforces the discipline to stay the course.",
      },
    ],
    educationalContent:
      "You have completed 30 days of intentional asset-building education and action. The most important takeaway is this: wealth is built not by finding the perfect investment but by consistently investing in a diversified, low-cost portfolio and refusing to deviate from the plan during market turbulence. The gap between the average investor and the market return is almost entirely explained by behavior, not strategy. Your edge is discipline, automation, and patience. Keep fees low, stay diversified, rebalance periodically, and let compound interest work over decades. You are building an unshakable empire -- and the assets pillar is your engine of growth.",
  },
];
