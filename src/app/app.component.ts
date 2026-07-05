import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddFooterComponent } from './add-footer/add-footer.component';
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
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Titles, descriptions, canonicals and social tags are owned by each
    // routed page component via SeoService; static defaults live in index.html.
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
