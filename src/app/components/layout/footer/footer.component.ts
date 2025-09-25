import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactStore } from '../../../stores/contact.store';
import { ContactInfo } from '@models/contact.model';
import { BusinessHoursService, BusinessStatus } from '../../../services/business-hours.service';
import { AnalyticsService } from '../../../services/analytics.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  contactInfo: ContactInfo;
  businessStatus$: Observable<BusinessStatus>;

  constructor(
    private contactStore: ContactStore,
    private businessHoursService: BusinessHoursService,
    private analyticsService: AnalyticsService
  ) {
    this.contactInfo = this.contactStore.getContactInfo();
    this.businessStatus$ = this.businessHoursService.businessStatus$;
  }

  onCallClick(): void {
    this.analyticsService.trackCallButton();
  }

  onBookAppointmentClick(): void {
    this.analyticsService.trackBookAppointment();
  }
}