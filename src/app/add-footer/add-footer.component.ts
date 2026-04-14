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
  email: string = 'info@apkeliteservices.in';
  phone: string = '8830167863';
currentYear = new Date().getFullYear();
}
