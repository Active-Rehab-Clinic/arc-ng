import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss'
})
export class PatientDashboardComponent {
  patientData = {
    name: 'John Doe',
    nextAppointment: '2024-01-15 10:00 AM',
    treatmentPlan: 'Orthopedic Rehabilitation'
  };
}