'use client';

import { useState, useTransition } from 'react';
import { Building2, Loader2, Save, CheckCircle2 } from 'lucide-react';
import { updateProfile } from '@/app/actions/profile';
import type { Database } from '@/types/database';

type Profile = Database['public']['Tables']['profiles']['Row'];

interface ProfileFormProps {
  profile: Profile;
}

const BUSINESS_TYPES = [
  { value: 'service', label: 'Service Business' },
  { value: 'product', label: 'Product Business' },
  { value: 'saas', label: 'SaaS' },
  { value: 'agency', label: 'Agency' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'retail', label: 'Retail' },
  { value: 'construction', label: 'Construction' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'other', label: 'Other' },
];

const REVENUE_RANGES = [
  { value: 'under-250k', label: 'Under $250K' },
  { value: '250k-500k', label: '$250K - $500K' },
  { value: '500k-1m', label: '$500K - $1M' },
  { value: '1m-2m', label: '$1M - $2M' },
  { value: '2m-5m', label: '$2M - $5M' },
  { value: '5m-10m', label: '$5M - $10M' },
  { value: 'over-10m', label: 'Over $10M' },
];

export function ProfileForm({ profile }: ProfileFormProps) {
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [fullName, setFullName] = useState(profile.full_name || '');
  const [businessName, setBusinessName] = useState(profile.business_name || '');
  const [businessType, setBusinessType] = useState(profile.business_type || '');
  const [annualRevenue, setAnnualRevenue] = useState(profile.annual_revenue || '');
  const [teamSize, setTeamSize] = useState<number | ''>(profile.team_size || '');
  const [hoursPerWeek, setHoursPerWeek] = useState<number | ''>(profile.hours_per_week || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaved(false);

    startTransition(async () => {
      const result = await updateProfile({
        full_name: fullName || null,
        business_name: businessName || null,
        business_type: businessType || null,
        annual_revenue: annualRevenue || null,
        team_size: teamSize === '' ? null : Number(teamSize),
        hours_per_week: hoursPerWeek === '' ? null : Number(hoursPerWeek),
      });

      if (result.success) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else if (result.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="w-5 h-5 text-amber-400" />
        <h2 className="text-lg font-semibold text-white">Business Information</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-zinc-300 mb-2">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setSaved(false);
            }}
            placeholder="Your full name"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400/30 transition-all"
          />
        </div>

        {/* Business Name */}
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-zinc-300 mb-2">
            Business Name
          </label>
          <input
            id="businessName"
            type="text"
            value={businessName}
            onChange={(e) => {
              setBusinessName(e.target.value);
              setSaved(false);
            }}
            placeholder="Your business name"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400/30 transition-all"
          />
        </div>

        {/* Business Type */}
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-zinc-300 mb-2">
            Business Type
          </label>
          <select
            id="businessType"
            value={businessType}
            onChange={(e) => {
              setBusinessType(e.target.value);
              setSaved(false);
            }}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400/30 transition-all"
          >
            <option value="">Select business type...</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Annual Revenue */}
        <div>
          <label htmlFor="annualRevenue" className="block text-sm font-medium text-zinc-300 mb-2">
            Annual Revenue
          </label>
          <select
            id="annualRevenue"
            value={annualRevenue}
            onChange={(e) => {
              setAnnualRevenue(e.target.value);
              setSaved(false);
            }}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400/30 transition-all"
          >
            <option value="">Select revenue range...</option>
            {REVENUE_RANGES.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Team Size and Hours Per Week (Side by Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="teamSize" className="block text-sm font-medium text-zinc-300 mb-2">
              Team Size
            </label>
            <input
              id="teamSize"
              type="number"
              min="1"
              value={teamSize}
              onChange={(e) => {
                setTeamSize(e.target.value === '' ? '' : parseInt(e.target.value));
                setSaved(false);
              }}
              placeholder="Number of team members"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400/30 transition-all"
            />
          </div>

          <div>
            <label htmlFor="hoursPerWeek" className="block text-sm font-medium text-zinc-300 mb-2">
              Hours Per Week
            </label>
            <input
              id="hoursPerWeek"
              type="number"
              min="1"
              value={hoursPerWeek}
              onChange={(e) => {
                setHoursPerWeek(e.target.value === '' ? '' : parseInt(e.target.value));
                setSaved(false);
              }}
              placeholder="Average hours worked"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400/30 transition-all"
            />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className={`w-full flex items-center justify-center gap-2 font-bold px-6 py-3 min-h-[48px] rounded-lg transition-all shadow-lg ${
            saved
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-emerald-500/10'
              : 'bg-amber-400 text-black hover:bg-amber-300 shadow-amber-400/20'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Saving...
            </>
          ) : saved ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Saved
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              Save Changes
            </>
          )}
        </button>
      </form>
    </div>
  );
}
