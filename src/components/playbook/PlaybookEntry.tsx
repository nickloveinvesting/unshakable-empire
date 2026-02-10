'use client';

import { useState } from 'react';
import { Lock, ChevronDown, ChevronUp } from 'lucide-react';
import type { PlaybookEntry as PlaybookEntryType } from '@/data/playbook';

interface PlaybookEntryProps {
  entry: PlaybookEntryType;
  isUnlocked: boolean;
}

const PILLAR_COLORS = {
  'ceo-command': 'border-amber-400 text-amber-400',
  'team-culture': 'border-blue-400 text-blue-400',
  'revenue-systems': 'border-green-400 text-green-400',
  'conversion-mastery': 'border-purple-400 text-purple-400',
} as const;

export function PlaybookEntry({ entry, isUnlocked }: PlaybookEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const colorClass = PILLAR_COLORS[entry.pillarSlug];

  if (!isUnlocked) {
    // Locked state
    return (
      <div className="relative bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-5 overflow-hidden">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${colorClass} mb-2`}>
              {entry.category}
            </div>
            <h3 className="text-white font-semibold text-base leading-snug">
              {entry.title}
            </h3>
          </div>
          <Lock className="w-5 h-5 text-zinc-600 flex-shrink-0" />
        </div>

        <div className="relative">
          <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 blur-sm select-none">
            {entry.content}
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-zinc-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-zinc-700">
              <p className="text-zinc-400 text-xs font-medium">
                Complete Day {entry.dayNumber} to unlock
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Unlocked state
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${colorClass} mb-2`}>
            {entry.category}
          </div>
          <h3 className="text-white font-semibold text-base leading-snug">
            {entry.title}
          </h3>
        </div>
      </div>

      {!isExpanded ? (
        <>
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-3">
            {entry.content}
          </p>
          <button
            onClick={() => setIsExpanded(true)}
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
          >
            Read More
            <ChevronDown className="w-4 h-4" />
          </button>
        </>
      ) : (
        <>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {entry.content}
          </p>

          <div className="bg-amber-400/5 border-l-2 border-amber-400 pl-4 py-3 mb-3">
            <p className="text-zinc-300 text-sm italic leading-relaxed">
              {entry.keyTakeaway}
            </p>
          </div>

          <button
            onClick={() => setIsExpanded(false)}
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
          >
            Show Less
            <ChevronUp className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
}
