export default function ProtocolOverviewLoading() {
  return (
    <div className="min-h-screen bg-zinc-950 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link skeleton */}
        <div className="h-6 w-32 bg-zinc-800 rounded animate-pulse mb-6" />

        {/* Header skeleton */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 bg-zinc-800 rounded-xl animate-pulse shrink-0" />
          <div className="flex-1">
            <div className="h-7 w-48 bg-zinc-800 rounded animate-pulse mb-2" />
            <div className="h-4 w-full bg-zinc-800 rounded animate-pulse" />
          </div>
        </div>

        {/* Progress bar skeleton */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 mb-8 animate-pulse">
          <div className="flex items-center justify-between mb-3">
            <div className="h-4 w-32 bg-zinc-800 rounded" />
            <div className="h-4 w-12 bg-zinc-800 rounded" />
          </div>
          <div className="w-full h-2.5 bg-zinc-800 rounded-full" />
          <div className="h-3 w-48 bg-zinc-800 rounded mt-2" />
        </div>

        {/* Heatmap skeleton */}
        <div className="mb-8">
          <div className="h-6 w-40 bg-zinc-800 rounded animate-pulse mb-4" />
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="aspect-square bg-zinc-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>

        {/* This Week skeleton */}
        <div>
          <div className="mb-4">
            <div className="h-6 w-56 bg-zinc-800 rounded animate-pulse mb-2" />
            <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 h-20 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
