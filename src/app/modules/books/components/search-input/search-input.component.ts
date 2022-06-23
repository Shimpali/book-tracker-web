import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true,
    },
  ],
})
export class SearchInputComponent implements OnInit, ControlValueAccessor {
  value: string | null = null;

  propagateChange!: (value: string | null) => void;
  propagateTouched!: (value: boolean) => void;

  constructor() {}

  ngOnInit(): void {}

  registerOnChange(fn: (value: string | null) => void) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: (value: boolean) => void) {
    this.propagateTouched = fn;
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.value = value;
    }
  }

  onInputChange(value: string): void {
    this.propagateTouched(true);
    this.propagateChange(value);
  }
}
