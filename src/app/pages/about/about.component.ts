import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    imports: [CommonModule],
    template: `
    <div class="min-h-screen py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p class="text-lg text-gray-600">Dedicated to your recovery and well-being</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-primary-600 mb-6">Our Mission</h2>
            <p class="text-gray-600 mb-6">At Active Rehab Clinic, we are committed to providing exceptional rehabilitation services that help our patients regain their independence and improve their quality of life.</p>
            <p class="text-gray-600">Our team of licensed professionals uses evidence-based treatments and cutting-edge technology to deliver personalized care for each patient's unique needs.</p>
          </div>
          
          <div class="bg-gray-100 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-secondary-600 mb-4">Why Choose Us?</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center"><span class="text-secondary-600 mr-2">✓</span> Licensed and experienced therapists</li>
              <li class="flex items-center"><span class="text-secondary-600 mr-2">✓</span> State-of-the-art equipment</li>
              <li class="flex items-center"><span class="text-secondary-600 mr-2">✓</span> Personalized treatment plans</li>
              <li class="flex items-center"><span class="text-secondary-600 mr-2">✓</span> Flexible scheduling</li>
              <li class="flex items-center"><span class="text-secondary-600 mr-2">✓</span> Insurance accepted</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}