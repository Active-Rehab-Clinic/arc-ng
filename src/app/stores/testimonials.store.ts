import { Injectable } from '@angular/core';
import { Testimonial } from '@models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsStore {
  
  getTestimonials(): Testimonial[] {
    return [
      {
        id: '1',
        name: 'Priya Sharma',
        text: 'After my accident, I was worried I would never walk properly again. The doctors at Active Rehab gave me hope and helped me recover completely. Very grateful to the entire team.',
        rating: 5
      },
      {
        id: '2',
        name: 'Rajesh Kumar',
        text: 'My back pain was troubling me for months. The physiotherapy sessions here really worked wonders. Now I can play cricket with my children again!',
        rating: 5
      },
      {
        id: '3',
        name: 'Sunita Devi',
        text: 'The staff is very caring and understanding. They explained everything in Hindi which made me comfortable. My knee is much better now after the treatment.',
        rating: 5
      },
      {
        id: '4',
        name: 'Amit Singh',
        text: 'Excellent service and modern equipment. The therapists are well-trained and helped me get back to my office work without any pain. Highly recommend this clinic.',
        rating: 5
      },
      {
        id: '5',
        name: 'Meera Gupta',
        text: 'My son had some developmental issues and the pediatric therapy here has shown amazing results. The doctors are patient and my child loves coming here.',
        rating: 5
      }
    ];
  }
}