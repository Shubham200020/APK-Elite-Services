import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Titles and meta tags are owned by each component via SeoService,
// so routes deliberately carry no `title` (the router would override
// the component's title after navigation).
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'services', component: ServicesOverviewComponent },
  { path: 'services/:slug', component: ServicePageComponent },
  { path: '**', component: NotFoundComponent }
];

