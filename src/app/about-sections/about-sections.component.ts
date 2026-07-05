import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-sections',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './about-sections.component.html',
  styleUrl: './about-sections.component.css'
})
export class AboutSectionsComponent implements AfterViewInit {

   @ViewChild('heroSection') heroSection!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.heroSection.nativeElement.classList.add('show');
        }
      },
      {
        threshold: 0.2
      }
    );
    if(this.heroSection) {
       observer.observe(this.heroSection.nativeElement);
    }
  }
}
