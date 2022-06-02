import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleBook } from '@app/@core/models';
import { ResourceService } from '@app/@shared';
import { environment } from '@env/environment';

const endpoints = {
  googleBooks: () => environment?.googleBooksAPIUrl,
};

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService extends ResourceService<GoogleBook, string> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, endpoints?.googleBooks());
  }
}
