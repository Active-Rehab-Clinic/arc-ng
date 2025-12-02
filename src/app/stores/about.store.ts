import { Injectable } from '@angular/core';
import { AboutInfo } from '@models/about.model';

@Injectable({
  providedIn: 'root',
})
export class AboutStore {
  getAboutInfo(): AboutInfo {
    return {
      mission:
        'To provide exceptional rehabilitation services that restore function, reduce pain, and improve quality of life for every patient we serve.',
      vision:
        'To be the leading rehabilitation clinic in our community, known for innovative treatments, compassionate care, and outstanding patient outcomes.',
      values: [
        'Patient-centered care',
        'Evidence-based treatment',
        'Compassionate service',
        'Continuous improvement',
        'Professional excellence',
        'Collaborative approach',
      ],
      team: [
        {
          id: '1',
          name: 'Dr. Raju Pal',
          title: 'Physical Therapist & Clinic Director',
          bio: '13+ years of experience in orthopedic and sports rehabilitation. Board-certified with advanced training in manual therapy techniques.',
          specialties: [
            'Orthopedic Rehabilitation',
            'Sports Medicine',
            'Manual Therapy',
          ],
        },
      ],
    };
  }
}
