import { Injectable } from '@angular/core';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  iconColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesStore {
  
  getServices(): Service[] {
    return [
      {
        id: 'orthopedic',
        title: 'Orthopedic Rehabilitation',
        description: 'Specialized treatment for bone, joint, and muscle injuries including post-surgical recovery.',
        icon: '🦴',
        iconColor: 'blue',
        features: [
          'Post-surgical rehabilitation',
          'Joint replacement recovery',
          'Fracture rehabilitation',
          'Arthritis management'
        ],
        price: '$120/session'
      },
      {
        id: 'neurological',
        title: 'Neurological Therapy',
        description: 'Expert care for neurological conditions and brain injury recovery programs.',
        icon: '🧠',
        iconColor: 'green',
        features: [
          'Stroke rehabilitation',
          'Parkinson\'s disease therapy',
          'Multiple sclerosis support',
          'Balance and coordination training'
        ],
        price: '$150/session'
      },
      {
        id: 'sports',
        title: 'Sports Medicine',
        description: 'Performance optimization and injury prevention for athletes of all levels.',
        icon: '💪',
        iconColor: 'purple',
        features: [
          'Sports injury treatment',
          'Performance enhancement',
          'Injury prevention programs',
          'Return-to-sport protocols'
        ],
        price: '$140/session'
      },
      {
        id: 'occupational',
        title: 'Occupational Therapy',
        description: 'Improve daily living skills and workplace functionality for independent living.',
        icon: '🏠',
        iconColor: 'orange',
        features: [
          'Daily living skills training',
          'Workplace ergonomics',
          'Adaptive equipment training',
          'Cognitive rehabilitation'
        ],
        price: '$110/session'
      },
      {
        id: 'pediatric',
        title: 'Pediatric Therapy',
        description: 'Specialized rehabilitation services designed specifically for children and adolescents.',
        icon: '👶',
        iconColor: 'pink',
        features: [
          'Developmental delays',
          'Cerebral palsy treatment',
          'Autism spectrum support',
          'School-based therapy'
        ],
        price: '$130/session'
      },
      {
        id: 'pain',
        title: 'Pain Management',
        description: 'Comprehensive pain relief strategies using evidence-based treatment approaches.',
        icon: '🎯',
        iconColor: 'red',
        features: [
          'Chronic pain treatment',
          'Manual therapy techniques',
          'Dry needling therapy',
          'Pain education programs'
        ],
        price: '$125/session'
      }
    ];
  }
}