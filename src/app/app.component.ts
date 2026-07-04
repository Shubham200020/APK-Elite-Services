import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddFooterComponent } from './add-footer/add-footer.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, AddFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private title: Title, private meta: Meta) {}

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
  }
}
