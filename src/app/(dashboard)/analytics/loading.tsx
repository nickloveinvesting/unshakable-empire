export default function AnalyticsLoading() {
  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back link skeleton */}
        <div className="h-6 w-32 bg-zinc-800 rounded animate-pulse mb-6" />

        {/* Header skeleton */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-zinc-800 rounded-xl animate-pulse" />
          <div>
            <div className="h-7 w-40 bg-zinc-800 rounded animate-pulse mb-2" />
            <div className="h-4 w-56 bg-zinc-800 rounded animate-pulse" />
          </div>
        </div>

        {/* Charts skeleton */}
        <div className="space-y-6">
          {/* Timeline chart */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 h-80 animate-pulse" />

          {/* Grid charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 h-72 animate-pulse" />
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 h-72 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
