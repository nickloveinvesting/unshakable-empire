import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { SLUG_TO_PILLAR, PILLAR_MAP } from "@/types/quiz";
import type { PillarSlug } from "@/types/quiz";
import { getCheckInHistory } from "@/app/actions/checkin";
import { getProtocolBySlug } from "@/data/protocols";
import { Shield, TrendingUp, DollarSign, Landmark, CheckCircle2, Circle, Lock, ArrowLeft } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  DollarSign: <DollarSign className="w-6 h-6" />,
  Landmark: <Landmark className="w-6 h-6" />,
};

export default async function ProtocolOverviewPage({
  params,
}: {
  params: Promise<{ pillarSlug: string }>;
}) {
  const { pillarSlug } = await params;

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

  const pillar = PILLAR_MAP[pillarId];
  const protocol = getProtocolBySlug(slug);
  const { data: checkIns } = await getCheckInHistory(pillarId);

  const completedDays = new Set<number>();
  const dayCompletionMap: Record<number, number> = {};

  if (checkIns) {
    for (const checkIn of checkIns) {
      dayCompletionMap[checkIn.day_number] = checkIn.completion_percentage;
      if (checkIn.completion_percentage >= 50) {
        completedDays.add(checkIn.day_number);
      }
    }
  }

  const completedCount = completedDays.size;
  const progressPercentage = Math.round((completedCount / 30) * 100);

  // Determine the current day (next uncompleted day)
  let currentDay = 1;
  for (let i = 1; i <= 30; i++) {
    if (!completedDays.has(i)) {
      currentDay = i;
      break;
    }
    if (i === 30) {
      currentDay = 30;
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center shrink-0">
            <span className="text-amber-400">{ICON_MAP[pillar.icon]}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-white mb-1">{pillar.label}</h1>
            <p className="text-zinc-400 text-sm leading-relaxed">{pillar.description}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-zinc-300 text-sm font-medium">Protocol Progress</span>
            <span className="text-amber-400 text-sm font-bold">{progressPercentage}%</span>
          </div>
          <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-zinc-500 text-xs mt-2">
            {completedCount} of 30 days completed
            {completedCount < 30 && ` \u00B7 Currently on Day ${currentDay}`}
            {completedCount >= 30 && " \u00B7 Protocol complete!"}
          </p>
        </div>

        {/* Day list */}
        <div className="space-y-2">
          {protocol.map((day) => {
            const isCompleted = completedDays.has(day.day);
            const isStarted = dayCompletionMap[day.day] !== undefined;
            const isCurrent = day.day === currentDay;
            const isLocked = day.day > currentDay && !isCompleted && !isStarted;

            return (
              <Link
                key={day.day}
                href={isLocked ? "#" : `/protocol/${pillarSlug}/day/${day.day}`}
                className={`block rounded-xl border p-4 transition-all ${
                  isCompleted
                    ? "bg-amber-400/5 border-amber-400/20 hover:border-amber-400/40"
                    : isCurrent
                    ? "bg-zinc-900/80 border-amber-400/30 hover:border-amber-400/50 ring-1 ring-amber-400/10"
                    : isStarted
                    ? "bg-zinc-900/60 border-zinc-700 hover:border-zinc-600"
                    : isLocked
                    ? "bg-zinc-900/30 border-zinc-800/50 cursor-not-allowed opacity-50"
                    : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-amber-400" />
                    ) : isLocked ? (
                      <Lock className="w-5 h-5 text-zinc-600" />
                    ) : (
                      <Circle
                        className={`w-6 h-6 ${
                          isCurrent ? "text-amber-400/60" : "text-zinc-600"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          isCompleted
                            ? "text-amber-400/70"
                            : isCurrent
                            ? "text-amber-400"
                            : "text-zinc-500"
                        }`}
                      >
                        Day {day.day}
                      </span>
                      {isCurrent && !isCompleted && (
                        <span className="text-[10px] bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded-full font-medium">
                          Current
                        </span>
                      )}
                      {isStarted && !isCompleted && (
                        <span className="text-[10px] bg-zinc-700/50 text-zinc-400 px-2 py-0.5 rounded-full font-medium">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-sm font-medium mt-0.5 ${
                        isCompleted
                          ? "text-zinc-300"
                          : isLocked
                          ? "text-zinc-600"
                          : "text-white"
                      }`}
                    >
                      {day.title}
                    </h3>
                  </div>
                  {isStarted && !isCompleted && (
                    <div className="shrink-0">
                      <span className="text-xs text-zinc-500">
                        {dayCompletionMap[day.day]}%
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
