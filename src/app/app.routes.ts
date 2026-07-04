import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { ServicePageComponent } from './service-page/service-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'APK Elite Services | Professional Cleaning Services in Pune' },
  { path: 'services', component: ServicesOverviewComponent, title: 'Our Services | APK Elite Services' },
  { path: 'services/:slug', component: ServicePageComponent },
  { path: '**', redirectTo: '' }
];
