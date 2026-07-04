import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SERVICE_CATALOG } from '../shared/service-catalog';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="overview">
      <div class="overview-header">
        <p class="eyebrow">APK Elite Services</p>
        <h1>Our Cleaning and Facility Services</h1>
        <p>Explore our full range of professional services designed for homes, offices, and commercial spaces in Pune.</p>
      </div>
      <div class="service-grid">
        <article class="service-card" *ngFor="let service of services">
          <img [src]="service.imageUrl" [alt]="service.title" />
          <div class="card-body">
            <h2>{{ service.title }}</h2>
            <p>{{ service.shortDescription }}</p>
            <a [routerLink]="['/services', service.slug]">Learn more</a>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; padding: 2rem 1.25rem 4rem; background: linear-gradient(180deg, #f8fbff 0%, #eef4fb 100%); }`,
    `.overview { max-width: 1200px; margin: 0 auto; }`,
    `.overview-header { text-align: center; margin-bottom: 2rem; }`,
    `.eyebrow { text-transform: uppercase; color: #1e73be; font-weight: 700; letter-spacing: 0.2em; }`,
    `h1 { font-size: 2rem; margin: 0.4rem 0 0.8rem; color: #0f172a; }`,
    `.overview-header p { color: #475569; max-width: 760px; margin: 0 auto; }`,
    `.service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; }`,
    `.service-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.06); }`,
    `.service-card img { width: 100%; height: 190px; object-fit: cover; }`,
    `.card-body { padding: 1rem 1rem 1.25rem; }`,
    `h2 { font-size: 1.1rem; margin-bottom: 0.4rem; color: #0f172a; }`,
    `a { display: inline-block; margin-top: 0.6rem; color: #1e73be; font-weight: 700; text-decoration: none; }`
  ]
})
export class ServicesOverviewComponent implements OnInit {
  services = SERVICE_CATALOG;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Our Services | APK Elite Services');
    this.meta.updateTag({ name: 'description', content: 'Browse all professional cleaning and facility services offered by APK Elite Services in Pune.' });
    this.meta.updateTag({ name: 'keywords', content: 'APK Elite Services services, cleaning services Pune, facility services Pune' });
  }
}
