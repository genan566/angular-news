import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../interfaces/news';

@Pipe({
  name: 'nonDefined',
})
export class NonDefinedPipe implements PipeTransform {
  transform(value: string | undefined | null): string {
    if (value) {
      return value;
    }

    return 'Non défini';
  }
}
