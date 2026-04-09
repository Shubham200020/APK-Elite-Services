import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-sections',
  standalone: true,
  imports: [],
  templateUrl: './about-sections.component.html',
  styleUrl: './about-sections.component.css'
})
export class AboutSectionsComponent {

   @ViewChild('heroSection') heroSection!: ElementRef;

   text=`APK ELITE SERVICES is your premier partner in professional
facility management, bridging the gap between meticulous
residential care and large-scale industrial precision. We are
dedicated to delivering cost-effective, high-standard solutions that
ensure your environment is safe, hygienic, and perfectly managed.
By combining years of industry trust with an efficient, friendly
touch, we handle the details of your space so you can focus
entirely on your core business. Experience a sparkling
environment backed by our 100% satisfaction guaranteed, where
reliability meets excellence.`;
  ngAfterViewInit() {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.heroSection.nativeElement.classList.add('show');
        }
      },
      {
        threshold: 0.5
      }
    );

    observer.observe(this.heroSection.nativeElement);
  }
}
