interface HeatmapGridProps {
  pillarLabel: string;
  data: Array<{ day: number; completionPct: number }>;
}

export function HeatmapGrid({ pillarLabel, data }: HeatmapGridProps) {
  // Ensure we have exactly 30 days
  const gridData = Array.from({ length: 30 }, (_, i) => {
    const dayData = data.find((d) => d.day === i + 1);
    return {
      day: i + 1,
      completionPct: dayData?.completionPct || 0,
    };
  });

  const getColorClass = (pct: number) => {
    if (pct === 0) return 'bg-zinc-800';
    if (pct < 50) return 'bg-amber-400/20';
    if (pct < 100) return 'bg-amber-400/50';
    return 'bg-amber-400';
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">{pillarLabel} - 30 Day Progress</h3>
      <div className="grid grid-cols-6 gap-2">
        {gridData.map(({ day, completionPct }) => (
          <div
            key={day}
            className={`
              aspect-square rounded-lg flex items-center justify-center
              text-xs font-medium transition-colors
              ${getColorClass(completionPct)}
              ${completionPct === 0 ? 'text-zinc-500' : 'text-zinc-900'}
            `}
            title={`Day ${day}: ${completionPct}% complete`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
