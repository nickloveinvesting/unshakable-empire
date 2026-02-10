'use client';

import React from 'react';
import { Shield, Lock, ArrowRight, LayoutDashboard, BarChart3, BookOpen, User, LogOut } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useUser } from '@/hooks/useUser';
import { createClient } from '@/lib/supabase/client';

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/playbook', label: 'Playbook', icon: BookOpen },
  { href: '/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { profile, loading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (profile && !profile.is_pilot_participant) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-white font-bold text-xl mb-3">Pilot Access Required</h2>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            You&apos;re not enrolled in the pilot yet. The daily protocol dashboard is currently available to pilot participants only.
          </p>
          <div className="space-y-3">
            <button onClick={() => router.push('/assess')} className="w-full bg-amber-400 text-black font-bold px-6 py-3 min-h-[44px] rounded-lg hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />Take a Free Assessment<ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => router.push('/')} className="w-full text-zinc-500 hover:text-zinc-300 text-sm py-2 transition-colors">Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-56 border-r border-zinc-800 bg-zinc-950 p-4 fixed h-full">
        <div className="flex items-center gap-2 mb-8 px-2">
          <Shield className="w-6 h-6 text-amber-400" />
          <span className="text-white font-bold text-sm">Unshakable Empire</span>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${active ? 'bg-amber-400/10 text-amber-400' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'}`}>
                <item.icon className="w-4 h-4" />{item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 lg:ml-56 pb-20 lg:pb-0">{children}</main>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 flex items-center justify-around px-2 py-2 z-50">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link key={item.href} href={item.href} className={`flex flex-col items-center gap-0.5 min-w-[44px] min-h-[44px] justify-center rounded-lg transition-all ${active ? 'text-amber-400' : 'text-zinc-500 hover:text-zinc-300'}`}>
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
