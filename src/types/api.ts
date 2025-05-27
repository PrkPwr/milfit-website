// API Response Types for MilFIT Website

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

export interface HealthCheckData {
  version: string;
  timestamp: string;
  timezone: string;
  php_version: string;
  database: 'connected' | 'disconnected';
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: 'user' | 'admin';
  created_at: string;
  updated_at: string;
  last_login?: string;
}

export interface UserProfile {
  user_id: number;
  exercise_experience: 'Beginner' | 'Intermediate' | 'Advanced';
  service?: 'Navy' | 'Army' | 'Air Force';
  height?: number;
  weight?: number;
  unit_preference?: 'metric' | 'imperial';
  created_at: string;
  updated_at: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  exerciseExperience?: string;
  service?: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  user: User;
}

export interface Workout {
  id: number;
  name: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  location: 'Gym' | 'Home' | 'Park';
  duration_minutes: number;
  exercises: Exercise[];
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  sets: number;
  reps?: number;
  duration_seconds?: number;
  rest_seconds: number;
  instructions: string;
  image_url?: string;
  video_url?: string;
}

export interface WorkoutProgress {
  id: number;
  user_id: number;
  workout_id: number;
  completed_at: string;
  duration_minutes: number;
  notes?: string;
}

export interface Appointment {
  id: number;
  user_id: number;
  type: 'General Interview' | 'Medical Assessment' | 'Psych Assessment' | 'Fitness Assessment' | 'Specialist Appointment' | 'Enlistment';
  date: string;
  time: string;
  location?: string;
  officer_name?: string;
  notes?: string;
  reminder_status: 'pending' | 'acknowledged' | 'cleared';
  created_at: string;
  updated_at: string;
}

export interface SubscriptionStatus {
  user_id: number;
  plan: 'free' | 'premium';
  status: 'active' | 'inactive' | 'trial' | 'expired';
  expires_at?: string;
  created_at: string;
  updated_at: string;
}