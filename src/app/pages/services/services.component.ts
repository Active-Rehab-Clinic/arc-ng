import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p class="text-lg text-gray-600">Comprehensive rehabilitation services for your recovery</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold text-primary-600 mb-3">Physical Therapy</h3>
            <p class="text-gray-600 mb-4">Restore movement and function through targeted exercises and treatments.</p>
            <p class="text-2xl font-bold text-secondary-600">$120/session</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold text-primary-600 mb-3">Occupational Therapy</h3>
            <p class="text-gray-600 mb-4">Improve daily living skills and workplace functionality.</p>
            <p class="text-2xl font-bold text-secondary-600">$110/session</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold text-primary-600 mb-3">Sports Rehabilitation</h3>
            <p class="text-gray-600 mb-4">Specialized treatment for sports-related injuries and performance.</p>
            <p class="text-2xl font-bold text-secondary-600">$140/session</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServicesComponent {}