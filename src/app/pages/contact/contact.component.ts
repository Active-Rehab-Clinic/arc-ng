import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p class="text-lg text-gray-600">Get in touch to schedule your appointment</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold text-primary-600 mb-6">Get In Touch</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <span class="text-secondary-600 text-xl mr-4">📍</span>
                <div>
                  <p class="font-semibold">Address</p>
                  <p class="text-gray-600">123 Health Street, Medical District</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <span class="text-secondary-600 text-xl mr-4">📞</span>
                <div>
                  <p class="font-semibold">Phone</p>
                  <p class="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <span class="text-secondary-600 text-xl mr-4">✉️</span>
                <div>
                  <p class="font-semibold">Email</p>
                  <p class="text-gray-600">info@activerehab.com</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h3 class="text-xl font-bold text-primary-600 mb-4">Hours</h3>
              <div class="space-y-2 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-primary-600 mb-6">Send Message</h3>
            <p class="text-gray-600">Contact form will be implemented in Phase 2</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {}