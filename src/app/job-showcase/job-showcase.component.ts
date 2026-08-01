import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkItem {
  title: string;
  location: string;
  category: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-job-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="showcase-section">
      <div class="section-header">
        <h2>Recent Cleaning Projects in Pune</h2>
        <p>Explore recent residential and commercial cleaning work completed by our trained in-house team across Pune & PCMC.</p>
      </div>

      <div class="showcase-grid">
        <div class="showcase-card" *ngFor="let item of workItems">
          <div class="card-image">
            <img [src]="item.imageUrl" [alt]="item.title" loading="lazy" width="400" height="260" />
            <span class="category-badge">{{ item.category }}</span>
          </div>
          <div class="card-content">
            <div class="location-tag">
              <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>{{ item.location }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; padding: 3rem 1.25rem; background: #ffffff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }`,
    `.showcase-section { max-width: 1140px; margin: 0 auto; }`,
    `.section-header { text-align: center; margin-bottom: 2.25rem; }`,
    `h2 { font-size: 1.75rem; color: #0f172a; margin: 0 0 0.5rem; font-weight: 700; letter-spacing: -0.02em; }`,
    `.section-header p { color: #64748b; font-size: 0.95rem; margin: 0; max-width: 680px; margin: 0 auto; }`,
    `.showcase-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }`,
    `.showcase-card { background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.03); transition: transform 0.2s ease, border-color 0.2s ease; }`,
    `.showcase-card:hover { transform: translateY(-2px); border-color: #cbd5e1; }`,
    `.card-image { position: relative; height: 210px; overflow: hidden; background: #f1f5f9; }`,
    `.card-image img { width: 100%; height: 100%; object-fit: cover; }`,
    `.category-badge { position: absolute; top: 12px; right: 12px; background: rgba(15, 23, 42, 0.85); color: white; font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.65rem; border-radius: 6px; }`,
    `.card-content { padding: 1.25rem; }`,
    `.location-tag { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; color: #0284c7; font-weight: 600; margin-bottom: 0.4rem; }`,
    `h3 { font-size: 1.05rem; color: #0f172a; margin: 0 0 0.4rem; font-weight: 700; line-height: 1.35; }`,
    `p { font-size: 0.88rem; color: #64748b; margin: 0; line-height: 1.55; }`,
    `@media (max-width: 840px) { .showcase-grid { grid-template-columns: 1fr; } h2 { font-size: 1.4rem; } }`
  ]
})
export class JobShowcaseComponent {
  workItems: WorkItem[] = [
    {
      title: '3BHK Vacant Apartment Deep Clean',
      location: 'Baner, Pune',
      category: 'Deep Cleaning',
      imageUrl: '/assets/images/deep-clean.webp',
      description: 'Complete floor scrubbing, kitchen degreasing, bathroom descaling & balcony pressure washing.'
    },
    {
      title: '7-Seater Fabric Sofa Shampooing',
      location: 'Wakad, Pune',
      category: 'Sofa Cleaning',
      imageUrl: '/assets/images/Sofacleaning.webp',
      description: 'Deep foam injection & extraction to remove tough stains, dust & odor from living room sofa.'
    },
    {
      title: 'Corporate Office Carpet & Janitorial',
      location: 'Kharadi (EON IT Park), Pune',
      category: 'Office Cleaning',
      imageUrl: '/assets/images/office-clean.webp',
      description: 'Overnight office sanitization, carpet steam extraction & workstation sanitization.'
    }
  ];
}
