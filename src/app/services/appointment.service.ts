import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { environment } from '../../environments/environment';
import { Appointment } from '@models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private app = initializeApp(environment.firebase);
  private db = getFirestore(this.app);

  async getAllAppointments(): Promise<Appointment[]> {
    try {
      console.log('Fetching appointments from Firestore...');
      const q = query(collection(this.db, 'appointments'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      console.log('Query snapshot size:', querySnapshot.size);
      
      const appointments = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Appointment));
      
      console.log('Mapped appointments:', appointments);
      return appointments;
    } catch (error) {
      console.error('Error in getAllAppointments:', error);
      throw error;
    }
  }
}