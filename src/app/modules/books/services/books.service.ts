import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, GoogleBook } from '@app/@core/models';
import { ResourceService } from '@shared';
import { Observable, of } from 'rxjs';

const endpoints = {
  books: () => '/books',
};

@Injectable({
  providedIn: 'root',
})
export class BooksService extends ResourceService<Book, string> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, endpoints?.books());
  }

  getGoogleBookData(googleBook: GoogleBook): Observable<Partial<Book>> {
    const {
      volumeInfo: {
        title = '',
        subtitle,
        authors,
        description,
        imageLinks: { thumbnail },
        publishedDate,
        categories,
        averageRating,
      },
      id,
    } = googleBook;

    return of({
      volumeId: id,
      title,
      subtitle,
      authors,
      description,
      cover: thumbnail,
      publishedDate,
      categories,
      averageRating,
    });
  }
}
