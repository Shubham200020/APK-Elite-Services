# Contact Form Email Delivery Integration (No-Backend)

This developer guide explains how to build a contact form in Angular and hook it up to **Web3Forms** so that leads are automatically dispatched to your email (`info@apkeliteservices.in`) without hosting a backend server.

---

## 1. How the Flow Works
1. A visitor fills out the contact form on your website.
2. The Angular frontend submits the form data as a JSON payload to `https://api.web3forms.com/submit`.
3. Web3Forms formats the data into a professional HTML email and forwards it directly to your registered inbox.

---

## 2. Step 1: Get Your Free Access Key
1. Go to [web3forms.com](https://web3forms.com/).
2. Enter your email (`info@apkeliteservices.in`) in the field.
3. Click "Submit" to receive your unique Access Key in your inbox. Copy this key.

---

## 3. Step 2: Create the Contact Form Component (Angular)

### A. Template (`src/app/contact-form/contact-form.component.html`)
```html
<section class="contact-section" id="contact">
  <div class="form-container">
    <h2>Request a Free Quote</h2>
    
    <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
      <!-- Hidden Access Key -->
      <input type="hidden" name="access_key" [value]="accessKey">

      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" [(ngModel)]="formData.name" required placeholder="Your Name">
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" [(ngModel)]="formData.phone" required placeholder="Your Mobile Number">
      </div>

      <div class="form-group">
        <label for="service">Select Service</label>
        <select id="service" name="service" [(ngModel)]="formData.service" required>
          <option value="" disabled selected>Choose a service</option>
          <option value="Deep Cleaning">Deep Cleaning</option>
          <option value="Office Cleaning">Office Cleaning</option>
          <option value="Sofa Cleaning">Sofa Shampooing</option>
          <option value="Pest Control">Pest Control</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" [(ngModel)]="formData.message" placeholder="Describe your cleaning requirements..."></textarea>
      </div>

      <button type="submit" [disabled]="!contactForm.form.valid || isSubmitting" class="submit-btn">
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>

      <p class="status-msg" [ngClass]="statusType" *ngIf="statusMessage">{{ statusMessage }}</p>
    </form>
  </div>
</section>
```

### B. Logic (`src/app/contact-form/contact-form.component.ts`)
```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  // Replace this placeholder with the Web3Forms key sent to your inbox:
  accessKey: string = 'YOUR_WEB3FORMS_ACCESS_KEY'; 
  
  isSubmitting: boolean = false;
  statusMessage: string = '';
  statusType: string = '';

  formData = {
    name: '',
    phone: '',
    service: '',
    message: ''
  };

  async onSubmit() {
    this.isSubmitting = true;
    this.statusMessage = '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: this.accessKey,
          subject: `New Web Lead: ${this.formData.service} request from ${this.formData.name}`,
          name: this.formData.name,
          phone: this.formData.phone,
          service: this.formData.service,
          message: this.formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        this.statusMessage = 'Your request has been sent successfully! We will contact you shortly.';
        this.statusType = 'success';
        this.resetForm();
      } else {
        this.statusMessage = 'Failed to submit. Please try again.';
        this.statusType = 'error';
      }
    } catch (error) {
      this.statusMessage = 'Network error. Please check your internet connection and try again.';
      this.statusType = 'error';
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm() {
    this.formData = { name: '', phone: '', service: '', message: '' };
  }
}
```

### C. Basic Styling (`src/app/contact-form/contact-form.component.css`)
```css
.contact-section {
  padding: 50px 20px;
  background-color: #f9f9f9;
}
.form-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}
.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.submit-btn {
  background-color: #1e73be;
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
}
.submit-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
.status-msg {
  margin-top: 15px;
  font-weight: bold;
  text-align: center;
}
.status-msg.success { color: green; }
.status-msg.error { color: red; }
```
