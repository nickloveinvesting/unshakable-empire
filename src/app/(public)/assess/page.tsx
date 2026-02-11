import { redirect } from 'next/navigation';

// V1 Assessment route - redirects to V2 Adaptive Assessment
export default function AssessPage() {
  redirect('/assess-adaptive/start');
}
