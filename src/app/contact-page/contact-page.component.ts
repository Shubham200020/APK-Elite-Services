import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-section">
      <div class="page-hero">
        <p class="eyebrow">Contact APK Elite Services</p>
        <h1>Get in touch for a quote or booking</h1>
        <p>Whether you need a one-time deep clean or regular maintenance, our team is ready to help with reliable service across Pune.</p>
        <div class="cta-row">
          <a href="https://wa.me/918830167863" target="_blank" class="cta">WhatsApp Us</a>
          <a href="mailto:info@apkeliteservices.in" class="secondary">Email Us</a>
        </div>
      </div>

      <div class="contact-card">
        <div>
          <h2>Reach us directly</h2>
          <p><strong>Phone:</strong> +91 88301 67863</p>
          <p><strong>Email:</strong> info&#64;apkeliteservices.in</p>
          <p><strong>Service Area:</strong> Pune and nearby locations</p>
        </div>
        <div>
          <h2>Popular services</h2>
          <ul>
            <li><a routerLink="/services/sofa-cleaning">Sofa Cleaning</a></li>
            <li><a routerLink="/services/deep-cleaning">Deep Cleaning</a></li>
            <li><a routerLink="/services/office-cleaning">Office Cleaning</a></li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; padding: 2rem 1.25rem 4rem; background: linear-gradient(180deg, #f8fbff 0%, #eef4fb 100%); }`,
    `.page-section { max-width: 1100px; margin: 0 auto; }`,
    `.page-hero { background: white; border-radius: 24px; padding: 2rem; box-shadow: 0 18px 40px rgba(0,0,0,0.06); margin-bottom: 1.5rem; }`,
    `.eyebrow { text-transform: uppercase; letter-spacing: 0.2em; color: #1e73be; font-weight: 700; margin-bottom: 0.5rem; }`,
    `h1 { font-size: 2rem; color: #0f172a; margin: 0 0 0.8rem; }`,
    `.page-hero p { color: #475569; line-height: 1.7; }`,
    `.cta-row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1rem; }`,
    `.cta, .secondary { display: inline-block; padding: 0.8rem 1.1rem; border-radius: 999px; text-decoration: none; font-weight: 700; }`,
    `.cta { background: #1e73be; color: white; }`,
    `.secondary { background: #eaf4ff; color: #0f172a; }`,
    `.contact-card { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; background: white; border-radius: 24px; padding: 1.5rem; box-shadow: 0 18px 40px rgba(0,0,0,0.06); }`,
    `h2 { color: #0f172a; font-size: 1.1rem; margin-top: 0; }`,
    `ul { padding-left: 1rem; color: #475569; }`,
    `a { color: #1e73be; text-decoration: none; }`
  ]
})
export class ContactPageComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Contact APK Elite Services | Pune Cleaning Services');
    this.meta.updateTag({ name: 'description', content: 'Contact APK Elite Services for professional cleaning, sanitization, and facility services across Pune.' });
    this.meta.updateTag({ name: 'keywords', content: 'contact APK Elite Services, cleaning services Pune contact, sofa cleaning Pune contact' });
  }
}
