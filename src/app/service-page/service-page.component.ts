import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../seo.service';
import { getServiceBySlug, ServiceItem } from '../shared/service-catalog';

const BASE_URL = 'https://www.apkeliteservices.in';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="service-page" *ngIf="service; else notFound">
      <div class="service-hero">
        <div class="service-content">
          <p class="eyebrow">APK Elite Services</p>
          <h1>{{ service.title }}</h1>
          <p class="summary">{{ service.shortDescription }}</p>
          <a class="cta" href="https://wa.me/918830167863" target="_blank">Book This Service</a>
        </div>
        <div class="service-image">
          <img [src]="service.imageUrl" [alt]="service.title" width="600" height="400" />
        </div>
      </div>

      <div class="service-body">
        <p>{{ service.description }}</p>
        <div class="service-links">
          <a routerLink="/" class="back-link">Back to home</a>
          <a routerLink="/services" class="back-link">View all services</a>
        </div>
      </div>
    </section>

    <ng-template #notFound>
      <section class="service-page not-found">
        <h1>Service not found</h1>
        <p>The requested service page does not exist.</p>
        <a routerLink="/" class="cta">Go to home</a>
        <a routerLink="/services" class="cta">View all services</a>
      </section>
    </ng-template>
  `,
  styles: [
    `:host { display: block; padding: 2rem 1.25rem 4rem; background: #f7f9fc; min-height: 70vh; }`,
    `.service-page { max-width: 1100px; margin: 0 auto; }`,
    `.service-hero { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 2rem; align-items: center; background: white; border-radius: 24px; padding: 2rem; box-shadow: 0 18px 40px rgba(0,0,0,0.06); }`,
    `.eyebrow { text-transform: uppercase; letter-spacing: 0.2em; color: #1e73be; font-weight: 700; margin-bottom: 0.5rem; }`,
    `h1 { font-size: 2rem; margin: 0 0 0.75rem; color: #0f172a; }`,
    `.summary { font-size: 1.05rem; color: #475569; margin-bottom: 1rem; }`,
    `.cta, .back-link { display: inline-block; margin-right: 0.75rem; padding: 0.8rem 1.1rem; border-radius: 999px; background: #1e73be; color: white; text-decoration: none; font-weight: 600; }`,
    `.back-link { background: #0f172a; }`,
    `.service-image img { width: 100%; height: auto; aspect-ratio: 3 / 2; border-radius: 18px; object-fit: cover; }`,
    `.service-body { margin-top: 1.5rem; background: white; padding: 2rem; border-radius: 24px; box-shadow: 0 18px 40px rgba(0,0,0,0.06); color: #334155; line-height: 1.8; }`,
    `.service-links { margin-top: 1rem; }`,
    `.not-found { text-align: center; }`,
    '@media (max-width: 768px) { .service-hero { grid-template-columns: 1fr; } }'
  ]
})
export class ServicePageComponent implements OnInit, OnDestroy {
  service?: ServiceItem;

  constructor(private route: ActivatedRoute, private seo: SeoService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      const matchedService = getServiceBySlug(slug);
      if (!matchedService) {
        this.service = undefined;
        this.seo.generateTags({
          title: 'Service Not Found | APK Elite Services',
          description: 'The requested service page does not exist. Browse all cleaning and facility services by APK Elite Services in Pune.',
          path: '/services'
        });
        return;
      }

      this.service = matchedService;
      const pagePath = `/services/${matchedService.slug}`;
      this.seo.generateTags({
        title: matchedService.metaTitle,
        description: matchedService.metaDescription,
        path: pagePath,
        image: `${BASE_URL}${matchedService.imageUrl}`
      });

      this.seo.setJsonLd('service-jsonld', {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: matchedService.title,
        description: matchedService.metaDescription,
        url: `${BASE_URL}${pagePath}`,
        image: `${BASE_URL}${matchedService.imageUrl}`,
        areaServed: { '@type': 'City', name: 'Pune' },
        provider: { '@id': `${BASE_URL}/#business` }
      });

      this.seo.setJsonLd('breadcrumb-jsonld', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: matchedService.title, item: `${BASE_URL}${pagePath}` }
        ]
      });
    });
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd('service-jsonld');
    this.seo.removeJsonLd('breadcrumb-jsonld');
  }
}
