'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  Activity, 
  Calendar, 
  TrendingUp, 
  CheckCircle, 
  UserPlus,
  Download,
  Database,
  ArrowUpRight,
  Clock,
  Star,
  Zap,
  Shield
} from 'lucide-react';

// Mock data - replace with real API calls
const mockStats = {
  totalUsers: 1247,
  activeUsers: 892,
  totalWorkouts: 15634,
  appointmentsToday: 23,
  systemHealth: 'healthy',
  recentActivity: [
    { id: 1, user: 'John Smith', action: 'Completed workout', time: '2 minutes ago', type: 'workout' },
    { id: 2, user: 'Sarah Johnson', action: 'Scheduled appointment', time: '5 minutes ago', type: 'appointment' },
    { id: 3, user: 'Mike Wilson', action: 'Updated profile', time: '12 minutes ago', type: 'profile' },
    { id: 4, user: 'Emma Davis', action: 'Started premium trial', time: '18 minutes ago', type: 'subscription' },
  ]
};

export default function AdminDashboard() {
  const [stats, setStats] = useState(mockStats);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200"></div>
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent absolute top-0 left-0"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="flex items-center justify-between relative">
        <div className="relative">
          <h1 className="text-6xl font-black gradient-text mb-4 relative">
            Admin Dashboard
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          </h1>
          <p className="text-gray-600 text-xl font-medium">Overview of system performance and user activity</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="px-6 py-3 bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 text-green-800 rounded-2xl text-base font-bold shadow-xl shadow-green-500/20 border border-green-200/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 shimmer"></div>
            <div className="relative z-10 flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 animate-pulse" />
              All Systems Operational
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="stat-card group relative">
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <div className="p-4 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500 transform group-hover:scale-110">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>
            <ArrowUpRight className="h-6 w-6 text-green-500 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">Total Users</p>
            <p className="text-4xl font-black text-gray-900 mb-4">{stats.totalUsers.toLocaleString()}</p>
            <div className="flex items-center">
              <span className="text-green-600 text-sm font-bold bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-2 rounded-xl shadow-lg">
                +12% from last month
              </span>
            </div>
          </div>
        </div>

        <div className="stat-card group relative">
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <div className="p-4 bg-gradient-to-br from-green-500 via-emerald-600 to-green-600 rounded-2xl shadow-2xl shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-500 transform group-hover:scale-110">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>
            <ArrowUpRight className="h-6 w-6 text-green-500 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">Active Users</p>
            <p className="text-4xl font-black text-gray-900 mb-4">{stats.activeUsers.toLocaleString()}</p>
            <div className="flex items-center">
              <span className="text-green-600 text-sm font-bold bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-2 rounded-xl shadow-lg">
                +8% from last week
              </span>
            </div>
          </div>
        </div>

        <div className="stat-card group relative">
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <div className="p-4 bg-gradient-to-br from-purple-500 via-violet-600 to-purple-600 rounded-2xl shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500 transform group-hover:scale-110">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="absolute inset-0 bg-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>
            <ArrowUpRight className="h-6 w-6 text-green-500 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">Total Workouts</p>
            <p className="text-4xl font-black text-gray-900 mb-4">{stats.totalWorkouts.toLocaleString()}</p>
            <div className="flex items-center">
              <span className="text-blue-600 text-sm font-bold bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-2 rounded-xl shadow-lg">
                +156 today
              </span>
            </div>
          </div>
        </div>

        <div className="stat-card group relative">
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <div className="p-4 bg-gradient-to-br from-orange-500 via-amber-600 to-orange-600 rounded-2xl shadow-2xl shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all duration-500 transform group-hover:scale-110">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="absolute inset-0 bg-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>
            <Clock className="h-6 w-6 text-orange-500 animate-pulse" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">Appointments Today</p>
            <p className="text-4xl font-black text-gray-900 mb-4">{stats.appointmentsToday}</p>
            <div className="flex items-center">
              <span className="text-orange-600 text-sm font-bold bg-gradient-to-r from-orange-100 to-amber-100 px-3 py-2 rounded-xl shadow-lg">
                5 pending approval
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* User Growth Chart */}
        <div className="lg:col-span-2 card relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-gray-900">User Growth Analytics</h3>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 rounded-2xl shadow-lg">
              <Star className="h-6 w-6 text-yellow-500 animate-pulse" />
              <span className="text-sm font-bold text-yellow-700">Premium Feature</span>
            </div>
          </div>
          <div className="h-96 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl flex items-center justify-center border-4 border-dashed border-blue-300/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5"></div>
            <div className="text-center relative z-10">
              <div className="relative mb-6">
                <TrendingUp className="h-20 w-20 text-blue-400 mx-auto animate-pulse" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl"></div>
              </div>
              <p className="text-xl font-bold text-gray-700 mb-2">Interactive Chart Coming Soon</p>
              <p className="text-base text-gray-600 font-medium">Real-time analytics and insights</p>
              <div className="mt-6 flex justify-center space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-gray-900">Live Activity</h3>
            <div className="relative">
              <Zap className="h-6 w-6 text-yellow-500 animate-pulse" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg animate-ping"></div>
            </div>
          </div>
          <div className="space-y-6">
            {stats.recentActivity.map((activity, index) => (
              <div key={activity.id} className="activity-item group">
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex-shrink-0 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold text-gray-900 truncate group-hover:text-blue-700 transition-colors">{activity.user}</p>
                  <p className="text-sm text-gray-600 font-medium">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-500 font-bold bg-gray-100 px-2 py-1 rounded-lg">{activity.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button className="w-full text-blue-600 text-base font-bold hover:text-blue-700 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-50 to-indigo-50 py-3 rounded-2xl hover:shadow-lg">
              View all activity →
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card relative overflow-hidden">
        <div className="flex items-center mb-10">
          <div className="relative mr-4">
            <Shield className="h-8 w-8 text-blue-600 relative z-10" />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          <h3 className="text-3xl font-black text-gray-900">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <button className="btn-primary group flex items-center justify-center space-x-4 relative overflow-hidden">
            <div className="relative">
              <UserPlus className="h-6 w-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10" />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            </div>
            <span className="text-lg font-bold">Add New User</span>
          </button>
          <button className="btn-secondary group flex items-center justify-center space-x-4 relative overflow-hidden">
            <div className="relative">
              <Download className="h-6 w-6 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300 relative z-10" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            </div>
            <span className="text-lg font-bold">Export User Data</span>
          </button>
          <button className="btn-secondary group flex items-center justify-center space-x-4 relative overflow-hidden">
            <div className="relative">
              <Database className="h-6 w-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10" />
              <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            </div>
            <span className="text-lg font-bold">System Backup</span>
          </button>
        </div>
      </div>
    </div>
  );
} 