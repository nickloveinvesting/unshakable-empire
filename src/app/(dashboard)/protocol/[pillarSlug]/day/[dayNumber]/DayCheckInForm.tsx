"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { saveCheckIn } from "@/app/actions/checkin";
import type { ProtocolTask } from "@/types/protocol";
import { CheckSquare, Square, Loader2, Save, CheckCircle2 } from "lucide-react";

interface DayCheckInFormProps {
  pillarId: number;
  dayNumber: number;
  tasks: ProtocolTask[];
  savedResponses: Record<string, string | number | boolean> | null;
  pillarSlug: string;
}

export function DayCheckInForm({
  pillarId,
  dayNumber,
  tasks,
  savedResponses,
  pillarSlug,
}: DayCheckInFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize state from saved responses
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const task of tasks) {
      initial[task.id] = savedResponses?.[task.id] === true || false;
    }
    return initial;
  });

  const [confidenceScore, setConfidenceScore] = useState<number>(() => {
    if (savedResponses?.confidence_score && typeof savedResponses.confidence_score === "number") {
      return savedResponses.confidence_score;
    }
    return 5;
  });

  const [notes, setNotes] = useState<string>(() => {
    if (savedResponses?.notes && typeof savedResponses.notes === "string") {
      return savedResponses.notes;
    }
    return "";
  });

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
    setSaved(false);
  };

  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const totalTasks = tasks.length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  const handleSubmit = async () => {
    const responses: Record<string, string | number | boolean> = {};

    // Save task completion states
    for (const task of tasks) {
      responses[task.id] = completedTasks[task.id] || false;
    }

    // Save confidence score and notes
    responses.confidence_score = confidenceScore;
    responses.notes = notes;

    setError(null);
    startTransition(async () => {
      const result = await saveCheckIn({
        pillarId,
        dayNumber,
        responses,
        completionPercentage,
      });

      if (result.success) {
        setSaved(true);
        router.refresh();
      } else if (result.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Tasks */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
        <h2 className="text-sm font-semibold text-white mb-4">
          Today&apos;s Tasks ({completedCount}/{totalTasks})
        </h2>
        <div className="space-y-3">
          {tasks.map((task) => {
            const isChecked = completedTasks[task.id] || false;
            return (
              <button
                key={task.id}
                type="button"
                onClick={() => toggleTask(task.id)}
                className={`w-full text-left flex items-start gap-3 p-3 rounded-lg border transition-all ${
                  isChecked
                    ? "bg-amber-400/5 border-amber-400/20"
                    : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Square className="w-5 h-5 text-zinc-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium ${
                      isChecked ? "text-zinc-300 line-through" : "text-white"
                    }`}
                  >
                    {task.label}
                  </p>
                  {task.description && (
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      {task.description}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Confidence Score */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
        <h2 className="text-sm font-semibold text-white mb-1">Confidence Score</h2>
        <p className="text-xs text-zinc-500 mb-4">
          How confident do you feel about this area of your financial life? (1 = not confident, 10 = very confident)
        </p>
        <div className="space-y-3">
          <input
            type="range"
            min={1}
            max={10}
            value={confidenceScore}
            onChange={(e) => {
              setConfidenceScore(parseInt(e.target.value, 10));
              setSaved(false);
            }}
            className="w-full h-2 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-amber-400
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-5
              [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-amber-400
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-webkit-slider-thumb]:shadow-lg
              [&::-webkit-slider-thumb]:shadow-amber-400/20
              [&::-moz-range-thumb]:w-5
              [&::-moz-range-thumb]:h-5
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-amber-400
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:cursor-pointer"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-600">1</span>
            <span className="text-lg font-bold text-amber-400">{confidenceScore}</span>
            <span className="text-xs text-zinc-600">10</span>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
        <h2 className="text-sm font-semibold text-white mb-1">Notes</h2>
        <p className="text-xs text-zinc-500 mb-3">
          Capture any reflections, action items, or insights from today.
        </p>
        <textarea
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
            setSaved(false);
          }}
          rows={4}
          placeholder="What did you learn today? What actions will you take?"
          className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400/30 transition-all"
        />
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isPending}
          className={`flex-1 flex items-center justify-center gap-2 font-bold px-6 py-3 min-h-[48px] rounded-xl transition-all shadow-lg ${
            saved
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-emerald-500/10"
              : "bg-amber-400 text-black hover:bg-amber-300 shadow-amber-400/20"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Saving...
            </>
          ) : saved ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Saved
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              Save Check-In
            </>
          )}
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Completion indicator */}
      {completionPercentage > 0 && (
        <div className="text-center">
          <p className="text-xs text-zinc-500">
            {completionPercentage === 100
              ? "All tasks completed! Great work."
              : `${completionPercentage}% of tasks completed`}
          </p>
        </div>
      )}
    </div>
  );
}
