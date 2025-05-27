import Link from 'next/link';
import { Shield, Users, BarChart3, Settings } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-gold" />
              <h1 className="text-2xl font-bold text-white">MilFIT</h1>
            </div>
            <nav className="flex space-x-6">
              <Link href="/login" className="text-white hover:text-gold transition-colors">
                Login
              </Link>
              <Link href="/register" className="btn-primary">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Australian Defence Force
            <span className="block text-gold">Fitness Training</span>
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Comprehensive fitness training and progress tracking designed specifically 
            for ADF personnel. Track your workouts, monitor progress, and achieve your fitness goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary text-lg px-8 py-4">
              Access Dashboard
            </Link>
            <Link href="/admin" className="btn-secondary text-lg px-8 py-4">
              Admin Portal
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Users className="h-12 w-12 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">User Management</h3>
            <p className="text-gray-200">
              Comprehensive user profiles with service-specific customization and progress tracking.
            </p>
          </div>
          
          <div className="card bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <BarChart3 className="h-12 w-12 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">Progress Analytics</h3>
            <p className="text-gray-200">
              Detailed analytics and reporting on workout completion and fitness improvements.
            </p>
          </div>
          
          <div className="card bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Settings className="h-12 w-12 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">Admin Controls</h3>
            <p className="text-gray-200">
              Complete administrative control over users, content, and system configuration.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 