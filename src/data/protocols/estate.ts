import type { DayProtocol } from "@/types/protocol";

export const estateProtocol: DayProtocol[] = [
  {
    day: 1,
    title: "Map Your Buyer's Journey",
    intention:
      "Document every step a lead takes from first awareness to closed deal so you can see the full picture before optimizing anything.",
    tasks: [
      {
        id: "d1-t1",
        label: "List every stage a prospect goes through before buying",
        description:
          "Start from the very first touchpoint (ad, referral, social post, Google search) and map each step all the way to the signed contract or purchase. Include awareness, interest, consideration, decision, and close.",
        type: 'measure',
        input_type: 'text',
      },
      {
        id: "d1-t2",
        label: "Document the specific actions and channels at each stage",
        description:
          "For each stage write down what the prospect actually does: clicks an ad, visits a landing page, fills out a form, books a call, attends a demo, receives a proposal, signs. Track every stage: Ad to Landing Page to Website to Booking to Call to Close.",
        type: 'measure',
        input_type: 'text',
      },
      {
        id: "d1-t3",
        label: "Create a visual funnel map you can reference and share",
        description:
          "Use a whiteboard, spreadsheet, or tool like Miro or Lucidchart. This map becomes your conversion intelligence blueprint. Every team member should be able to look at it and understand the journey.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Most businesses have never actually mapped their buyer's journey end to end. They have pieces -- an ad here, a website there, a salesperson somewhere -- but no connected map. Without a map you cannot find the leaks. Think of it like plumbing: you need to see the whole pipe system before you can find where the water is draining out. Track every stage: Ad, Landing Page, Website, Booking, Call, Close. Where did they drop off and why? That question is the foundation of Conversion Intelligence. You cannot optimize what you have not mapped.",
  },
  {
    day: 2,
    title: "Audit Your Tracking Infrastructure",
    intention:
      "Identify where you currently have tracking installed and where you are flying blind.",
    tasks: [
      {
        id: "d2-t1",
        label: "Check which analytics and tracking tools are currently installed",
        description:
          "Review your website for Google Analytics, Facebook Pixel, LinkedIn Insight Tag, Google Tag Manager, heatmap tools, and any other tracking scripts. Document what is active and what is missing.",
        type: 'measure',
        input_type: 'text',
      },
      {
        id: "d2-t2",
        label: "Identify gaps in your tracking at each funnel stage",
        description:
          "Walk through your funnel map from Day 1. At each stage ask: Can I see how many people are here? Can I see who drops off? If the answer is no, mark it as a tracking gap.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d2-t3",
        label: "Verify UTM codes and source attribution are in place",
        description:
          "Check that every ad, email link, and social post uses UTM parameters so you know exactly where every lead came from. Without UTMs you are guessing which channels work.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "You cannot manage what you do not measure. Most businesses are spending money on marketing with no idea which dollars are actually producing results. If you are spending time, money, and energy on Google SEO, trust me, that is wasted money -- Google is a resume. People check you out there but they do not discover you there the way you think. The point is: know what each channel actually does for you with data, not assumptions. Every dollar in, you need to know exactly what comes back out. That starts with tracking.",
  },
  {
    day: 3,
    title: "Install and Verify Tracking at Every Stage",
    intention:
      "Close every tracking gap so you have full visibility across your entire funnel.",
    tasks: [
      {
        id: "d3-t1",
        label: "Install missing analytics and pixels on your website and landing pages",
        description:
          "Set up Google Analytics 4 if not already active. Install or verify your Facebook/Meta Pixel, Google Ads conversion tracking, and any platform-specific pixels. Use Google Tag Manager to centralize all tags.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d3-t2",
        label: "Set up form tracking and CRM logging for lead capture points",
        description:
          "Ensure every form submission, chat inquiry, and phone call is logged in your CRM with the source and timestamp. If a lead comes in, you should know exactly where they came from and when.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d3-t3",
        label: "Test every tracking point to confirm data is flowing correctly",
        description:
          "Submit test forms, click test ads, and walk through your funnel as a prospect would. Check that every event fires and every lead appears in your CRM with correct attribution.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Installing tracking is not glamorous work but it is the foundation of every dollar of marketing ROI you will ever measure. Think of it this way: if you run a McDonald's, you know exactly how many burgers you sold, how much each cost to make, and what your profit margin is on every item. Same quarter pounder with cheese in London as in the US. Why? Because it was repeatable and measurable. Your marketing needs the same precision. Every stage of your funnel should have a number attached to it. If it does not, you are running your business on feelings instead of facts.",
  },
  {
    day: 4,
    title: "Baseline Your Conversion Rates",
    intention:
      "Pull hard numbers at every funnel stage so you know exactly where you stand today.",
    tasks: [
      {
        id: "d4-t1",
        label: "Calculate conversion rates at each stage of your funnel",
        description:
          "How many people see your ad vs. click it? How many land on your page vs. fill out the form? How many book a call vs. show up? How many calls convert to sales? Get the percentage at every transition.",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d4-t2",
        label: "Document your baseline metrics in a single reference sheet",
        description:
          "Create a spreadsheet or dashboard row with today's date and every conversion rate: impressions to clicks, clicks to leads, leads to appointments, appointments to closes, and overall funnel conversion rate.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d4-t3",
        label: "Calculate your current cost per acquisition and customer lifetime value",
        description:
          "Total marketing spend divided by total customers acquired gives you CPA. Compare that to what a customer is worth over their lifetime. If CPA is higher than LTV, your funnel is losing money.",
        type: 'measure',
        input_type: 'number',
      },
    ],
    educationalContent:
      "Baseline metrics are your before picture. Without them you will never know if your optimizations are actually working or if you are just rearranging deck chairs. Here is the mindset: every dollar in, we know you are gonna get $35 back. That is the goal. But you cannot get there if you do not know where you are starting from. Most businesses guess at their conversion rates. They say things like 'we close about half our leads' but when you actually look at the data it is 15%. Get the real numbers. Write them down. Date them. You will compare against these numbers for the next 26 days.",
  },
  {
    day: 5,
    title: "Find Your Biggest Drop-Off Point",
    intention:
      "Identify the single stage in your funnel where you are losing the most prospects.",
    tasks: [
      {
        id: "d5-t1",
        label: "Compare conversion rates across all funnel stages to find the weakest link",
        description:
          "Look at your baseline numbers from Day 4. Which transition has the lowest percentage? That is your biggest leak. It might be landing page to lead, or lead to booked call, or booked call to close.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d5-t2",
        label: "Quantify the revenue impact of the drop-off",
        description:
          "Calculate how much additional revenue you would generate if you improved that one conversion rate by even 10-20%. This gives you a dollar figure to justify the optimization effort.",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d5-t3",
        label: "Gather qualitative data around the drop-off point",
        description:
          "Talk to your sales team, read support tickets, check chat logs, and review any feedback from prospects who dropped off. The numbers tell you where; the stories tell you why.",
        type: 'measure',
        input_type: 'text',
      },
    ],
    educationalContent:
      "Your funnel is only as strong as its weakest stage. If you are getting thousands of clicks but nobody fills out the form, your landing page is the problem -- not your ad budget. If people book calls but never show up, your confirmation and reminder process is broken. Where did they drop off and why? That is the question that separates businesses that grow from businesses that throw money at marketing and hope. Focus on the biggest leak first. Fixing one stage by 20% can double your revenue without spending a single extra dollar on ads.",
  },
  {
    day: 6,
    title: "Diagnose Why Leads Drop Off",
    intention:
      "Analyze the root cause behind your biggest funnel leak so you can fix it with precision.",
    tasks: [
      {
        id: "d6-t1",
        label: "Evaluate messaging at the drop-off stage",
        description:
          "Is the message clear? Does the headline match what the ad promised? Is the value proposition obvious within 5 seconds? Misaligned messaging between stages is the number one cause of drop-off.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d6-t2",
        label: "Assess friction and user experience at the drop-off stage",
        description:
          "How many form fields are you asking for? How many clicks to complete the action? Does the page load fast on mobile? Every extra step or second of load time costs you conversions.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d6-t3",
        label: "Review timing and follow-up processes at the drop-off stage",
        description:
          "How long does it take to respond to a new lead? If it is more than 5 minutes you are losing deals. Check whether automated follow-up exists and whether the timing matches buyer urgency.",
        type: 'reflect',
        input_type: 'text',
      },
    ],
    educationalContent:
      "There are really only four reasons prospects drop off at any stage: messaging, timing, friction, or follow-up. Messaging means the prospect does not understand the value or the promise changed between stages. Timing means you responded too slowly or the offer was not relevant to where they are in their decision. Friction means the process is too complicated -- too many fields, too many steps, too much thinking required. Follow-up means nobody reached back out, or they reached out too late. Diagnose which one it is before you start changing things, or you will fix the wrong problem.",
  },
  {
    day: 7,
    title: "Week 1 Review: Funnel Map and Baseline",
    intention:
      "Consolidate everything you have learned this week into a documented funnel map with baseline metrics.",
    tasks: [
      {
        id: "d7-t1",
        label: "Finalize your visual funnel map with conversion rates at each stage",
        description:
          "Update your Day 1 funnel map with the actual conversion percentages from Day 4. Label every transition with its rate. This is your Conversion Intelligence baseline document.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d7-t2",
        label: "Document your biggest drop-off point and diagnosis",
        description:
          "Write a clear summary: where the biggest leak is, why it is happening (messaging, timing, friction, or follow-up), and the estimated revenue impact of fixing it.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d7-t3",
        label: "Set Week 2 priorities based on your funnel analysis",
        description:
          "Next week focuses on channel audit. Prepare by listing every marketing channel and gathering spend data. Know where your money is going before you start evaluating ROI.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Week 1 is the diagnostic phase and you now have something most businesses never build: a documented, data-backed funnel map. You know your stages, your conversion rates, your biggest leak, and why it exists. This is like getting an MRI before surgery instead of just cutting and hoping. Build repeatable closing sequences so that nobody can screw up. That starts with knowing exactly what the sequence looks like today. Keep this document updated -- it is your conversion intelligence command center for every decision you make going forward.",
  },
  {
    day: 8,
    title: "List Every Marketing Channel and Spend",
    intention:
      "Create a complete inventory of every channel you use and what you spend on each.",
    tasks: [
      {
        id: "d8-t1",
        label: "List every marketing channel you currently use",
        description:
          "Include paid channels (Google Ads, Facebook/Meta Ads, LinkedIn Ads, YouTube Ads), organic channels (SEO, social media, content marketing), referrals, email, direct mail, events, partnerships, and any other source of leads.",
        type: 'measure',
        input_type: 'text',
      },
      {
        id: "d8-t2",
        label: "Document monthly spend on each channel including hidden costs",
        description:
          "Include ad spend, software tools, agency fees, content creation costs, and the value of time your team spends on each channel. If you are doing it yourself, your time has a dollar value too.",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d8-t3",
        label: "Record the number of leads generated from each channel last month",
        description:
          "Pull data from your CRM, analytics, and ad platforms. If you cannot attribute leads to a specific channel, that is a tracking gap from Week 1 that needs to be fixed.",
        type: 'measure',
        input_type: 'number',
      },
    ],
    educationalContent:
      "Most businesses have no idea what they actually spend on marketing across all channels. They know their ad budget but forget about the agency fee, the software subscriptions, the time spent creating content, and the networking events. When you add it all up, the real marketing spend is often 2-3x what they thought. This week is about getting honest with yourself about where every dollar goes and what it produces. If you are spending time, money, and energy on Google SEO, trust me, that is wasted money. Google is a resume -- people check you out there, they do not discover you there. Know what each channel actually does.",
  },
  {
    day: 9,
    title: "Calculate Cost Per Lead by Channel",
    intention:
      "Determine which channels deliver the cheapest leads and which are burning money.",
    tasks: [
      {
        id: "d9-t1",
        label: "Calculate cost per lead for every channel",
        description:
          "Divide total monthly spend on each channel by the number of leads it generated. Example: $2,000 on Facebook Ads producing 40 leads = $50 CPL. Do this for every single channel.",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d9-t2",
        label: "Rank channels from lowest to highest cost per lead",
        description:
          "Create a ranked list. The cheapest CPL channel is not always the best (lead quality matters) but this ranking reveals which channels are inefficient at the top of the funnel.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d9-t3",
        label: "Note lead quality differences between channels",
        description:
          "A $20 lead that never converts is more expensive than a $100 lead that closes. Flag which channels produce leads that actually become customers vs. which produce tire-kickers.",
        type: 'measure',
        input_type: 'text',
      },
    ],
    educationalContent:
      "Cost per lead is the first layer of channel intelligence but it is not the whole story. A cheap lead that never buys is not a bargain -- it is a distraction. You need to track CPL alongside conversion rate and customer lifetime value to get the full picture. The goal is to get to a place where every dollar in, we know you are gonna get $35 back. That means you know exactly what a lead costs, what percentage close, and what a closed customer is worth. When you have those three numbers for every channel, you can make decisions with confidence instead of guessing.",
  },
  {
    day: 10,
    title: "Calculate Return on Ad Spend by Channel",
    intention:
      "Determine which paid channels produce the highest return for every dollar invested.",
    tasks: [
      {
        id: "d10-t1",
        label: "Calculate ROAS for each paid channel",
        description:
          "ROAS = Revenue generated from channel divided by spend on channel. A ROAS of 5x means every $1 spent produced $5 in revenue. Calculate this for every paid channel you run.",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d10-t2",
        label: "Compare ROAS across channels to identify clear winners and losers",
        description:
          "Side by side, which channel gives you the most revenue per dollar? Which gives the least? A channel with 2x ROAS and a channel with 10x ROAS should not receive equal budgets.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d10-t3",
        label: "Factor in customer lifetime value for a true ROI picture",
        description:
          "If a customer from Google Ads spends $500 upfront but $5,000 over their lifetime, the true ROAS is much higher than the initial purchase suggests. Calculate LTV-adjusted ROAS for each channel.",
        type: 'measure',
        input_type: 'number',
      },
    ],
    educationalContent:
      "ROAS is the metric that separates professional marketers from amateurs. Amateurs look at clicks and impressions. Professionals look at revenue per dollar spent. The benchmark varies by industry but here is the mindset you need: every dollar in, we know you are gonna get $35 back. That is the level of clarity you are building toward. When you know your ROAS by channel, you stop guessing about where to put your budget. You also stop falling for vanity metrics -- a channel that gets tons of clicks but no revenue is a money pit, not a marketing strategy.",
  },
  {
    day: 11,
    title: "Identify Top and Bottom Performing Channels",
    intention:
      "Clearly distinguish your winning channels from your losing channels based on data.",
    tasks: [
      {
        id: "d11-t1",
        label: "Identify your top 2 performing marketing channels",
        description:
          "Based on CPL, ROAS, lead quality, and total revenue generated, which two channels are your strongest? These are the channels you should be investing more in.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d11-t2",
        label: "Identify your bottom 2 performing marketing channels",
        description:
          "Which two channels have the worst combination of high cost and low return? These are candidates for reduction or elimination. Do not keep spending out of habit.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d11-t3",
        label: "Document why each channel performs the way it does",
        description:
          "Is your top channel winning because of audience fit, creative quality, or offer alignment? Is your bottom channel losing because of targeting, budget, or fundamental channel mismatch? Understanding why prevents repeating mistakes.",
        type: 'reflect',
        input_type: 'text',
      },
    ],
    educationalContent:
      "Here is a hard truth: most businesses spread their marketing budget across too many channels and do none of them well. They are on every social platform, running ads everywhere, posting content that nobody sees, and wondering why nothing works. The answer is focus. When you identify your top 2 channels and go deep on them, your results compound. When you keep spending on channels that do not work because 'you might miss something,' you are subsidizing failure. Kill the losers. Feed the winners. That is the discipline that separates businesses that scale from businesses that stall.",
  },
  {
    day: 12,
    title: "Reallocate Budget to Winners",
    intention:
      "Cut spending on your worst channel and redirect that budget to your best channel.",
    tasks: [
      {
        id: "d12-t1",
        label: "Reduce or eliminate spend on your worst-performing channel",
        description:
          "If a channel has negative or marginal ROAS and low lead quality, cut it. Do not reduce by 10% -- make a meaningful cut or shut it off entirely. Half measures produce half results.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d12-t2",
        label: "Reallocate that budget to your best-performing channel",
        description:
          "Take the dollars you freed up and invest them into the channel with the highest ROAS. Test whether increased spend maintains the same return rate or if there are diminishing returns at higher budgets.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d12-t3",
        label: "Set a 2-week checkpoint to evaluate the reallocation results",
        description:
          "Mark your calendar for 14 days from now. At that point compare CPL, ROAS, and total revenue against your baseline. Data will tell you whether the reallocation is working.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "The hardest part of marketing optimization is not finding the data -- it is acting on it. Business owners know a channel is not working but they keep spending because they are afraid to miss out or because they already invested so much. That is the sunk cost fallacy and it will drain your budget. Be ruthless with underperformers. The money you free up from a dead channel can double your investment in a channel that actually works. Same quarter pounder with cheese in London as in the US -- McDonald's does not keep menu items that do not sell. Neither should you keep channels that do not convert.",
  },
  {
    day: 13,
    title: "Set Up an A/B Test on Your Best Channel",
    intention:
      "Start testing variations on your best channel to push conversion rates even higher.",
    tasks: [
      {
        id: "d13-t1",
        label: "Choose one variable to test on your best-performing channel",
        description:
          "Pick ONE thing to test: ad headline, ad image/video, landing page headline, call-to-action, offer, or audience targeting. Never test multiple variables at once or you will not know what caused the change.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d13-t2",
        label: "Create the variation and launch the A/B test",
        description:
          "Build the alternate version. Set up the test in your ad platform or landing page tool with equal budget split. Ensure both versions run to the same audience under the same conditions.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d13-t3",
        label: "Define the success metric and minimum sample size before results come in",
        description:
          "Decide in advance what you are measuring (CTR, conversion rate, CPL) and how many impressions or leads you need before declaring a winner. Do not call the test early based on gut feeling.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "A/B testing is how you turn a good channel into a great channel. The best marketers in the world are not geniuses who guess right -- they are disciplined testers who let data decide. Every ad, every landing page, every email should be treated as a hypothesis. Test the headline. Test the image. Test the offer. Test the audience. But test one thing at a time. Build repeatable closing sequences so that nobody can screw up -- and the way you build those is by testing until you find what works, then locking it in as the standard.",
  },
  {
    day: 14,
    title: "Week 2 Review: Channel Performance Summary",
    intention:
      "Review the impact of your channel audit and budget reallocation. Plan for automation week.",
    tasks: [
      {
        id: "d14-t1",
        label: "Compare your current CPL to your Day 4 baseline",
        description:
          "Has your overall cost per lead improved since you cut the underperformer and reallocated budget? If yes, quantify the improvement. If not, investigate what went wrong.",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d14-t2",
        label: "Review A/B test progress and any early indicators",
        description:
          "Check if your test from Day 13 has enough data yet. If not, let it run. If early results are dramatic (one version is 3x better), note it but wait for statistical significance before acting.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d14-t3",
        label: "Plan your Week 3 automation priorities",
        description:
          "Next week you will build lead follow-up automations, nurture sequences, and re-engagement campaigns. Audit your current follow-up process now so you know exactly what needs to be automated.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Two weeks in and you now have a mapped funnel, baseline metrics, tracked channels, and a data-driven budget allocation. You are already operating at a higher level than 90% of businesses. The channel audit is not a one-time exercise -- it should happen monthly. Markets shift, ad costs change, and what worked last quarter may not work next quarter. The discipline is in the rhythm: measure, analyze, decide, act, repeat. Every dollar in, we know you are gonna get $35 back. You are building the infrastructure to make that a reality.",
  },
  {
    day: 15,
    title: "Audit Your Lead Follow-Up Process",
    intention:
      "Evaluate how quickly and effectively you respond to new leads today.",
    tasks: [
      {
        id: "d15-t1",
        label: "Measure your current average lead response time",
        description:
          "From the moment a lead fills out a form or sends an inquiry, how long does it take for someone to respond? Check your CRM timestamps. The industry benchmark is under 5 minutes. Most businesses take hours or days.",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d15-t2",
        label: "Document your current follow-up sequence step by step",
        description:
          "What happens after a lead comes in? Who gets notified? What is the first outreach? How many follow-ups happen? What is the cadence? If the answer is 'it depends on who is working,' that is a broken process.",
        type: 'measure',
        input_type: 'text',
      },
      {
        id: "d15-t3",
        label: "Identify follow-up gaps and inconsistencies",
        description:
          "Are some leads falling through the cracks? Are follow-ups happening on weekends and evenings? Is the messaging consistent regardless of who responds? Document every gap you find.",
        type: 'reflect',
        input_type: 'text',
      },
    ],
    educationalContent:
      "Speed to lead is one of the most researched topics in sales and the data is unambiguous: responding to a lead within 5 minutes makes you 21 times more likely to qualify that lead compared to responding in 30 minutes. After an hour, your odds of qualifying drop by 90%. Yet the average business response time is over 40 hours. That means leads are going to your competitors while you are getting around to responding. This week you are going to fix that with automation. Build repeatable closing sequences so that nobody can screw up -- that starts with making sure every single lead gets a response within minutes, not hours.",
  },
  {
    day: 16,
    title: "Set Up Instant Automated Follow-Up",
    intention:
      "Ensure every new lead receives a response within 5 minutes, automatically.",
    tasks: [
      {
        id: "d16-t1",
        label: "Set up an automated email or SMS response triggered on lead submission",
        description:
          "Configure your CRM or email tool to send an immediate, personalized response the moment a new lead comes in. Include their name, acknowledge what they inquired about, and set expectations for next steps.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d16-t2",
        label: "Set up internal notifications so your team is alerted instantly",
        description:
          "Configure Slack, email, or SMS alerts to your sales team the moment a new lead arrives. The automation buys you time but a human follow-up within 15 minutes is still the goal.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d16-t3",
        label: "Test the automation end to end as if you were a new lead",
        description:
          "Submit a test inquiry through every lead capture form. Verify the automated response arrives within 5 minutes, the content is correct and personalized, and the internal notification fires properly.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Automation is not about replacing human connection -- it is about making sure no lead ever falls through the cracks. The automated response acknowledges the lead instantly and sets expectations while your team prepares a personalized follow-up. Think of it like a restaurant: the host seats you immediately and hands you a menu. You do not wait 30 minutes wondering if anyone knows you are there. Same quarter pounder with cheese in London as in the US -- the process is the same every time because it is automated and systematized. Your lead follow-up should work the same way.",
  },
  {
    day: 17,
    title: "Write Your Lead Nurture Email Sequence",
    intention:
      "Create a 5-email sequence that educates and converts leads who do not buy immediately.",
    tasks: [
      {
        id: "d17-t1",
        label: "Write Email 1: Value-first welcome that establishes credibility",
        description:
          "Deliver a quick win, useful insight, or relevant resource within the first email. Do not sell. Build trust by proving you understand their problem better than they do.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d17-t2",
        label: "Write Emails 2-4: Education, case studies, and objection handling",
        description:
          "Email 2: teach something relevant to their problem. Email 3: share a case study or testimonial. Email 4: address the biggest objection your prospects have (price, timing, trust). Each email should provide value and build toward the offer.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d17-t3",
        label: "Write Email 5: Clear call to action with urgency or scarcity",
        description:
          "The final email in the sequence should present a clear next step (book a call, schedule a demo, make a purchase) with a reason to act now. This is where you ask for the sale directly.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Most leads are not ready to buy the moment they find you. Research shows that 80% of sales require 5 or more follow-up touches, but 44% of salespeople give up after one. A nurture sequence bridges that gap automatically. Each email should move the prospect closer to a decision by building trust, demonstrating expertise, and removing objections. The sequence should feel like a helpful advisor, not a desperate salesperson. Build repeatable closing sequences so that nobody can screw up. This email sequence runs whether you are awake or asleep, whether your best salesperson is working or on vacation.",
  },
  {
    day: 18,
    title: "Deploy and Test Your Nurture Sequence",
    intention:
      "Get your lead nurture sequence live in your email or CRM tool and verify it works flawlessly.",
    tasks: [
      {
        id: "d18-t1",
        label: "Load your 5-email sequence into your email marketing or CRM platform",
        description:
          "Set up the emails with proper spacing (typically 2-3 days apart), correct sender information, subject lines, and any personalization tokens. Configure the trigger so new leads automatically enter the sequence.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d18-t2",
        label: "Test the entire sequence by enrolling yourself as a test lead",
        description:
          "Go through the full sequence as a recipient. Check formatting on mobile and desktop, verify links work, confirm personalization fields populate correctly, and read every email for clarity and tone.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d18-t3",
        label: "Set up tracking on every email in the sequence",
        description:
          "Enable open rate tracking, click tracking, and reply tracking. Tag leads who click specific links so you can identify warm prospects. Set up alerts for replies so your team can jump on engaged leads.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Deploying a nurture sequence is where most businesses stall because it feels like a lot of setup. But once it is running, it works for you 24 hours a day, 7 days a week, with perfect consistency. Every lead gets the same quality follow-up regardless of who entered them into the system. Same quarter pounder with cheese in London as in the US -- because the system is the same every time. The key is testing before you go live. A broken link, a missing personalization field, or a typo in your subject line can tank your results. Spend the time to test it right.",
  },
  {
    day: 19,
    title: "Identify Your Cold Lead Inventory",
    intention:
      "Find every lead from the past 90 days who inquired but never purchased and quantify the opportunity.",
    tasks: [
      {
        id: "d19-t1",
        label: "Pull a list of all leads from the past 90 days who did not convert",
        description:
          "Query your CRM for contacts who entered as leads in the last 90 days but have no associated sale, closed deal, or purchase. This is your cold lead list. Count them.",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d19-t2",
        label: "Segment cold leads by how far they got in your funnel",
        description:
          "Did they just fill out a form? Did they book a call but not show? Did they attend a call but not buy? Each segment needs a different re-engagement approach because their objections are different.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d19-t3",
        label: "Estimate the potential revenue if you re-engaged even 10% of cold leads",
        description:
          "Multiply your cold lead count by 10% and then by your average deal value. This is money sitting in your CRM waiting to be activated. Most businesses are shocked by this number.",
        type: 'measure',
        input_type: 'number',
      },
    ],
    educationalContent:
      "Your CRM is full of money you have already paid to acquire. Every cold lead cost you ad dollars, time, and effort to generate. Letting them sit untouched is like paying for inventory and leaving it in the warehouse. These people already raised their hand and said they were interested -- they just were not ready at that specific moment. Circumstances change. Budgets reset. Timing shifts. A well-crafted re-engagement campaign can convert 5-15% of cold leads who would otherwise never come back. That is revenue with zero additional acquisition cost.",
  },
  {
    day: 20,
    title: "Build Your Cold Lead Re-Engagement Campaign",
    intention:
      "Create a multi-channel campaign to re-engage leads who went cold and bring them back into your funnel.",
    tasks: [
      {
        id: "d20-t1",
        label: "Write a re-engagement email sequence for cold leads",
        description:
          "Create 3 emails: (1) A 'we noticed you were interested' email with a new value offer. (2) A case study or testimonial showing results. (3) A final 'last chance' email with a specific call to action and deadline.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d20-t2",
        label: "Set up a retargeting ad campaign for cold leads",
        description:
          "Upload your cold lead list as a custom audience in Facebook/Meta and Google. Run retargeting ads with a different angle than what they originally saw -- new offer, new social proof, or new messaging.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d20-t3",
        label: "Launch both the email and retargeting campaigns simultaneously",
        description:
          "Coordinate timing so cold leads see your email and your retargeting ads in the same window. Multi-channel re-engagement converts at 2-3x the rate of single-channel outreach.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Re-engagement is one of the highest-ROI activities in marketing because the acquisition cost is already paid. You are not generating new leads -- you are reactivating leads you already own. The key is approaching them with something new. If they did not buy the first time, sending them the exact same message will not work. Change the angle: new offer, new proof, new urgency, or new format. A prospect who ignored your email might respond to a retargeting ad with a video testimonial. Every dollar in, we know you are gonna get $35 back -- and re-engagement dollars have some of the highest returns because the hard work of getting their attention was already done.",
  },
  {
    day: 21,
    title: "Week 3 Review: Automation Health Check",
    intention:
      "Verify all automations are running correctly and review early performance metrics.",
    tasks: [
      {
        id: "d21-t1",
        label: "Check that instant follow-up automation is firing for every new lead",
        description:
          "Review your CRM logs from the past week. Did every new lead receive an automated response within 5 minutes? If any were missed, find out why and fix the gap.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d21-t2",
        label: "Review nurture sequence performance: open rates, click rates, replies",
        description:
          "Check email analytics. Industry average open rates are 20-25%. Click rates are 2-5%. If you are below these benchmarks, your subject lines or content need work. If you are above, your messaging is resonating.",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d21-t3",
        label: "Review re-engagement campaign early results",
        description:
          "How many cold leads opened the re-engagement email? How many clicked? Has anyone replied or re-booked? Check retargeting ad impressions and clicks. Document early indicators even if the campaign is still young.",
        type: 'reflect',
        input_type: 'text',
      },
    ],
    educationalContent:
      "Automations are not 'set and forget' -- they are 'set, monitor, and optimize.' The first version of any automation is a draft. You launch it, watch the data, and improve it. If open rates are low, test new subject lines. If click rates are low, test new calls to action. If replies are coming in but not converting, your sales process needs work. The beauty of automation is that every improvement you make applies to every future lead automatically. Build repeatable closing sequences so that nobody can screw up. That is what you are doing right now -- building the machine that runs without you.",
  },
  {
    day: 22,
    title: "Document Your Best Marketing Campaign",
    intention:
      "Create a step-by-step playbook for your best-performing campaign so anyone on your team could run it.",
    tasks: [
      {
        id: "d22-t1",
        label: "Choose your single best-performing marketing campaign and document every step",
        description:
          "From ad creation to targeting to landing page to follow-up to close -- write down every single step in order. Include the tools used, the copy, the images, the targeting parameters, and the timing.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d22-t2",
        label: "Include performance benchmarks and expected results in the playbook",
        description:
          "Document what a successful run looks like: expected CPL, conversion rate, ROAS, and timeline to results. This gives whoever runs the campaign a standard to measure against.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d22-t3",
        label: "Test the playbook by having someone else review it for clarity",
        description:
          "Hand the document to a team member or contractor and ask if they could execute it without your help. If they have questions, the playbook needs more detail. Iterate until it is self-contained.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "This is where Conversion Intelligence becomes a business asset instead of personal knowledge. If your marketing only works when you personally run it, you do not have a system -- you have a dependency. Same quarter pounder with cheese in London as in the US. Why? Because it was repeatable. McDonald's did not need Ray Kroc standing in every kitchen. They documented the process so precisely that anyone could follow it and get the same result. Your marketing playbook should work the same way. Document it so well that a new hire could run your best campaign on day one.",
  },
  {
    day: 23,
    title: "Audit Messaging Consistency",
    intention:
      "Ensure your brand message is consistent across every channel and touchpoint.",
    tasks: [
      {
        id: "d23-t1",
        label: "Review your messaging across website, social media, email, and ads",
        description:
          "Pull up your website homepage, your social media bios and recent posts, your email templates, and your ad copy. Read them side by side. Is the core message, value proposition, and tone consistent?",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d23-t2",
        label: "Identify messaging inconsistencies or contradictions",
        description:
          "Does your website say one thing while your ads promise something different? Does your social media tone match your email tone? Inconsistency confuses prospects and erodes trust.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d23-t3",
        label: "Create a core messaging document with approved language",
        description:
          "Write your official value proposition, tagline, key benefits, and brand voice guidelines in one document. This becomes the reference that every piece of content and every ad must align with.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Messaging inconsistency is a silent conversion killer. When a prospect sees an ad that promises one thing, clicks to a landing page that says something slightly different, and then gets an email with yet another angle, trust erodes. They may not consciously notice the inconsistency but subconsciously they feel uncertain. Uncertainty kills conversions. The fix is simple: one core message, adapted for each channel but never contradicted. Build repeatable closing sequences so that nobody can screw up -- and that means the message is the same whether the prospect finds you through an ad, a referral, or a Google search.",
  },
  {
    day: 24,
    title: "Create Your 90-Day Content Calendar",
    intention:
      "Plan what content you will publish each week for the next 90 days to maintain consistent marketing momentum.",
    tasks: [
      {
        id: "d24-t1",
        label: "Define your content pillars -- 3-5 core topics you will consistently cover",
        description:
          "These should align with your prospects' biggest questions, pain points, and objections. Every piece of content should relate back to one of these pillars and ultimately drive toward your offer.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d24-t2",
        label: "Map out 12 weeks of content with specific topics and formats",
        description:
          "For each week assign: what topic, what format (blog, video, social post, email, podcast), what channel, and what call to action. You do not need to create the content yet -- just plan it.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d24-t3",
        label: "Schedule content creation and publishing deadlines",
        description:
          "Assign dates for when each piece of content needs to be drafted, reviewed, and published. If you have a team, assign ownership. If it is just you, batch creation days for efficiency.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Content without a calendar is a hobby. Content with a calendar is a strategy. The reason most businesses are inconsistent with content is that they create it reactively -- when they feel inspired or when they remember. A content calendar eliminates that randomness. You know exactly what you are publishing, when, and where. The content itself should serve your funnel: top-of-funnel content attracts attention, middle-of-funnel content builds trust, and bottom-of-funnel content drives action. Every piece should have a purpose and a call to action. Ninety days of planned content gives you three months of consistent marketing without daily scrambling.",
  },
  {
    day: 25,
    title: "Automate Review and Testimonial Collection",
    intention:
      "Set up a system that automatically collects social proof from satisfied clients.",
    tasks: [
      {
        id: "d25-t1",
        label: "Identify the optimal moment to ask for a review or testimonial",
        description:
          "This is usually right after a positive outcome, successful delivery, or key milestone. Map the trigger point in your customer journey where satisfaction is highest.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d25-t2",
        label: "Set up an automated review request email or SMS at that trigger point",
        description:
          "Configure your CRM to send a review request automatically when the trigger event occurs. Include a direct link to your Google, Yelp, or industry-specific review platform. Make it one click, not three.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d25-t3",
        label: "Create a system to capture and repurpose testimonials across channels",
        description:
          "Build a testimonial library. When a great review comes in, save it and repurpose it as social media content, landing page proof, email copy, and ad creative. One testimonial should be used in at least 5 places.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Social proof is the most powerful conversion tool you have and most businesses leave it to chance. They wait for reviews to show up organically instead of systematically requesting them. The data is clear: 93% of consumers say online reviews influence their purchase decisions. A product with 5 reviews is 270% more likely to be purchased than one with no reviews. Automate the ask so it happens every time, with every satisfied client, without anyone on your team having to remember. Build repeatable closing sequences so that nobody can screw up -- and review collection should be part of that sequence, not an afterthought.",
  },
  {
    day: 26,
    title: "Build Your Marketing Dashboard",
    intention:
      "Create a single-page view of your most important marketing metrics so you can make decisions at a glance.",
    tasks: [
      {
        id: "d26-t1",
        label: "Select your 5-7 key marketing metrics",
        description:
          "At minimum: cost per lead (CPL), return on ad spend (ROAS), conversion rate by funnel stage, total pipeline value, and lead response time. Add customer acquisition cost (CAC) and lifetime value (LTV) if available.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d26-t2",
        label: "Build a one-page dashboard using a spreadsheet or BI tool",
        description:
          "Use Google Sheets, Excel, Google Data Studio, or a tool like Databox or Geckoboard. The dashboard should update weekly at minimum and be accessible to everyone who needs it.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d26-t3",
        label: "Set up data sources to feed the dashboard automatically where possible",
        description:
          "Connect your ad platforms, CRM, and analytics tools so the dashboard pulls live data. Manual data entry is acceptable for now but automation is the goal for sustainability.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "A dashboard is not a report -- it is a decision-making tool. Reports tell you what happened. Dashboards tell you what to do next. Every number on your dashboard should answer a question: Is our CPL going up or down? Is our ROAS healthy? Are leads converting at an acceptable rate? Is our pipeline growing or shrinking? If a number is green, keep doing what you are doing. If it is red, investigate and act. Every dollar in, we know you are gonna get $35 back -- and the dashboard is how you verify that in real time instead of finding out at the end of the quarter that you were losing money.",
  },
  {
    day: 27,
    title: "Establish Your Weekly Marketing Review Meeting",
    intention:
      "Create a recurring rhythm for reviewing marketing performance and making data-driven decisions.",
    tasks: [
      {
        id: "d27-t1",
        label: "Schedule a recurring weekly marketing review meeting",
        description:
          "Block 30-60 minutes every week, same day and time. If you are a solo operator, this is a meeting with yourself. If you have a team, include everyone who touches marketing and sales.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d27-t2",
        label: "Create a standing meeting agenda",
        description:
          "Agenda items: (1) Review dashboard metrics vs. targets. (2) What tests are running and results. (3) Budget allocation review. (4) What worked this week. (5) What to test next week. (6) Action items with owners and deadlines.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d27-t3",
        label: "Run your first weekly marketing review using the agenda and dashboard",
        description:
          "Go through the agenda with your dashboard in front of you. Make at least one data-driven decision about budget, testing, or strategy. Document the decision and the action item. This is now your weekly rhythm.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "The weekly marketing review is the habit that keeps everything else in this protocol running. Without it, dashboards go unchecked, tests run without analysis, and budgets drift back to old patterns. The meeting is short and focused -- 30 minutes is enough if you have a clear agenda and a dashboard to reference. The agenda should always end with action items: what are we changing, who is responsible, and when is it done? Same quarter pounder with cheese in London as in the US -- the consistency of the process is what produces consistent results. Your weekly review is the process that makes your marketing repeatable.",
  },
  {
    day: 28,
    title: "Test a New Marketing Variation",
    intention:
      "Run one new experiment this week to continuously improve your marketing results.",
    tasks: [
      {
        id: "d28-t1",
        label: "Choose one marketing variable to test based on your biggest opportunity",
        description:
          "Review your funnel data and dashboard. Where is the biggest remaining gap? Choose a test that targets that gap: new ad copy, new landing page design, new offer, new audience segment, or new channel.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d28-t2",
        label: "Design and launch the test with a clear hypothesis",
        description:
          "Write your hypothesis: 'If I change X, I expect Y to improve by Z%.' Set up the test with a control and variation, equal budget or traffic split, and a defined timeframe.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d28-t3",
        label: "Add the test to your weekly review agenda for tracking",
        description:
          "Document what you are testing, when it launched, what the success metric is, and when you will evaluate results. This ensures the test gets reviewed and actioned, not forgotten.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Continuous testing is the engine of marketing improvement. The businesses that win at marketing are not the ones with the biggest budgets -- they are the ones that test the most and learn the fastest. Every test either confirms what works (which you keep) or reveals what does not (which you kill). Either outcome is valuable. The discipline is in always having a test running. If you are not testing, you are assuming -- and assumptions are the most expensive thing in marketing. Track every stage: Ad to Landing Page to Website to Booking to Call to Close. Test at the stage where you have the biggest drop-off.",
  },
  {
    day: 29,
    title: "Create Your 90-Day Marketing Forecast",
    intention:
      "Project your expected leads, conversion rates, and revenue impact for the next 90 days based on your data.",
    tasks: [
      {
        id: "d29-t1",
        label: "Forecast expected leads per month based on current channel performance",
        description:
          "Using your CPL and budget data, project how many leads each channel will produce over the next 3 months. Factor in any budget changes, seasonal trends, or new channels you plan to launch.",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d29-t2",
        label: "Forecast expected revenue based on current conversion rates and deal values",
        description:
          "Multiply projected leads by your conversion rate and average deal value. This gives you a marketing-driven revenue forecast. Compare it to your revenue goals -- is there a gap?",
        type: 'measure',
        input_type: 'number',
      },
      {
        id: "d29-t3",
        label: "Identify what must improve to hit your revenue goal and build an action plan",
        description:
          "If your forecast falls short, identify the lever to pull: more leads (increase budget), higher conversion rate (optimize funnel), or higher deal value (adjust pricing or upsells). Write the specific actions you will take.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Forecasting is where Conversion Intelligence becomes a strategic business tool instead of just a marketing exercise. When you can say with confidence that your marketing will produce a specific number of leads, convert at a known rate, and generate a projected revenue figure, you can plan your business around it. You can hire ahead. You can invest in capacity. You can set goals that are grounded in data instead of hope. Every dollar in, we know you are gonna get $35 back -- and a forecast is the document that proves it to yourself, your team, and your stakeholders.",
  },
  {
    day: 30,
    title: "30-Day Conversion Intelligence Assessment",
    intention:
      "Measure your progress over the past 30 days, celebrate your wins, and lock in the systems that will keep your marketing running.",
    tasks: [
      {
        id: "d30-t1",
        label: "Retake the Conversion Intelligence quiz and compare scores to Day 1",
        description:
          "Go back to the Pillar 4 assessment and answer every question again based on where you are today. Compare your new score to your original score. Quantify the improvement.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d30-t2",
        label: "Document your biggest marketing improvement from this 30-day protocol",
        description:
          "What single change had the biggest impact? Was it fixing the drop-off point, reallocating budget, automating follow-up, or re-engaging cold leads? Write it down as your top lesson learned.",
        type: 'reflect',
        input_type: 'text',
      },
      {
        id: "d30-t3",
        label: "Review all systems: funnel tracking, automations, dashboard, weekly review",
        description:
          "Walk through every system you built this month. Is tracking still working? Are automations still firing? Is the dashboard current? Is the weekly review on the calendar? Fix anything that has drifted.",
        type: 'action',
        input_type: 'checkbox',
      },
      {
        id: "d30-t4",
        label: "Set your next 90-day Conversion Intelligence goals",
        description:
          "Based on your forecast and assessment, set 3 specific goals for the next quarter: a CPL target, a conversion rate target, and a revenue target. Put them on your dashboard and review them weekly.",
        type: 'action',
        input_type: 'checkbox',
      },
    ],
    educationalContent:
      "Thirty days ago you may not have known your conversion rates, your cost per lead, or your return on ad spend. Today you have a mapped funnel, tracked channels, automated follow-up, a nurture sequence, a re-engagement campaign, a documented playbook, a content calendar, a marketing dashboard, and a weekly review rhythm. That is a complete Conversion Intelligence system. Same quarter pounder with cheese in London as in the US -- because the system is repeatable, measurable, and does not depend on any single person to run it. Build repeatable closing sequences so that nobody can screw up. You have built exactly that. Now protect it, improve it, and let it compound. Every dollar in, we know you are gonna get $35 back. That is the standard. Hold yourself to it.",
  },
];
