import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@material';

// Components
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { CurrentlyReadingComponent } from './currently-reading/currently-reading.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RecentlyReadComponent } from './recently-read/recently-read.component';
import { WantToReadComponent } from './want-to-read/want-to-read.component';

@NgModule({
  imports: [SharedModule, DashboardRoutingModule],
  declarations: [
    DashboardComponent,
    BookShelfComponent,
    CurrentlyReadingComponent,
    RecentlyReadComponent,
    WantToReadComponent,
  ],
})
export class DashboardModule {}
