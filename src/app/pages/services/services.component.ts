import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesStore } from '../../stores/services.store';
import { Service } from '@models/service.model';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  services: Service[];

  constructor(
    private servicesStore: ServicesStore,
    private metaService: MetaService
  ) {
    this.services = this.servicesStore.getServices();
  }

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Physiotherapy Services in Dwarka | Sports Medicine, Pain Management & Home Visits',
      'Comprehensive physiotherapy services in Dwarka, Delhi: Musculoskeletal therapy, neurological rehabilitation, sports medicine, pediatric therapy, pain management, and home visit services across Delhi NCR. Expert care for all ages.',
      'physiotherapy services Dwarka, sports injury treatment Delhi, pain management clinic, neurological rehabilitation, pediatric physiotherapy, musculoskeletal therapy, home visit physiotherapy Delhi NCR, back pain treatment, knee pain treatment, stroke rehabilitation, sports medicine Delhi, physical therapy services, rehabilitation center Dwarka, post surgery physiotherapy, elderly physiotherapy',
      '/assets/raju-pal.jpg',
      '/services'
    );

    // Add structured data for services
    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Physiotherapy Services',
      description:
        'Comprehensive physiotherapy services offered by Active Rehab Clinic',
      itemListElement: this.services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'MedicalTherapy',
          name: service.title,
          description: service.description,
        },
      })),
    });
  }
}
