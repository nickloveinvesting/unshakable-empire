export default function AssessmentsLoading() {
  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-zinc-800 rounded" />
            <div className="h-8 w-48 bg-zinc-800 rounded" />
          </div>
          <div className="h-4 w-96 bg-zinc-800 rounded" />
        </div>

        {/* Assessment History skeleton */}
        <div className="mb-12">
          <div className="h-6 w-48 bg-zinc-800 rounded animate-pulse mb-6" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 animate-pulse"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-zinc-800 rounded-lg" />
                    <div>
                      <div className="h-5 w-40 bg-zinc-800 rounded mb-2" />
                      <div className="h-3 w-24 bg-zinc-800 rounded" />
                    </div>
                  </div>
                  <div>
                    <div className="h-9 w-16 bg-zinc-800 rounded mb-2" />
                    <div className="h-5 w-16 bg-zinc-800 rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="h-3 flex-1 bg-zinc-800 rounded" />
                      <div className="w-32 h-1.5 bg-zinc-800 rounded-full" />
                      <div className="w-10 h-3 bg-zinc-800 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Take an Assessment skeleton */}
        <div>
          <div className="h-6 w-48 bg-zinc-800 rounded animate-pulse mb-6" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 animate-pulse"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg" />
                  <div className="h-6 w-16 bg-zinc-800 rounded" />
                </div>
                <div className="h-6 w-3/4 bg-zinc-800 rounded mb-2" />
                <div className="h-4 w-full bg-zinc-800 rounded mb-1" />
                <div className="h-4 w-5/6 bg-zinc-800 rounded mb-4" />
                <div className="h-4 w-32 bg-zinc-800 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
