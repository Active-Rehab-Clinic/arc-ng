import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactStore, ContactInfo } from '../../stores/contact.store';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
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
      'Contact Us',
      'Get in touch with Active Rehab Clinic. Find our location, hours, phone number, and contact form to schedule your appointment.'
    );
  }
}