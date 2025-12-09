import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactStore } from '../../stores/contact.store';
import { ContactInfo } from '@models/contact.model';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contactInfo: ContactInfo;

  constructor(
    private contactStore: ContactStore,
    private metaService: MetaService
  ) {
    this.contactInfo = this.contactStore.getContactInfo();
  }

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Contact Us - Book Appointment | Physiotherapy Clinic in Dwarka, Delhi',
      'Contact Active Rehab Clinic in Dwarka, Delhi. Book your physiotherapy appointment via phone, WhatsApp, or online form. Located at Sector 17 Dwarka. Call +91-99108-85929 for home visit services in Delhi NCR.',
      'contact physiotherapy clinic Dwarka, book physiotherapy appointment Delhi, physiotherapy clinic near me, Active Rehab Clinic location, physiotherapy appointment booking, WhatsApp physiotherapy booking, home visit physiotherapy contact, physiotherapy clinic Sector 17 Dwarka, call physiotherapist Delhi',
      '/assets/raju-pal.jpg',
      '/contact'
    );

    // Add structured data for contact page
    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Active Rehab Clinic',
      description:
        'Get in touch with Active Rehab Clinic for physiotherapy appointments',
      mainEntity: {
        '@type': 'MedicalBusiness',
        name: 'Active Rehab Clinic',
        telephone: '+91-99108-85929',
        email: 'activerehabc@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'C-8, opp. Delhi International School, Pocket-8, Sector 17 Dwarka',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110078',
          addressCountry: 'IN',
        },
      },
    });
  }
}
