'use client';

import React from 'react';
import { BarChart3 } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Analytics</h1>
            <p className="text-zinc-400 text-sm">Track your progress across all pillars.</p>
          </div>
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 text-center">
          <p className="text-zinc-400">Complete a 30-day protocol to unlock your analytics dashboard.</p>
        </div>
      </div>
    </div>
  );
}
