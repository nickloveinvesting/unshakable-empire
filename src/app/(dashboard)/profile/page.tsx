import { redirect } from 'next/navigation';
import { User, Building2, FileText, LogOut } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { PILLAR_MAP } from '@/types/quiz';
import { ProfileForm } from './ProfileForm';
import { SignOutButton } from './SignOutButton';

export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (!profile) {
    redirect('/login');
  }

  // Fetch assessment history
  const { data: assessments } = await supabase
    .from('assessments')
    .select('*')
    .eq('user_id', user.id)
    .order('completed_at', { ascending: false });

  // Group assessments by pillar
  type Assessment = NonNullable<typeof assessments>[number];
  const assessmentsByPillar = (assessments || []).reduce((acc, assessment) => {
    if (!acc[assessment.pillar_id]) {
      acc[assessment.pillar_id] = [];
    }
    acc[assessment.pillar_id].push(assessment);
    return acc;
  }, {} as Record<number, Assessment[]>);

  const memberSince = new Date(profile.created_at).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Your Profile</h1>
              <p className="text-zinc-400 text-sm">Manage your account information</p>
            </div>
          </div>
        </div>

        {/* Section 1: Personal Info */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-semibold text-white">Personal Information</h2>
          </div>

          <div className="space-y-4">
            {/* Profile photo placeholder */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/20 rounded-full flex items-center justify-center">
                <span className="text-amber-400 font-bold text-xl">
                  {profile.full_name
                    ? profile.full_name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)
                    : user.email?.[0]?.toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <p className="text-white font-medium">{profile.full_name || 'No name set'}</p>
                <p className="text-zinc-500 text-sm">{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Business Info (Editable Form) */}
        <ProfileForm profile={profile} />

        {/* Section 3: Assessment History */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-semibold text-white">Assessment History</h2>
          </div>

          {assessments && assessments.length > 0 ? (
            <div className="space-y-3">
              {(Object.entries(assessmentsByPillar) as [string, Assessment[]][]).map(([pillarIdStr, pillarAssessments]) => {
                const pillarId = parseInt(pillarIdStr);
                const pillar = PILLAR_MAP[pillarId as 1 | 2 | 3 | 4];
                if (!pillar) return null;

                return (
                  <div key={pillarId} className="border border-zinc-800 rounded-lg p-4">
                    <h3 className="text-white font-medium text-sm mb-3">{pillar.label}</h3>
                    <div className="space-y-2">
                      {pillarAssessments.map((assessment, idx) => {
                        const bandColors: Record<string, string> = {
                          'Critical': 'text-red-400 bg-red-400/10 border-red-400/20',
                          'Weak': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
                          'Developing': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
                          'Strong': 'text-green-400 bg-green-400/10 border-green-400/20',
                          'Elite': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
                        };

                        const bandColor = bandColors[assessment.band] || bandColors['Developing'];

                        // Calculate improvement if this is a retake
                        const previousAssessment = pillarAssessments[idx + 1];
                        const improvement = previousAssessment
                          ? assessment.overall_percentage - previousAssessment.overall_percentage
                          : null;

                        return (
                          <div key={assessment.id} className="flex items-center justify-between py-2 border-b border-zinc-800 last:border-0">
                            <div className="flex items-center gap-3">
                              <span className="text-zinc-400 text-xs">
                                {new Date(assessment.completed_at).toLocaleDateString()}
                              </span>
                              <span className={`px-2 py-1 rounded text-xs font-bold border ${bandColor}`}>
                                {assessment.band}
                              </span>
                              {assessment.is_retake && improvement !== null && (
                                <span className={`text-xs font-medium ${improvement > 0 ? 'text-green-400' : improvement < 0 ? 'text-red-400' : 'text-zinc-500'}`}>
                                  {improvement > 0 ? '+' : ''}{improvement.toFixed(0)}%
                                </span>
                              )}
                            </div>
                            <span className="text-white font-semibold text-sm">
                              {assessment.overall_percentage.toFixed(0)}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-zinc-500 text-sm">
              No assessments completed yet. Take your first assessment to get started.
            </p>
          )}
        </div>

        {/* Section 4: Account */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <LogOut className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-semibold text-white">Account</h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm">Member since {memberSince}</p>
              {profile.is_pilot_participant && (
                <p className="text-amber-400 text-xs mt-1">✓ Pilot Participant</p>
              )}
            </div>
            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
