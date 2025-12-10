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
import { ServicesStore } from '@stores/services.store';
import { Appointment } from '@models/appointment.model';
import { Service } from '@models/service.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  paginatedAppointments: Appointment[] = [];
  loading = true;
  showCreateAppointment = signal(false);
  appointmentForm: FormGroup;
  isCreatingAppointment = signal(false);
  appointmentMessage = signal('');
  appointmentSuccess = signal(false);
  services: Service[];
  timeSlots: { value: string; label: string }[];
  minDate = signal('');

  // Pagination
  currentPage = signal(1);
  itemsPerPage = signal(25);
  totalPages = signal(1);

  // Search and Filter
  searchTerm = signal('');
  statusFilter = signal<string>('all');
  dateFilter = signal<string>('all');

  constructor(
    private appointmentService: AppointmentService,
    public authService: AuthService,
    private servicesStore: ServicesStore,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.services = this.servicesStore.getServices();
    this.timeSlots = this.servicesStore.getTimeSlots();

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    this.minDate.set(today.toISOString().split('T')[0]);

    this.appointmentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phone: ['', [Validators.required]],
      age: ['', [Validators.min(1), Validators.max(120)]],
      gender: [''],
      service: ['', [Validators.required]],
      visitType: ['clinic', [Validators.required]],
      address: [''],
      preferredDate: [
        tomorrow.toISOString().split('T')[0],
        [Validators.required],
      ],
      preferredTime: ['10:00', [Validators.required]],
      message: [''],
      status: ['pending', [Validators.required]],
    });

    // Add conditional validation for address when home visit is selected
    this.appointmentForm
      .get('visitType')
      ?.valueChanges.subscribe((visitType) => {
        const addressControl = this.appointmentForm.get('address');
        if (visitType === 'home') {
          addressControl?.setValidators([Validators.required]);
        } else {
          addressControl?.clearValidators();
        }
        addressControl?.updateValueAndValidity();
      });
  }

  async ngOnInit() {
    const authState = this.authService.authState();
    if (!authState.isAuthenticated) {
      this.router.navigate(['/auth/login']);
      return;
    }

    try {
      this.appointments = await this.appointmentService.getAllAppointments();
      this.applyFilters();
    } catch (error) {
      console.error('Error loading appointments:', error);
    } finally {
      this.loading = false;
    }
  }

  applyFilters() {
    let filtered = [...this.appointments];

    // Apply search filter
    const search = this.searchTerm().toLowerCase();
    if (search) {
      filtered = filtered.filter(
        (apt) =>
          apt.name?.toLowerCase().includes(search) ||
          apt.email?.toLowerCase().includes(search) ||
          apt.phone?.includes(search) ||
          apt.service?.toLowerCase().includes(search)
      );
    }

    // Apply status filter
    const status = this.statusFilter();
    if (status !== 'all') {
      filtered = filtered.filter((apt) => (apt.status || 'pending') === status);
    }

    // Apply date filter
    const dateFilterValue = this.dateFilter();
    if (dateFilterValue !== 'all') {
      filtered = filtered.filter((apt) => {
        const appointmentDate = new Date(apt.preferredDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        switch (dateFilterValue) {
          case 'today':
            const todayEnd = new Date(today);
            todayEnd.setHours(23, 59, 59, 999);
            return appointmentDate >= today && appointmentDate <= todayEnd;

          case 'tomorrow':
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            const tomorrowEnd = new Date(tomorrow);
            tomorrowEnd.setHours(23, 59, 59, 999);
            return (
              appointmentDate >= tomorrow && appointmentDate <= tomorrowEnd
            );

          case 'this-week':
            const weekStart = new Date(today);
            const dayOfWeek = today.getDay();
            const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
            weekStart.setDate(today.getDate() + diff);
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);
            weekEnd.setHours(23, 59, 59, 999);
            return appointmentDate >= weekStart && appointmentDate <= weekEnd;

          case 'this-month':
            const monthStart = new Date(
              today.getFullYear(),
              today.getMonth(),
              1
            );
            const monthEnd = new Date(
              today.getFullYear(),
              today.getMonth() + 1,
              0
            );
            monthEnd.setHours(23, 59, 59, 999);
            return appointmentDate >= monthStart && appointmentDate <= monthEnd;

          case 'next-month':
            const nextMonthStart = new Date(
              today.getFullYear(),
              today.getMonth() + 1,
              1
            );
            const nextMonthEnd = new Date(
              today.getFullYear(),
              today.getMonth() + 2,
              0
            );
            nextMonthEnd.setHours(23, 59, 59, 999);
            return (
              appointmentDate >= nextMonthStart &&
              appointmentDate <= nextMonthEnd
            );

          case 'past':
            return appointmentDate < today;

          default:
            return true;
        }
      });
    }

    this.filteredAppointments = filtered;
    this.totalPages.set(Math.ceil(filtered.length / this.itemsPerPage()));
    this.updatePagination();
  }

  updatePagination() {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    const end = start + this.itemsPerPage();
    this.paginatedAppointments = this.filteredAppointments.slice(start, end);
  }

  onSearchChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
    this.currentPage.set(1);
    this.applyFilters();
  }

  onStatusFilterChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.statusFilter.set(value);
    this.currentPage.set(1);
    this.applyFilters();
  }

  onDateFilterChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.dateFilter.set(value);
    this.currentPage.set(1);
    this.applyFilters();
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.updatePagination();
    }
  }

  nextPage() {
    this.goToPage(this.currentPage() + 1);
  }

  previousPage() {
    this.goToPage(this.currentPage() - 1);
  }

  getPageNumbers(): number[] {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push(-1); // ellipsis
        pages.push(total);
      } else if (current >= total - 3) {
        pages.push(1);
        pages.push(-1);
        for (let i = total - 4; i <= total; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push(-1);
        for (let i = current - 1; i <= current + 1; i++) pages.push(i);
        pages.push(-1);
        pages.push(total);
      }
    }

    return pages;
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'status-pending';
      case 'confirmed':
        return 'status-confirmed';
      case 'cancelled':
        return 'status-cancelled';
      case 'completed':
        return 'status-completed';
      default:
        return 'status-pending';
    }
  }

  getInitials(name: string): string {
    if (!name) return '?';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
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

  async updateStatus(
    appointmentId: string,
    newStatus: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  ) {
    try {
      await this.appointmentService.updateAppointmentStatus(
        appointmentId,
        newStatus
      );

      // Update local state
      const appointment = this.appointments.find(
        (apt) => apt.id === appointmentId
      );
      if (appointment) {
        appointment.status = newStatus;
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update appointment status. Please try again.');
    }
  }

  toggleCreateAppointment() {
    this.showCreateAppointment.set(!this.showCreateAppointment());
    this.appointmentMessage.set('');
    if (this.showCreateAppointment()) {
      this.appointmentForm.reset({
        visitType: 'clinic',
        status: 'pending',
        preferredDate: new Date(Date.now() + 86400000)
          .toISOString()
          .split('T')[0],
        preferredTime: '10:00',
      });
    }
  }

  async createAppointment() {
    if (this.appointmentForm.invalid) return;
    this.isCreatingAppointment.set(true);
    this.appointmentMessage.set('');

    try {
      const appointmentData: Appointment = {
        ...this.appointmentForm.value,
        createdBy: this.authService.authState().user?.id || 'admin',
      };
      const appointmentId = await this.appointmentService.createAppointment(
        appointmentData
      );
      this.appointmentSuccess.set(true);
      this.appointmentMessage.set('Appointment created successfully!');
      this.appointmentForm.reset({
        visitType: 'clinic',
        status: 'pending',
        preferredDate: new Date(Date.now() + 86400000)
          .toISOString()
          .split('T')[0],
        preferredTime: '10:00',
      });

      // Reload appointments
      this.appointments = await this.appointmentService.getAllAppointments();
      this.applyFilters();
    } catch (error: any) {
      this.appointmentSuccess.set(false);
      this.appointmentMessage.set(
        error.message || 'Failed to create appointment. Please try again.'
      );
    } finally {
      this.isCreatingAppointment.set(false);
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
