import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppointmentService } from '@services/appointment.service';
import { AuthService } from '@services/auth.service';
import { Appointment } from '@models/appointment.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  appointments: Appointment[] = [];
  loading = true;

  constructor(
    private appointmentService: AppointmentService,
    public authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    const authState = this.authService.authState();
    if (!authState.isAuthenticated) {
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

  getAppointmentCount(): number { return this.appointments.length; }
  getPendingCount(): number { return this.appointments.filter(apt => (apt.status || 'pending') === 'pending').length; }
  getConfirmedCount(): number { return this.appointments.filter(apt => apt.status === 'confirmed').length; }
  getCompletedCount(): number { return this.appointments.filter(apt => apt.status === 'completed').length; }

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/auth/login']);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}
