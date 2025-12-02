import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { ContactStore } from '@stores/contact.store';
import { ContactInfo } from '@models/contact.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = signal(false);
  errorMessage = signal('');
  showPassword = signal(false);
  contactInfo: ContactInfo;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private contactStore: ContactStore
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.contactInfo = this.contactStore.getContactInfo();
  }

  togglePassword() {
    this.showPassword.set(!this.showPassword());
  }

  async onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading.set(true);
    this.errorMessage.set('');

    try {
      const { email, password } = this.loginForm.value;
      const user = await this.authService.login(email, password);

      // Redirect based on user role
      switch (user.role) {
        case 'patient':
          this.router.navigate(['/auth/patient']);
          break;
        case 'staff':
          this.router.navigate(['/auth/staff']);
          break;
        case 'admin':
          this.router.navigate(['/auth/admin']);
          break;
        case 'sys-admin':
          this.router.navigate(['/auth/sys-admin']);
          break;
      }
    } catch (error: any) {
      this.errorMessage.set(error.message || 'Login failed. Please try again.');
    } finally {
      this.isLoading.set(false);
    }
  }
}
