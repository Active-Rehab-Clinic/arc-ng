import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['patient', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { role } = this.loginForm.value;
      // Simulate login - redirect based on role
      switch (role) {
        case 'patient':
          this.router.navigate(['/auth/patient']);
          break;
        case 'staff':
          this.router.navigate(['/auth/staff']);
          break;
        case 'admin':
          this.router.navigate(['/auth/admin']);
          break;
      }
    }
  }
}