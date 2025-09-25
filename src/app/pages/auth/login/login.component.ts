import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MetaService } from '../../../services/meta.service';

@Component({
    selector: 'app-login',
    imports: [CommonModule, RouterModule],
    template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Patient Login</h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or <a routerLink="/register" class="font-medium text-primary-600 hover:text-primary-500">create a new account</a>
          </p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-8">
          <p class="text-center text-gray-600">Login form will be implemented in Phase 1</p>
          <div class="mt-4 text-center">
            <a routerLink="/staff/login" class="text-sm text-secondary-600 hover:text-secondary-500">Staff Login</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Patient Login',
      'Login to your patient account to view appointments, medical records, and manage your physiotherapy treatments.'
    );
  }
}