export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-zinc-800 rounded-xl animate-pulse" />
            <div>
              <div className="h-7 w-32 bg-zinc-800 rounded animate-pulse mb-2" />
              <div className="h-4 w-48 bg-zinc-800 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Form skeleton */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 bg-zinc-800 rounded animate-pulse" />
            <div className="h-5 w-40 bg-zinc-800 rounded animate-pulse" />
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse mb-2" />
                <div className="h-11 w-full bg-zinc-800 rounded-lg animate-pulse" />
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i}>
                  <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse mb-2" />
                  <div className="h-11 w-full bg-zinc-800 rounded-lg animate-pulse" />
                </div>
              ))}
            </div>

            <div className="h-12 w-full bg-zinc-800 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
