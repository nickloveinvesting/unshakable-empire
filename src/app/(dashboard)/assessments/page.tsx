import React from 'react';
import Link from 'next/link';
import { Shield, Target, Users, DollarSign, Crosshair, ArrowRight } from 'lucide-react';
import { getAssessmentHistory, getLatestAssessment } from '@/app/actions/assessment';
import { PILLAR_MAP, type PillarId } from '@/types/quiz';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Crosshair,
  Users,
  DollarSign,
  Target,
};

const BAND_COLORS = {
  critical: 'text-red-500 bg-red-500/10 border-red-500/20',
  weak: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
  developing: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
  strong: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  elite: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

const BAND_BAR_COLORS = {
  critical: 'bg-red-500',
  weak: 'bg-orange-500',
  developing: 'bg-yellow-500',
  strong: 'bg-emerald-500',
  elite: 'bg-amber-400',
};

function getBandForPercentage(percentage: number): keyof typeof BAND_COLORS {
  if (percentage < 40) return 'critical';
  if (percentage < 55) return 'weak';
  if (percentage < 70) return 'developing';
  if (percentage < 85) return 'strong';
  return 'elite';
}

export default async function AssessmentsPage() {
  const { data: assessments } = await getAssessmentHistory();

  // Get latest assessment for each pillar
  const pillarStatuses = await Promise.all(
    [1, 2, 3, 4].map(async (pillarId) => {
      const { data } = await getLatestAssessment(pillarId);
      return { pillarId, latestAssessment: data };
    })
  );

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-amber-400" />
            <h1 className="text-3xl font-bold text-white">Assessments</h1>
          </div>
          <p className="text-zinc-400 text-sm">
            Track your progress across all four pillars of your empire.
          </p>
        </div>

        {/* Section 1: Assessment History */}
        <div className="mb-12">
          <h2 className="text-white font-bold text-xl mb-6">Assessment History</h2>

          {!assessments || assessments.length === 0 ? (
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 text-center animate-scale-in">
              <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zinc-600" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">No Assessments Yet</h3>
              <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
                Start with the pillar where your business feels weakest. The assessment takes 5 minutes and reveals your exact roadmap.
              </p>
              <Link
                href="/assess"
                className="inline-flex items-center gap-2 bg-amber-400 text-black font-bold px-6 py-3 min-h-[44px] rounded-lg hover:bg-amber-300 transition-[background-color,box-shadow] duration-200 shadow-lg shadow-amber-400/20 button-press"
              >
                <Shield className="w-5 h-5" />
                Take Your First Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              {assessments.map((assessment) => {
                const pillar = PILLAR_MAP[assessment.pillar_id as PillarId];
                const Icon = ICON_MAP[pillar.icon];
                const bandColor = BAND_COLORS[assessment.band as keyof typeof BAND_COLORS];
                const barColor = BAND_BAR_COLORS[assessment.band as keyof typeof BAND_BAR_COLORS];
                const dateStr = new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }).format(new Date(assessment.completed_at));

                // Parse category scores (JSONB with a/b/c/d keys)
                const categoryScores = assessment.category_scores as Record<string, { score: number; max: number; percentage: number }>;
                const categories = ['a', 'b', 'c', 'd'].map((key) => ({
                  key,
                  label: pillar.categories[key === 'a' ? 0 : key === 'b' ? 1 : key === 'c' ? 2 : 3],
                  ...categoryScores[key],
                }));

                return (
                  <div
                    key={assessment.id}
                    className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 card-hover"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">{pillar.label}</h3>
                          <p className="text-zinc-500 text-xs">{dateStr}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-3xl font-extrabold ${bandColor.split(' ')[0]}`}>
                          {assessment.overall_percentage}%
                        </p>
                        <span
                          className={`inline-block text-xs font-semibold uppercase px-2 py-1 rounded border ${bandColor} mt-1`}
                        >
                          {assessment.band}
                        </span>
                        {assessment.is_retake && (
                          <span className="block text-xs text-amber-400 font-medium mt-1">
                            Retake
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Category Mini Bars */}
                    <div className="space-y-2">
                      {categories.map((cat) => {
                        const isWeakest = cat.label === assessment.weakest_category;
                        const categoryBand = getBandForPercentage(cat.percentage);
                        const categoryBarColor = isWeakest
                          ? 'bg-amber-400'
                          : BAND_BAR_COLORS[categoryBand];

                        return (
                          <div key={cat.key} className="flex items-center gap-3">
                            <span
                              className={`text-xs font-medium flex-1 ${
                                isWeakest ? 'text-amber-400' : 'text-zinc-400'
                              }`}
                            >
                              {cat.label}
                              {isWeakest && ' (weakest)'}
                            </span>
                            <div className="w-32 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${categoryBarColor} rounded-full transition-all duration-500`}
                                style={{ width: `${cat.percentage}%` }}
                              />
                            </div>
                            <span className="text-xs text-zinc-500 w-10 text-right">
                              {cat.percentage}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Section 2: Take an Assessment */}
        <div>
          <h2 className="text-white font-bold text-xl mb-6">Take an Assessment</h2>
          <div className="grid sm:grid-cols-2 gap-4 animate-fade-in">
            {pillarStatuses.map(({ pillarId, latestAssessment }) => {
              const pillar = PILLAR_MAP[pillarId as PillarId];
              const Icon = ICON_MAP[pillar.icon];
              const hasAssessment = !!latestAssessment;

              return (
                <Link
                  key={pillarId}
                  href={`/assess/${pillar.slug}`}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 card-hover group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    {hasAssessment ? (
                      <span className="text-xs font-semibold uppercase px-2 py-1 rounded border text-amber-400 bg-amber-400/10 border-amber-400/20">
                        {latestAssessment.overall_percentage}%
                      </span>
                    ) : (
                      <span className="text-xs font-semibold uppercase px-2 py-1 rounded border text-zinc-500 bg-zinc-800 border-zinc-700">
                        Not Started
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors">
                    {pillar.label}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4">{pillar.description}</p>
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
                    {hasAssessment ? 'Retake Assessment' : 'Start Assessment'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
