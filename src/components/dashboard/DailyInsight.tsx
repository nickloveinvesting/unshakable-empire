import { Quote } from 'lucide-react';
import { getQuoteForDay } from '@/data/quotes';

interface DailyInsightProps {
  currentDay: number;
}

export function DailyInsight({ currentDay }: DailyInsightProps) {
  const quote = getQuoteForDay(currentDay);

  return (
    <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-amber-400/5 border border-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Quote className="w-5 h-5 text-amber-400/60" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-zinc-300 text-sm italic leading-relaxed mb-2">
            "{quote}"
          </p>
          <p className="text-zinc-500 text-xs font-medium">— Dr. Toby Potter</p>
        </div>
      </div>
    </div>
  );
}
