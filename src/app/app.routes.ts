import { Routes } from '@angular/router';

export const routes: Routes = [
  // Public routes
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'book', loadComponent: () => import('./pages/book/book.component').then(m => m.BookComponent) },
  
  // Auth routes
  { path: 'login', loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent) },
  { path: 'staff/login', loadComponent: () => import('./pages/auth/staff-login/staff-login.component').then(m => m.StaffLoginComponent) },
  
  // Patient routes (protected)
  { 
    path: 'patient', 
    loadChildren: () => import('./pages/patient/patient.routes').then(m => m.patientRoutes)
  },
  
  // Admin routes (protected)
  { 
    path: 'admin', 
    loadChildren: () => import('./pages/admin/admin.routes').then(m => m.adminRoutes)
  },
  
  // Fallback
  { path: '**', redirectTo: '/home' }
];
