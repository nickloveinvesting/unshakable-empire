export default function PlaybookLoading() {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-5xl mx-auto">
        {/* Back link skeleton */}
        <div className="h-6 w-32 bg-zinc-800 rounded animate-pulse mb-6" />

        {/* Header skeleton */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-zinc-800 rounded animate-pulse" />
            <div className="h-8 w-48 bg-zinc-800 rounded animate-pulse" />
          </div>
          <div className="h-4 w-96 bg-zinc-800 rounded animate-pulse mb-2" />
          <div className="h-6 w-64 bg-zinc-800 rounded-lg animate-pulse" />
        </div>

        {/* Entries skeleton */}
        <div className="space-y-12">
          {[1, 2].map((i) => (
            <div key={i}>
              <div className="h-8 w-56 bg-zinc-800 rounded animate-pulse mb-6" />
              <div className="grid gap-4 md:grid-cols-2">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 h-48 animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
