import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MetaService } from '../../services/meta.service';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private metaService: MetaService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Home',
      'Professional physiotherapy services in your area. Expert treatment for sports injuries, rehabilitation, and wellness.'
    );
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