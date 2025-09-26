import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authState().isAuthenticated) {
    return true;
  }

  router.navigate(['/auth/login']);
  return false;
};

export const roleGuard = (allowedRoles: string[]) => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const user = authService.authState().user;
    
    if (!user) {
      router.navigate(['/auth/login']);
      return false;
    }

    if (allowedRoles.includes(user.role)) {
      return true;
    }

    router.navigate(['/auth/login']);
    return false;
  };
};