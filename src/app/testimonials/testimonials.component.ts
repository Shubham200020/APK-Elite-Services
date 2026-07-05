import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  reviews = [
    {
      name: 'Rohan Sharma',
      location: 'Baner, Pune',
      text: 'APK Elite Services did a fantastic job deep cleaning our new apartment. The team was professional, on time, and very thorough.',
      rating: 5
    },
    {
      name: 'Priya Desai',
      location: 'Kalyani Nagar',
      text: 'I was searching for reliable cleaners and booked APC Elite. They removed tough paint stains from my floor completely! Highly recommended.',
      rating: 5
    },
    {
      name: 'Vikram Joshi',
      location: 'Hinjewadi',
      text: 'APQ Elite is by far the best pest control service I\'ve used in Pune. The chemicals they used were completely odorless and very effective.',
      rating: 5
    }
  ];
}
