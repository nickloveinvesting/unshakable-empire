export type Band = 'critical' | 'developing' | 'established' | 'optimized';

export interface BandInfo {
  band: Band;
  label: string;
  min: number;
  max: number;
  color: string;
}

export const BANDS: BandInfo[] = [
  { band: 'critical', label: 'Critical', min: 0, max: 39, color: 'red' },
  { band: 'developing', label: 'Developing', min: 40, max: 59, color: 'amber' },
  { band: 'established', label: 'Established', min: 60, max: 79, color: 'blue' },
  { band: 'optimized', label: 'Optimized', min: 80, max: 100, color: 'emerald' },
];

export function getBandForPercentage(percentage: number): Band {
  if (percentage < 40) return 'critical';
  if (percentage < 60) return 'developing';
  if (percentage < 80) return 'established';
  return 'optimized';
}

export function getInterpretationCopy(band: Band, pillarLabel: string): string {
  switch (band) {
    case 'critical':
      return `Your ${pillarLabel} pillar needs immediate attention. Focus your 30-day protocol here for maximum impact.`;
    case 'developing':
      return `Your ${pillarLabel} pillar is developing. The 30-day protocol will help you build stronger foundations.`;
    case 'established':
      return `Your ${pillarLabel} pillar has solid foundations. The protocol will help you optimize and scale.`;
    case 'optimized':
      return `Your ${pillarLabel} pillar is performing excellently. The protocol will help you maintain and refine.`;
  }
}
