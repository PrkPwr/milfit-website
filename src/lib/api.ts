// API Client for MilFIT Website

import { 
  ApiResponse, 
  HealthCheckData, 
  User, 
  LoginCredentials, 
  RegisterData, 
  AuthResponse,
  Workout,
  WorkoutProgress,
  Appointment,
  SubscriptionStatus
} from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://milfit.au/api/v1';

class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
    
    // Try to get token from localStorage if available
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('milfit_auth_token');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    // Add auth token if available
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || 'An error occurred',
          errors: data.errors || {},
        };
      }

      return {
        success: true,
        message: data.message || 'Success',
        data: data.data || data,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || 'Network error',
        errors: {},
      };
    }
  }

  // Set authentication token
  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('milfit_auth_token', token);
    }
  }

  // Clear authentication token
  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('milfit_auth_token');
      localStorage.removeItem('milfit_refresh_token');
    }
  }

  // Health check
  async healthCheck(): Promise<ApiResponse<HealthCheckData>> {
    return this.request<HealthCheckData>('/health');
  }

  // Authentication
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
    const response = await this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (response.success && response.data) {
      this.setToken(response.data.token);
      if (typeof window !== 'undefined') {
        localStorage.setItem('milfit_refresh_token', response.data.refreshToken);
      }
    }

    return response;
  }

  async register(userData: RegisterData): Promise<ApiResponse<AuthResponse>> {
    const response = await this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    if (response.success && response.data) {
      this.setToken(response.data.token);
      if (typeof window !== 'undefined') {
        localStorage.setItem('milfit_refresh_token', response.data.refreshToken);
      }
    }

    return response;
  }

  async logout(): Promise<ApiResponse<void>> {
    const response = await this.request<void>('/auth/logout', {
      method: 'POST',
    });

    this.clearToken();
    return response;
  }

  // User management
  async getUserProfile(): Promise<ApiResponse<User>> {
    return this.request<User>('/users/profile');
  }

  async updateUserProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.request<User>('/users/profile/update', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  // Workouts
  async getWorkouts(): Promise<ApiResponse<Workout[]>> {
    return this.request<Workout[]>('/workouts/programs');
  }

  async getWorkout(level: string, location: string): Promise<ApiResponse<Workout>> {
    return this.request<Workout>(`/workouts/programs/${level}/${location}`);
  }

  async getUserProgress(): Promise<ApiResponse<WorkoutProgress[]>> {
    return this.request<WorkoutProgress[]>('/workouts/progress');
  }

  async updateProgress(progressData: Partial<WorkoutProgress>): Promise<ApiResponse<WorkoutProgress>> {
    return this.request<WorkoutProgress>('/workouts/progress/update', {
      method: 'POST',
      body: JSON.stringify(progressData),
    });
  }

  // Appointments
  async getAppointments(): Promise<ApiResponse<Appointment[]>> {
    return this.request<Appointment[]>('/appointments/list');
  }

  async scheduleAppointment(appointmentData: Partial<Appointment>): Promise<ApiResponse<Appointment>> {
    return this.request<Appointment>('/appointments/schedule', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  }

  async cancelAppointment(appointmentId: number): Promise<ApiResponse<void>> {
    return this.request<void>('/appointments/cancel', {
      method: 'DELETE',
      body: JSON.stringify({ id: appointmentId }),
    });
  }

  // Subscriptions
  async getSubscriptionStatus(): Promise<ApiResponse<SubscriptionStatus>> {
    return this.request<SubscriptionStatus>('/subscriptions/status');
  }

  async activateTrial(): Promise<ApiResponse<SubscriptionStatus>> {
    return this.request<SubscriptionStatus>('/subscriptions/activate-trial', {
      method: 'POST',
    });
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient();

// Export the class for custom instances if needed
export default ApiClient; 