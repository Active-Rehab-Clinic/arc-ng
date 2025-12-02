// Application Constants

export const APP_CONFIG = {
  name: 'Active Rehab Clinic',
  version: '1.0.0',
  description: 'Comprehensive physiotherapy clinic management system',
  contact: {
    phone: '9501199820',
    email: 'info@arcphysio.com',
    address: '123 Health Street, Medical District',
  },
  businessHours: {
    monday: { open: '08:00', close: '18:00' },
    tuesday: { open: '08:00', close: '18:00' },
    wednesday: { open: '08:00', close: '18:00' },
    thursday: { open: '08:00', close: '18:00' },
    friday: { open: '08:00', close: '18:00' },
    saturday: { open: '09:00', close: '16:00' },
    sunday: { open: null, close: null }, // Closed
  },
};

export const USER_ROLES = {
  PATIENT: 'patient',
  STAFF: 'staff',
  ADMIN: 'admin',
  SYS_ADMIN: 'sys-admin',
} as const;

export const APPOINTMENT_STATUS = {
  SCHEDULED: 'scheduled',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  NO_SHOW: 'no_show',
} as const;

export const SERVICE_CATEGORIES = {
  MANUAL_THERAPY: 'manual_therapy',
  EXERCISE_THERAPY: 'exercise_therapy',
  SPORTS_REHAB: 'sports_rehab',
  PAIN_MANAGEMENT: 'pain_management',
  PEDIATRIC: 'pediatric',
  GERIATRIC: 'geriatric',
} as const;

export const FORM_VALIDATION = {
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Please enter a valid email address',
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Please enter a valid phone number',
  },
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message:
      'Password must be at least 8 characters with uppercase, lowercase, number and special character',
  },
};

export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
  },
  appointments: {
    base: '/api/appointments',
    availability: '/api/appointments/availability',
    book: '/api/appointments/book',
  },
  users: {
    base: '/api/users',
    profile: '/api/users/profile',
    patients: '/api/users/patients',
    staff: '/api/users/staff',
  },
  services: {
    base: '/api/services',
    categories: '/api/services/categories',
  },
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'arc_auth_token',
  REFRESH_TOKEN: 'arc_refresh_token',
  USER_PREFERENCES: 'arc_user_preferences',
  THEME: 'arc_theme',
};

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
};

export const FLOWBITE_CONFIG = {
  theme: {
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
    },
    secondary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
  },
  components: {
    button: {
      sizes: ['sm', 'md', 'lg'],
      variants: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    modal: {
      sizes: ['sm', 'md', 'lg', 'xl'],
    },
    alert: {
      types: ['info', 'success', 'warning', 'danger'],
    },
  },
};

export const SERVICES_DATA = {
  categories: [
    {
      id: 'manual_therapy',
      name: 'Manual Therapy',
      description: 'Hands-on treatment techniques',
      icon: 'hands',
    },
    {
      id: 'exercise_therapy',
      name: 'Exercise Therapy',
      description: 'Therapeutic exercise programs',
      icon: 'dumbbell',
    },
    {
      id: 'sports_rehab',
      name: 'Sports Rehabilitation',
      description: 'Specialized sports injury recovery',
      icon: 'sports',
    },
    {
      id: 'pain_management',
      name: 'Pain Management',
      description: 'Comprehensive pain relief strategies',
      icon: 'shield',
    },
  ],
};

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
export type AppointmentStatus =
  (typeof APPOINTMENT_STATUS)[keyof typeof APPOINTMENT_STATUS];
export type ServiceCategory =
  (typeof SERVICE_CATEGORIES)[keyof typeof SERVICE_CATEGORIES];
export type NotificationType =
  (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];
