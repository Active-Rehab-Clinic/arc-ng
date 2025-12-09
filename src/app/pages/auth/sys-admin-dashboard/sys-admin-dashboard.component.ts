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
import { ServicesStore } from '@stores/services.store';
import { Appointment } from '@models/appointment.model';
import { User } from '@models/user.model';

@Component({
  selector: 'app-sys-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sys-admin-dashboard.component.html',
  styleUrl: './sys-admin-dashboard.component.scss',
})
export class SysAdminDashboardComponent implements OnInit {
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  paginatedAppointments: Appointment[] = [];
  loading = true;
  showCreateUser = signal(false);
  showUserList = signal(false);
  showPasswordField = signal(false);
  showCreateAppointment = signal(false);
  userForm: FormGroup;
  appointmentForm: FormGroup;
  isCreatingUser = signal(false);
  isCreatingAppointment = signal(false);
  userMessage = signal('');
  appointmentMessage = signal('');
  userSuccess = signal(false);
  appointmentSuccess = signal(false);
  users: User[] = [];
  loadingUsers = signal(false);
  services: any[];
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
    private userService: UserService,
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

    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['patient', [Validators.required]],
    });

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

  getRoleClass(role: string): string {
    switch (role.toLowerCase()) {
      case 'sys-admin':
        return 'role-sys-admin';
      case 'admin':
        return 'role-admin';
      case 'staff':
        return 'role-staff';
      case 'patient':
        return 'role-patient';
      default:
        return 'role-patient';
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
    if (date.toDate && typeof date.toDate === 'function') {
      return date.toDate().toLocaleDateString();
    }
    if (date instanceof Date) {
      return date.toLocaleDateString();
    }
    return 'N/A';
  }

  formatDateTime(date: any): string {
    if (!date) return 'N/A';
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
    this.showPasswordField.set(false);
    this.userForm.reset();
    this.userForm.patchValue({ role: '' });
  }

  togglePasswordField() {
    this.showPasswordField.set(!this.showPasswordField());
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
      case 'sys-admin':
        return 'text-purple-600 bg-purple-100';
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
        createdBy: this.authService.authState().user?.id || 'sys-admin',
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

  downloadCSV() {
    if (this.appointments.length === 0) return;

    // Define CSV headers
    const headers = [
      'Name',
      'Email',
      'Phone',
      'Age',
      'Gender',
      'Service',
      'Visit Type',
      'Address',
      'Preferred Date',
      'Preferred Time',
      'Status',
      'Message',
      'Booked On',
    ];

    // Convert appointments to CSV rows
    const rows = this.appointments.map((apt) => [
      apt.name || '',
      apt.email || '',
      apt.phone || '',
      apt.age?.toString() || '',
      apt.gender || '',
      apt.service || '',
      apt.visitType || '',
      apt.address || '',
      apt.preferredDate || '',
      apt.preferredTime || '',
      apt.status || 'pending',
      apt.message || '',
      this.formatDateTime(apt.createdAt),
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map((row) =>
        row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(',')
      ),
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().split('T')[0];

    link.setAttribute('href', url);
    link.setAttribute('download', `appointments_${timestamp}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
