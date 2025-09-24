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
          name: 'Dr. Emily Johnson',
          title: 'Physical Therapist & Clinic Director',
          bio: '15+ years of experience in orthopedic and sports rehabilitation. Board-certified with advanced training in manual therapy techniques.',
          specialties: ['Orthopedic Rehabilitation', 'Sports Medicine', 'Manual Therapy']
        },
        {
          id: '2',
          name: 'Dr. Michael Chen',
          title: 'Neurological Rehabilitation Specialist',
          bio: 'Expert in stroke recovery and neurological conditions. Advanced certification in balance and coordination therapy with 12 years of experience.',
          specialties: ['Neurological Therapy', 'Balance Training', 'Stroke Recovery']
        },
        {
          id: '3',
          name: 'Lisa Rodriguez',
          title: 'Occupational Therapist',
          bio: 'Dedicated to helping patients regain independence in daily activities. Specializes in workplace ergonomics and adaptive equipment training.',
          specialties: ['Occupational Therapy', 'Workplace Ergonomics', 'Adaptive Equipment']
        },
        {
          id: '4',
          name: 'Dr. James Wilson',
          title: 'Pain Management Specialist',
          bio: 'Certified in advanced pain management techniques including dry needling and manual therapy. 10+ years helping patients overcome chronic pain.',
          specialties: ['Pain Management', 'Dry Needling', 'Chronic Pain Treatment']
        }
      ]
    };
  }
}