import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { SLUG_TO_PILLAR, PILLAR_MAP } from "@/types/quiz";
import type { PillarSlug } from "@/types/quiz";
import { getCheckIn } from "@/app/actions/checkin";
import { getDayProtocol } from "@/data/protocols";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { DayCheckInForm } from "./DayCheckInForm";

export default async function DayProtocolPage({
  params,
}: {
  params: Promise<{ pillarSlug: string; dayNumber: string }>;
}) {
  const { pillarSlug, dayNumber: dayNumberStr } = await params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const slug = pillarSlug as PillarSlug;
  const pillarId = SLUG_TO_PILLAR[slug];

  if (!pillarId) {
    redirect("/dashboard");
  }

  const dayNumber = parseInt(dayNumberStr, 10);

  if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 30) {
    redirect(`/protocol/${pillarSlug}`);
  }

  const pillar = PILLAR_MAP[pillarId];
  const dayProtocol = getDayProtocol(slug, dayNumber);

  if (!dayProtocol) {
    redirect(`/protocol/${pillarSlug}`);
  }

  const { data: existingCheckIn } = await getCheckIn(pillarId, dayNumber);

  const prevDay = dayNumber > 1 ? dayNumber - 1 : null;
  const nextDay = dayNumber < 30 ? dayNumber + 1 : null;

  // Parse existing responses to get saved state
  const savedResponses = existingCheckIn?.responses as Record<string, string | number | boolean> | null;

  return (
    <div className="min-h-screen bg-zinc-950 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href={`/protocol/${pillarSlug}`}
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {pillar.label}
        </Link>

        {/* Day header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Day {dayNumber} of 30
            </span>
            <span className="text-zinc-700">&middot;</span>
            <span className="text-xs text-zinc-500">{pillar.label}</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">{dayProtocol.title}</h1>
          <p className="text-zinc-400 text-sm leading-relaxed">{dayProtocol.intention}</p>
        </div>

        {/* Educational content */}
        {dayProtocol.educationalContent && (
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <h2 className="text-sm font-semibold text-white">Today&apos;s Insight</h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {dayProtocol.educationalContent}
            </p>
          </div>
        )}

        {/* Check-in form (client component) */}
        <DayCheckInForm
          pillarId={pillarId}
          dayNumber={dayNumber}
          tasks={dayProtocol.tasks}
          savedResponses={savedResponses}
          pillarSlug={pillarSlug}
        />

        {/* Day navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800">
          {prevDay ? (
            <Link
              href={`/protocol/${pillarSlug}/day/${prevDay}`}
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Day {prevDay}
            </Link>
          ) : (
            <div />
          )}
          {nextDay ? (
            <Link
              href={`/protocol/${pillarSlug}/day/${nextDay}`}
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
            >
              Day {nextDay}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href={`/protocol/${pillarSlug}`}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
            >
              View Protocol Overview
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
