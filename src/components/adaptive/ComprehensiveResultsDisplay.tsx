'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import type { FormattedResults } from '@/lib/adaptive-results-generator';
import { Download, Share2, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ComprehensiveResultsDisplayProps {
  results: FormattedResults;
  shareableText: string;
}

export function ComprehensiveResultsDisplay({
  results,
  shareableText,
}: ComprehensiveResultsDisplayProps) {
  const { summary, pillarDetails, recommendations, nextSteps, comparisonToStage } =
    results;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Empire O.S. Assessment Results',
          text: shareableText,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareableText);
      alert('Results copied to clipboard!');
    }
  };

  const getBandColor = (band: string) => {
    switch (band) {
      case 'Critical':
        return 'bg-red-500';
      case 'Needs Work':
        return 'bg-orange-500';
      case 'Building':
        return 'bg-blue-500';
      case 'Strong':
        return 'bg-green-500';
      case 'Elite':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Critical':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'Needs Work':
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case 'Good':
      case 'Building':
        return <TrendingUp className="h-5 w-5 text-blue-500" />;
      case 'Strong':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'Excellent':
      case 'Elite':
        return <CheckCircle2 className="h-5 w-5 text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-12">
      {/* Overall Score */}
      <Card className="border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Your Empire O.S. Assessment Results</CardTitle>
          <CardDescription>
            Based on {summary.totalQuestionsAsked} questions personalized to your business
            stage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Score Circle */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative h-48 w-48">
              <svg className="h-full w-full -rotate-90 transform">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={`${2 * Math.PI * 88 * (1 - summary.overallPercentage / 100)}`}
                  className={getBandColor(summary.band)}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold">{summary.overallScore}</span>
                <span className="text-sm text-muted-foreground">out of 5.0</span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <Badge className={`${getBandColor(summary.band)} text-white text-lg px-4 py-1`}>
                {summary.band}
              </Badge>
              <p className="text-sm text-muted-foreground max-w-md">
                {summary.bandDescription}
              </p>
              <Badge variant="outline" className="text-sm">
                {summary.businessStageLabel}
              </Badge>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-4">
            <Button onClick={handleShare} variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share Results
            </Button>
            <Button asChild variant="outline">
              <Link href={`/protocols/${recommendations.priorityOrder[0]}`}>
                View Action Plan
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pillar Breakdown */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Your 4 Pillar Scores</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {pillarDetails.map((pillar) => (
            <Card
              key={pillar.pillarId}
              className={pillar.isWeakest ? 'border-2 border-orange-500' : ''}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{pillar.icon}</span>
                    <CardTitle className="text-lg">{pillar.pillarName}</CardTitle>
                  </div>
                  {pillar.isWeakest && (
                    <Badge variant="destructive">Priority Focus</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{pillar.rawScore}</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(pillar.status)}
                      <span className="text-sm text-muted-foreground">
                        {pillar.status}
                      </span>
                    </div>
                  </div>
                  <Progress value={pillar.percentage} className="h-2" />
                  <span className="text-xs text-muted-foreground">
                    {pillar.percentage}% of maximum
                  </span>
                </div>

                {pillar.categories.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-medium text-muted-foreground">
                      Category Breakdown:
                    </p>
                    {pillar.categories
                      .sort((a, b) => a.rawScore - b.rawScore)
                      .slice(0, 3)
                      .map((cat) => (
                        <div key={cat.categoryName} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{cat.categoryName}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{cat.rawScore}</span>
                            {getStatusIcon(cat.status)}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Your Recommended Focus Area</CardTitle>
          <CardDescription>Based on your weakest pillar and business stage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-bold">{recommendations.primaryFocus}</h3>
            <p className="text-muted-foreground">{recommendations.weakestPillarFocus}</p>
          </div>

          <Separator />

          <div>
            <h4 className="mb-3 font-semibold">First 3 Actions to Take:</h4>
            <ol className="space-y-3">
              {recommendations.detailedRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm">{rec}</span>
                </li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>🚀 Your Action Plan</CardTitle>
          <CardDescription>Prioritized based on your results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {nextSteps.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-lg border p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{step.action}</h4>
                    <Badge
                      variant={
                        step.priority === 'High'
                          ? 'destructive'
                          : step.priority === 'Medium'
                            ? 'default'
                            : 'secondary'
                      }
                    >
                      {step.priority} Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stage Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Your Business Stage: {summary.businessStageLabel}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="mb-3 font-semibold">Typical Challenges at Your Stage:</h4>
            <ul className="space-y-2">
              {comparisonToStage.typicalChallenges.map((challenge, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-orange-500">▸</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <h4 className="mb-3 font-semibold">Goals to Reach Next Stage:</h4>
            <ul className="space-y-2">
              {comparisonToStage.nextStageGoals.map((goal, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-2 border-primary">
        <CardContent className="py-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">Ready to Build Your Empire?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get personalized protocols and step-by-step guidance to address your weakest
            areas and scale systematically.
          </p>
          <Button asChild size="lg">
            <Link href="/protocols">View Your Protocols</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
