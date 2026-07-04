# Free & Open-Source Website Traffic Tracking Strategy

This document outlines a privacy-focused, free, and open-source website traffic tracking strategy for **APK Elite Services** (`apkeliteservices.in`). It eliminates dependency on proprietary tools like Google Analytics in favor of open-source alternatives you own and control.

---

## 1. Selected Open-Source Tracking Stack

We recommend **Umami** or **Matomo** as the best open-source alternatives:

```
                  [ User Browser ]
                         │
                         ▼
        ┌────────────────────────────────┐
        │  Open-Source Tracker Script    │
        └────────────────┬───────────────┘
                         │
                         ▼
     ┌───────────────────┴───────────────────┐
     │           Your Hosted Server          │
     │  (e.g., Free Vercel / Docker / PHP)   │
     └───────────────────┬───────────────────┘
                         │
                         ▼
             ┌───────────┴───────────┐
             │       Database        │
             │   (Free PostgreSQL/   │
             │     MySQL Database)   │
             └───────────────────────┘
```

---

## 2. Option A: Umami Analytics (Highly Recommended)
**Umami** is a modern, lightweight, privacy-focused, and open-source alternative to Google Analytics. It is easy to configure and runs extremely fast, ensuring it does not slow down your website.

### Why Umami?
* **100% Free & Open Source:** Licensed under the MIT license.
* **Privacy Friendly:** Does not collect personally identifiable information (PII) or use cookies. You do not need to show an annoying GDPR cookie consent banner on your site.
* **Lightweight:** The tracking script is less than 2KB (Google Tag Manager + GA4 is over 100KB).
* **Free Hosting Setup:** You can host it for free on **Vercel** or **Netlify** using a free database on **Supabase** or **Neon**.

### How to Set Up Umami for Free:
1. **Database Setup:** 
   * Create a free account on **Supabase** or **Neon**.
   * Create a new PostgreSQL Database and copy the connection string.
2. **Application Deployment:**
   * Go to the [Umami GitHub Repository](https://github.com/umami-software/umami).
   * Click the **"Deploy to Vercel"** button.
   * Paste your database connection string into the environment variables (`DATABASE_URL`).
   * Vercel will build and deploy your own private analytics dashboard.
3. **Tracking Code Integration:**
   * Log into your new Umami dashboard.
   * Add a Website to get your tracking code.
   * Insert the script into your [index.html](file:///d:/Program/Frontend/Angular/APK-Elite-Services/src/index.html) header:
     ```html
     <script async src="https://your-umami-app.vercel.app/script.js" data-website-id="your-unique-id"></script>
     ```

---

## 3. Option B: Matomo Analytics (Comprehensive Alternative)
**Matomo** (formerly Piwik) is the most comprehensive open-source analytics platform. It matches almost all features of Google Analytics, including heatmaps, session recordings, and funnel analysis.

### Why Matomo?
* **Data Ownership:** You host it, so you own 100% of the data. No third party has access.
* **Feature Rich:** Built-in dashboard, goal tracking, and support for campaigns.
* **Free Self-Hosting:** Matomo is free if you self-host it on your own server (requires PHP and a MySQL database).

### How to Set Up Matomo for Free (Self-Hosted):
1. **Server Prerequisites:** Requires a standard server or shared hosting with PHP 7.4+ and a MySQL database.
2. **Installation:**
   * Download the latest Matomo package from [matomo.org](https://matomo.org/download/).
   * Upload the zip file and extract it to a directory on your server (e.g., `apkeliteservices.in/analytics/`).
   * Navigate to that URL in your browser to run the 5-minute web installer. Enter your database details.
3. **Code Integration:**
   * Copy the generated Javascript tracking code from the Matomo dashboard.
   * Paste the code right before the closing `</head>` tag in your [index.html](file:///d:/Program/Frontend/Angular/APK-Elite-Services/src/index.html).

---

## 4. Tracking Lead Conversions (Events) with Open-Source Analytics

Even without Google Analytics, you can track user actions (like clicking on your WhatsApp or Call buttons) using standard HTML attributes recognized by open-source trackers.

### A. Tracking in Umami
To track a click on the WhatsApp button in Umami, you simply add custom `data-` attributes to the HTML link tag:
```html
<a href="https://wa.me/918830167863" 
   target="_blank" 
   data-umami-event="WhatsApp-Click" 
   data-umami-event-position="Floating-Button"
   class="whatsapp-box">
  <i class="fab fa-whatsapp"></i>
  <span>How can we assist you?</span>
</a>
```
Umami will automatically record the click as a "WhatsApp-Click" event, categorizing it in your dashboard.

### B. Tracking in Matomo
To track custom clicks in Matomo, you can use CSS classes or trigger Javascript tracking functions:
```html
<a href="https://wa.me/918830167863" 
   target="_blank" 
   onclick="_paq.push(['trackEvent', 'Contact', 'WhatsApp Click', 'Floating Button']);"
   class="whatsapp-box">
  <i class="fab fa-whatsapp"></i>
  <span>How can we assist you?</span>
</a>
```

---

## 5. Summary Strategy Comparison

| Feature | Umami Analytics | Matomo Analytics |
| :--- | :--- | :--- |
| **Hosting Cost** | 100% Free (Vercel + Supabase) | Free (if you have your own PHP/MySQL server) |
| **Complexity** | Very Simple & Clean | Comprehensive (GA-like complexity) |
| **Site Performance** | Extremely Fast (<2KB script) | Moderate (~60KB script) |
| **Privacy Compliance** | GDPR Compliant out-of-the-box | Requires custom configuration |
| **Tracking Method** | Event & Pageview based | Pageview, Event, Heatmaps & Recordings |
