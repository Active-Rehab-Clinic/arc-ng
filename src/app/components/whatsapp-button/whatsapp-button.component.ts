import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactStore } from '../../stores/contact.store';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  whatsappUrl: string;

  constructor(private contactStore: ContactStore) {
    const contactInfo = this.contactStore.getContactInfo();
    const message = encodeURIComponent(
      'Hello! I would like to enquire about your physiotherapy services.'
    );
    this.whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${message}`;
  }
}
