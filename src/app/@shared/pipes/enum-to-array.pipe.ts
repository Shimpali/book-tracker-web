import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
})
export class EnumToArrayPipe implements PipeTransform {
  transform(value: any): any {
    const array: any = [];
    Object.keys(value).forEach((key) => {
      if (isNaN(key as any)) {
        array.push({
          key,
          value: value[key],
        });
      }
    });
    return array;
  }
}
