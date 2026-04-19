import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AboutSectionsComponent } from "./about-sections/about-sections.component";
import { HomeComponent } from "./home/home.component";
import { ServiceComponentComponent } from "./service-component/service-component.component";
import { AddWhyChooseComponent } from "./add-why-choose/add-why-choose.component";
import { AddMissionComponent } from "./add-mission/add-mission.component";
import { AddFooterComponent } from "./add-footer/add-footer.component";
 import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, AboutSectionsComponent, HomeComponent, ServiceComponentComponent, AddWhyChooseComponent, AddMissionComponent, AddFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'APK Elite Services';
 

constructor(private title: Title, private meta: Meta) {}

ngOnInit() {
  this.title.setTitle('Web Development Services in Pune');

  this.meta.updateTag({
    name: 'description',
    content: 'Professional web development services in Pune by APK Elite Services.'
  });
}
}
