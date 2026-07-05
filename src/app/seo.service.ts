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
