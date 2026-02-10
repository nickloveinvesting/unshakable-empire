import type { PillarId } from '@/types/quiz';
import { PILLAR_MAP } from '@/types/quiz';

interface Question {
  id: string;
  category: string;
  text: string;
  subtext: string;
}

function generateQuestionsForCategory(pillarId: number, category: string, categoryIndex: number, count: number): Question[] {
  const questions: Question[] = [];
  const templates = getCategoryQuestionTemplates(pillarId, category);

  for (let i = 0; i < count; i++) {
    const template = templates[i] || { text: `I have effective ${category.toLowerCase()} systems in place.`, subtext: 'Rate your current capability.' };
    questions.push({
      id: `p${pillarId}_c${categoryIndex}_q${i}`,
      category,
      text: template.text,
      subtext: template.subtext,
    });
  }
  return questions;
}

function getCategoryQuestionTemplates(pillarId: number, category: string): { text: string; subtext: string }[] {
  // Full question bank — 8 questions per category
  const bank: Record<number, Record<string, { text: string; subtext: string }[]>> = {
    1: {
      'Time Architecture': [
        { text: 'I have a documented weekly schedule that protects my highest-value activities.', subtext: 'Think about whether your calendar reflects your priorities.' },
        { text: 'I batch similar tasks together to minimize context switching.', subtext: 'Consider how often you jump between unrelated tasks.' },
        { text: 'I have clear boundaries between strategic thinking time and operational work.', subtext: 'Rate how well you separate CEO time from manager time.' },
        { text: 'I regularly audit how I spend my time and eliminate low-value activities.', subtext: 'Think about your last time audit.' },
        { text: 'I delegate or automate tasks that don\'t require my unique abilities.', subtext: 'Consider what only you can do vs. what others could handle.' },
        { text: 'I have a morning routine that sets me up for peak performance.', subtext: 'Rate the consistency and effectiveness of your morning ritual.' },
        { text: 'I protect at least 2 hours daily for deep, uninterrupted work.', subtext: 'Think about your ability to focus without interruption.' },
        { text: 'I end each week with a review and plan for the next week.', subtext: 'Consider your weekly planning cadence.' },
      ],
      'Decision Frameworks': [
        { text: 'I have a clear decision-making framework for major business choices.', subtext: 'Think about how you approach big decisions.' },
        { text: 'I can distinguish between reversible and irreversible decisions quickly.', subtext: 'Consider your speed of decision-making.' },
        { text: 'I involve the right people in decisions without creating bottlenecks.', subtext: 'Rate your delegation of decision authority.' },
        { text: 'I document key decisions and the reasoning behind them.', subtext: 'Think about your decision documentation practices.' },
        { text: 'I avoid decision fatigue by automating routine choices.', subtext: 'Consider how many unnecessary decisions you make daily.' },
        { text: 'I use data and metrics to inform my strategic decisions.', subtext: 'Rate your use of evidence-based decision making.' },
        { text: 'I can make decisions under uncertainty without paralysis.', subtext: 'Think about your comfort with incomplete information.' },
        { text: 'I regularly review past decisions to improve future ones.', subtext: 'Consider your decision review cadence.' },
      ],
      'Strategic Clarity': [
        { text: 'I have a clear 3-year vision for my business.', subtext: 'Think about the clarity of your long-term direction.' },
        { text: 'I can articulate my company\'s unique value proposition in one sentence.', subtext: 'Consider how clearly you communicate your differentiation.' },
        { text: 'I know exactly which metrics drive my business forward.', subtext: 'Rate your clarity on key performance indicators.' },
        { text: 'I have identified the one critical constraint limiting my growth.', subtext: 'Think about your bottleneck awareness.' },
        { text: 'My team understands and can articulate our strategic priorities.', subtext: 'Consider alignment across your organization.' },
        { text: 'I regularly reassess my strategy based on market changes.', subtext: 'Rate your strategic adaptability.' },
        { text: 'I say no to opportunities that don\'t align with my strategy.', subtext: 'Think about your discipline in maintaining focus.' },
        { text: 'I have a clear competitive moat that protects my business.', subtext: 'Consider the sustainability of your competitive advantage.' },
      ],
      'Personal Operating System': [
        { text: 'I have a personal development plan that I follow consistently.', subtext: 'Think about your commitment to growth.' },
        { text: 'I maintain my physical health as a business performance tool.', subtext: 'Consider how your health impacts your work.' },
        { text: 'I have a trusted advisor or mentor I consult regularly.', subtext: 'Rate your access to outside perspective.' },
        { text: 'I manage my energy levels throughout the day intentionally.', subtext: 'Think about your energy management practices.' },
        { text: 'I have systems for capturing and processing ideas and information.', subtext: 'Consider your knowledge management approach.' },
        { text: 'I practice stress management techniques consistently.', subtext: 'Rate your resilience under pressure.' },
        { text: 'I invest in learning new skills relevant to my role.', subtext: 'Think about your continuous learning habits.' },
      ],
    },
    2: {
      'Role Clarity': [
        { text: 'Every team member has a clearly documented role with specific outcomes.', subtext: 'Think about clarity of expectations.' },
        { text: 'My team knows exactly what success looks like in their position.', subtext: 'Consider how measurable your role definitions are.' },
        { text: 'There are no overlapping responsibilities causing confusion.', subtext: 'Rate the clarity of role boundaries.' },
        { text: 'Each role has an updated job description that reflects actual work.', subtext: 'Think about documentation accuracy.' },
        { text: 'Team members understand how their role contributes to company goals.', subtext: 'Consider alignment between individual and company objectives.' },
        { text: 'I have an org chart that accurately reflects reporting relationships.', subtext: 'Rate your organizational structure clarity.' },
        { text: 'New hires can quickly understand what\'s expected of them.', subtext: 'Think about onboarding clarity.' },
        { text: 'I regularly review and update role definitions as the business evolves.', subtext: 'Consider how current your role definitions are.' },
      ],
      'Hiring & Culture': [
        { text: 'I have a documented hiring process that consistently finds A-players.', subtext: 'Think about the reliability of your hiring.' },
        { text: 'My company culture is intentionally designed, not accidental.', subtext: 'Consider whether your culture is by design or default.' },
        { text: 'I can articulate our core values and they influence daily decisions.', subtext: 'Rate how lived your values actually are.' },
        { text: 'I have a structured interview process that evaluates cultural fit.', subtext: 'Think about your interview methodology.' },
        { text: 'Team members would recommend working here to talented friends.', subtext: 'Consider your employer brand strength.' },
        { text: 'I address cultural violations quickly and consistently.', subtext: 'Rate your commitment to cultural standards.' },
        { text: 'I have a retention strategy beyond just compensation.', subtext: 'Think about what keeps your best people.' },
        { text: 'I invest in team development and growth opportunities.', subtext: 'Consider your development investment.' },
      ],
      'Delegation Systems': [
        { text: 'I have clear delegation frameworks that my team understands.', subtext: 'Think about your delegation methodology.' },
        { text: 'I delegate outcomes, not just tasks.', subtext: 'Consider whether you delegate the what or the how.' },
        { text: 'My team can handle emergencies without my direct involvement.', subtext: 'Rate your team\'s autonomous capability.' },
        { text: 'I have documented SOPs for recurring processes.', subtext: 'Think about your operational documentation.' },
        { text: 'I trust my team to make decisions within their authority.', subtext: 'Consider your comfort with distributed decision-making.' },
        { text: 'I have a system for tracking delegated work without micromanaging.', subtext: 'Rate your oversight approach.' },
        { text: 'My team proactively takes ownership of problems.', subtext: 'Think about your team\'s initiative level.' },
        { text: 'I spend less than 20% of my time on tasks others could do.', subtext: 'Consider how much of your time is truly CEO-level work.' },
      ],
      'Performance Management': [
        { text: 'I have regular 1-on-1 meetings with direct reports.', subtext: 'Think about your management cadence.' },
        { text: 'My team receives clear, actionable feedback regularly.', subtext: 'Consider the quality and frequency of your feedback.' },
        { text: 'I have metrics for every role that indicate performance.', subtext: 'Rate your performance measurement systems.' },
        { text: 'I address underperformance quickly and constructively.', subtext: 'Think about your approach to difficult conversations.' },
        { text: 'High performers are recognized and rewarded differently.', subtext: 'Consider your recognition systems.' },
        { text: 'I have a clear process for handling terminations when necessary.', subtext: 'Rate your approach to difficult people decisions.' },
        { text: 'My team has development plans tied to business objectives.', subtext: 'Think about growth pathways for your team.' },
      ],
    },
    3: {
      'Pipeline Management': [
        { text: 'I have a clearly defined sales pipeline with measurable stages.', subtext: 'Think about the structure of your sales process.' },
        { text: 'I know my conversion rates at each pipeline stage.', subtext: 'Consider your pipeline analytics capabilities.' },
        { text: 'I can accurately forecast revenue 90 days out.', subtext: 'Rate your revenue predictability.' },
        { text: 'My pipeline has enough volume to hit my revenue targets.', subtext: 'Think about pipeline coverage ratio.' },
        { text: 'I review pipeline health weekly with actionable insights.', subtext: 'Consider your pipeline review cadence.' },
        { text: 'I have leading indicators that predict future revenue.', subtext: 'Rate your forward-looking metrics.' },
        { text: 'My CRM is actively used and data is reliable.', subtext: 'Think about your CRM adoption and data quality.' },
        { text: 'I can identify pipeline bottlenecks and address them quickly.', subtext: 'Consider your diagnostic capabilities.' },
      ],
      'Sales Process': [
        { text: 'I have a documented, repeatable sales process.', subtext: 'Think about the standardization of your sales approach.' },
        { text: 'My sales conversations follow a value-based methodology.', subtext: 'Consider your sales conversation structure.' },
        { text: 'I have effective discovery questions that uncover real needs.', subtext: 'Rate your qualification process.' },
        { text: 'My proposals are compelling and address specific pain points.', subtext: 'Think about your proposal effectiveness.' },
        { text: 'I have a systematic follow-up process that nurtures leads.', subtext: 'Consider your follow-up discipline.' },
        { text: 'I handle objections with prepared, tested responses.', subtext: 'Rate your objection handling skills.' },
        { text: 'My close rate is above industry average.', subtext: 'Think about your conversion effectiveness.' },
        { text: 'I continuously improve my sales process based on data.', subtext: 'Consider your sales process optimization habits.' },
      ],
      'Pricing Strategy': [
        { text: 'My pricing reflects the value I deliver, not just my costs.', subtext: 'Think about your pricing philosophy.' },
        { text: 'I have tiered offerings that serve different market segments.', subtext: 'Consider your product/service ladder.' },
        { text: 'I regularly review and adjust pricing based on market data.', subtext: 'Rate your pricing optimization frequency.' },
        { text: 'My clients rarely push back on price as a primary objection.', subtext: 'Think about how your price matches perceived value.' },
        { text: 'I have premium offerings that capture high-value clients.', subtext: 'Consider your high-end market strategy.' },
        { text: 'I understand my unit economics and margin per client.', subtext: 'Rate your financial clarity per customer.' },
        { text: 'My pricing creates predictable recurring revenue.', subtext: 'Think about your revenue model sustainability.' },
        { text: 'I can articulate my ROI to clients with concrete numbers.', subtext: 'Consider your value communication.' },
      ],
      'Revenue Operations': [
        { text: 'I have systems that automate parts of my revenue cycle.', subtext: 'Think about operational efficiency in revenue generation.' },
        { text: 'My billing and collections process runs smoothly.', subtext: 'Consider your cash flow management.' },
        { text: 'I track customer lifetime value and optimize for it.', subtext: 'Rate your LTV awareness and optimization.' },
        { text: 'I have upsell and cross-sell processes in place.', subtext: 'Think about your expansion revenue strategy.' },
        { text: 'My revenue operations can scale without proportional cost increase.', subtext: 'Consider the scalability of your revenue machine.' },
        { text: 'I have financial dashboards I review weekly.', subtext: 'Rate your financial visibility.' },
        { text: 'I manage cash flow proactively, not reactively.', subtext: 'Think about your cash flow management approach.' },
      ],
    },
    4: {
      'Funnel Architecture': [
        { text: 'I have a documented marketing funnel with clear conversion points.', subtext: 'Think about the structure of your funnel.' },
        { text: 'I know my cost per lead and cost per acquisition.', subtext: 'Consider your unit economics awareness.' },
        { text: 'My funnel has multiple entry points for different audiences.', subtext: 'Rate the diversity of your lead sources.' },
        { text: 'I have landing pages optimized for conversion.', subtext: 'Think about your landing page effectiveness.' },
        { text: 'I A/B test funnel elements regularly.', subtext: 'Consider your optimization discipline.' },
        { text: 'My funnel moves prospects through awareness, interest, and decision stages.', subtext: 'Rate your funnel stage clarity.' },
        { text: 'I have retargeting systems for people who don\'t convert immediately.', subtext: 'Think about your remarketing capabilities.' },
        { text: 'I track funnel metrics daily and optimize weekly.', subtext: 'Consider your funnel monitoring frequency.' },
      ],
      'Content Operations': [
        { text: 'I have a content calendar that I follow consistently.', subtext: 'Think about your content planning discipline.' },
        { text: 'My content addresses specific pain points of my ideal client.', subtext: 'Consider the relevance of your content.' },
        { text: 'I repurpose content across multiple channels efficiently.', subtext: 'Rate your content multiplication strategy.' },
        { text: 'My content generates measurable leads and engagement.', subtext: 'Think about your content ROI.' },
        { text: 'I have a content production system that doesn\'t depend solely on me.', subtext: 'Consider the sustainability of your content creation.' },
        { text: 'My content positions me as a thought leader in my industry.', subtext: 'Rate your authority positioning.' },
        { text: 'I have evergreen content that continues to generate value.', subtext: 'Think about the longevity of your content assets.' },
        { text: 'I measure content performance and iterate based on data.', subtext: 'Consider your content analytics practices.' },
      ],
      'Paid Acquisition': [
        { text: 'I have profitable paid advertising campaigns running.', subtext: 'Think about your paid media ROI.' },
        { text: 'I know my target ROAS and consistently achieve it.', subtext: 'Consider your advertising efficiency.' },
        { text: 'I test new ad creative and copy regularly.', subtext: 'Rate your creative testing discipline.' },
        { text: 'My targeting reaches the right audience segments.', subtext: 'Think about your audience targeting precision.' },
        { text: 'I have systems to scale winning campaigns without losing efficiency.', subtext: 'Consider your scaling methodology.' },
        { text: 'I diversify across multiple advertising platforms.', subtext: 'Rate your channel diversification.' },
        { text: 'I track attribution accurately across channels.', subtext: 'Think about your attribution model.' },
        { text: 'I have a clear budget allocation strategy based on performance.', subtext: 'Consider your budget optimization approach.' },
      ],
      'Marketing Automation': [
        { text: 'I have automated email sequences that nurture leads.', subtext: 'Think about your email automation.' },
        { text: 'My marketing tools are integrated and share data seamlessly.', subtext: 'Consider your martech stack integration.' },
        { text: 'I have trigger-based campaigns that respond to user behavior.', subtext: 'Rate your behavioral marketing capabilities.' },
        { text: 'My automation saves significant time compared to manual processes.', subtext: 'Think about the efficiency gains from automation.' },
        { text: 'I segment my audience and deliver personalized messaging.', subtext: 'Consider your personalization sophistication.' },
        { text: 'I have automated reporting that keeps me informed.', subtext: 'Rate your automated insights capabilities.' },
        { text: 'My lead scoring system identifies the hottest prospects.', subtext: 'Think about your lead qualification automation.' },
      ],
    },
  };

  return bank[pillarId]?.[category] || [];
}

export function getQuestionsForPillar(pillarId: PillarId): Question[] {
  const pillar = PILLAR_MAP[pillarId];
  const questions: Question[] = [];

  pillar.categories.forEach((category, categoryIndex) => {
    // First 2 categories get 8 questions, last 2 get 7 = 30 total
    const count = categoryIndex < 2 ? 8 : 7;
    questions.push(...generateQuestionsForCategory(pillarId, category, categoryIndex, count));
  });

  return questions;
}
