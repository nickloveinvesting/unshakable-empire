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

  // Initialize task responses based on task types
  const [taskResponses, setTaskResponses] = useState<Record<string, string | number | boolean>>(() => {
    const initial: Record<string, string | number | boolean> = {};
    for (const task of tasks) {
      const savedValue = savedResponses?.[task.id];
      const inputType = task.input_type || 'checkbox';

      if (inputType === 'checkbox') {
        initial[task.id] = savedValue === true || false;
      } else if (inputType === 'number' || inputType === 'scale') {
        initial[task.id] = typeof savedValue === 'number' ? savedValue : inputType === 'scale' ? 5 : 0;
      } else if (inputType === 'text') {
        initial[task.id] = typeof savedValue === 'string' ? savedValue : '';
      }
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

  const updateTaskResponse = (taskId: string, value: string | number | boolean) => {
    setTaskResponses((prev) => ({
      ...prev,
      [taskId]: value,
    }));
    setSaved(false);
  };

  // Calculate completion - count tasks where:
  // - checkbox tasks are true
  // - number/scale tasks have non-zero values
  // - text tasks have non-empty strings
  const completedCount = tasks.filter((task) => {
    const response = taskResponses[task.id];
    const inputType = task.input_type || 'checkbox';
    if (inputType === 'checkbox') return response === true;
    if (inputType === 'number' || inputType === 'scale') return typeof response === 'number' && response > 0;
    if (inputType === 'text') return typeof response === 'string' && response.trim().length > 0;
    return false;
  }).length;

  const totalTasks = tasks.length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  const handleSubmit = async () => {
    const responses: Record<string, string | number | boolean> = { ...taskResponses };

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

  // Badge component for task types
  const TaskTypeBadge = ({ type }: { type: 'action' | 'measure' | 'reflect' }) => {
    const badgeStyles = {
      action: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
      measure: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
      reflect: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
    };

    return (
      <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${badgeStyles[type]}`}>
        {type}
      </span>
    );
  };

  // Render individual task based on type
  const renderTask = (task: ProtocolTask) => {
    const response = taskResponses[task.id];

    // Default to 'action' and 'checkbox' if not specified
    const taskType = task.type || 'action';
    const inputType = task.input_type || 'checkbox';

    // ACTION tasks (checkbox)
    if (inputType === 'checkbox') {
      const isChecked = response === true;
      return (
        <button
          key={task.id}
          type="button"
          onClick={() => updateTaskResponse(task.id, !isChecked)}
          className={`w-full text-left flex items-start gap-3 p-4 rounded-lg border transition-[background-color,border-color] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 ${
            isChecked
              ? "bg-amber-400/5 border-amber-400/20"
              : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700"
          }`}
          aria-label={`${isChecked ? 'Mark as incomplete' : 'Mark as complete'}: ${task.label}`}
        >
          <div className="shrink-0 mt-0.5">
            {isChecked ? (
              <CheckSquare className="w-5 h-5 text-amber-400" />
            ) : (
              <Square className="w-5 h-5 text-zinc-600" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <p
                className={`text-sm font-medium ${
                  isChecked ? "text-zinc-300 line-through" : "text-white"
                }`}
              >
                {task.label}
              </p>
              <TaskTypeBadge type={taskType} />
            </div>
            {task.description && (
              <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                {task.description}
              </p>
            )}
          </div>
        </button>
      );
    }

    // MEASURE/REFLECT tasks (number input)
    if (task.input_type === 'number') {
      return (
        <div key={task.id} className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor={task.id} className="text-sm font-medium text-white flex-1">
              {task.label}
            </label>
            <TaskTypeBadge type={taskType} />
          </div>
          {task.description && (
            <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
              {task.description}
            </p>
          )}
          <input
            id={task.id}
            type="number"
            value={typeof response === 'number' ? response : ''}
            onChange={(e) => updateTaskResponse(task.id, parseFloat(e.target.value) || 0)}
            placeholder="Enter number…"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/30 focus-visible:border-amber-400/30 transition-[border-color,box-shadow] duration-200"
          />
        </div>
      );
    }

    // MEASURE/REFLECT tasks (scale/slider)
    if (task.input_type === 'scale') {
      const scaleValue = typeof response === 'number' ? response : 5;
      return (
        <div key={task.id} className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor={task.id} className="text-sm font-medium text-white flex-1">
              {task.label}
            </label>
            <TaskTypeBadge type={taskType} />
          </div>
          {task.description && (
            <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
              {task.description}
            </p>
          )}
          <div className="space-y-3">
            <input
              id={task.id}
              type="range"
              min={1}
              max={10}
              value={scaleValue}
              onChange={(e) => updateTaskResponse(task.id, parseInt(e.target.value, 10))}
              className="w-full h-2 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-blue-400
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-blue-400
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:shadow-blue-400/20
                [&::-moz-range-thumb]:w-5
                [&::-moz-range-thumb]:h-5
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-blue-400
                [&::-moz-range-thumb]:border-0
                [&::-moz-range-thumb]:cursor-pointer"
            />
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-600">1</span>
              <span className="text-lg font-bold text-blue-400">{scaleValue}</span>
              <span className="text-xs text-zinc-600">10</span>
            </div>
          </div>
        </div>
      );
    }

    // REFLECT tasks (text area)
    if (task.input_type === 'text') {
      const textValue = typeof response === 'string' ? response : '';
      return (
        <div key={task.id} className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor={task.id} className="text-sm font-medium text-white flex-1">
              {task.label}
            </label>
            <TaskTypeBadge type={taskType} />
          </div>
          {task.description && (
            <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
              {task.description}
            </p>
          )}
          <textarea
            id={task.id}
            value={textValue}
            onChange={(e) => updateTaskResponse(task.id, e.target.value)}
            rows={3}
            placeholder="Write your reflection…"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-zinc-600 resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/30 focus-visible:border-amber-400/30 transition-[border-color,box-shadow] duration-200"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="space-y-6">
      {/* Tasks */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
        <h2 className="text-sm font-semibold text-white mb-4">
          Today&apos;s Tasks ({completedCount}/{totalTasks})
        </h2>
        <div className="space-y-3">
          {tasks.map(renderTask)}
        </div>
      </div>

      {/* Confidence Score */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
        <h2 className="text-sm font-semibold text-white mb-1">Confidence Score</h2>
        <p className="text-xs text-zinc-500 mb-4">
          How confident do you feel about executing today's protocol? (1 = not confident, 10 = very confident)
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
        <label htmlFor="daily-notes" className="block text-sm font-semibold text-white mb-1">Notes</label>
        <p className="text-xs text-zinc-500 mb-3">
          Capture any reflections, action items, or insights from today.
        </p>
        <textarea
          id="daily-notes"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
            setSaved(false);
          }}
          rows={4}
          placeholder="What did you learn today? What actions will you take?"
          className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/30 focus-visible:border-amber-400/30 transition-[border-color,box-shadow] duration-200"
        />
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isPending}
          className={`flex-1 flex items-center justify-center gap-2 font-bold px-6 py-3 min-h-[48px] rounded-xl transition-[background-color,border-color,box-shadow] duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 ${
            saved
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-emerald-500/10"
              : "bg-amber-400 text-black hover:bg-amber-300 shadow-amber-400/20"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Saving…
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
