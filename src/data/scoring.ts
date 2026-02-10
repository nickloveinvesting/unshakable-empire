export type Band = 'critical' | 'weak' | 'developing' | 'strong' | 'elite';

export interface BandInfo {
  band: Band;
  label: string;
  min: number;
  max: number;
  color: string;
}

export const BANDS: BandInfo[] = [
  { band: 'critical', label: 'Critical', min: 0, max: 20, color: 'red' },
  { band: 'weak', label: 'Weak', min: 21, max: 40, color: 'orange' },
  { band: 'developing', label: 'Developing', min: 41, max: 60, color: 'amber' },
  { band: 'strong', label: 'Strong', min: 61, max: 80, color: 'blue' },
  { band: 'elite', label: 'Elite', min: 81, max: 100, color: 'emerald' },
];

export function getBandForPercentage(percentage: number): Band {
  if (percentage <= 20) return 'critical';
  if (percentage <= 40) return 'weak';
  if (percentage <= 60) return 'developing';
  if (percentage <= 80) return 'strong';
  return 'elite';
}

export function getInterpretationCopy(band: Band, pillarLabel: string): string {
  switch (band) {
    case 'critical':
      return `Your ${pillarLabel} is severely broken. Without immediate intervention, your business cannot scale. This is the #1 thing holding you back — and the good news is, it's fixable. We start here.`;
    case 'weak':
      return `You have major gaps in ${pillarLabel}. You know something's wrong but haven't been able to fix it. The daily protocols will give you the exact actions to close these gaps in 30-90 days.`;
    case 'developing':
      return `You've built some foundation in ${pillarLabel}, but you're not executing consistently. This is where most business owners get stuck — they know what to do but don't do it daily. The protocol system changes that.`;
    case 'strong':
      return `Your ${pillarLabel} has solid systems. We're going to optimize what's working and fill the remaining gaps. You're closer than you think to running on autopilot.`;
    case 'elite':
      return `You're operating at a high level in ${pillarLabel}. Maintain your systems and focus your energy on the pillars that scored lower. This one is working.`;
  }
}
