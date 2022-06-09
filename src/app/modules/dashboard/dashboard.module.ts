import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '@app/@shared';
import { BookCountByStatusComponent } from './book-count-by-status/book-count-by-status.component';

// Components
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';

@NgModule({
  imports: [SharedModule, DashboardRoutingModule],
  declarations: [DashboardComponent, BookCountByStatusComponent, ManageBooksComponent],
})
export class DashboardModule {}
