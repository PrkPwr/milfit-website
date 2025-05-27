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
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold gradient-text">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2 text-lg">Overview of system performance and user activity</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <CheckCircle className="h-4 w-4 inline mr-2" />
            All Systems Operational
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat-card group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
              <Users className="h-6 w-6 text-white" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Users</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalUsers.toLocaleString()}</p>
            <div className="mt-3 flex items-center">
              <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded-full">
                +12% from last month
              </span>
            </div>
          </div>
        </div>

        <div className="stat-card group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Active Users</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.activeUsers.toLocaleString()}</p>
            <div className="mt-3 flex items-center">
              <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded-full">
                +8% from last week
              </span>
            </div>
          </div>
        </div>

        <div className="stat-card group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Workouts</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalWorkouts.toLocaleString()}</p>
            <div className="mt-3 flex items-center">
              <span className="text-blue-600 text-sm font-semibold bg-blue-100 px-2 py-1 rounded-full">
                +156 today
              </span>
            </div>
          </div>
        </div>

        <div className="stat-card group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <Clock className="h-5 w-5 text-orange-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Appointments Today</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.appointmentsToday}</p>
            <div className="mt-3 flex items-center">
              <span className="text-orange-600 text-sm font-semibold bg-orange-100 px-2 py-1 rounded-full">
                5 pending approval
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Growth Chart */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">User Growth Analytics</h3>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-gray-600">Premium Feature</span>
            </div>
          </div>
          <div className="h-80 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-200">
            <div className="text-center">
              <TrendingUp className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Interactive Chart Coming Soon</p>
              <p className="text-sm text-gray-500 mt-2">Real-time analytics and insights</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Live Activity</h3>
            <Zap className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="space-y-4">
            {stats.recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-500 font-medium">{activity.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <button className="w-full text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
              View all activity →
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <div className="flex items-center mb-6">
          <Shield className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="btn-primary group flex items-center justify-center space-x-3">
            <UserPlus className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Add New User</span>
          </button>
          <button className="btn-secondary group flex items-center justify-center space-x-3">
            <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Export User Data</span>
          </button>
          <button className="btn-secondary group flex items-center justify-center space-x-3">
            <Database className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>System Backup</span>
          </button>
        </div>
      </div>
    </div>
  );
} 