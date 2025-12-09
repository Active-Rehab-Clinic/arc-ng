export interface Appointment {
  id?: string;
  name: string;
  email: string;
  phone: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
  service: string;
  preferredDate: string;
  preferredTime: string;
  visitType?: 'clinic' | 'home';
  address?: string;
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt?: Date;
  createdBy?: string; // Track who created the appointment (user ID or 'patient')
}
