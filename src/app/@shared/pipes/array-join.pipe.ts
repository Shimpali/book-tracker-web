import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayJoin',
})
export class ArrayJoinPipe implements PipeTransform {
  transform(input: string[], sep = ', '): string {
    return input?.join(sep);
  }
}
