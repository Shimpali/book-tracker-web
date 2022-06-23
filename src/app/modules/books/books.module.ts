import { NgModule } from '@angular/core';

// Modules
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from '@shared';
import { BooksRoutingModule } from './books-routing.module';

// Components
import { BooksComponent } from './books.component';
import { SearchInputComponent, SearchResultsComponent } from './components';

@NgModule({
  imports: [SharedModule, ScrollingModule, BooksRoutingModule],
  declarations: [BooksComponent, SearchInputComponent, SearchResultsComponent],
})
export class BooksModule {}
