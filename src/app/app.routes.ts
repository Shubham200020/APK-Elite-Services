import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'APK Elite Services | Professional Cleaning Services in Pune' },
  { path: 'about', component: AboutPageComponent, title: 'About APK Elite Services | Cleaning Services in Pune' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact APK Elite Services | Pune Cleaning Services' },
  { path: 'services', component: ServicesOverviewComponent, title: 'Our Services | APK Elite Services' },
  { path: 'services/:slug', component: ServicePageComponent },
  { path: '**', redirectTo: '' }
];
