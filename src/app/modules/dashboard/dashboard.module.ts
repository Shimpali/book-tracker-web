import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@material';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { CurrentlyReadingComponent } from './currently-reading/currently-reading.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RecentlyReadComponent } from './recently-read/recently-read.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, MaterialModule, DashboardRoutingModule],
  declarations: [DashboardComponent, BookShelfComponent, CurrentlyReadingComponent, RecentlyReadComponent],
})
export class DashboardModule {}
