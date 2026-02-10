export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-zinc-800 rounded-xl animate-pulse" />
            <div className="flex-1">
              <div className="h-7 w-64 bg-zinc-800 rounded animate-pulse mb-2" />
              <div className="h-4 w-48 bg-zinc-800 rounded animate-pulse" />
            </div>
          </div>
          <div className="h-4 w-40 bg-zinc-800 rounded animate-pulse" />
        </div>

        {/* Today's Focus skeleton */}
        <div className="mb-6">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 h-48 animate-pulse" />
        </div>

        {/* Progress and Score grid skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 h-64 animate-pulse" />
          <div className="space-y-6">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 h-28 animate-pulse" />
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 h-28 animate-pulse" />
          </div>
        </div>

        {/* Daily Insight skeleton */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 h-32 animate-pulse" />
      </div>
    </div>
  );
}
