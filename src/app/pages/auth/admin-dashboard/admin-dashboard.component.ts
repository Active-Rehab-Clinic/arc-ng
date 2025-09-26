import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '@services/appointment.service';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { Appointment } from '@models/appointment.model';
import { User } from '@models/user.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  appointments: Appointment[] = [];
  loading = true;
  showCreateUser = signal(false);
  showUserList = signal(false);
  userForm: FormGroup;
  isCreatingUser = signal(false);
  userMessage = signal('');
  userSuccess = signal(false);
  users: User[] = [];
  loadingUsers = signal(false);

  constructor(
    private appointmentService: AppointmentService,
    public authService: AuthService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['patient', [Validators.required]],
    });
  }

  async ngOnInit() {
    // Check if user is authenticated
    const authState = this.authService.authState();
    console.log('Auth state:', authState);

    if (!authState.isAuthenticated) {
      console.log('User not authenticated, redirecting to login');
      this.router.navigate(['/auth/login']);
      return;
    }

    try {
      this.appointments = await this.appointmentService.getAllAppointments();
    } catch (error) {
      console.error('Error loading appointments:', error);
    } finally {
      this.loading = false;
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      case 'completed':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  }

  formatDate(date: any): string {
    if (!date) return 'N/A';

    // Handle Firestore Timestamp
    if (date.toDate && typeof date.toDate === 'function') {
      return date.toDate().toLocaleDateString();
    }

    // Handle regular Date object
    if (date instanceof Date) {
      return date.toLocaleDateString();
    }

    return 'N/A';
  }

  formatDateTime(date: any): string {
    if (!date) return 'N/A';

    // Handle Firestore Timestamp
    if (date.toDate && typeof date.toDate === 'function') {
      const jsDate = date.toDate();
      return (
        jsDate.toLocaleDateString() +
        ' ' +
        jsDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    }

    // Handle regular Date object
    if (date instanceof Date) {
      return (
        date.toLocaleDateString() +
        ' ' +
        date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    }

    return 'N/A';
  }

  formatTime(time: string): string {
    if (!time) return 'N/A';

    // Convert 24-hour format to 12-hour AM/PM
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;

    return `${displayHour}:${minutes} ${ampm}`;
  }

  getAppointmentCount(): number {
    return this.appointments.length;
  }

  getPendingCount(): number {
    return this.appointments.filter(
      (apt) => (apt.status || 'pending') === 'pending'
    ).length;
  }

  getConfirmedCount(): number {
    return this.appointments.filter((apt) => apt.status === 'confirmed').length;
  }

  getCompletedCount(): number {
    return this.appointments.filter((apt) => apt.status === 'completed').length;
  }

  toggleCreateUser() {
    this.showCreateUser.set(!this.showCreateUser());
    this.userMessage.set('');
    this.userForm.reset();
    this.userForm.patchValue({ role: 'patient' });
  }

  async createUser() {
    if (this.userForm.invalid) return;

    this.isCreatingUser.set(true);
    this.userMessage.set('');

    try {
      const { name, email, password, role } = this.userForm.value;
      await this.authService.register(email, password, name, role);

      this.userSuccess.set(true);
      this.userMessage.set(
        `${
          role.charAt(0).toUpperCase() + role.slice(1)
        } user created successfully!`
      );
      this.userForm.reset();
      this.userForm.patchValue({ role: 'patient' });
    } catch (error: any) {
      this.userSuccess.set(false);
      this.userMessage.set(
        error.message || 'Failed to create user. Please try again.'
      );
    } finally {
      this.isCreatingUser.set(false);
    }
  }

  async toggleUserList() {
    this.showUserList.set(!this.showUserList());

    if (this.showUserList() && this.users.length === 0) {
      await this.loadUsers();
    }
  }

  async loadUsers() {
    this.loadingUsers.set(true);
    try {
      this.users = await this.userService.getAllUsers();
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      this.loadingUsers.set(false);
    }
  }

  getRoleColor(role: string): string {
    switch (role) {
      case 'admin':
        return 'text-red-600 bg-red-100';
      case 'staff':
        return 'text-blue-600 bg-blue-100';
      case 'patient':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  }

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/auth/login']);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}
