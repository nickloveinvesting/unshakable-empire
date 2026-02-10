import { Metadata } from 'next';
import { AdaptiveQuizCard } from '@/components/adaptive/AdaptiveQuizCard';

export const metadata: Metadata = {
  title: 'Assessment Quiz | Empire O.S.',
  description: 'Complete your personalized Empire O.S. assessment.',
};

export default function AdaptiveQuizPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AdaptiveQuizCard />
    </div>
  );
}
