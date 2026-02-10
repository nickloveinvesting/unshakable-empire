'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import type {
  RevenueRange,
  TeamSizeRange,
  HoursWorkedRange,
  BusinessAgeRange,
  PrimaryRole,
  BusinessContext,
} from '@/types/adaptive-quiz';
import { createAdaptiveSession } from '@/app/actions/adaptive-assessment';
import { classifyBusinessStage } from '@/lib/business-stage-classifier';
import { useAdaptiveQuizStore } from '@/stores/adaptive-quiz-store';

export function BusinessContextForm() {
  const router = useRouter();
  const { initializeSession } = useAdaptiveQuizStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<BusinessContext>>({
    revenue: undefined,
    teamSize: undefined,
    hoursWorked: undefined,
    businessAge: undefined,
    primaryRole: undefined,
  });

  const isFormComplete = () => {
    return (
      formData.revenue &&
      formData.teamSize &&
      formData.hoursWorked &&
      formData.businessAge &&
      formData.primaryRole
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormComplete()) {
      setError('Please answer all questions');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const businessContext = formData as BusinessContext;

      // Classify business stage
      const stageResult = classifyBusinessStage(businessContext);

      // Create session in database
      const response = await createAdaptiveSession(
        businessContext,
        stageResult.stage
      );

      if (response.error || !response.data) {
        throw new Error(response.error || 'Failed to create session');
      }

      const session = response.data.session;

      // Initialize store
      initializeSession(
        session.id,
        businessContext,
        stageResult.stage
      );

      // Navigate to quiz
      router.push('/assess-adaptive/quiz');
    } catch (err) {
      console.error('Failed to start assessment:', err);
      setError(err instanceof Error ? err.message : 'Failed to start assessment');
      setIsLoading(false);
    }
  };

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>Let's Understand Your Business</CardTitle>
        <CardDescription>
          Answer these 5 questions to personalize your assessment. This takes less than 60
          seconds.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question 1: Revenue */}
          <div className="space-y-2">
            <Label htmlFor="revenue" className="text-base font-medium">
              1. What is your approximate annual revenue?
            </Label>
            <Select
              value={formData.revenue}
              onValueChange={(value) =>
                setFormData({ ...formData, revenue: value as RevenueRange })
              }
            >
              <SelectTrigger id="revenue">
                <SelectValue placeholder="Select revenue range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="$0-$250K">$0 - $250K per year</SelectItem>
                <SelectItem value="$250K-$500K">$250K - $500K per year</SelectItem>
                <SelectItem value="$500K-$1M">$500K - $1M per year</SelectItem>
                <SelectItem value="$1M-$2M">$1M - $2M per year</SelectItem>
                <SelectItem value="$2M-$5M">$2M - $5M per year</SelectItem>
                <SelectItem value="$5M+">$5M+ per year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Question 2: Team Size */}
          <div className="space-y-2">
            <Label htmlFor="teamSize" className="text-base font-medium">
              2. How many people work in your business?
            </Label>
            <Select
              value={formData.teamSize}
              onValueChange={(value) =>
                setFormData({ ...formData, teamSize: value as TeamSizeRange })
              }
            >
              <SelectTrigger id="teamSize">
                <SelectValue placeholder="Select team size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Solo">Just me (solo operator)</SelectItem>
                <SelectItem value="1-5 people">1-5 people</SelectItem>
                <SelectItem value="6-15 people">6-15 people</SelectItem>
                <SelectItem value="16-30 people">16-30 people</SelectItem>
                <SelectItem value="31-50 people">31-50 people</SelectItem>
                <SelectItem value="50+ people">50+ people</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Question 3: Hours Worked */}
          <div className="space-y-2">
            <Label htmlFor="hoursWorked" className="text-base font-medium">
              3. How many hours per week do you typically work?
            </Label>
            <Select
              value={formData.hoursWorked}
              onValueChange={(value) =>
                setFormData({ ...formData, hoursWorked: value as HoursWorkedRange })
              }
            >
              <SelectTrigger id="hoursWorked">
                <SelectValue placeholder="Select hours worked" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Less than 40">Less than 40 hours</SelectItem>
                <SelectItem value="40-50">40-50 hours</SelectItem>
                <SelectItem value="50-60">50-60 hours</SelectItem>
                <SelectItem value="60-70">60-70 hours</SelectItem>
                <SelectItem value="70+">70+ hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Question 4: Business Age */}
          <div className="space-y-2">
            <Label htmlFor="businessAge" className="text-base font-medium">
              4. How long have you been in business?
            </Label>
            <Select
              value={formData.businessAge}
              onValueChange={(value) =>
                setFormData({ ...formData, businessAge: value as BusinessAgeRange })
              }
            >
              <SelectTrigger id="businessAge">
                <SelectValue placeholder="Select business age" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Less than 1 year">Less than 1 year</SelectItem>
                <SelectItem value="1-3 years">1-3 years</SelectItem>
                <SelectItem value="3-5 years">3-5 years</SelectItem>
                <SelectItem value="5-10 years">5-10 years</SelectItem>
                <SelectItem value="10+ years">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Question 5: Primary Role */}
          <div className="space-y-2">
            <Label htmlFor="primaryRole" className="text-base font-medium">
              5. What do you spend most of your time doing?
            </Label>
            <Select
              value={formData.primaryRole}
              onValueChange={(value) =>
                setFormData({ ...formData, primaryRole: value as PrimaryRole })
              }
            >
              <SelectTrigger id="primaryRole">
                <SelectValue placeholder="Select primary role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="I do everything (sales, delivery, operations)">
                  I do everything (sales, delivery, operations)
                </SelectItem>
                <SelectItem value="I focus on sales, team handles delivery">
                  I focus on sales, team handles delivery
                </SelectItem>
                <SelectItem value="I focus on strategy, team handles operations">
                  I focus on strategy, team handles operations
                </SelectItem>
                <SelectItem value="I'm rarely in day-to-day operations">
                  I'm rarely in day-to-day operations
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={!isFormComplete() || isLoading}
          >
            {isLoading ? 'Starting Assessment...' : 'Start My Assessment →'}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Takes 12-18 minutes · Personalized to your business stage
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
