export interface Appointment {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  visitType?: 'clinic' | 'home';
  address?: string;
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt?: Date;
}
