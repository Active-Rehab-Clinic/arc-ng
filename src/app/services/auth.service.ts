import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User, AuthResponse, LoginRequest, RegisterRequest } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    this.loadUserFromStorage();
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    // Mock login - replace with actual API call
    const mockUser: User = {
      id: '1',
      email: credentials.email,
      firstName: 'John',
      lastName: 'Doe',
      role: 'patient'
    };
    
    const response: AuthResponse = {
      user: mockUser,
      token: 'mock-jwt-token'
    };
    
    this.setCurrentUser(mockUser, response.token);
    return of(response);
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    // Mock registration - replace with actual API call
    const mockUser: User = {
      id: '2',
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: 'patient'
    };
    
    const response: AuthResponse = {
      user: mockUser,
      token: 'mock-jwt-token'
    };
    
    this.setCurrentUser(mockUser, response.token);
    return of(response);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  private setCurrentUser(user: User, token: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private loadUserFromStorage(): void {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.currentUserSubject.next(user);
      } catch (error) {
        this.logout();
      }
    }
  }
}