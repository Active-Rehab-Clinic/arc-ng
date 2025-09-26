import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { environment } from '../../environments/environment';
import { Appointment } from '@models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = initializeApp(environment.firebase);
  private db = getFirestore(this.app);

  async saveAppointment(appointment: Appointment): Promise<string> {
    const docRef = await addDoc(collection(this.db, 'appointments'), {
      ...appointment,
      status: 'pending',
      createdAt: new Date()
    });
    return docRef.id;
  }
}