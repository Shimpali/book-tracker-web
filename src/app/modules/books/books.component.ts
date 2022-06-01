import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  search: FormControl = new FormControl(null);

  constructor() {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log(value);
    });
  }
}
