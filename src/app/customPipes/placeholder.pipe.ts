import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../interfaces/news';

@Pipe({
  name: 'placeholderImage',
})
export class PlaceholderImagePipe implements PipeTransform {
  transform(value: string | undefined | null): string {
    if (value) {
      return value;
    }

    return 'https://placehold.co/600x400.png';
  }
}
