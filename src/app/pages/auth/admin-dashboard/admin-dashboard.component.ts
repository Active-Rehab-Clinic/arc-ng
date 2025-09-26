import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  systemStats = {
    totalPatients: 1250,
    totalStaff: 15,
    monthlyRevenue: 85000,
    appointmentsToday: 24
  };

  recentActivities = [
    'New staff member added - Dr. Sarah Wilson',
    'System backup completed successfully',
    'Monthly report generated',
    'Payment gateway updated'
  ];
}