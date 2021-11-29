import { Pipe, PipeTransform } from '@angular/core';

// truncar frases com mais de 15 caracteres
@Pipe({
  name: 'shortDescription',
})
export class ShortDescription implements PipeTransform {
  transform(text: string): string {
    if (text.length > 15) {
      return text.substr(0, 15) + '...';
    }
    return text;
  }
}
