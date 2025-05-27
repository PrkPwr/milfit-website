import { Shield, Users, Settings, BarChart3, FileText, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Admin Header */}
      <header className="admin-header sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">MilFIT Admin</h1>
                <p className="text-sm text-gray-600">Administrative Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Back to Site
              </Link>
              <button className="btn-secondary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-72 bg-white/80 backdrop-blur-lg shadow-xl min-h-screen border-r border-gray-200/50">
          <div className="p-6">
            <div className="mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <p className="text-sm font-medium text-blue-700">Welcome back!</p>
                <p className="text-xs text-blue-600">System running smoothly</p>
              </div>
            </div>
            
            <ul className="space-y-3">
              <li>
                <Link href="/admin" className="sidebar-link active">
                  <BarChart3 className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              
              <li>
                <Link href="/admin/users" className="sidebar-link">
                  <Users className="h-5 w-5" />
                  <span>User Management</span>
                </Link>
              </li>
              
              <li>
                <Link href="/admin/content" className="sidebar-link">
                  <FileText className="h-5 w-5" />
                  <span>Content Management</span>
                </Link>
              </li>
              
              <li>
                <Link href="/admin/appointments" className="sidebar-link">
                  <Calendar className="h-5 w-5" />
                  <span>Appointments</span>
                </Link>
              </li>
              
              <li>
                <Link href="/admin/settings" className="sidebar-link">
                  <Settings className="h-5 w-5" />
                  <span>System Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
          {children}
        </main>
      </div>
    </div>
  );
} 