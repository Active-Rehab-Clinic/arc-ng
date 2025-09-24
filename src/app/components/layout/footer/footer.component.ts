import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactStore, ContactInfo } from '../../../stores/contact.store';
import { BusinessHoursService, BusinessStatus } from '../../../services/business-hours.service';

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
    private businessHoursService: BusinessHoursService
  ) {
    this.contactInfo = this.contactStore.getContactInfo();
    this.businessStatus$ = this.businessHoursService.businessStatus$;
  }
}