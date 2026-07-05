# How to Track Traffic on Dynamic Angular Routes (Single Page Application)

Because Angular is a Single Page Application (SPA), navigating between routes (e.g., from `/` to `/services/sofa-cleaning-pune`) does not cause a full page reload. 

Here is how you handle traffic tracking for your new route structure using open-source tools:

---

## 1. Tracking with Umami Analytics (Automatic)

Umami handles Single Page Applications **automatically** out of the box. 

* **How it works:** Umami's lightweight tracking script listens to browser history API events (`history.pushState`, `history.replaceState`, and `popstate`).
* **Implementation:** You only need to paste the script into your main [index.html](file:///d:/Program/Frontend/Angular/APK-Elite-Services/src/index.html) header:
  ```html
  <script async src="https://your-umami-app.vercel.app/script.js" data-website-id="your-unique-id"></script>
  ```
* **Result:** Every time a user navigates to a new route (such as `/services/pest-control-pune`), Umami automatically records a page view event with the new URL path.

---

## 2. Tracking with Matomo Analytics (Manual Route Listening)

Unlike Umami, Matomo's standard script requires you to explicitly notify it when a route changes in Angular to ensure page views are recorded accurately.

### Code Implementation:
Update your root [app.component.ts](file:///d:/Program/Frontend/Angular/APK-Elite-Services/src/app/app.component.ts) to listen to Angular Router events and push them to Matomo:

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Declare Matomo global variable
declare let _paq: any[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentUrl = event.urlAfterRedirects;
      
      // Notify Matomo that the route changed
      if (typeof _paq !== 'undefined') {
        _paq.push(['setCustomUrl', currentUrl]);
        _paq.push(['setDocumentTitle', document.title]);
        _paq.push(['trackPageView']);
      }
    });
  }
}
```

---

## 3. How to Verify Traffic Tracking is Working

1. Open your website in a browser (e.g. `localhost:4200` or the live site).
2. Right-click and select **Inspect** to open Developer Tools, and navigate to the **Network** tab.
3. Click a link to navigate to a subpage (e.g., `/services/sofa-cleaning-pune`).
4. In the Network tab, you should see an outgoing HTTP request sent to your analytics server:
   * **For Umami:** Look for an outgoing `POST` request to `/api/send`. Inspect the payload, and you will see the `url` parameter set to `/services/sofa-cleaning-pune`.
   * **For Matomo:** Look for an outgoing request to `matomo.php` with parameters like `url` containing the subpage path.
5. Check your analytics dashboard in real-time to confirm that the visit is logged under the correct page URL.
