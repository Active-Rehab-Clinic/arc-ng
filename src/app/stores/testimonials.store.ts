import { Injectable } from '@angular/core';

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialsStore {
  
  getTestimonials(): Testimonial[] {
    return [
      {
        id: '1',
        name: 'Sarah M.',
        text: 'The team at ARC helped me recover from my knee surgery faster than I ever imagined. Their personalized approach made all the difference.',
        rating: 5
      },
      {
        id: '2',
        name: 'Mike R.',
        text: 'Professional, caring, and effective. I\'m back to playing tennis thanks to their excellent sports rehabilitation program.',
        rating: 5
      },
      {
        id: '3',
        name: 'Janet L.',
        text: 'After my stroke, I thought I\'d never walk normally again. The neurological therapy here gave me my life back.',
        rating: 5
      },
      {
        id: '4',
        name: 'David K.',
        text: 'Outstanding occupational therapy services. They helped me return to work after my accident with confidence.',
        rating: 5
      },
      {
        id: '5',
        name: 'Maria S.',
        text: 'The pediatric therapy team worked wonders with my son. His progress has been remarkable.',
        rating: 5
      }
    ];
  }
}