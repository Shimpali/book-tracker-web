import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '@app/@core/models';
import { ResourceService } from '@shared';

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
}
