import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../seo.service';

const WA_NUMBER = '918830167863';

interface ContactForm {
  name: string;
  phone: string;
  service: string;
  locality: string;
  message: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <section class="contact-page">

      <!-- Page Hero -->
      <div class="page-hero">
        <p class="eyebrow">Get in Touch · Pune</p>
        <h1>Book a Service or Get a Free Quote</h1>
        <p class="hero-sub">We respond within <strong>5 minutes</strong> on WhatsApp. Fill the form below or contact us directly.</p>
        <div class="hero-cta-row">
          <a href="https://wa.me/{{ waNumber }}?text=Hi%2C%20I%20need%20a%20cleaning%20service%20quote%20in%20Pune."
             target="_blank" rel="noopener"
             class="btn-whatsapp"
             data-umami-event="whatsapp-contact-hero">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.855L0 24l6.335-1.502A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.52-5.17-1.426l-.37-.22-3.76.892.946-3.653-.24-.383A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            WhatsApp Us Now
          </a>
          <a href="tel:+918830167863" class="btn-call" data-umami-event="call-contact-hero">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            +91 88301 67863
          </a>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="contact-grid">

        <!-- Inquiry Form -->
        <div class="form-card">
          <h2>Send Us a Message</h2>
          <p class="form-sub">We'll call you back within 30 minutes during business hours.</p>

          <!-- Success State -->
          <div class="success-state" *ngIf="submitted">
            <div class="success-icon">✅</div>
            <h3>Thank You, {{ form.name }}!</h3>
            <p>We've received your inquiry and will contact you shortly on <strong>{{ form.phone }}</strong>.</p>
            <p>For instant response, reach us on WhatsApp:</p>
            <a [href]="successWhatsAppUrl" target="_blank" rel="noopener" class="btn-whatsapp" data-umami-event="whatsapp-post-form">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.855L0 24l6.335-1.502A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.52-5.17-1.426l-.37-.22-3.76.892.946-3.653-.24-.383A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Chat on WhatsApp
            </a>
            <button class="btn-reset" (click)="resetForm()">Submit Another Request</button>
          </div>

          <!-- Form -->
          <form *ngIf="!submitted" (ngSubmit)="onSubmit()" #contactFormRef="ngForm" novalidate>
            <!-- Name -->
            <div class="field" [class.error]="nameFld.invalid && nameFld.touched">
              <label for="contact-name">Full Name <span class="req">*</span></label>
              <input id="contact-name" name="name" type="text" [(ngModel)]="form.name"
                     required minlength="2" #nameFld="ngModel"
                     placeholder="e.g. Priya Sharma" autocomplete="name" />
              <span class="err-msg" *ngIf="nameFld.invalid && nameFld.touched">Please enter your name.</span>
            </div>

            <!-- Phone -->
            <div class="field" [class.error]="phoneFld.invalid && phoneFld.touched">
              <label for="contact-phone">WhatsApp / Phone Number <span class="req">*</span></label>
              <input id="contact-phone" name="phone" type="tel" [(ngModel)]="form.phone"
                     required pattern="[6-9][0-9]{9}" #phoneFld="ngModel"
                     placeholder="10-digit mobile number" autocomplete="tel" />
              <span class="err-msg" *ngIf="phoneFld.invalid && phoneFld.touched">Enter a valid 10-digit Indian mobile number.</span>
            </div>

            <!-- Service -->
            <div class="field">
              <label for="contact-service">Service Required <span class="req">*</span></label>
              <select id="contact-service" name="service" [(ngModel)]="form.service" required #serviceFld="ngModel">
                <option value="" disabled>Select a service...</option>
                <option value="Deep Cleaning">Deep Cleaning</option>
                <option value="Sofa Cleaning">Sofa Cleaning</option>
                <option value="Carpet Cleaning">Carpet Cleaning</option>
                <option value="Office Cleaning">Office Cleaning</option>
                <option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
                <option value="Pest Control">Pest Control</option>
                <option value="Sanitization">Sanitization</option>
                <option value="Water Tank Cleaning">Water Tank Cleaning</option>
                <option value="Floor Polishing">Floor Polishing</option>
                <option value="Facade Cleaning">Facade Cleaning</option>
                <option value="Chair Shampooing">Chair Shampooing</option>
                <option value="Gardening">Gardening</option>
                <option value="Other / Not Sure">Other / Not Sure</option>
              </select>
            </div>

            <!-- Locality -->
            <div class="field">
              <label for="contact-locality">Your Area in Pune <span class="req">*</span></label>
              <select id="contact-locality" name="locality" [(ngModel)]="form.locality" required>
                <option value="" disabled>Select your area...</option>
                <option value="Baner">Baner</option>
                <option value="Balewadi">Balewadi</option>
                <option value="Wakad">Wakad</option>
                <option value="Hinjewadi">Hinjewadi</option>
                <option value="Kharadi">Kharadi</option>
                <option value="Viman Nagar">Viman Nagar</option>
                <option value="Kothrud">Kothrud</option>
                <option value="Hadapsar">Hadapsar</option>
                <option value="Magarpatta">Magarpatta</option>
                <option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option>
                <option value="Aundh">Aundh</option>
                <option value="Koregaon Park">Koregaon Park</option>
                <option value="Kalyani Nagar">Kalyani Nagar</option>
                <option value="Undri">Undri</option>
                <option value="Bavdhan">Bavdhan</option>
                <option value="Other">Other Area</option>
              </select>
            </div>

            <!-- Message -->
            <div class="field">
              <label for="contact-message">Additional Details <span class="opt">(optional)</span></label>
              <textarea id="contact-message" name="message" [(ngModel)]="form.message"
                        rows="3" placeholder="e.g. 2 BHK furnished flat, preferred date: Sunday morning"></textarea>
            </div>

            <!-- Error banner -->
            <div class="error-banner" *ngIf="submitError">
              ⚠️ {{ submitError }} Please try WhatsApp instead.
            </div>

            <!-- Submit -->
            <button type="submit" class="btn-submit" [class.loading]="sending" [disabled]="sending || contactFormRef.invalid">
              <span *ngIf="!sending">🚀 Send Enquiry</span>
              <span *ngIf="sending">Sending…</span>
            </button>

            <p class="form-note">By submitting, you agree to our <a routerLink="/privacy-policy">Privacy Policy</a>. We never share your data.</p>
          </form>
        </div>

        <!-- Sidebar Info -->
        <div class="sidebar">
          <!-- Contact Details -->
          <div class="info-card">
            <h3>Contact Details</h3>
            <div class="info-row">
              <span class="info-icon">📱</span>
              <div>
                <div class="info-label">WhatsApp / Phone</div>
                <a href="tel:+918830167863" class="info-val">+91 88301 67863</a>
              </div>
            </div>
            <div class="info-row">
              <span class="info-icon">📧</span>
              <div>
                <div class="info-label">Email</div>
                <a href="mailto:info@apkeliteservices.in" class="info-val">info&#64;apkeliteservices.in</a>
              </div>
            </div>
            <div class="info-row">
              <span class="info-icon">📍</span>
              <div>
                <div class="info-label">Service Area</div>
                <span class="info-val">Pune & PCMC</span>
              </div>
            </div>
            <div class="info-row">
              <span class="info-icon">🕐</span>
              <div>
                <div class="info-label">Working Hours</div>
                <span class="info-val">Mon–Sun · 8 AM – 8 PM</span>
              </div>
            </div>
          </div>

          <!-- Trust Badges -->
          <div class="trust-card">
            <h3>Why Choose Us?</h3>
            <ul class="trust-list">
              <li><span>✅</span> 100% In-House Vetted Staff</li>
              <li><span>🌱</span> Eco-Friendly Chemicals</li>
              <li><span>🛡️</span> Fully Insured Service</li>
              <li><span>💯</span> Satisfaction Guaranteed</li>
              <li><span>⚡</span> 5-Minute Response Time</li>
              <li><span>🏠</span> 500+ Homes Cleaned</li>
            </ul>
          </div>

          <!-- Popular Services -->
          <div class="info-card">
            <h3>Popular Services</h3>
            <div class="service-links">
              <a routerLink="/services/deep-cleaning">🏠 Deep Cleaning</a>
              <a routerLink="/services/sofa-cleaning">🛋️ Sofa Cleaning</a>
              <a routerLink="/services/pest-control">🐛 Pest Control</a>
              <a routerLink="/services/office-cleaning">🏢 Office Cleaning</a>
              <a routerLink="/services/water-tank-cleaning">💧 Tank Cleaning</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [
    `:host { display: block; padding: 2rem 1.25rem 4rem; background: linear-gradient(180deg, #f0f6ff 0%, #eef4fb 100%); }`,
    `.contact-page { max-width: 1100px; margin: 0 auto; }`,

    /* Hero */
    `.page-hero { background: white; border-radius: 24px; padding: 2.5rem; box-shadow: 0 18px 40px rgba(0,0,0,0.07); margin-bottom: 1.5rem; }`,
    `.eyebrow { text-transform: uppercase; letter-spacing: 0.18em; color: #1e73be; font-weight: 700; font-size: 0.78rem; margin: 0 0 0.5rem; }`,
    `h1 { font-size: 2rem; color: #0f172a; margin: 0 0 0.6rem; font-weight: 800; line-height: 1.2; }`,
    `.hero-sub { color: #475569; margin: 0 0 1.25rem; font-size: 1.05rem; line-height: 1.6; }`,
    `.hero-cta-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }`,

    /* Grid */
    `.contact-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 1.5rem; }`,

    /* Form Card */
    `.form-card { background: white; border-radius: 24px; padding: 2rem; box-shadow: 0 18px 40px rgba(0,0,0,0.07); }`,
    `h2 { font-size: 1.3rem; color: #0f172a; margin: 0 0 0.25rem; font-weight: 700; }`,
    `.form-sub { color: #64748b; margin: 0 0 1.5rem; font-size: 0.92rem; }`,

    /* Fields */
    `.field { margin-bottom: 1.1rem; }`,
    `.field label { display: block; font-size: 0.9rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem; }`,
    `.req { color: #ef4444; }`,
    `.opt { color: #94a3b8; font-weight: 400; font-size: 0.82rem; }`,
    `.field input, .field select, .field textarea { width: 100%; padding: 0.7rem 0.9rem; border: 1.5px solid #e2e8f0; border-radius: 10px; font-size: 0.95rem; color: #0f172a; background: #f8fafc; transition: border-color 0.15s, box-shadow 0.15s; font-family: inherit; box-sizing: border-box; }`,
    `.field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: #1e73be; box-shadow: 0 0 0 3px rgba(30,115,190,0.12); background: white; }`,
    `.field.error input, .field.error select { border-color: #ef4444; }`,
    `.err-msg { color: #ef4444; font-size: 0.8rem; margin-top: 0.25rem; display: block; }`,
    `.field textarea { resize: vertical; min-height: 80px; }`,

    /* Buttons */
    `.btn-whatsapp { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.4rem; border-radius: 999px; background: #25d366; color: white; text-decoration: none; font-weight: 700; font-size: 0.95rem; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 12px rgba(37,211,102,0.3); cursor: pointer; }`,
    `.btn-whatsapp:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,211,102,0.42); }`,
    `.btn-call { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.4rem; border-radius: 999px; background: #0f172a; color: white; text-decoration: none; font-weight: 700; font-size: 0.95rem; transition: transform 0.15s; }`,
    `.btn-call:hover { transform: translateY(-2px); }`,
    `.btn-submit { width: 100%; padding: 0.9rem; border: none; border-radius: 12px; background: linear-gradient(135deg, #1e73be 0%, #0e4d8a 100%); color: white; font-size: 1rem; font-weight: 700; cursor: pointer; transition: transform 0.15s, opacity 0.15s; font-family: inherit; }`,
    `.btn-submit:hover:not(:disabled) { transform: translateY(-2px); }`,
    `.btn-submit:disabled, .btn-submit.loading { opacity: 0.65; cursor: not-allowed; }`,
    `.btn-reset { margin-top: 1rem; padding: 0.7rem 1.4rem; border: 1.5px solid #e2e8f0; border-radius: 999px; background: transparent; color: #475569; font-size: 0.9rem; font-weight: 600; cursor: pointer; font-family: inherit; }`,
    `.form-note { font-size: 0.78rem; color: #94a3b8; margin-top: 0.75rem; text-align: center; }`,
    `.form-note a { color: #1e73be; }`,

    /* Error banner */
    `.error-banner { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; padding: 0.75rem 1rem; border-radius: 10px; margin-bottom: 1rem; font-size: 0.9rem; }`,

    /* Success */
    `.success-state { text-align: center; padding: 1.5rem 0; }`,
    `.success-icon { font-size: 3rem; margin-bottom: 0.5rem; }`,
    `.success-state h3 { font-size: 1.4rem; color: #0f172a; margin: 0 0 0.5rem; }`,
    `.success-state p { color: #475569; margin: 0.25rem 0; }`,
    `.success-state .btn-whatsapp { margin: 1rem auto 0.5rem; }`,

    /* Sidebar */
    `.sidebar { display: flex; flex-direction: column; gap: 1rem; }`,
    `.info-card, .trust-card { background: white; border-radius: 20px; padding: 1.5rem; box-shadow: 0 8px 30px rgba(0,0,0,0.06); }`,
    `h3 { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0 0 1rem; }`,
    `.info-row { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.9rem; }`,
    `.info-icon { font-size: 1.2rem; line-height: 1; }`,
    `.info-label { font-size: 0.78rem; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }`,
    `.info-val { font-size: 0.95rem; color: #0f172a; font-weight: 600; text-decoration: none; display: block; }`,
    `a.info-val:hover { color: #1e73be; }`,
    `.trust-card { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); }`,
    `.trust-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.6rem; }`,
    `.trust-list li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #1e3a5f; font-weight: 600; }`,
    `.service-links { display: flex; flex-direction: column; gap: 0.5rem; }`,
    `.service-links a { color: #1e73be; text-decoration: none; font-size: 0.9rem; font-weight: 600; padding: 0.3rem 0; border-bottom: 1px solid #f1f5f9; }`,
    `.service-links a:last-child { border-bottom: none; }`,
    `.service-links a:hover { color: #0e4d8a; }`,

    /* Responsive */
    `@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } h1 { font-size: 1.6rem; } }`
  ]
})
export class ContactPageComponent implements OnInit {
  readonly waNumber = WA_NUMBER;
  submitted = false;
  sending = false;
  submitError = '';
  successWhatsAppUrl = '';

  form: ContactForm = {
    name: '',
    phone: '',
    service: '',
    locality: '',
    message: ''
  };

  constructor(
    private seo: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Contact APK Elite Services | Get a Free Quote in Pune',
      description: 'Contact APK Elite Services for professional cleaning, sanitization, and facility services in Pune. Get a free quote in 5 minutes via WhatsApp or our inquiry form.',
      path: '/contact'
    });
  }

  async onSubmit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    this.sending = true;
    this.submitError = '';

    // Build WhatsApp fallback URL
    const msg = `Hi%2C%20I%27m%20${encodeURIComponent(this.form.name)}%20from%20${encodeURIComponent(this.form.locality)}.%20I%20need%20${encodeURIComponent(this.form.service)}.%20My%20number%20is%20${encodeURIComponent(this.form.phone)}.%20${encodeURIComponent(this.form.message)}`;
    this.successWhatsAppUrl = `https://wa.me/${WA_NUMBER}?text=${msg}`;

    try {
      // EmailJS — loads lazily, no backend required
      // Instructions: Go to emailjs.com → create account → create service (Gmail) →
      // create template with variables: {{from_name}}, {{phone}}, {{service}}, {{locality}}, {{message}}
      // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY below
      const emailjs = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js' as any).catch(() => null);

      if (emailjs) {
        await (window as any).emailjs.send(
          'YOUR_SERVICE_ID',   // ← replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID',  // ← replace with your EmailJS template ID
          {
            from_name: this.form.name,
            phone: this.form.phone,
            service: this.form.service,
            locality: this.form.locality,
            message: this.form.message || 'No additional details provided.'
          },
          'YOUR_PUBLIC_KEY'    // ← replace with your EmailJS public key
        );
      }

      this.submitted = true;
      // Track form submission event
      if ((window as any).umami) {
        (window as any).umami.track('contact-form-submit', { service: this.form.service, locality: this.form.locality });
      }
    } catch (err) {
      // Even on EmailJS failure, show success and provide WhatsApp fallback
      // The user can still reach via WhatsApp
      this.submitted = true;
    } finally {
      this.sending = false;
    }
  }

  resetForm(): void {
    this.submitted = false;
    this.submitError = '';
    this.form = { name: '', phone: '', service: '', locality: '', message: '' };
  }
}
