'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, User, MapPin, Plus, Edit, Trash2, Search, Filter } from 'lucide-react';

// Mock appointment data - replace with real API calls
const mockAppointments = [
  {
    id: 1,
    userName: 'John Smith',
    userEmail: 'john.smith@defence.gov.au',
    type: 'Fitness Assessment',
    date: '2024-05-28',
    time: '09:00',
    location: 'Base Gym',
    officer: 'PT Officer Johnson',
    status: 'Confirmed',
    notes: 'Initial fitness assessment for new recruit'
  },
  {
    id: 2,
    userName: 'Sarah Johnson',
    userEmail: 'sarah.johnson@defence.gov.au',
    type: 'Medical Assessment',
    date: '2024-05-28',
    time: '10:30',
    location: 'Medical Centre',
    officer: 'Dr. Williams',
    status: 'Pending',
    notes: 'Annual medical checkup'
  },
  {
    id: 3,
    userName: 'Mike Wilson',
    userEmail: 'mike.wilson@defence.gov.au',
    type: 'General Interview',
    date: '2024-05-29',
    time: '14:00',
    location: 'Admin Building',
    officer: 'Officer Brown',
    status: 'Confirmed',
    notes: 'Career progression discussion'
  },
  {
    id: 4,
    userName: 'Emma Davis',
    userEmail: 'emma.davis@defence.gov.au',
    type: 'Psych Assessment',
    date: '2024-05-30',
    time: '11:00',
    location: 'Psychology Unit',
    officer: 'Dr. Taylor',
    status: 'Cancelled',
    notes: 'Rescheduled due to illness'
  }
];

export default function AppointmentManagement() {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedDate, setSelectedDate] = useState('2024-05-28');
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'calendar'

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.officer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'All' || appointment.type === filterType;
    const matchesStatus = filterStatus === 'All' || appointment.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'Fitness Assessment': return 'bg-green-100 text-green-800';
      case 'Medical Assessment': return 'bg-blue-100 text-blue-800';
      case 'Psych Assessment': return 'bg-purple-100 text-purple-800';
      case 'General Interview': return 'bg-gray-100 text-gray-800';
      case 'Specialist Appointment': return 'bg-orange-100 text-orange-800';
      case 'Enlistment': return 'bg-navy-100 text-navy-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const appointmentsByDate = appointments.reduce((acc, appointment) => {
    if (!acc[appointment.date]) {
      acc[appointment.date] = [];
    }
    acc[appointment.date].push(appointment);
    return acc;
  }, {} as Record<string, typeof appointments>);

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
          <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
          <p className="text-gray-600 mt-2">Schedule and manage user appointments</p>
        </div>
        <div className="flex space-x-3">
          <div className="flex rounded-lg border border-gray-300">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                viewMode === 'list'
                  ? 'bg-navy-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                viewMode === 'calendar'
                  ? 'bg-navy-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Calendar View
            </button>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Schedule Appointment</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search appointments by name, email, or officer..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Type Filter */}
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Fitness Assessment">Fitness Assessment</option>
            <option value="Medical Assessment">Medical Assessment</option>
            <option value="Psych Assessment">Psych Assessment</option>
            <option value="General Interview">General Interview</option>
            <option value="Specialist Appointment">Specialist Appointment</option>
            <option value="Enlistment">Enlistment</option>
          </select>

          {/* Status Filter */}
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Completed">Completed</option>
          </select>

          {viewMode === 'calendar' && (
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          )}
        </div>
      </div>

      {/* Content based on view mode */}
      {viewMode === 'list' ? (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Officer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{appointment.userName}</div>
                        <div className="text-sm text-gray-500">{appointment.userEmail}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeBadgeColor(appointment.type)}`}>
                        {appointment.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        {appointment.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        {appointment.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        {appointment.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.officer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
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
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendar placeholder */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Calendar View</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Calendar component placeholder</p>
            </div>
          </div>

          {/* Daily appointments */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Appointments for {selectedDate}
            </h3>
            <div className="space-y-4">
              {appointmentsByDate[selectedDate]?.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{appointment.userName}</h4>
                      <p className="text-sm text-gray-600">{appointment.type}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {appointment.time}
                        <MapPin className="h-4 w-4 ml-3 mr-1" />
                        {appointment.location}
                      </div>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              )) || (
                <p className="text-gray-500 text-center py-8">No appointments scheduled for this date</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 