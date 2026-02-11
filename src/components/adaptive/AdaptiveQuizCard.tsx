'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAdaptiveQuizStore } from '@/stores/adaptive-quiz-store';
import { submitAnswer, getAssessmentProgress } from '@/lib/adaptive-assessment-service';
import {
  updateAdaptiveSession,
  completeAdaptiveSession,
  createAdaptiveResult,
} from '@/app/actions/adaptive-assessment';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function AdaptiveQuizCard() {
  const router = useRouter();
  const { state, updateAnswer, completeAssessment, setState, startedAt, sessionId, businessStage } = useAdaptiveQuizStore();
  const [currentValue, setCurrentValue] = useState<number | string | string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = state.currentQuestion;
  const progress = currentQuestion ? getAssessmentProgress(state) : null;

  // Reset current value when question changes
  useEffect(() => {
    setCurrentValue(null);
    setError(null);
  }, [currentQuestion?.id]);

  if (!currentQuestion || !state.businessContext) {
    return (
      <Card className="mx-auto max-w-2xl">
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">Loading assessment...</p>
        </CardContent>
      </Card>
    );
  }

  const handleSubmit = async () => {
    if (currentValue === null || currentValue === '') {
      setError('Please select an answer');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Submit answer through service
      const result = submitAnswer(state, currentQuestion.id, currentValue);

      if (!result.success) {
        throw new Error(result.error || 'Failed to submit answer');
      }

      // Update answer in store
      updateAnswer(currentQuestion.id, currentValue);

      // Save progress to database
      const timeSpent = startedAt ? Math.floor((Date.now() - startedAt.getTime()) / 1000) : 0;
      await updateAdaptiveSession(
        sessionId!,
        state.answers,
        state.questionsAsked,
        state.pathsTaken,
        timeSpent
      );

      // Check if complete
      if (result.isComplete && result.results && result.formattedResults) {
        // Mark session as complete
        await completeAdaptiveSession(sessionId!);

        // Create result record
        await createAdaptiveResult({
          sessionId: sessionId!,
          businessStage: result.results.businessStage,
          questionCount: result.results.questionCount,
          timeSpentSeconds: result.results.timeSpent,
          pillarScores: result.results.pillarScores,
          overallScore: result.results.overallScore,
          overallBand: result.results.overallBand,
          weakestPillarId: result.results.weakestPillar.pillarId,
          strongestPillarId: result.results.strongestPillar.pillarId,
          recommendedPillarId: result.results.recommendation.focusPillar,
          recommendedCategory: result.results.recommendation.focusCategory,
          recommendedProtocolSlug: result.results.recommendation.protocolSlug as any,
          recommendation: result.results.recommendation,
        });

        // Update store
        completeAssessment(result.results, result.formattedResults);

        // Navigate to results
        router.push(`/assess-adaptive/results/${sessionId}`);
      } else {
        // Update state with next question
        setState({
          currentQuestion: result.nextQuestion,
          isComplete: result.isComplete,
        });
      }
    } catch (err) {
      console.error('Failed to submit answer:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit answer');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderResponseInput = () => {
    switch (currentQuestion.responseType) {
      case 'scale':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Strongly Disagree</span>
              <span>Strongly Agree</span>
            </div>
            <RadioGroup
              value={currentValue?.toString()}
              onValueChange={(value) => setCurrentValue(parseInt(value))}
              className="flex justify-between"
            >
              {Array.from(
                { length: (currentQuestion.scaleMax || 5) - (currentQuestion.scaleMin || 1) + 1 },
                (_, i) => i + (currentQuestion.scaleMin || 1)
              ).map((num) => (
                <div key={num} className="flex flex-col items-center gap-2">
                  <Label
                    htmlFor={`scale-${num}`}
                    className="cursor-pointer text-lg font-semibold"
                  >
                    {num}
                  </Label>
                  <RadioGroupItem
                    value={num.toString()}
                    id={`scale-${num}`}
                    className="h-6 w-6"
                  />
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 'select':
        return (
          <Select
            value={currentValue as string}
            onValueChange={(value) => setCurrentValue(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {currentQuestion.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'multiselect':
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option) => (
              <div key={option.value} className="flex items-start space-x-3">
                <Checkbox
                  id={option.value}
                  checked={(currentValue as string[] || []).includes(option.value)}
                  onCheckedChange={(checked) => {
                    const current = (currentValue as string[]) || [];
                    if (checked) {
                      setCurrentValue([...current, option.value]);
                    } else {
                      setCurrentValue(current.filter((v) => v !== option.value));
                    }
                  }}
                />
                <Label
                  htmlFor={option.value}
                  className="cursor-pointer text-sm font-normal leading-tight"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        );

      case 'number':
        return (
          <Input
            type="number"
            value={currentValue?.toString() || ''}
            onChange={(e) => setCurrentValue(parseFloat(e.target.value))}
            placeholder="Enter a number"
          />
        );

      case 'text':
        return (
          <Textarea
            value={currentValue?.toString() || ''}
            onChange={(e) => setCurrentValue(e.target.value)}
            placeholder="Type your answer here..."
            rows={4}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Progress Bar */}
      {progress && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Question {progress.questionsAnswered} of ~{progress.estimatedTotal}
            </span>
            <span className="font-medium">{progress.percentComplete}% Complete</span>
          </div>
          <Progress value={progress.percentComplete} className="h-2" />
        </div>
      )}

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="outline">
              {currentQuestion.pillarId === 1 && '👑 CEO Command'}
              {currentQuestion.pillarId === 2 && '👥 Team Architecture'}
              {currentQuestion.pillarId === 3 && '💰 Revenue Pipeline'}
              {currentQuestion.pillarId === 4 && '📈 Conversion Intelligence'}
            </Badge>
            {state.pathsTaken.length > 0 && (
              <Badge variant="secondary" className="text-xs">
                {state.pathsTaken[state.pathsTaken.length - 1]}
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl leading-tight">{currentQuestion.text}</CardTitle>
          <CardDescription>{currentQuestion.subtext}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {renderResponseInput()}

          {error && (
            <div className="rounded-md bg-red-50 p-3 text-sm text-red-800">{error}</div>
          )}

          <div className="flex items-center justify-between gap-4 pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              disabled={isSubmitting}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={currentValue === null || isSubmitting}
              size="lg"
              className="px-8"
            >
              {isSubmitting ? 'Saving...' : 'Next'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Business Stage Info */}
      {businessStage && (
        <Card className="border-dashed">
          <CardContent className="py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Your Business Stage:</span>
              <Badge variant="secondary">
                {businessStage
                  .split('-')
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' ')}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
