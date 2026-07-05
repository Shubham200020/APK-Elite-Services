import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceComponentComponent } from '../service-component/service-component.component';
import { AddWhyChooseComponent } from '../add-why-choose/add-why-choose.component';
import { AddMissionComponent } from '../add-mission/add-mission.component';
import { AboutSectionsComponent } from '../about-sections/about-sections.component';
import { FaqComponent } from '../faq/faq.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ServiceComponentComponent, AddWhyChooseComponent, AddMissionComponent, AboutSectionsComponent, FaqComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('APK Elite Services | Professional Cleaning Services in Pune');
    this.meta.updateTag({ name: 'description', content: 'Trusted cleaning and facility management services in Pune by APK Elite Services. Book deep cleaning, tank cleaning, office cleaning and more.' });
    this.meta.updateTag({ name: 'keywords', content: 'cleaning services Pune, deep cleaning Pune, office cleaning Pune, tank cleaning Pune, sofa cleaning Pune' });
  }
}
