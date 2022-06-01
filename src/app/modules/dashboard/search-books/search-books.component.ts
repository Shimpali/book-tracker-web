import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss'],
})
export class SearchBooksComponent implements OnInit {
  value: string | null = null;
  constructor() {}

  ngOnInit() {}
}
