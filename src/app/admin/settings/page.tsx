'use client';

import { useState, useEffect } from 'react';
import { Save, RefreshCw, Database, Mail, Shield, Globe, Bell, Users } from 'lucide-react';

// Mock settings data - replace with real API calls
const mockSettings = {
  general: {
    siteName: 'MilFIT',
    siteDescription: 'Australian Defence Force Fitness Training Platform',
    timezone: 'Australia/Sydney',
    language: 'en',
    maintenanceMode: false
  },
  database: {
    host: 'localhost',
    port: '3306',
    name: 'milfit_db',
    connectionStatus: 'Connected',
    lastBackup: '2024-05-27 02:00:00'
  },
  email: {
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUser: 'noreply@milfit.au',
    smtpSsl: true,
    fromName: 'MilFIT System',
    fromEmail: 'noreply@milfit.au'
  },
  security: {
    sessionTimeout: 30,
    passwordMinLength: 8,
    requireSpecialChars: true,
    maxLoginAttempts: 5,
    twoFactorAuth: false
  },
  notifications: {
    emailNotifications: true,
    appointmentReminders: true,
    workoutReminders: true,
    systemAlerts: true
  }
};

export default function SystemSettings() {
  const [settings, setSettings] = useState(mockSettings);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSettingChange = (section: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
    setHasChanges(true);
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setHasChanges(false);
      // Show success message
    }, 2000);
  };

  const handleTestConnection = () => {
    // Test database connection
    alert('Testing database connection...');
  };

  const handleBackup = () => {
    // Trigger database backup
    alert('Starting database backup...');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
          <p className="text-gray-600 mt-2">Configure system-wide settings and preferences</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
          className={`btn-primary flex items-center space-x-2 ${
            !hasChanges || isSaving ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSaving ? (
            <RefreshCw className="h-5 w-5 animate-spin" />
          ) : (
            <Save className="h-5 w-5" />
          )}
          <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
        </button>
      </div>

      {/* Changes Alert */}
      {hasChanges && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-yellow-600 mr-2" />
            <span className="text-yellow-800 font-medium">You have unsaved changes</span>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('general')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'general'
                ? 'border-navy-500 text-navy-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Globe className="h-4 w-4 inline mr-2" />
            General
          </button>
          <button
            onClick={() => setActiveTab('database')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'database'
                ? 'border-navy-500 text-navy-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Database className="h-4 w-4 inline mr-2" />
            Database
          </button>
          <button
            onClick={() => setActiveTab('email')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'email'
                ? 'border-navy-500 text-navy-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Mail className="h-4 w-4 inline mr-2" />
            Email
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'security'
                ? 'border-navy-500 text-navy-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Shield className="h-4 w-4 inline mr-2" />
            Security
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'notifications'
                ? 'border-navy-500 text-navy-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Bell className="h-4 w-4 inline mr-2" />
            Notifications
          </button>
        </nav>
      </div>

      {/* Settings Content */}
      <div className="card">
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">General Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.general.siteName}
                  onChange={(e) => handleSettingChange('general', 'siteName', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timezone
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.general.timezone}
                  onChange={(e) => handleSettingChange('general', 'timezone', e.target.value)}
                >
                  <option value="Australia/Sydney">Australia/Sydney</option>
                  <option value="Australia/Melbourne">Australia/Melbourne</option>
                  <option value="Australia/Perth">Australia/Perth</option>
                  <option value="Australia/Brisbane">Australia/Brisbane</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Site Description
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.general.siteDescription}
                  onChange={(e) => handleSettingChange('general', 'siteDescription', e.target.value)}
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-navy-600 focus:ring-navy-500"
                    checked={settings.general.maintenanceMode}
                    onChange={(e) => handleSettingChange('general', 'maintenanceMode', e.target.checked)}
                  />
                  <span className="ml-2 text-sm text-gray-700">Enable Maintenance Mode</span>
                </label>
                <p className="text-sm text-gray-500 mt-1">
                  When enabled, only administrators can access the system
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'database' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Database Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Host
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.database.host}
                  onChange={(e) => handleSettingChange('database', 'host', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Port
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.database.port}
                  onChange={(e) => handleSettingChange('database', 'port', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Database Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.database.name}
                  onChange={(e) => handleSettingChange('database', 'name', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Connection Status
                </label>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {settings.database.connectionStatus}
                  </span>
                  <button
                    onClick={handleTestConnection}
                    className="btn-secondary text-sm"
                  >
                    Test Connection
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Database Backup</h4>
                    <p className="text-sm text-gray-500">Last backup: {settings.database.lastBackup}</p>
                  </div>
                  <button
                    onClick={handleBackup}
                    className="btn-secondary"
                  >
                    Create Backup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'email' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Email Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SMTP Host
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.email.smtpHost}
                  onChange={(e) => handleSettingChange('email', 'smtpHost', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SMTP Port
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.email.smtpPort}
                  onChange={(e) => handleSettingChange('email', 'smtpPort', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.email.fromName}
                  onChange={(e) => handleSettingChange('email', 'fromName', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.email.fromEmail}
                  onChange={(e) => handleSettingChange('email', 'fromEmail', e.target.value)}
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-navy-600 focus:ring-navy-500"
                    checked={settings.email.smtpSsl}
                    onChange={(e) => handleSettingChange('email', 'smtpSsl', e.target.checked)}
                  />
                  <span className="ml-2 text-sm text-gray-700">Use SSL/TLS</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Timeout (minutes)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.security.sessionTimeout}
                  onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password Minimum Length
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.security.passwordMinLength}
                  onChange={(e) => handleSettingChange('security', 'passwordMinLength', parseInt(e.target.value))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Login Attempts
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  value={settings.security.maxLoginAttempts}
                  onChange={(e) => handleSettingChange('security', 'maxLoginAttempts', parseInt(e.target.value))}
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-navy-600 focus:ring-navy-500"
                    checked={settings.security.requireSpecialChars}
                    onChange={(e) => handleSettingChange('security', 'requireSpecialChars', e.target.checked)}
                  />
                  <span className="ml-2 text-sm text-gray-700">Require Special Characters</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-navy-600 focus:ring-navy-500"
                    checked={settings.security.twoFactorAuth}
                    onChange={(e) => handleSettingChange('security', 'twoFactorAuth', e.target.checked)}
                  />
                  <span className="ml-2 text-sm text-gray-700">Enable Two-Factor Authentication</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Notification Settings</h3>
            
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-navy-600 focus:ring-navy-500"
                  checked={settings.notifications.emailNotifications}
                  onChange={(e) => handleSettingChange('notifications', 'emailNotifications', e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">Enable Email Notifications</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-navy-600 focus:ring-navy-500"
                  checked={settings.notifications.appointmentReminders}
                  onChange={(e) => handleSettingChange('notifications', 'appointmentReminders', e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">Send Appointment Reminders</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-navy-600 focus:ring-navy-500"
                  checked={settings.notifications.workoutReminders}
                  onChange={(e) => handleSettingChange('notifications', 'workoutReminders', e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">Send Workout Reminders</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-navy-600 focus:ring-navy-500"
                  checked={settings.notifications.systemAlerts}
                  onChange={(e) => handleSettingChange('notifications', 'systemAlerts', e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">Send System Alerts</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 