import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../interfaces/news';

@Pipe({
  name: 'sourceName',
})
export class SourceNamePipe implements PipeTransform {
  transform(value: News | undefined): string {
    if (value?.source.name) {
      return value.source.name;
    }

    return 'Non défini';
  }
}
