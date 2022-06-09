import { NgForOf } from '@angular/common';
import { Directive, Host, Input, NgIterable } from '@angular/core';

@Directive({
  // Disable rule here to ignore app prefix as Angular needs ngFor to customise gthe directive
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngForTrackByProperty]',
})
export class NgForTrackByPropertyDirective<T> {
  @Input() ngForOf!: NgIterable<T>;
  @Input() ngForTrackByProperty!: keyof T;

  constructor(@Host() ngForOfDir: NgForOf<T>) {
    ngForOfDir.ngForTrackBy = (index: number, item: T): T[keyof T] =>
      this.ngForTrackByProperty ? item[this.ngForTrackByProperty] : item[index];
  }
}
