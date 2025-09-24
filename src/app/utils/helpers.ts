import { APP_CONFIG, UserRole, AppointmentStatus } from './constants';

export class DateHelpers {
  static formatDate(
    date: Date | string,
    format: 'short' | 'long' | 'time' = 'short'
  ): string {
    const d = new Date(date);

    switch (format) {
      case 'short':
        return d.toLocaleDateString();
      case 'long':
        return d.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      case 'time':
        return d.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        });
      default:
        return d.toLocaleDateString();
    }
  }

  static isBusinessDay(date: Date): boolean {
    const dayOfWeek = date.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 6; // Monday to Saturday
  }

  static isBusinessHours(date: Date): boolean {
    const dayOfWeek = date.getDay();
    const hour = date.getHours();

    if (dayOfWeek === 0) return false; // Sunday

    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      // Monday to Friday
      return hour >= 8 && hour < 18;
    } else if (dayOfWeek === 6) {
      // Saturday
      return hour >= 9 && hour < 16;
    }

    return false;
  }

  static addBusinessDays(date: Date, days: number): Date {
    const result = new Date(date);
    let addedDays = 0;

    while (addedDays < days) {
      result.setDate(result.getDate() + 1);
      if (this.isBusinessDay(result)) {
        addedDays++;
      }
    }

    return result;
  }

  static getTimeSlots(date: Date, duration: number = 60): string[] {
    const slots: string[] = [];
    const dayOfWeek = date.getDay();

    let startHour: number;
    let endHour: number;

    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      // Monday to Friday
      startHour = 8;
      endHour = 18;
    } else if (dayOfWeek === 6) {
      // Saturday
      startHour = 9;
      endHour = 16;
    } else {
      return []; // Sunday - no slots
    }

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += duration) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute
          .toString()
          .padStart(2, '0')}`;
        slots.push(timeString);
      }
    }

    return slots;
  }
}

export class StringHelpers {
  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static titleCase(str: string): string {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }

  static slugify(str: string): string {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  static truncate(str: string, length: number, suffix: string = '...'): string {
    if (str.length <= length) return str;
    return str.substring(0, length) + suffix;
  }

  static formatPhoneNumber(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return phone;
  }

  static maskEmail(email: string): string {
    const [username, domain] = email.split('@');
    if (username.length <= 2) return email;

    const maskedUsername =
      username[0] +
      '*'.repeat(username.length - 2) +
      username[username.length - 1];
    return `${maskedUsername}@${domain}`;
  }
}

export class ValidationHelpers {
  static getErrorMessage(errors: any): string {
    if (!errors) return '';

    const errorKeys = Object.keys(errors);
    if (errorKeys.length === 0) return '';

    const firstError = errors[errorKeys[0]];
    return firstError.message || firstError || 'Invalid input';
  }

  static hasError(control: any, errorType: string): boolean {
    return control?.errors?.[errorType] && (control.dirty || control.touched);
  }
}

export class UserHelpers {
  static getDisplayName(user: {
    firstName?: string;
    lastName?: string;
    email?: string;
  }): string {
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }

    if (user.firstName) {
      return user.firstName;
    }

    return user.email || 'User';
  }

  static getInitials(user: {
    firstName?: string;
    lastName?: string;
    email?: string;
  }): string {
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }

    if (user.firstName) {
      return user.firstName[0].toUpperCase();
    }

    if (user.email) {
      return user.email[0].toUpperCase();
    }

    return 'U';
  }

  static hasPermission(userRole: UserRole, requiredRole: UserRole): boolean {
    const roleHierarchy = {
      patient: 1,
      staff: 2,
      admin: 3,
    };

    return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
  }
}

export class AppointmentHelpers {
  static getStatusColor(status: AppointmentStatus): string {
    const colorMap = {
      scheduled: 'bg-blue-100 text-blue-800',
      confirmed: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800',
      no_show: 'bg-yellow-100 text-yellow-800',
    };

    return colorMap[status] || 'bg-gray-100 text-gray-800';
  }

  static getStatusLabel(status: AppointmentStatus): string {
    const labelMap = {
      scheduled: 'Scheduled',
      confirmed: 'Confirmed',
      completed: 'Completed',
      cancelled: 'Cancelled',
      no_show: 'No Show',
    };

    return labelMap[status] || status;
  }

  static canCancel(appointment: {
    status: AppointmentStatus;
    dateTime: Date | string;
  }): boolean {
    const appointmentDate = new Date(appointment.dateTime);
    const now = new Date();
    const hoursUntilAppointment =
      (appointmentDate.getTime() - now.getTime()) / (1000 * 60 * 60);

    return (
      (appointment.status === 'scheduled' ||
        appointment.status === 'confirmed') &&
      hoursUntilAppointment > 24 // Must cancel at least 24 hours in advance
    );
  }

  static canReschedule(appointment: {
    status: AppointmentStatus;
    dateTime: Date | string;
  }): boolean {
    return this.canCancel(appointment); // Same rules as cancellation
  }
}

export class StorageHelpers {
  static setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  static getItem<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue || null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue || null;
    }
  }

  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }

  static clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
}

export class UrlHelpers {
  static buildQueryString(params: Record<string, any>): string {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        searchParams.append(key, String(value));
      }
    });

    return searchParams.toString();
  }

  static parseQueryString(queryString: string): Record<string, string> {
    const params: Record<string, string> = {};
    const searchParams = new URLSearchParams(queryString);

    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  }
}
