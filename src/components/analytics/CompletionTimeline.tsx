'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CompletionTimelineProps {
  data: Array<{
    date: string;
    pillar1?: number;
    pillar2?: number;
    pillar3?: number;
    pillar4?: number;
  }>;
}

const PILLAR_COLORS = {
  pillar1: '#fbbf24', // amber-400
  pillar2: '#60a5fa', // blue-400
  pillar3: '#4ade80', // green-400
  pillar4: '#c084fc', // purple-400
};

const PILLAR_NAMES = {
  pillar1: 'Income',
  pillar2: 'Assets',
  pillar3: 'Protection',
  pillar4: 'Estate',
};

export function CompletionTimeline({ data }: CompletionTimelineProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] text-zinc-400">
        No timeline data available yet
      </div>
    );
  }

  // Determine which pillars have data
  const activePillars = Object.keys(PILLAR_COLORS).filter((key) =>
    data.some((point) => point[key as keyof typeof point] !== undefined)
  ) as Array<keyof typeof PILLAR_COLORS>;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
        <XAxis
          dataKey="date"
          stroke="#a1a1aa"
          style={{ fontSize: '12px' }}
        />
        <YAxis
          stroke="#a1a1aa"
          style={{ fontSize: '12px' }}
          label={{ value: 'Days Completed', angle: -90, position: 'insideLeft', fill: '#a1a1aa' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#18181b',
            border: '1px solid #27272a',
            borderRadius: '8px',
            color: '#fff',
          }}
          labelStyle={{ color: '#a1a1aa' }}
        />
        <Legend
          wrapperStyle={{ color: '#a1a1aa' }}
          formatter={(value) => PILLAR_NAMES[value as keyof typeof PILLAR_NAMES] || value}
        />
        {activePillars.map((pillar) => (
          <Line
            key={pillar}
            type="monotone"
            dataKey={pillar}
            stroke={PILLAR_COLORS[pillar]}
            strokeWidth={2}
            dot={{ fill: PILLAR_COLORS[pillar], r: 4 }}
            activeDot={{ r: 6 }}
            name={pillar}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
