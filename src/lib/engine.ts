import type { PillarId } from '@/types/quiz';
import { PILLAR_MAP, CATEGORY_QUESTIONS_COUNT } from '@/types/quiz';
import { getBandForPercentage, type Band } from '@/data/scoring';

export interface CategoryScore {
  category: string;
  score: number;
  max: number;
  percentage: number;
  band: Band;
}

export interface PillarAssessmentResult {
  pillarId: PillarId;
  pillarLabel: string;
  pillarSlug: string;
  overallScore: number;
  overallPercentage: number;
  overallBand: Band;
  categoryScores: CategoryScore[];
  weakestCategory: string;
  radarData: { category: string; score: number; fullMark: number }[];
}

interface Question {
  id: string;
  category: string;
  text: string;
  subtext: string;
}

export function generatePillarAssessment(
  pillarId: PillarId,
  questions: Question[],
  answers: Record<string, number>
): PillarAssessmentResult {
  const pillar = PILLAR_MAP[pillarId];
  const categories = pillar.categories;
  const maxPerQuestion = 5;

  const categoryScores: CategoryScore[] = categories.map((category) => {
    const catQuestions = questions.filter((q) => q.category === category);
    const score = catQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    const max = catQuestions.length * maxPerQuestion;
    const percentage = max > 0 ? Math.round((score / max) * 100) : 0;
    return { category, score, max, percentage, band: getBandForPercentage(percentage) };
  });

  const overallScore = categoryScores.reduce((sum, cs) => sum + cs.score, 0);
  const overallMax = categoryScores.reduce((sum, cs) => sum + cs.max, 0);
  const overallPercentage = overallMax > 0 ? Math.round((overallScore / overallMax) * 100) : 0;
  const overallBand = getBandForPercentage(overallPercentage);

  const weakestCategory = categoryScores.reduce((weakest, cs) => cs.percentage < weakest.percentage ? cs : weakest).category;

  const radarData = categoryScores.map((cs) => ({
    category: cs.category,
    score: cs.percentage,
    fullMark: 100,
  }));

  return {
    pillarId,
    pillarLabel: pillar.label,
    pillarSlug: pillar.slug,
    overallScore,
    overallPercentage,
    overallBand,
    categoryScores,
    weakestCategory,
    radarData,
  };
}
