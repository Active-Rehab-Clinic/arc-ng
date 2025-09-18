import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [CommonModule, RouterModule],
    template: `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">Active Rehab Clinic</h1>
          <p class="text-xl md:text-2xl mb-8 text-primary-100">Your path to recovery starts here</p>
          <div class="space-x-4">
            <a routerLink="/book" class="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block">Book Appointment</a>
            <a routerLink="/services" class="border-2 border-white hover:bg-white hover:text-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block">Our Services</a>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose ARC?</h2>
            <p class="text-lg text-gray-600">Professional rehabilitation services tailored to your needs</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-primary-600">🏥</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Expert Care</h3>
              <p class="text-gray-600">Licensed therapists with years of experience</p>
            </div>
            
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-secondary-600">⚡</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Modern Equipment</h3>
              <p class="text-gray-600">State-of-the-art rehabilitation technology</p>
            </div>
            
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-primary-600">❤️</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Personalized Treatment</h3>
              <p class="text-gray-600">Customized therapy plans for optimal recovery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent {}