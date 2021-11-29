import { Pipe, PipeTransform } from '@angular/core';

// truncar frases com mais de 15 caracteres
@Pipe({
  name: 'shortDescription',
})
export class ShortDescription implements PipeTransform {
  transform(text: string, after: number): string {
    if (text.length > after) {
      return text.substr(0, after) + '...';
    }
    return text;
  }
}
