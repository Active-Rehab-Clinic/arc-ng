import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { AnalyticsService } from '../../../services/analytics.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode$;
  isMobileMenuOpen = false;

  constructor(
    private themeService: ThemeService,
    private analyticsService: AnalyticsService
  ) {
    this.isDarkMode$ = this.themeService.isDarkMode$;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onBookAppointmentClick(): void {
    this.analyticsService.trackBookAppointment();
  }
}
