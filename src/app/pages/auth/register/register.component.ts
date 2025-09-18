import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-register',
    imports: [CommonModule, RouterModule],
    template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Account</h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Already have an account? <a routerLink="/login" class="font-medium text-primary-600 hover:text-primary-500">Sign in</a>
          </p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-8">
          <p class="text-center text-gray-600">Registration form will be implemented in Phase 1</p>
        </div>
      </div>
    </div>
  `
})
export class RegisterComponent {}