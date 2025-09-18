import { Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { RoleGuard } from '../../guards/role.guard';

export const adminRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.AdminDashboardComponent),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin', 'staff'] }
  },
  {
    path: 'appointments',
    loadComponent: () => import('./appointments/appointments.component').then(m => m.AdminAppointmentsComponent),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin', 'staff'] }
  },
  {
    path: 'patients',
    loadComponent: () => import('./patients/patients.component').then(m => m.AdminPatientsComponent),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin', 'staff'] }
  },
  {
    path: 'staff',
    loadComponent: () => import('./staff/staff.component').then(m => m.AdminStaffComponent),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] }
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];