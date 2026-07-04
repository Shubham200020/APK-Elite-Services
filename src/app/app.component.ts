import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddFooterComponent } from './add-footer/add-footer.component';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    __APK_TRACKING_ENDPOINT__?: string;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, AddFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.title.setTitle('APK Elite Services | Professional Cleaning Services in Pune');
    this.meta.updateTag({
      name: 'description',
      content: 'Professional cleaning and facility management services in Pune by APK Elite Services. We offer deep cleaning, sofa cleaning, office cleaning, pest control and more.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'APK Elite Services, deep cleaning Pune, office cleaning Pune, sofa cleaning Pune, pest control Pune, tank cleaning Pune, facility management Pune'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'APK Elite Services' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.apkeliteservices.in/assets/images/logo-res.png' });

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.trackPageView(window.location.pathname + window.location.search);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.trackPageView(event.urlAfterRedirects);
      });
  }

  private trackPageView(path: string) {
    const payload = {
      path,
      title: document.title,
      referrer: document.referrer || '',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: document.title
      });
    }

    if (window.__APK_TRACKING_ENDPOINT__) {
      navigator.sendBeacon(window.__APK_TRACKING_ENDPOINT__, JSON.stringify(payload));
      return;
    }

    const storedEvents = this.getStoredEvents();
    storedEvents.push(payload);
    localStorage.setItem('apk-traffic-events', JSON.stringify(storedEvents.slice(-20)));
  }

  private getStoredEvents(): Array<Record<string, string>> {
    const storedValue = localStorage.getItem('apk-traffic-events');
    if (!storedValue) {
      return [];
    }

    try {
      return JSON.parse(storedValue) as Array<Record<string, string>>;
    } catch {
      return [];
    }
  }
}
