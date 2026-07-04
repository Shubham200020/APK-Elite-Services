# How to Build SEO for Each Subpage in Angular

To optimize individual pages for search engines, your Angular application must dynamically change metadata (titles, descriptions, keywords, Open Graph tags) when the route changes. 

---

## 1. Step 1: Configure Angular Routing (`src/app/app.routes.ts`)

Define custom SEO-friendly paths (slugs) for each service:
```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services/:service-slug', component: ServiceDetailComponent }, // Dynamic service route
  { path: '**', redirectTo: '' }
];
```

---

## 2. Step 2: Create a Dedicated SEO Service (`src/app/seo.service.ts`)

Create a service that wraps Angular's built-in `Title` and `Meta` tools. This service will dynamically update headers on route activation.

```typescript
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private titleService: Title, private metaService: Meta) {}

  generateTags(config: { title: string; description: string; keywords: string; slug: string }) {
    // 1. Set Page Title
    this.titleService.setTitle(config.title);

    // 2. Set Meta Description & Keywords
    this.metaService.updateTag({ name: 'description', content: config.description });
    this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    
    // 3. Open Graph (Facebook / LinkedIn)
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:url', content: `https://www.apkeliteservices.in/${config.slug}` });
    
    // 4. Twitter Cards
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
  }
}
```

---

## 3. Step 3: Integrate with Dynamic Components (`service-detail.component.ts`)

When a user visits a service detail page, fetch the corresponding meta config based on the path parameter and update the SEO service:

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  
  // Example local database configuration for your services
  serviceMetaDatabase: { [key: string]: any } = {
    'sofa-cleaning-pune': {
      title: 'Professional Sofa Cleaning & Shampooing in Pune | APK Elite',
      description: 'Affordable sofa cleaning services in Pune. We sanitize, vacuum, and descaling fabric & leather sofas. Book online today!',
      keywords: 'sofa cleaning Pune, sofa shampooing, upholstery cleaning Pune, APK Elite Services',
      slug: 'services/sofa-cleaning-pune'
    },
    'pest-control-pune': {
      title: 'Best Pest Control Services in Pune | Termite & Bedbug Treatment',
      description: 'Expert pest control services in Pune. Safe and eco-friendly termite, bedbug, and cockroach treatment by APK Elite Services.',
      keywords: 'pest control Pune, termite treatment, bedbug control Pune, cockroach spray Pune',
      slug: 'services/pest-control-pune'
    }
  };

  constructor(private route: ActivatedRoute, private seo: SeoService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('service-slug');
      if (slug && this.serviceMetaDatabase[slug]) {
        const metadata = this.serviceMetaDatabase[slug];
        // Inject SEO tags dynamically into the header!
        this.seo.generateTags(metadata);
      }
    });
  }
}
```

---

## 4. Checklist for Subpage SEO Optimization

* **Unique H1 Tag:** Ensure the page template has exactly one `<h1>` tag matching the page topic (e.g., `<h1>Sofa Cleaning Services in Pune</h1>`).
* **Clean Slugs:** Use only lowercase letters, numbers, and hyphens (`-`). Avoid spaces or special characters.
* **Internal Linking:** Ensure your homepage services block links to your subpages using standard router links:
  `<a [routerLink]="['/services', service.slug]">Learn More</a>`
