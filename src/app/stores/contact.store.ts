import { Injectable } from '@angular/core';
import { ContactInfo } from '@models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactStore {
  getContactInfo(): ContactInfo {
    return {
      address: {
        street:
          'C-8, opp. Delhi International School, Pocket-8, Sector 17 Dwarka',
        city: 'Dwarka, New Delhi',
        state: 'Delhi',
        zip: '110078',
      },
      phone: '+91 99108 85929',
      alternatePhone: '+91 85058 51951',
      email: 'activerehabc@gmail.com',
      hours: [
        { day: 'Monday', hours: '8:00 AM - 6:00 PM', isOpen: true },
        { day: 'Tuesday', hours: '8:00 AM - 6:00 PM', isOpen: true },
        { day: 'Wednesday', hours: '8:00 AM - 6:00 PM', isOpen: true },
        { day: 'Thursday', hours: '8:00 AM - 6:00 PM', isOpen: true },
        { day: 'Friday', hours: '8:00 AM - 6:00 PM', isOpen: true },
        { day: 'Saturday', hours: '9:00 AM - 4:00 PM', isOpen: true },
        { day: 'Sunday', hours: 'Closed', isOpen: false },
      ],
      socialMedia: [
        {
          platform: 'Facebook',
          url: 'https://facebook.com/activerehab',
          icon: '📘',
        },
        {
          platform: 'Instagram',
          url: 'https://instagram.com/activerehab',
          icon: '📷',
        },
        {
          platform: 'LinkedIn',
          url: 'https://linkedin.com/company/activerehab',
          icon: '💼',
        },
      ],
    };
  }
}
