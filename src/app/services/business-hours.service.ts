import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

export interface BusinessStatus {
  isOpen: boolean;
  status: string;
  nextChange?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BusinessHoursService {
  private businessStatus = new BehaviorSubject<BusinessStatus>({ isOpen: false, status: 'Closed' });
  public businessStatus$ = this.businessStatus.asObservable();

  constructor() {
    this.updateBusinessStatus();
    // Update every minute
    interval(60000).subscribe(() => {
      this.updateBusinessStatus();
    });
  }

  private updateBusinessStatus(): void {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute; // Convert to minutes

    let isOpen = false;
    let status = 'Closed';
    let nextChange = '';

    // Business hours in minutes from midnight
    const hours = {
      monday: { open: 8 * 60, close: 18 * 60 }, // 8 AM - 6 PM
      tuesday: { open: 8 * 60, close: 18 * 60 },
      wednesday: { open: 8 * 60, close: 18 * 60 },
      thursday: { open: 8 * 60, close: 18 * 60 },
      friday: { open: 8 * 60, close: 18 * 60 },
      saturday: { open: 9 * 60, close: 16 * 60 }, // 9 AM - 4 PM
      sunday: null // Closed
    };

    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = dayNames[day] as keyof typeof hours;
    const todayHours = hours[currentDay];

    if (todayHours && currentTime >= todayHours.open && currentTime < todayHours.close) {
      isOpen = true;
      status = 'Open Now';
      const closeTime = this.formatTime(todayHours.close);
      nextChange = `Closes at ${closeTime}`;
    } else {
      isOpen = false;
      if (day === 0) { // Sunday
        status = 'Closed Today';
        nextChange = 'Opens Monday at 8:00 AM';
      } else if (todayHours) {
        if (currentTime < todayHours.open) {
          status = 'Opens Today';
          const openTime = this.formatTime(todayHours.open);
          nextChange = `Opens at ${openTime}`;
        } else {
          status = 'Closed';
          // Find next opening day
          const nextDay = this.getNextOpenDay(day);
          if (nextDay === 1) {
            nextChange = 'Opens Monday at 8:00 AM';
          } else if (nextDay === 6) {
            nextChange = 'Opens Saturday at 9:00 AM';
          } else {
            nextChange = 'Opens tomorrow at 8:00 AM';
          }
        }
      }
    }

    this.businessStatus.next({ isOpen, status, nextChange });
  }

  private formatTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHours}:${mins.toString().padStart(2, '0')} ${period}`;
  }

  private getNextOpenDay(currentDay: number): number {
    for (let i = 1; i <= 7; i++) {
      const nextDay = (currentDay + i) % 7;
      if (nextDay >= 1 && nextDay <= 6) { // Monday to Saturday
        return nextDay;
      }
    }
    return 1; // Default to Monday
  }
}