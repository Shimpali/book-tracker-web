import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from '@shared';
import { BooksRoutingModule } from './books-routing.module';

// Components
import { BooksComponent } from './books.component';

@NgModule({
  imports: [SharedModule, BooksRoutingModule],
  declarations: [BooksComponent],
})
export class BooksModule {}
