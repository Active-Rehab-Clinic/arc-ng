import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Book Appointment</h1>
          <p class="text-lg text-gray-600">Schedule your rehabilitation session</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-8">
          <p class="text-center text-gray-600 text-lg">
            Appointment booking system will be implemented in Phase 3
          </p>
          <div class="text-center mt-6">
            <p class="text-gray-500">For now, please call us at <span class="font-semibold text-primary-600">(555) 123-4567</span></p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BookComponent {}