import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-why-choose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-why-choose.component.html',
  styleUrl: './add-why-choose.component.css'
})
export class AddWhyChooseComponent {
  img="/assets/images/why-choose.png";
whyList = [
  { title: "24/7 Support", desc: "We are available round the clock to assist you anytime." },
  { title: "Economical Services", desc: "Affordable pricing without compromising quality." },
  { title: "Prompt Services", desc: "Fast and timely execution of all tasks." },
  { title: "Trained Staff", desc: "Skilled professionals trained with modern techniques." },
  { title: "Professional Management", desc: "Well-organized and managed operations." },
  { title: "Commitment", desc: "We are committed to delivering excellence." },
  { title: "High Quality Work", desc: "We maintain top standards in every service." },
  { title: "Work Accuracy", desc: "Precision and attention to detail in every task." },
  { title: "No Delays", desc: "Timely completion without unnecessary delays." },
  { title: "True Partnership", desc: "We work as your trusted service partner." },
  { title: "Immaculate Standards", desc: "Clean, hygienic, and high-standard services." },
  { title: "Error-Free Service", desc: "We ensure flawless service delivery." },
  { title: "Qualified Experts", desc: "Experienced and certified professionals." },
  { title: "Streamlined Management", desc: "Efficient workflow and operations." },
  { title: "Results-Driven", desc: "Focused on delivering measurable results." }
];
}
