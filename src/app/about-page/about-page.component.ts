import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-section">
      <div class="page-hero">
        <p class="eyebrow">About APK Elite Services</p>
        <h1>Pune's Most Trusted Deep Cleaning & Facility Care Partner</h1>
        <p class="hero-desc">We are redefining the standard for residential and commercial hygiene across Pune. Unlike standard aggregators, we deliver consistent, premium quality using our own 100% in-house, background-verified professionals and hospital-grade eco-friendly cleaning agents.</p>
        <div class="cta-row">
          <a routerLink="/services" class="cta">Explore Our Services</a>
          <a routerLink="/contact" class="secondary">Request a Custom Quote</a>
        </div>
      </div>

      <div class="info-grid">
        <article class="highlight-article">
          <h2>🏢 Who We Serve</h2>
          <p>We provide tailored facility management and deep cleaning for premium residential apartments, IT parks, warehouses, and post-construction sites across Pune's major hubs including Baner, Kharadi, Hinjewadi, Wakad, and Kalyani Nagar.</p>
        </article>
        
        <article class="highlight-article">
          <h2>🛡️ Why We Stand Out</h2>
          <ul class="advantages-list">
            <li><strong>No Freelancers:</strong> We deploy only 100% in-house, highly trained and vetted staff.</li>
            <li><strong>Transparent Pricing:</strong> Clear, upfront "starting from" prices with no hidden charges.</li>
            <li><strong>Eco-Friendly Products:</strong> Child-safe and pet-safe chemicals standard on every job.</li>
            <li><strong>Fully Insured:</strong> Full damage coverage protecting your luxury home or office.</li>
          </ul>
        </article>
      </div>

      <div class="services-overview">
        <h2>Our Core Expertise</h2>
        <div class="service-cards">
          <div class="card">
            <h3>Residential Deep Cleaning</h3>
            <p>Comprehensive home sanitization moving beyond daily dusting. We tackle grime in kitchens, descale bathrooms, and ensure nooks and corners are spotless.</p>
          </div>
          <div class="card">
            <h3>Commercial Facility Management</h3>
            <p>Reliable, after-hours office cleaning, floor polishing, and facade washing designed to maintain a pristine corporate environment without disrupting workflow.</p>
          </div>
          <div class="card">
            <h3>Specialized Treatments</h3>
            <p>Targeted solutions including fabric-safe Sofa Shampooing, Water Tank Cleaning, and rigorous Pest Control (termite, bedbug, and cockroach treatments).</p>
          </div>
          <div class="card">
            <h3>Post-Construction Cleanup</h3>
            <p>Heavy-duty cleaning for builders and developers. We rapidly remove cement residue, paint splatters, and heavy dust to prepare properties for handover.</p>
          </div>
        </div>
      </div>

      <div class="guarantee-section">
        <h2>Our 100% Satisfaction Guarantee</h2>
        <p>Your satisfaction is our ultimate metric. We promise punctuality, professional conduct, and a spotless finish. If you aren't completely satisfied with the results, our team will make it right.</p>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; padding: 2rem 1.25rem 4rem; background: linear-gradient(180deg, #f8fbff 0%, #eef4fb 100%); }`,
    `.page-section { max-width: 1100px; margin: 0 auto; }`,
    `.page-hero { background: white; border-radius: 24px; padding: 2.5rem; box-shadow: 0 18px 40px rgba(0,0,0,0.06); margin-bottom: 2rem; text-align: center; }`,
    `.eyebrow { text-transform: uppercase; letter-spacing: 0.2em; color: #1e73be; font-weight: 700; margin-bottom: 0.5rem; }`,
    `h1 { font-size: 2.5rem; color: #0f172a; margin: 0 0 1rem; }`,
    `.hero-desc { color: #475569; line-height: 1.7; font-size: 1.1rem; max-width: 800px; margin: 0 auto 1.5rem; }`,
    `.cta-row { display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; }`,
    `.cta, .secondary { display: inline-block; padding: 0.9rem 1.5rem; border-radius: 999px; text-decoration: none; font-weight: 700; transition: transform 0.2s; }`,
    `.cta:hover, .secondary:hover { transform: translateY(-2px); }`,
    `.cta { background: #1e73be; color: white; box-shadow: 0 4px 15px rgba(30, 115, 190, 0.3); }`,
    `.secondary { background: #eaf4ff; color: #1e73be; border: 1px solid #cce4ff; }`,
    `.info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }`,
    `.highlight-article { background: white; border-radius: 18px; padding: 2rem; box-shadow: 0 12px 30px rgba(0,0,0,0.05); }`,
    `.highlight-article h2 { font-size: 1.3rem; color: #0f172a; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; }`,
    `.highlight-article p { color: #475569; line-height: 1.6; }`,
    `.advantages-list { list-style: none; padding: 0; margin: 0; }`,
    `.advantages-list li { padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9; color: #475569; line-height: 1.5; }`,
    `.advantages-list li:last-child { border-bottom: none; }`,
    `.advantages-list li strong { color: #0f172a; }`,
    `.services-overview { margin-bottom: 2rem; }`,
    `.services-overview h2 { font-size: 1.8rem; color: #0f172a; text-align: center; margin-bottom: 1.5rem; }`,
    `.service-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }`,
    `.card { background: white; border-radius: 16px; padding: 1.5rem; box-shadow: 0 8px 20px rgba(0,0,0,0.04); border-top: 4px solid #1e73be; }`,
    `.card h3 { color: #0f172a; font-size: 1.2rem; margin-top: 0; margin-bottom: 0.8rem; }`,
    `.card p { color: #64748b; font-size: 0.95rem; line-height: 1.5; margin: 0; }`,
    `.guarantee-section { background: #1e73be; color: white; border-radius: 24px; padding: 2.5rem; text-align: center; }`,
    `.guarantee-section h2 { margin-top: 0; margin-bottom: 1rem; font-size: 1.8rem; }`,
    `.guarantee-section p { font-size: 1.1rem; line-height: 1.6; max-width: 800px; margin: 0 auto; opacity: 0.9; }`
  ]
})
export class AboutPageComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'About APK Elite Services | Premium Cleaning in Pune',
      description: 'Discover APK Elite Services. We provide 100% in-house, eco-friendly deep cleaning, pest control, and facility management for Pune residential and commercial clients.',
      path: '/about'
    });
  }
}
