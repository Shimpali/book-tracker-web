import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 200, completeWords = true, ellipsis = '…', more = false): any {
    let lastIndex = limit;
    if (completeWords) {
      lastIndex = value?.substr(0, limit).lastIndexOf(' ');
      return `${value?.substr(0, limit)}${ellipsis}`;
    }
    if (more === true) {
      return value;
    }
  }
}
