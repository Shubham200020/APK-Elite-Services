import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    {
      question: 'Are you the same company as APC Elite or APQ Elite?',
      answer: 'Yes! We are often searched as \'APC Elite\' or \'APQ Elite Services\' due to typing errors, but our official registered name is APK Elite Services. Rest assured, you are in the right place for premium facility management and deep cleaning in Pune.',
      isOpen: false
    },
    {
      question: 'Do you bring your own cleaning supplies and equipment?',
      answer: 'Absolutely. Our professional team arrives fully equipped with eco-friendly chemicals and industrial-grade machines.',
      isOpen: false
    },
    {
      question: 'Are your staff members background-verified?',
      answer: 'Yes, 100% of our staff are in-house, trained, and thoroughly background-checked for your safety.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
