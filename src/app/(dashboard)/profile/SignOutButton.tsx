'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-lg text-sm font-medium text-zinc-400 hover:text-red-400 hover:bg-red-400/5 border border-zinc-800 hover:border-red-400/30 transition-all"
    >
      <LogOut className="w-4 h-4" />
      Sign Out
    </button>
  );
}
