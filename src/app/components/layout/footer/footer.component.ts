import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [CommonModule, RouterModule],
    template: `
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <h3 class="text-2xl font-bold text-primary-400 mb-4">Active Rehab Clinic</h3>
            <p class="text-gray-300 mb-4">Providing comprehensive rehabilitation services to help you recover and thrive.</p>
            <div class="text-sm text-gray-400">
              <p>123 Health Street, Medical District</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@activerehab.com</p>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li><a routerLink="/services" class="text-gray-300 hover:text-primary-400">Services</a></li>
              <li><a routerLink="/about" class="text-gray-300 hover:text-primary-400">About Us</a></li>
              <li><a routerLink="/contact" class="text-gray-300 hover:text-primary-400">Contact</a></li>
              <li><a routerLink="/book" class="text-gray-300 hover:text-primary-400">Book Appointment</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Hours</h4>
            <div class="text-sm text-gray-300 space-y-1">
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; 2024 Active Rehab Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}