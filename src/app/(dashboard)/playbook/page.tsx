import { createClient } from '@/lib/supabase/server';
import { PLAYBOOK_ENTRIES } from '@/data/playbook';
import { PlaybookEntry } from '@/components/playbook/PlaybookEntry';
import { redirect } from 'next/navigation';
import { BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function PlaybookPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch all completed check-ins for this user
  const { data: completedCheckins } = await supabase
    .from('daily_checkins')
    .select('pillar_id, day_number')
    .eq('user_id', user.id)
    .eq('completion_percentage', 100);

  // Create a Set of completed day identifiers for fast lookup
  const completedDays = new Set(
    (completedCheckins || []).map(
      (checkin) => `${checkin.pillar_id}-${checkin.day_number}`
    )
  );

  // Determine which entries are unlocked
  const entriesWithLockStatus = PLAYBOOK_ENTRIES.map((entry) => ({
    ...entry,
    isUnlocked: completedDays.has(`${entry.pillarId}-${entry.dayNumber}`),
  }));

  const unlockedCount = entriesWithLockStatus.filter((e) => e.isUnlocked).length;
  const totalCount = PLAYBOOK_ENTRIES.length;

  // Group entries by pillar and category
  const groupedEntries: Record<
    string,
    Record<string, typeof entriesWithLockStatus>
  > = {};

  entriesWithLockStatus.forEach((entry) => {
    if (!groupedEntries[entry.pillarSlug]) {
      groupedEntries[entry.pillarSlug] = {};
    }
    if (!groupedEntries[entry.pillarSlug][entry.category]) {
      groupedEntries[entry.pillarSlug][entry.category] = [];
    }
    groupedEntries[entry.pillarSlug][entry.category].push(entry);
  });

  const PILLAR_NAMES = {
    'ceo-command': 'CEO Command Center',
    'team-culture': 'Team Culture',
    'revenue-systems': 'Revenue Systems',
    'conversion-mastery': 'Conversion Mastery',
  } as const;

  const PILLAR_COLORS = {
    'ceo-command': 'text-amber-400',
    'team-culture': 'text-blue-400',
    'revenue-systems': 'text-green-400',
    'conversion-mastery': 'text-purple-400',
  } as const;

  // If no completed days, show empty state
  if (unlockedCount === 0) {
    return (
      <div className="min-h-screen bg-black p-6">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-6 transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-lg px-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-8 h-8 text-amber-400" />
              <h1 className="text-3xl font-bold text-white">Your Playbook</h1>
            </div>
            <p className="text-zinc-400 text-base">
              Frameworks earned through execution. Complete a day's protocol to unlock its content.
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-12 text-center">
            <BookOpen className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">
              Your playbook is empty
            </h2>
            <p className="text-zinc-400 mb-6 max-w-md mx-auto">
              Complete your first protocol day to earn your first framework. Each day you complete unlocks tactical insights you can reference forever.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg transition-colors"
            >
              Go to Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-6 transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-lg px-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-8 h-8 text-amber-400" />
            <h1 className="text-3xl font-bold text-white">Your Playbook</h1>
          </div>
          <p className="text-zinc-400 text-base mb-2">
            Frameworks earned through execution. Complete a day's protocol to unlock its content.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg">
            <span className="text-amber-400 font-semibold text-sm">
              {unlockedCount}
            </span>
            <span className="text-zinc-500 text-sm">of</span>
            <span className="text-zinc-400 font-semibold text-sm">
              {totalCount}
            </span>
            <span className="text-zinc-500 text-sm">frameworks unlocked</span>
          </div>
        </div>

        {/* Entries grouped by pillar and category */}
        <div className="space-y-12">
          {Object.entries(groupedEntries).map(([pillarSlug, categories]) => (
            <div key={pillarSlug}>
              <h2
                className={`text-2xl font-bold mb-6 ${
                  PILLAR_COLORS[pillarSlug as keyof typeof PILLAR_COLORS]
                }`}
              >
                {PILLAR_NAMES[pillarSlug as keyof typeof PILLAR_NAMES]}
              </h2>

              {Object.entries(categories).map(([category, entries]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-lg font-semibold text-zinc-300 mb-4">
                    {category}
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {entries.map((entry) => (
                      <PlaybookEntry
                        key={entry.id}
                        entry={entry}
                        isUnlocked={entry.isUnlocked}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
