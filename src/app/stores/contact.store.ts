import { Injectable } from '@angular/core';

export interface ContactInfo {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  hours: BusinessHours[];
  socialMedia: SocialMedia[];
}

export interface BusinessHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactStore {
  
  getContactInfo(): ContactInfo {
    return {
      address: {
        street: 'C-8, opp. Delhi International School, Pocket-8, Sector 17 Dwarka',
        city: 'Dwarka, New Delhi',
        state: 'Delhi',
        zip: '110078'
      },
      phone: '+91 85058 51951',
      email: 'activerehabc@gmail.com',
      hours: [
        { day: 'Monday', hours: '8:00 AM - 6:00 PM', isOpen: true },
        { day: 'Tuesday', hours: '8:00 AM - 6:00 PM', isOpen: true },
        { day: 'Wednesday', hours: '8:00 AM - 6:00 PM', isOpen: true },
        { day: 'Thursday', hours: '8:00 AM - 6:00 PM', isOpen: true },
        { day: 'Friday', hours: '8:00 AM - 6:00 PM', isOpen: true },
        { day: 'Saturday', hours: '9:00 AM - 4:00 PM', isOpen: true },
        { day: 'Sunday', hours: 'Closed', isOpen: false }
      ],
      socialMedia: [
        { platform: 'Facebook', url: 'https://facebook.com/activerehab', icon: '📘' },
        { platform: 'Instagram', url: 'https://instagram.com/activerehab', icon: '📷' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/company/activerehab', icon: '💼' }
      ]
    };
  }
}