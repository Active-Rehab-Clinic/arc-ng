import { Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';

export const patientRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.PatientDashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'appointments',
    loadComponent: () => import('./appointments/appointments.component').then(m => m.PatientAppointmentsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.PatientProfileComponent),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];