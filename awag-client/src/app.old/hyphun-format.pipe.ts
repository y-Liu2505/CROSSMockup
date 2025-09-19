import { Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
  name: 'hyphenFormat'
})

@Injectable({
  providedIn: 'root' 
})

export class HyphenFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const cleaned = value.replace(/-/g, '');
    return cleaned.match(/.{1,4}/g)?.join('-') ?? '';
  }
}
