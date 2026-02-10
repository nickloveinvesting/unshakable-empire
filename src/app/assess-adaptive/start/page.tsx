import { Metadata } from 'next';
import { BusinessContextForm } from '@/components/adaptive/BusinessContextForm';

export const metadata: Metadata = {
  title: 'Start Assessment | Empire O.S.',
  description:
    'Take the personalized Empire O.S. assessment to identify your business gaps and get actionable recommendations.',
};

export default function AdaptiveAssessmentStartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Empire O.S. Assessment V2
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A personalized, intelligent assessment that adapts to your business stage and
            asks only the questions that matter to you.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="mb-2 text-3xl">⚡</div>
            <h3 className="mb-1 font-semibold">50-70% Faster</h3>
            <p className="text-sm text-muted-foreground">
              Only 12-18 minutes vs 35-45 minutes
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="mb-2 text-3xl">🎯</div>
            <h3 className="mb-1 font-semibold">100% Relevant</h3>
            <p className="text-sm text-muted-foreground">
              Questions adapt to your business stage
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="mb-2 text-3xl">📊</div>
            <h3 className="mb-1 font-semibold">More Accurate</h3>
            <p className="text-sm text-muted-foreground">
              Deep-dive questions on your weak areas
            </p>
          </div>
        </div>

        {/* Form */}
        <BusinessContextForm />

        {/* Info */}
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>
            Your responses are saved automatically. You can pause and resume at any time.
          </p>
          <p>
            Questions: 37-57 depending on your answers · Time: 12-18 minutes
          </p>
        </div>
      </div>
    </div>
  );
}
