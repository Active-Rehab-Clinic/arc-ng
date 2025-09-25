import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  trackEvent(action: string, category: string, label?: string, value?: number): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  trackBookAppointment(): void {
    this.trackEvent('click', 'appointment', 'book_appointment_button');
  }

  trackCallButton(): void {
    this.trackEvent('click', 'contact', 'call_button');
  }

  trackPrimaryButton(label: string): void {
    this.trackEvent('click', 'engagement', label);
  }
}