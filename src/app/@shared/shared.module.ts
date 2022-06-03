import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material';
import { TranslateModule } from '@ngx-translate/core';

// Components
import { LoaderComponent } from './components';

// Pipes
import { ArrayJoinPipe, TruncatePipe } from './pipes';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, MaterialModule, TranslateModule],
  declarations: [LoaderComponent, TruncatePipe, ArrayJoinPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    LoaderComponent,
    TruncatePipe,
    ArrayJoinPipe,
  ],
})
export class SharedModule {}
