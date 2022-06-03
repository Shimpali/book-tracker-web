import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBook } from '@app/@core/models';
import { GoogleBooksService } from '../google-books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book!: GoogleBook;

  constructor(private activatedRoute: ActivatedRoute, private googleBooksService: GoogleBooksService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getBookDetails(params?.['id']);
    });
  }

  get imageLink(): string {
    const { large, extraLarge } = this.book?.volumeInfo?.imageLinks;
    return extraLarge || large;
  }

  getBookDetails(id: string): void {
    this.googleBooksService.getById(id).subscribe((book: any) => {
      this.book = book;
    });
  }
}
