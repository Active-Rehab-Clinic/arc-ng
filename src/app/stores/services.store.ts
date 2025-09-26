import { Injectable } from '@angular/core';
import { Service } from '@models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesStore {
  
  getServices(): Service[] {
    return [
      {
        id: 'orthopedic',
        title: 'Orthopedic Rehabilitation',
        description: 'Expert treatment for bone, joint and muscle problems. Helping you recover from surgery and injuries with modern techniques.',
        icon: '🦴',
        iconColor: 'blue',
        features: [
          'Post-surgery recovery support',
          'Joint replacement rehabilitation',
          'Fracture and injury treatment',
          'Arthritis pain management'
        ],
        price: '₹800/session'
      },
      {
        id: 'neurological',
        title: 'Neurological Therapy',
        description: 'Specialized care for brain and nerve related conditions. Our experienced therapists help restore your movement and independence.',
        icon: '🧠',
        iconColor: 'green',
        features: [
          'Stroke recovery programs',
          'Parkinson\'s disease management',
          'Balance and walking training',
          'Memory and cognitive support'
        ],
        price: '₹1000/session'
      },
      {
        id: 'sports',
        title: 'Sports Medicine',
        description: 'Get back to your favorite sports safely. Whether cricket, football or gym - we help athletes of all levels recover and perform better.',
        icon: '💪',
        iconColor: 'purple',
        features: [
          'Cricket and sports injury care',
          'Fitness and performance boost',
          'Injury prevention guidance',
          'Safe return to sports programs'
        ],
        price: '₹900/session'
      },
      {
        id: 'occupational',
        title: 'Occupational Therapy',
        description: 'Learn to manage daily activities with confidence. We help you return to work and home tasks after injury or illness.',
        icon: '🏠',
        iconColor: 'orange',
        features: [
          'Daily routine training',
          'Office ergonomics guidance',
          'Assistive device training',
          'Hand and finger exercises'
        ],
        price: '₹700/session'
      },
      {
        id: 'pediatric',
        title: 'Pediatric Therapy',
        description: 'Gentle, caring treatment for children. Our child-friendly approach helps kids develop properly and reach their milestones.',
        icon: '👶',
        iconColor: 'pink',
        features: [
          'Child development support',
          'Cerebral palsy treatment',
          'Learning disability help',
          'School readiness programs'
        ],
        price: '₹850/session'
      },
      {
        id: 'pain',
        title: 'Pain Management',
        description: 'Effective relief from chronic pain without heavy medicines. Natural healing methods to help you live comfortably again.',
        icon: '🎯',
        iconColor: 'red',
        features: [
          'Chronic pain relief',
          'Manual therapy techniques',
          'Dry needling treatment',
          'Pain education and lifestyle tips'
        ],
        price: '₹750/session'
      }
    ];
  }

  getTimeSlots() {
    return [
      { value: '09:00', label: '9:00 AM' },
      { value: '10:00', label: '10:00 AM' },
      { value: '11:00', label: '11:00 AM' },
      { value: '14:00', label: '2:00 PM' },
      { value: '15:00', label: '3:00 PM' },
      { value: '16:00', label: '4:00 PM' }
    ];
  }
}