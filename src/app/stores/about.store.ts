import { Injectable } from '@angular/core';

export interface AboutInfo {
  mission: string;
  vision: string;
  values: string[];
  team: TeamMember[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
  specialties: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AboutStore {
  
  getAboutInfo(): AboutInfo {
    return {
      mission: 'To provide exceptional rehabilitation services that restore function, reduce pain, and improve quality of life for every patient we serve.',
      vision: 'To be the leading rehabilitation clinic in our community, known for innovative treatments, compassionate care, and outstanding patient outcomes.',
      values: [
        'Patient-centered care',
        'Evidence-based treatment',
        'Compassionate service',
        'Continuous improvement',
        'Professional excellence',
        'Collaborative approach'
      ],
      team: [
        {
          id: '1',
          name: 'Dr. Raju Pal',
          title: 'Physical Therapist & Clinic Director',
          bio: '15+ years of experience in orthopedic and sports rehabilitation. Board-certified with advanced training in manual therapy techniques.',
          specialties: ['Orthopedic Rehabilitation', 'Sports Medicine', 'Manual Therapy']
        }
      ]
    };
  }
}