import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactStore, ContactInfo } from '../../stores/contact.store';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo: ContactInfo;

  constructor(private contactStore: ContactStore) {
    this.contactInfo = this.contactStore.getContactInfo();
  }
}