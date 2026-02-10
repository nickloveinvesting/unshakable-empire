'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ConfidenceTrendProps {
  data: Array<{ day: number; score: number }>;
}

export function ConfidenceTrend({ data }: ConfidenceTrendProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] text-zinc-400">
        No confidence data available yet
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
        <XAxis
          dataKey="day"
          stroke="#a1a1aa"
          style={{ fontSize: '12px' }}
          label={{ value: 'Day', position: 'insideBottom', offset: -5, fill: '#a1a1aa' }}
        />
        <YAxis
          domain={[0, 10]}
          stroke="#a1a1aa"
          style={{ fontSize: '12px' }}
          label={{ value: 'Confidence Score', angle: -90, position: 'insideLeft', fill: '#a1a1aa' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#18181b',
            border: '1px solid #27272a',
            borderRadius: '8px',
            color: '#fff',
          }}
          labelStyle={{ color: '#a1a1aa' }}
          formatter={(value: number) => [`Score: ${value}`, 'Confidence']}
        />
        <Area
          type="monotone"
          dataKey="score"
          stroke="#fbbf24"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#confidenceGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
