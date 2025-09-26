import { Routes } from '@angular/router';

export const routes: Routes = [
  // Public routes
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (m) => m.ServicesComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'book',
    loadComponent: () =>
      import('./pages/book/book.component').then((m) => m.BookComponent),
  },

  // Auth routes
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'patient',
        loadComponent: () =>
          import('./pages/auth/patient-dashboard/patient-dashboard.component').then(
            (m) => m.PatientDashboardComponent
          ),
        canActivate: [() => import('./guards/auth.guard').then(m => m.roleGuard(['patient']))]
      },
      {
        path: 'staff',
        loadComponent: () =>
          import('./pages/auth/staff-dashboard/staff-dashboard.component').then(
            (m) => m.StaffDashboardComponent
          ),
        canActivate: [() => import('./guards/auth.guard').then(m => m.roleGuard(['staff']))]
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./pages/auth/admin-dashboard/admin-dashboard.component').then(
            (m) => m.AdminDashboardComponent
          ),
        canActivate: [() => import('./guards/auth.guard').then(m => m.roleGuard(['admin']))]
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },

  // Fallback
  { path: '**', redirectTo: '/home' },
];
