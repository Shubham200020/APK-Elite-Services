import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SERVICE_CATALOG } from '../shared/service-catalog';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="not-found">
      <div class="bubbles" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <div class="card">
        <p class="code" aria-label="Error 404">4<i class="fas fa-broom broom"></i>4</p>
        <h1>Oops — this page got swept away!</h1>
        <p class="lede">Our deep-cleaning crew was a little <em>too</em> thorough. This page has been scrubbed, shampooed and polished right off the internet.</p>
        <p class="sub">And if it's pests you were hunting — relax, we exterminated this page's bugs too. 🐜</p>

        <div class="links">
          <a routerLink="/" class="cta"><i class="fas fa-home"></i> Back to a spotless home</a>
          <a href="https://wa.me/918830167863" target="_blank" class="whats"><i class="fab fa-whatsapp"></i> Book a real clean-up</a>
        </div>

        <p class="chips-title">Maybe you were looking for one of these?</p>
        <div class="chips">
          <a *ngFor="let s of popularServices" [routerLink]="['/services', s.slug]">{{ s.title }}</a>
          <a routerLink="/services" class="all">All services →</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; padding: 3rem 1.25rem 4rem; background: linear-gradient(180deg, #f8fbff 0%, #dceaf8 100%); min-height: 70vh; }`,
    `.not-found { position: relative; max-width: 760px; margin: 0 auto; }`,
    `.card { position: relative; z-index: 1; text-align: center; background: white; border-radius: 24px; padding: 3rem 2rem; box-shadow: 0 18px 40px rgba(30,115,190,0.12); }`,
    `.code { font-size: 4.5rem; font-weight: 800; color: #1e73be; margin: 0; line-height: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }`,
    `.broom { font-size: 3.5rem; color: #f59e0b; display: inline-block; transform-origin: 50% 90%; animation: sweep 1.6s ease-in-out infinite; }`,
    `@keyframes sweep { 0%, 100% { transform: rotate(-18deg); } 50% { transform: rotate(18deg); } }`,
    `h1 { color: #0f172a; margin: 1rem 0 0.75rem; font-size: 1.7rem; }`,
    `.lede { color: #475569; line-height: 1.7; max-width: 560px; margin: 0 auto; }`,
    `.sub { color: #64748b; margin: 0.75rem auto 0; }`,
    `.links { display: flex; justify-content: center; flex-wrap: wrap; gap: 0.75rem; margin: 1.75rem 0 0.5rem; }`,
    `.cta, .whats { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.3rem; border-radius: 999px; text-decoration: none; font-weight: 700; }`,
    `.cta { background: #1e73be; color: white; box-shadow: 0 4px 15px rgba(30,115,190,0.3); }`,
    `.whats { background: #e7f9ee; color: #128c4b; border: 1px solid #bbeccf; }`,
    `.chips-title { color: #0f172a; font-weight: 700; margin: 1.75rem 0 0.75rem; }`,
    `.chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }`,
    `.chips a { background: #eaf4ff; color: #1e73be; border-radius: 999px; padding: 0.5rem 0.95rem; text-decoration: none; font-weight: 600; font-size: 0.9rem; }`,
    `.chips a:hover, .chips a.all { background: #1e73be; color: white; }`,
    `.bubbles span { position: absolute; bottom: -20px; border-radius: 50%; background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(30,115,190,0.25)); border: 1px solid rgba(30,115,190,0.25); animation: rise 7s linear infinite; opacity: 0; }`,
    `.bubbles span:nth-child(1) { left: 6%; width: 26px; height: 26px; animation-delay: 0s; }`,
    `.bubbles span:nth-child(2) { left: 20%; width: 14px; height: 14px; animation-delay: 1.2s; }`,
    `.bubbles span:nth-child(3) { left: 46%; width: 20px; height: 20px; animation-delay: 2.4s; }`,
    `.bubbles span:nth-child(4) { left: 68%; width: 30px; height: 30px; animation-delay: 0.8s; }`,
    `.bubbles span:nth-child(5) { left: 84%; width: 16px; height: 16px; animation-delay: 3.2s; }`,
    `.bubbles span:nth-child(6) { left: 94%; width: 22px; height: 22px; animation-delay: 1.8s; }`,
    `@keyframes rise { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 100% { transform: translateY(-70vh); opacity: 0; } }`,
    `@media (prefers-reduced-motion: reduce) { .broom, .bubbles span { animation: none; } }`,
    `@media (max-width: 600px) { .code { font-size: 3.2rem; } .broom { font-size: 2.5rem; } h1 { font-size: 1.35rem; } }`
  ]
})
export class NotFoundComponent implements OnInit, OnDestroy {
  popularServices = SERVICE_CATALOG.slice(0, 6);

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Page Swept Away (404) | APK Elite Services');
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }

  ngOnDestroy(): void {
    // Do not leak noindex into other pages during client-side navigation.
    this.meta.removeTag('name="robots"');
  }
}
