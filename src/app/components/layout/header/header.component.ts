import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule],
    template: `
    <header class="bg-white shadow-sm border-b">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <a routerLink="/home" class="text-2xl font-bold text-primary-600">ARC</a>
          </div>
          
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a routerLink="/home" routerLinkActive="text-primary-600" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Home</a>
              <a routerLink="/services" routerLinkActive="text-primary-600" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Services</a>
              <a routerLink="/about" routerLinkActive="text-primary-600" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">About</a>
              <a routerLink="/contact" routerLinkActive="text-primary-600" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Contact</a>
              <a routerLink="/book" class="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700">Book Appointment</a>
            </div>
          </div>
          
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6 space-x-2">
              <a routerLink="/login" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Login</a>
              <a routerLink="/register" class="bg-secondary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary-700">Register</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}