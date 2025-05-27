# MilFIT Admin Website

A comprehensive administrative dashboard for the MilFIT Australian Defence Force fitness platform, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Admin Dashboard
- **Overview Statistics**: Real-time metrics for users, workouts, and appointments
- **System Health Monitoring**: API connectivity and database status
- **Recent Activity Feed**: Live updates of user actions
- **Quick Actions**: Common administrative tasks

### User Management
- **User Directory**: Complete list of all registered users
- **Advanced Filtering**: Search by name, email, service branch, and status
- **User Details**: View profiles, subscription status, and activity history
- **Bulk Actions**: Export user data and manage multiple users

### Content Management
- **Workout Library**: Manage fitness programs and exercises
- **Exercise Database**: Create and edit individual exercises
- **Media Library**: Upload and organize workout images and videos
- **Content Publishing**: Draft, publish, and archive workout content

### Appointment System
- **Calendar View**: Visual appointment scheduling interface
- **List Management**: Detailed appointment tracking and filtering
- **Status Management**: Confirm, reschedule, or cancel appointments
- **Officer Assignment**: Assign appointments to specific personnel

### System Settings
- **General Configuration**: Site settings and maintenance mode
- **Database Management**: Connection settings and backup controls
- **Email Configuration**: SMTP settings for notifications
- **Security Settings**: Password policies and session management
- **Notification Preferences**: Control system-wide alerts

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **API Integration**: Custom API client with error handling

## 🎨 Design System

### Color Palette
- **Navy**: Primary brand color for ADF Navy
- **Army**: Secondary color for Australian Army
- **Air Force**: Tertiary color for Royal Australian Air Force
- **Gold**: Accent color for highlights and CTAs

### Components
- **Cards**: Consistent container styling
- **Buttons**: Primary and secondary button variants
- **Forms**: Standardized input and validation styling
- **Tables**: Responsive data tables with sorting and filtering

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Navigate to website directory**:
   ```bash
   cd website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   NEXT_PUBLIC_API_URL=https://milfit.au/api/v1
   NEXT_PUBLIC_SITE_URL=https://milfit.au
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**:
   Navigate to `http://localhost:3000`

### Demo Access
- **Admin Login**: `http://localhost:3000/login`
- **Email**: `admin@milfit.au`
- **Password**: `admin123`

## 📁 Project Structure

```
website/
├── src/
│   ├── app/                    # Next.js 13+ App Router
│   │   ├── admin/             # Admin dashboard pages
│   │   │   ├── layout.tsx     # Admin layout with navigation
│   │   │   ├── page.tsx       # Dashboard overview
│   │   │   ├── users/         # User management
│   │   │   ├── content/       # Content management
│   │   │   ├── appointments/  # Appointment system
│   │   │   └── settings/      # System settings
│   │   ├── login/             # Authentication
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   ├── lib/                   # Utilities and API client
│   │   └── api.ts            # API client with all endpoints
│   └── types/                 # TypeScript definitions
│       └── api.ts            # API response types
├── public/                    # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Dependencies and scripts
```

## 🔌 API Integration

The website integrates with the MilFIT PHP backend API:

### API Client Features
- **Authentication**: JWT token management
- **Error Handling**: Comprehensive error responses
- **Type Safety**: Full TypeScript integration
- **Health Monitoring**: API connectivity testing

### Available Endpoints
- **Authentication**: Login, register, logout
- **Users**: Profile management, user listing
- **Workouts**: Program management, progress tracking
- **Appointments**: Scheduling and management
- **Subscriptions**: Status and billing

## 🔒 Security Features

- **Authentication**: JWT-based session management
- **Authorization**: Role-based access control
- **Input Validation**: Client-side and server-side validation
- **CORS Protection**: Configured for API security
- **Session Management**: Automatic token refresh

## 📱 Responsive Design

- **Mobile-First**: Optimized for all device sizes
- **Touch-Friendly**: Large tap targets and gestures
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: WCAG 2.1 compliance

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Configuration
Set production environment variables:
```env
NEXT_PUBLIC_API_URL=https://milfit.au/api/v1
NEXT_PUBLIC_SITE_URL=https://milfit.au
NODE_ENV=production
```

### Hosting Options
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Static site hosting with serverless functions
- **AWS**: EC2 or Elastic Beanstalk deployment
- **Traditional Hosting**: Build static export

## 🧪 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: TypeScript validation

### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software for the Australian Defence Force.

## 🆘 Support

For technical support or questions:
- **Email**: support@milfit.au
- **Documentation**: Internal ADF documentation portal
- **Issues**: Report bugs through internal tracking system

---

**MilFIT Admin Dashboard** - Empowering ADF fitness management through technology. 