import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MetaService } from '../../services/meta.service';
import { AnalyticsService } from '../../services/analytics.service';
import { TestimonialsStore } from '../../stores/testimonials.store';
import { Testimonial } from '@models/testimonial.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  testimonials: Testimonial[];

  constructor(
    private metaService: MetaService,
    private analyticsService: AnalyticsService,
    private testimonialsStore: TestimonialsStore
  ) {
    this.testimonials = this.testimonialsStore.getTestimonials().slice(0, 3);
  }

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Best Physiotherapy Clinic in Dwarka, Delhi | Home Visit Services',
      'Active Rehab Clinic offers expert physiotherapy services in Dwarka, Delhi NCR. Specializing in sports medicine, pain management, neurological therapy, and convenient home visit services. Book your appointment today!',
      'physiotherapy Dwarka, physiotherapist Delhi, home visit physiotherapy Delhi NCR, sports injury treatment, pain management clinic, neurological therapy, best physiotherapy near me, physical therapy Delhi, rehabilitation center Dwarka, mobile physiotherapy, elderly care physiotherapy, post surgery rehabilitation',
      '/assets/raju-pal.jpg',
      '/'
    );

    // Add structured data for home page
    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Active Rehab Clinic',
      description:
        'Professional physiotherapy clinic offering specialized treatment for sports injuries, pain management, neurological conditions, and home visit services in Delhi NCR.',
      url: 'https://activerehabclinic.com',
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Physiotherapy Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'Home Visit Physiotherapy',
              description:
                'Professional physiotherapy treatment at your home in Delhi NCR',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'Sports Medicine',
              description:
                'Expert treatment for sports injuries and athletic performance',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'Pain Management',
              description:
                'Effective relief from chronic pain without heavy medication',
            },
          },
        ],
      },
    });
  }

  onBookAppointmentClick(): void {
    this.analyticsService.trackBookAppointment();
  }

  onExploreServicesClick(): void {
    this.analyticsService.trackPrimaryButton('explore_services_hero');
  }

  onScheduleConsultationClick(): void {
    this.analyticsService.trackPrimaryButton('schedule_consultation_cta');
  }

  onContactUsClick(): void {
    this.analyticsService.trackPrimaryButton('contact_us_cta');
  }
}
