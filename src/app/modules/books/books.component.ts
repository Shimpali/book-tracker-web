import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, finalize } from 'rxjs/operators';

import { GoogleBook } from '@core/models';
import { GoogleBooksService } from './services';

@UntilDestroy()
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: GoogleBook[] = [];
  search: FormControl = new FormControl<string | null>(null);
  apiQueryParams = {
    q: null,
    startIndex: 0,
    maxResults: 10,
  };
  isLoading = false;

  constructor(private googleBooksService: GoogleBooksService) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      this.apiQueryParams.q = value;
      this.getGoogleBooks();
    });
  }

  getGoogleBooks() {
    this.isLoading = true;
    this.googleBooksService
      .get('', this.apiQueryParams)
      .pipe(
        finalize(() => (this.isLoading = false)),
        untilDestroyed(this)
      )
      .subscribe((books: any) => {
        if (!this.apiQueryParams.startIndex) {
          this.books = books?.items as GoogleBook[];
        } else {
          this.books = [...this.books, ...(books?.items as GoogleBook[])];
        }
      });
  }

  loadNextBatch(event: boolean): void {
    if (event) {
      this.apiQueryParams.startIndex += this.apiQueryParams.maxResults;
      this.getGoogleBooks();
    }
  }
}
