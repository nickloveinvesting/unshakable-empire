'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, Loader2, Eye, EyeOff } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isLogin = mode === 'login';
  const title = isLogin ? 'Welcome Back' : 'Create Your Account';
  const subtitle = isLogin ? 'Sign in to continue your protocol' : 'Start building your unshakable empire';
  const cta = isLogin ? 'Sign In' : 'Create Account';
  const altText = isLogin ? "Don't have an account?" : 'Already have an account?';
  const altLink = isLogin ? '/signup' : '/login';
  const altLabel = isLogin ? 'Sign up' : 'Sign in';

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      setIsLoading(true);

      const supabase = createClient();

      try {
        if (isLogin) {
          const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
          if (authError) throw authError;
          router.push('/dashboard');
        } else {
          const { error: authError } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { full_name: fullName } },
          });
          if (authError) throw authError;
          router.push('/dashboard');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setIsLoading(false);
      }
    },
    [fullName, email, password, isLogin, router]
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl" />
            <div className="relative w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-amber-400" />
            </div>
          </div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">{title}</h1>
          <p className="text-zinc-400 text-sm">{subtitle}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="fullName" className="block text-zinc-400 text-sm font-medium mb-1.5">Full Name</label>
              <input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Smith" required autoComplete="name" className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:border-transparent transition-[border-color,box-shadow] duration-200" />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-zinc-400 text-sm font-medium mb-1.5">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required autoComplete="email" spellCheck={false} className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:border-transparent transition-[border-color,box-shadow] duration-200" />
          </div>
          <div>
            <label htmlFor="password" className="block text-zinc-400 text-sm font-medium mb-1.5">Password</label>
            <div className="relative">
              <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={isLogin ? 'Your password' : 'Min 6 characters'} required minLength={6} autoComplete={isLogin ? 'current-password' : 'new-password'} className="w-full px-4 py-3 pr-14 bg-zinc-900/80 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:border-transparent transition-[border-color,box-shadow] duration-200" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-1 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-lg" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${error ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
              <p className="text-red-400 text-sm">{error}</p>
              <p className="text-zinc-500 text-xs mt-1">Check your credentials and try again.</p>
            </div>
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-amber-400 text-black font-bold py-3 min-h-[44px] rounded-lg hover:bg-amber-300 transition-[background-color] duration-200 shadow-lg shadow-amber-400/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50">
            {isLoading ? (<><Loader2 className="w-5 h-5 animate-spin" /><span>Processing…</span></>) : cta}
          </button>
        </form>
        <p className="text-center text-zinc-500 text-sm mt-6">
          {altText}{' '}
          <Link href={altLink} className="text-amber-400 hover:text-amber-300 font-medium">{altLabel}</Link>
        </p>
      </div>
    </div>
  );
}
