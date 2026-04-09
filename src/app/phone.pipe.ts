import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
   if (!value) return '';

    // Convert to string and remove all non-numeric characters
    const phone = value.toString().replace(/\D/g, '');

    // Check if the length is correct for a standard US number
    if (phone.length === 10) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
    } 

    // Return the original value if it doesn't match the expected length
    return value.toString();
  }

}
