'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, Upload, Download, Search } from 'lucide-react';

// Mock workout data - replace with real API calls
const mockWorkouts = [
  {
    id: 1,
    name: 'Navy Basic Training',
    description: 'Fundamental fitness routine for Navy personnel',
    level: 'Beginner',
    location: 'Gym',
    duration: 45,
    exercises: 8,
    status: 'Published',
    lastModified: '2024-05-27',
    createdBy: 'Admin'
  },
  {
    id: 2,
    name: 'Army Combat Fitness',
    description: 'Advanced combat readiness training',
    level: 'Advanced',
    location: 'Park',
    duration: 60,
    exercises: 12,
    status: 'Published',
    lastModified: '2024-05-26',
    createdBy: 'PT Instructor'
  },
  {
    id: 3,
    name: 'Air Force Cardio Circuit',
    description: 'High-intensity cardiovascular training',
    level: 'Intermediate',
    location: 'Home',
    duration: 30,
    exercises: 6,
    status: 'Draft',
    lastModified: '2024-05-25',
    createdBy: 'Admin'
  },
  {
    id: 4,
    name: 'General Strength Training',
    description: 'Full-body strength building routine',
    level: 'Intermediate',
    location: 'Gym',
    duration: 50,
    exercises: 10,
    status: 'Published',
    lastModified: '2024-05-24',
    createdBy: 'Fitness Coach'
  }
];

export default function ContentManagement() {
  const [workouts, setWorkouts] = useState(mockWorkouts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('workouts');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredWorkouts = workouts.filter(workout => {
    const matchesSearch = 
      workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workout.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = filterLevel === 'All' || workout.level === filterLevel;
    const matchesStatus = filterStatus === 'All' || workout.status === filterStatus;
    
    return matchesSearch && matchesLevel && matchesStatus;
  });

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Archived': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
          <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600 mt-2">Manage workouts, exercises, and training content</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <Upload className="h-5 w-5" />
            <span>Import Content</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Create Workout</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('workouts')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'workouts'
                ? 'border-navy-500 text-navy-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Workouts
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'exercises'
                ? 'border-navy-500 text-navy-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Exercises
          </button>
          <button
            onClick={() => setActiveTab('media')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'media'
                ? 'border-navy-500 text-navy-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Media Library
          </button>
        </nav>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search workouts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Level Filter */}
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          {/* Status Filter */}
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Archived">Archived</option>
          </select>

          <button className="btn-secondary flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'workouts' && (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Workout
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Exercises
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Modified
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredWorkouts.map((workout) => (
                  <tr key={workout.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{workout.name}</div>
                        <div className="text-sm text-gray-500">{workout.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getLevelBadgeColor(workout.level)}`}>
                        {workout.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {workout.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {workout.duration} min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {workout.exercises}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(workout.status)}`}>
                        {workout.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {workout.lastModified}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-navy-600 hover:text-navy-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'exercises' && (
        <div className="card">
          <div className="text-center py-12">
            <Plus className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No exercises</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new exercise.</p>
            <div className="mt-6">
              <button className="btn-primary">
                Create Exercise
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'media' && (
        <div className="card">
          <div className="text-center py-12">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No media files</h3>
            <p className="mt-1 text-sm text-gray-500">Upload images and videos for your workouts.</p>
            <div className="mt-6">
              <button className="btn-primary">
                Upload Media
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 