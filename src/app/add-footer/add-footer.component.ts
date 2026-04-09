import { Component } from '@angular/core';
import { PhonePipe } from "../phone.pipe";

@Component({
  selector: 'app-add-footer',
  standalone: true,
  imports: [PhonePipe],
  templateUrl: './add-footer.component.html',
  styleUrl: './add-footer.component.css'
})
export class AddFooterComponent {
  email: string = 'sakshik1915@gmail.com';
  phone: string = ' 820 875 7735';
currentYear = new Date().getFullYear();
}
