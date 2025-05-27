'use client';

import { useState, useEffect } from 'react';
import { Users, Activity, Calendar, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

// Mock data - replace with real API calls
const mockStats = {
  totalUsers: 1247,
  activeUsers: 892,
  totalWorkouts: 15634,
  appointmentsToday: 23,
  systemHealth: 'healthy',
  recentActivity: [
    { id: 1, user: 'John Smith', action: 'Completed workout', time: '2 minutes ago' },
    { id: 2, user: 'Sarah Johnson', action: 'Scheduled appointment', time: '5 minutes ago' },
    { id: 3, user: 'Mike Wilson', action: 'Updated profile', time: '12 minutes ago' },
    { id: 4, user: 'Emma Davis', action: 'Started premium trial', time: '18 minutes ago' },
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of system performance and user activity</p>
      </div>

      {/* System Health Alert */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          <span className="text-green-800 font-medium">System Status: All systems operational</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
            </div>
            <Users className="h-12 w-12 text-navy-600" />
          </div>
          <div className="mt-4">
            <span className="text-green-600 text-sm font-medium">+12% from last month</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-3xl font-bold text-gray-900">{stats.activeUsers.toLocaleString()}</p>
            </div>
            <Activity className="h-12 w-12 text-green-600" />
          </div>
          <div className="mt-4">
            <span className="text-green-600 text-sm font-medium">+8% from last week</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Workouts</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalWorkouts.toLocaleString()}</p>
            </div>
            <TrendingUp className="h-12 w-12 text-blue-600" />
          </div>
          <div className="mt-4">
            <span className="text-green-600 text-sm font-medium">+156 today</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Appointments Today</p>
              <p className="text-3xl font-bold text-gray-900">{stats.appointmentsToday}</p>
            </div>
            <Calendar className="h-12 w-12 text-purple-600" />
          </div>
          <div className="mt-4">
            <span className="text-gray-600 text-sm font-medium">5 pending approval</span>
          </div>
        </div>
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Growth Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart placeholder - integrate with Recharts</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {stats.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-navy-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="text-navy-600 text-sm font-medium hover:text-navy-700">
              View all activity →
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary text-center">
            Add New User
          </button>
          <button className="btn-secondary text-center">
            Export User Data
          </button>
          <button className="btn-secondary text-center">
            System Backup
          </button>
        </div>
      </div>
    </div>
  );
} 