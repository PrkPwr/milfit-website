import { Shield, Users, Settings, BarChart3, FileText, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>
      <div className="floating-orb floating-orb-3"></div>
      
      {/* Admin Header */}
      <header className="admin-header sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-blue-500/25 transform hover:scale-110 transition-all duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div className="pulse-ring"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">MilFIT Admin</h1>
                <p className="text-sm text-gray-600 font-medium">Administrative Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-semibold hover:scale-105 transform"
              >
                Back to Site
              </Link>
              <button className="btn-secondary text-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative z-10">
        {/* Sidebar Navigation */}
        <nav className="w-80 bg-white/70 backdrop-blur-xl shadow-2xl min-h-screen border-r border-white/30 relative">
          <div className="p-8">
            <div className="mb-10">
              <div className="p-6 bg-gradient-to-br from-blue-100/80 via-indigo-100/60 to-purple-100/40 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 shimmer"></div>
                <div className="relative z-10">
                  <p className="text-base font-bold text-blue-800">Welcome back, Admin!</p>
                  <p className="text-sm text-blue-700 mt-1">System running smoothly ✨</p>
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-700 font-semibold">All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
            
            <ul className="space-y-4">
              <li>
                <Link href="/admin" className="sidebar-link active">
                  <div className="relative">
                    <BarChart3 className="h-6 w-6" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg"></div>
                  </div>
                  <span>Dashboard</span>
                </Link>
              </li>
              
              <li>
                <Link href="/admin/users" className="sidebar-link">
                  <div className="relative">
                    <Users className="h-6 w-6" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span>User Management</span>
                </Link>
              </li>
              
              <li>
                <Link href="/admin/content" className="sidebar-link">
                  <div className="relative">
                    <FileText className="h-6 w-6" />
                    <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span>Content Management</span>
                </Link>
              </li>
              
              <li>
                <Link href="/admin/appointments" className="sidebar-link">
                  <div className="relative">
                    <Calendar className="h-6 w-6" />
                    <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span>Appointments</span>
                </Link>
              </li>
              
              <li>
                <Link href="/admin/settings" className="sidebar-link">
                  <div className="relative">
                    <Settings className="h-6 w-6" />
                    <div className="absolute inset-0 bg-pink-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span>System Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-10 relative">
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 