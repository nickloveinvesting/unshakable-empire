import { redirect } from 'next/navigation';

// V1 Results page - redirects to V2 Adaptive Assessment
export default function ResultsPage() {
  redirect('/assess-adaptive/start');
}
