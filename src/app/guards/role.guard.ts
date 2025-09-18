import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = this.authService.getCurrentUser();
    const requiredRoles = route.data['roles'] as string[];
    
    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }
    
    if (requiredRoles && !requiredRoles.includes(user.role)) {
      this.router.navigate(['/']);
      return false;
    }
    
    return true;
  }
}