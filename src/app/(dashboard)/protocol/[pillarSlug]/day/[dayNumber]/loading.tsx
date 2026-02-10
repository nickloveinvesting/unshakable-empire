export default function DayProtocolLoading() {
  return (
    <div className="min-h-screen bg-zinc-950 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back link skeleton */}
        <div className="h-6 w-32 bg-zinc-800 rounded animate-pulse mb-6" />

        {/* Day header skeleton */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse" />
            <div className="w-1 h-1 bg-zinc-700 rounded-full" />
            <div className="h-4 w-32 bg-zinc-800 rounded animate-pulse" />
          </div>
          <div className="h-7 w-64 bg-zinc-800 rounded animate-pulse mb-2" />
          <div className="h-4 w-full bg-zinc-800 rounded animate-pulse" />
        </div>

        {/* Educational content skeleton */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 mb-8 animate-pulse">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 bg-zinc-800 rounded" />
            <div className="h-4 w-32 bg-zinc-800 rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-zinc-800 rounded" />
            <div className="h-4 w-5/6 bg-zinc-800 rounded" />
          </div>
        </div>

        {/* Tasks skeleton */}
        <div className="space-y-6">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 animate-pulse">
            <div className="h-4 w-40 bg-zinc-800 rounded mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-4 h-16" />
              ))}
            </div>
          </div>

          {/* Confidence score skeleton */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 h-32 animate-pulse" />

          {/* Notes skeleton */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 h-40 animate-pulse" />

          {/* Submit button skeleton */}
          <div className="h-12 w-full bg-zinc-800 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
