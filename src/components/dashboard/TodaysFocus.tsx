import Link from 'next/link';
import { Crosshair, Users, DollarSign, Target, CheckCircle2 } from 'lucide-react';
import type { PillarProgress } from '@/app/actions/dashboard';
import { protectionProtocol } from '@/data/protocols/protection';
import { assetsProtocol } from '@/data/protocols/assets';
import { incomeProtocol } from '@/data/protocols/income';
import { estateProtocol } from '@/data/protocols/estate';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Crosshair,
  Users,
  DollarSign,
  Target,
};

const PROTOCOL_MAP: Record<string, any[]> = {
  'ceo-command': protectionProtocol,
  'team-culture': assetsProtocol,
  'revenue-systems': incomeProtocol,
  'conversion-mastery': estateProtocol,
};

interface TodaysFocusProps {
  activePillars: PillarProgress[];
}

export function TodaysFocus({ activePillars }: TodaysFocusProps) {
  if (activePillars.length === 0) {
    return (
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Target className="w-8 h-8 text-amber-400" />
        </div>
        <h3 className="text-white font-bold text-lg mb-2">Your empire starts with one action.</h3>
        <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
          Take your first pillar assessment to discover your critical constraint and unlock your personalized 30-day protocol.
        </p>
        <Link
          href="/assess"
          className="bg-amber-400 text-black font-bold px-6 py-3 min-h-[44px] rounded-lg hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 inline-flex items-center gap-2"
        >
          Begin Assessment
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="mb-2">
        <h2 className="text-white font-bold text-xl mb-1">Today's Protocol</h2>
        <p className="text-zinc-400 text-sm">Your daily empire-building tasks</p>
      </div>

      {activePillars.map((pillar) => {
        const protocol = PROTOCOL_MAP[pillar.pillarSlug];
        if (!protocol) return null;

        const dayProtocol = protocol.find((d) => d.day === pillar.currentDay);
        if (!dayProtocol) return null;

        const Icon = ICON_MAP[getIconName(pillar.pillarId)] || Target;
        const isCompleted = pillar.isCompleted;
        const taskCount = dayProtocol.tasks?.length || 0;

        return (
          <div
            key={pillar.pillarId}
            className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-amber-400" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-zinc-400 text-sm font-medium">{pillar.pillarLabel}</h3>
                </div>
                <p className="text-white font-semibold text-base mb-1">
                  Day {pillar.currentDay}: {dayProtocol.title}
                </p>
                <p className="text-zinc-500 text-xs mb-4">
                  {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
                </p>

                {isCompleted ? (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="font-medium">Protocol Complete</span>
                    </div>
                    <Link
                      href={`/protocol/${pillar.pillarSlug}/day/${pillar.currentDay}`}
                      className="text-zinc-400 hover:text-amber-400 text-sm font-medium transition-colors"
                    >
                      Review
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={`/protocol/${pillar.pillarSlug}/day/${pillar.currentDay}`}
                    className="bg-amber-400 text-black font-bold px-4 py-2.5 min-h-[44px] rounded-lg hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 inline-flex items-center gap-2 text-sm"
                  >
                    Start Today's Check-In
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function getIconName(pillarId: number): string {
  const map: Record<number, string> = {
    1: 'Crosshair',
    2: 'Users',
    3: 'DollarSign',
    4: 'Target',
  };
  return map[pillarId] || 'Target';
}
