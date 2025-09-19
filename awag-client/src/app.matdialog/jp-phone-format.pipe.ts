import { Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
  name: 'jpPhoneFormat'
})

@Injectable({
  providedIn: 'root' 
})

export class JpPhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const digits = value.replace(/\D/g, '');

    if (/^0[789]0\d{8}$/.test(digits)) {
      return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
    }

    if (/^0\d{9}$/.test(digits)) {
      return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    console.log('pipetransform',value);
    return value;
  }
}