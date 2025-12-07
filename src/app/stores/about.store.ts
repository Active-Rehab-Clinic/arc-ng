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
          bio: 'With over 13 years of dedicated experience in sports rehabilitation and pain management, Dr. Raju Pal brings a wealth of expertise and compassionate care to every patient. Board-certified with advanced training in manual therapy techniques, he specializes in helping patients recover from injuries and chronic pain conditions.',
          specialties: [
            'Sports Medicine',
            'Manual Therapy',
            'Pain Management',
            'Neurological Therapy',
            'Dry Needling',
            'Chiropractic Care',
            'Cupping & Taping Therapy',
          ],
        },
      ],
    };
  }
}
