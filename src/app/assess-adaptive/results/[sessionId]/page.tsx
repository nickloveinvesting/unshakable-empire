import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComprehensiveResultsDisplay } from '@/components/adaptive/ComprehensiveResultsDisplay';
import { getAdaptiveSession } from '@/app/actions/adaptive-assessment';
import { calculateResults } from '@/lib/adaptive-assessment-service';
import { buildAssessmentContext } from '@/lib/adaptive-engine';
import { getQuestionById } from '@/data/questions/adaptive';

export const metadata: Metadata = {
  title: 'Your Results | Empire O.S. Assessment',
  description: 'View your comprehensive Empire O.S. assessment results.',
};

interface ResultsPageProps {
  params: Promise<{
    sessionId: string;
  }>;
}

export default async function AdaptiveResultsPage({ params }: ResultsPageProps) {
  const { sessionId } = await params;

  // Fetch session from database
  const response = await getAdaptiveSession(sessionId);

  if (response.error || !response.data) {
    notFound();
  }

  const session = response.data.session;

  if (!session.completed_at) {
    // Session not complete yet
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-2xl font-bold">Assessment Not Complete</h1>
          <p className="text-muted-foreground">
            This assessment session has not been completed yet.
          </p>
        </div>
      </div>
    );
  }

  // Rebuild assessment context
  const context = buildAssessmentContext(
    session.business_context,
    session.answers,
    session.questions_asked,
    session.paths_taken
  );

  // Calculate results
  const state = {
    sessionId: session.id,
    currentQuestion: null,
    answers: session.answers,
    questionsAsked: session.questions_asked,
    pathsTaken: session.paths_taken,
    businessContext: session.business_context,
    businessStage: session.business_stage,
    context,
    isComplete: true,
    startedAt: new Date(session.started_at),
  };

  const resultsData = calculateResults(state, session.time_spent_seconds);

  if (!resultsData) {
    notFound();
  }

  const { formattedResults, shareableText } = resultsData;

  return (
    <div className="container mx-auto px-4 py-12">
      <ComprehensiveResultsDisplay
        results={formattedResults}
        shareableText={shareableText}
      />
    </div>
  );
}
