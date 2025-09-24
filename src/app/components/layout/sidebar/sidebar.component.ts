import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Input() userRole: 'patient' | 'staff' | 'admin' | null = null;

  get navigationItems() {
    const baseItems = [
      { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
      { label: 'Appointments', route: '/appointments', icon: 'calendar' },
      { label: 'Profile', route: '/profile', icon: 'user' },
    ];

    if (this.userRole === 'staff' || this.userRole === 'admin') {
      baseItems.push(
        { label: 'Patients', route: '/patients', icon: 'users' },
        { label: 'Schedule', route: '/schedule', icon: 'clock' }
      );
    }

    if (this.userRole === 'admin') {
      baseItems.push(
        { label: 'Staff Management', route: '/staff', icon: 'team' },
        { label: 'Reports', route: '/reports', icon: 'chart' },
        { label: 'Settings', route: '/settings', icon: 'settings' }
      );
    }

    return baseItems;
  }
}
