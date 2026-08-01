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
        <span class="badge-tag">Recent Work Gallery</span>
        <h2>Real Work & Job Transformations in Pune</h2>
        <p>Take a look at recent cleaning projects completed by our trained in-house team across Pune & PCMC.</p>
      </div>

      <div class="showcase-grid">
        <div class="showcase-card" *ngFor="let item of workItems">
          <div class="card-image">
            <img [src]="item.imageUrl" [alt]="item.title" loading="lazy" width="400" height="260" />
            <span class="category-tag">{{ item.category }}</span>
          </div>
          <div class="card-content">
            <div class="location-pin">📍 {{ item.location }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; margin: 3rem 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }`,
    `.showcase-section { max-width: 1140px; margin: 0 auto; }`,
    `.section-header { text-align: center; margin-bottom: 2rem; }`,
    `.badge-tag { display: inline-block; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #0284c7; background: #f0f9ff; border: 1px solid #bae6fd; padding: 0.3rem 0.75rem; border-radius: 6px; margin-bottom: 0.5rem; }`,
    `h2 { font-size: 1.6rem; color: #0f172a; margin: 0 0 0.5rem; font-weight: 700; letter-spacing: -0.01em; }`,
    `.section-header p { color: #64748b; font-size: 0.95rem; margin: 0; }`,
    `.showcase-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }`,
    `.showcase-card { background: white; border-radius: 14px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03); transition: transform 0.2s ease, box-shadow 0.2s ease; }`,
    `.showcase-card:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,0,0,0.07); }`,
    `.card-image { position: relative; height: 200px; overflow: hidden; background: #f1f5f9; }`,
    `.card-image img { width: 100%; height: 100%; object-fit: cover; }`,
    `.category-tag { position: absolute; top: 12px; right: 12px; background: rgba(15, 23, 42, 0.85); color: white; font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.65rem; border-radius: 6px; backdrop-filter: blur(4px); }`,
    `.card-content { padding: 1.25rem; }`,
    `.location-pin { font-size: 0.8rem; color: #0284c7; font-weight: 600; margin-bottom: 0.35rem; }`,
    `h3 { font-size: 1.05rem; color: #0f172a; margin: 0 0 0.4rem; font-weight: 700; }`,
    `p { font-size: 0.88rem; color: #64748b; margin: 0; line-height: 1.5; }`,
    `@media (max-width: 840px) { .showcase-grid { grid-template-columns: 1fr; } }`
  ]
})
export class JobShowcaseComponent {
  workItems: WorkItem[] = [
    {
      title: '3BHK Vacant Apartment Deep Clean',
      location: 'Baner, Pune',
      category: 'Deep Cleaning',
      imageUrl: '/assets/images/deep-clean.webp',
      description: 'Complete floor scrubbing, kitchen degreasing, bathroom descaling & balcony pressure wash.'
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
