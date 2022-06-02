import { NgModule } from '@angular/core';

// Modules
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from '@shared';
import { BooksRoutingModule } from './books-routing.module';

// Components
import { BooksComponent } from './books.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  imports: [SharedModule, ScrollingModule, BooksRoutingModule],
  declarations: [BooksComponent, SearchInputComponent, SearchResultsComponent],
})
export class BooksModule {}
