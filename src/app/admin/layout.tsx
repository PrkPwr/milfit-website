import { Shield, Users, Settings, BarChart3, FileText, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-navy-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">MilFIT Admin</h1>
                <p className="text-sm text-gray-500">Administrative Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-navy-600 transition-colors">
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
        <nav className="w-64 bg-white shadow-sm min-h-screen border-r border-gray-200">
          <div className="p-6">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/admin" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-navy-50 hover:text-navy-600 transition-colors"
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  href="/admin/users" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-navy-50 hover:text-navy-600 transition-colors"
                >
                  <Users className="h-5 w-5" />
                  <span>User Management</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  href="/admin/content" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-navy-50 hover:text-navy-600 transition-colors"
                >
                  <FileText className="h-5 w-5" />
                  <span>Content Management</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  href="/admin/appointments" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-navy-50 hover:text-navy-600 transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Appointments</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  href="/admin/settings" 
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-navy-50 hover:text-navy-600 transition-colors"
                >
                  <Settings className="h-5 w-5" />
                  <span>System Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
} 