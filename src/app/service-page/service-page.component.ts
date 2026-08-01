import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../seo.service';
import { getServiceBySlug, ServiceItem } from '../shared/service-catalog';

const BASE_URL = 'https://www.apkeliteservices.in';
const WA_NUMBER = '918830167863';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="service-page" *ngIf="service; else notFound">

      <!-- Hero -->
      <div class="service-hero">
        <div class="service-content">
          <p class="eyebrow">APK Elite Services · Pune</p>
          <h1>{{ service.title }}</h1>
          <p class="summary">{{ service.shortDescription }}</p>

          <!-- Pricing badge -->
          <div class="price-badge">
            <span class="price-icon">💰</span>
            <span>{{ service.startingPrice }}</span>
          </div>

          <!-- CTA row -->
          <div class="cta-row">
            <a class="cta-whatsapp"
               [href]="'https://wa.me/' + waNumber + '?text=' + service.whatsappMessage"
               target="_blank"
               rel="noopener"
               data-umami-event="whatsapp-service-click"
               [attr.data-umami-event-service]="service.slug">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.855L0 24l6.335-1.502A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.52-5.17-1.426l-.37-.22-3.76.892.946-3.653-.24-.383A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Get Free Quote on WhatsApp
            </a>
            <a class="cta-call" href="tel:+918830167863" data-umami-event="call-service-click" [attr.data-umami-event-service]="service.slug">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Call Now
            </a>
          </div>
        </div>
        <div class="service-image">
          <img [src]="service.imageUrl" [alt]="service.title" width="600" height="400" loading="lazy" />
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="trust-row">
        <div class="badge"><span>✅</span><span>100% In-House Staff</span></div>
        <div class="badge"><span>🌱</span><span>Eco-Friendly Chemicals</span></div>
        <div class="badge"><span>🛡️</span><span>Fully Insured</span></div>
        <div class="badge"><span>💯</span><span>Satisfaction Guaranteed</span></div>
      </div>

      <!-- Description -->
      <div class="service-body">
        <h2>About This Service</h2>
        <p>{{ service.description }}</p>

        <!-- Inline CTA -->
        <div class="inline-cta">
          <p><strong>Ready to book?</strong> Contact us now for a fast, no-obligation quote.</p>
          <div class="cta-row">
            <a class="cta-whatsapp"
               [href]="'https://wa.me/' + waNumber + '?text=' + service.whatsappMessage"
               target="_blank" rel="noopener"
               data-umami-event="whatsapp-service-body-click"
               [attr.data-umami-event-service]="service.slug">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.855L0 24l6.335-1.502A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.52-5.17-1.426l-.37-.22-3.76.892.946-3.653-.24-.383A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp for Quote
            </a>
            <a routerLink="/contact" class="cta-contact" data-umami-event="contact-form-click" [attr.data-umami-event-service]="service.slug">Request Callback</a>
          </div>
        </div>

        <div class="service-links">
          <a routerLink="/" class="back-link">← Home</a>
          <a routerLink="/services" class="back-link">All Services</a>
        </div>
      </div>
    </section>

    <ng-template #notFound>
      <section class="service-page not-found">
        <h1>Service not found</h1>
        <p>The requested service page does not exist.</p>
        <a routerLink="/" class="cta-whatsapp">Go to home</a>
        <a routerLink="/services" class="cta-contact">View all services</a>
      </section>
    </ng-template>
  `,
  styles: [
    `:host { display: block; padding: 2rem 1.25rem 4rem; background: linear-gradient(180deg, #f0f6ff 0%, #eef4fb 100%); min-height: 70vh; }`,
    `.service-page { max-width: 1100px; margin: 0 auto; }`,

    /* Hero */
    `.service-hero { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 2rem; align-items: center; background: white; border-radius: 24px; padding: 2.5rem; box-shadow: 0 18px 40px rgba(0,0,0,0.07); }`,
    `.eyebrow { text-transform: uppercase; letter-spacing: 0.18em; color: #1e73be; font-weight: 700; font-size: 0.78rem; margin-bottom: 0.5rem; }`,
    `h1 { font-size: 2rem; margin: 0 0 0.75rem; color: #0f172a; font-weight: 800; line-height: 1.2; }`,
    `.summary { font-size: 1.05rem; color: #475569; margin-bottom: 1.25rem; line-height: 1.65; }`,

    /* Price badge */
    `.price-badge { display: inline-flex; align-items: center; gap: 0.4rem; background: linear-gradient(135deg, #e6f4ea 0%, #d4edda 100%); border: 1.5px solid #4caf50; color: #1b5e20; font-weight: 700; font-size: 1rem; padding: 0.5rem 1rem; border-radius: 999px; margin-bottom: 1.25rem; }`,

    /* CTA row */
    `.cta-row { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }`,
    `.cta-whatsapp { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.4rem; border-radius: 999px; background: #25d366; color: white; text-decoration: none; font-weight: 700; font-size: 0.95rem; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 12px rgba(37,211,102,0.35); }`,
    `.cta-whatsapp:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,211,102,0.45); }`,
    `.cta-call { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.4rem; border-radius: 999px; background: #0f172a; color: white; text-decoration: none; font-weight: 700; font-size: 0.95rem; transition: transform 0.15s; }`,
    `.cta-call:hover { transform: translateY(-2px); }`,

    /* Service image */
    `.service-image img { width: 100%; height: auto; aspect-ratio: 3 / 2; border-radius: 18px; object-fit: cover; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }`,

    /* Trust row */
    `.trust-row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin: 1.25rem 0; }`,
    `.badge { display: inline-flex; align-items: center; gap: 0.4rem; background: white; border: 1px solid #e2e8f0; border-radius: 999px; padding: 0.45rem 1rem; font-size: 0.88rem; font-weight: 600; color: #334155; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }`,

    /* Body */
    `.service-body { background: white; padding: 2.5rem; border-radius: 24px; box-shadow: 0 18px 40px rgba(0,0,0,0.06); color: #334155; line-height: 1.8; }`,
    `h2 { color: #0f172a; font-size: 1.3rem; margin-top: 0; margin-bottom: 1rem; }`,
    `.inline-cta { background: #f8fbff; border: 1px solid #dbeafe; border-radius: 16px; padding: 1.5rem; margin: 1.5rem 0; }`,
    `.cta-contact { display: inline-flex; align-items: center; padding: 0.85rem 1.4rem; border-radius: 999px; background: #1e73be; color: white; text-decoration: none; font-weight: 700; font-size: 0.95rem; transition: transform 0.15s; }`,
    `.cta-contact:hover { transform: translateY(-2px); }`,
    `.service-links { margin-top: 1.5rem; display: flex; gap: 0.75rem; flex-wrap: wrap; }`,
    `.back-link { display: inline-block; padding: 0.6rem 1.1rem; border-radius: 999px; background: #f1f5f9; color: #475569; text-decoration: none; font-weight: 600; font-size: 0.9rem; }`,
    `.back-link:hover { background: #e2e8f0; }`,
    `.not-found { text-align: center; }`,
    `@media (max-width: 768px) { .service-hero { grid-template-columns: 1fr; } h1 { font-size: 1.6rem; } }`
  ]
})
export class ServicePageComponent implements OnInit, OnDestroy {
  service?: ServiceItem;
  readonly waNumber = WA_NUMBER;

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
