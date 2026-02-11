import { redirect } from 'next/navigation';

// V1 Pillar-specific assessment route - redirects to V2 Adaptive Assessment
export default function PillarAssessmentPage() {
  redirect('/assess-adaptive/start');
}
