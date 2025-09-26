import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaService } from '../../services/meta.service';
import { FirebaseService } from '../../services/firebase.service';
import { ContactStore } from '../../stores/contact.store';
import { ServicesStore } from '../../stores/services.store';
import { Appointment } from '@models/appointment.model';
import { ContactInfo } from '@models/contact.model';
import { Service } from '@models/service.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  appointmentForm: FormGroup;
  isSubmitting = signal(false);
  submitMessage = signal('');
  submitSuccess = signal(false);
  minDate = signal('');
  contactInfo: ContactInfo;
  services: Service[];
  timeSlots: { value: string; label: string }[];

  constructor(
    private metaService: MetaService,
    private firebaseService: FirebaseService,
    private contactStore: ContactStore,
    private servicesStore: ServicesStore,
    private fb: FormBuilder
  ) {
    this.contactInfo = this.contactStore.getContactInfo();
    this.services = this.servicesStore.getServices();
    this.timeSlots = this.servicesStore.getTimeSlots();
    
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    this.minDate.set(today.toISOString().split('T')[0]);
    
    this.appointmentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      service: ['', [Validators.required]],
      preferredDate: [tomorrow.toISOString().split('T')[0], [Validators.required]],
      preferredTime: ['10:00', [Validators.required]],
      message: ['']
    });
  }

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Book Appointment',
      'Schedule your physiotherapy appointment online. Choose your preferred date, time, and treatment type with our easy booking system.'
    );
  }

  async onSubmit(): Promise<void> {
    if (this.isSubmitting() || this.appointmentForm.invalid) return;
    
    this.isSubmitting.set(true);
    this.submitMessage.set('');
    
    try {
      const appointment: Appointment = this.appointmentForm.value;
      await this.firebaseService.saveAppointment(appointment);
      this.submitSuccess.set(true);
      this.submitMessage.set('Appointment request submitted successfully! We will contact you within 24 hours.');
      this.appointmentForm.reset();
    } catch (error) {
      this.submitSuccess.set(false);
      this.submitMessage.set('Failed to submit appointment. Please try again or call us directly.');
      console.error('Error submitting appointment:', error);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}