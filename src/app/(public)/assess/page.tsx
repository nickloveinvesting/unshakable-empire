'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Shield, LayoutDashboard, Users, DollarSign, Target } from 'lucide-react';
import { PILLAR_MAP } from '@/types/quiz';
import type { PillarId } from '@/types/quiz';

const ICON_MAP: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  DollarSign: <DollarSign className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
};

export default function AssessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Choose Your Pillar</h1>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">Select a pillar to assess. Each assessment has 30 questions and takes about 10 minutes.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {([1, 2, 3, 4] as PillarId[]).map((id) => {
            const pillar = PILLAR_MAP[id];
            return (
              <button key={id} onClick={() => router.push(`/assess/${pillar.slug}`)} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:border-amber-400/30 transition-all text-left group">
                <div className="text-amber-400 mb-3">{ICON_MAP[pillar.icon]}</div>
                <h3 className="text-white font-semibold mb-1">{pillar.label}</h3>
                <p className="text-zinc-500 text-sm">{pillar.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
