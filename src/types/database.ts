export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          active_pillars: number[];
          onboarding_completed: boolean;
          is_pilot_participant: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          active_pillars?: number[];
          onboarding_completed?: boolean;
          is_pilot_participant?: boolean;
        };
        Update: {
          full_name?: string | null;
          active_pillars?: number[];
          onboarding_completed?: boolean;
          is_pilot_participant?: boolean;
        };
      };
      assessments: {
        Row: {
          id: string;
          user_id: string;
          pillar_id: number;
          answers: Json;
          overall_score: number;
          overall_percentage: number;
          category_scores: Json;
          band: string;
          weakest_category: string;
          is_retake: boolean;
          previous_assessment_id: string | null;
          completed_at: string;
        };
        Insert: {
          user_id: string;
          pillar_id: number;
          answers: Json;
          overall_score: number;
          overall_percentage: number;
          category_scores: Json;
          band: string;
          weakest_category: string;
          is_retake?: boolean;
          previous_assessment_id?: string | null;
        };
        Update: {};
      };
      daily_checkins: {
        Row: {
          id: string;
          user_id: string;
          pillar_id: number;
          day_number: number;
          responses: Json;
          completion_percentage: number;
          completed_at: string;
        };
        Insert: {
          user_id: string;
          pillar_id: number;
          day_number: number;
          responses: Json;
          completion_percentage: number;
        };
        Update: {
          responses?: Json;
          completion_percentage?: number;
        };
      };
    };
  };
}
