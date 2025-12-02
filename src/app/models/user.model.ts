export interface User {
  id: string;
  email: string;
  name: string;
  role: 'patient' | 'staff' | 'admin' | 'sys-admin';
  createdAt?: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}