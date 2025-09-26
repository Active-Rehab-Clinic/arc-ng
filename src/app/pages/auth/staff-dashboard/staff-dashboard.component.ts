import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-dashboard.component.html',
  styleUrl: './staff-dashboard.component.scss'
})
export class StaffDashboardComponent {
  todayAppointments = [
    { time: '9:00 AM', patient: 'John Doe', service: 'Orthopedic' },
    { time: '10:30 AM', patient: 'Jane Smith', service: 'Neurological' },
    { time: '2:00 PM', patient: 'Mike Johnson', service: 'Sports Medicine' }
  ];
}