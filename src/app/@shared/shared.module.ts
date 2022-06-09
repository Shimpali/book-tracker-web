import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material';
import { TranslateModule } from '@ngx-translate/core';

// Components
import { LoaderComponent } from './components';

// Directives
import { HideTemplateDirective, NgForTrackByPropertyDirective } from './directives';

// Pipes
import { ArrayJoinPipe, EnumToArrayPipe, TruncatePipe } from './pipes';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, MaterialModule, TranslateModule],
  declarations: [
    LoaderComponent,
    HideTemplateDirective,
    NgForTrackByPropertyDirective,
    TruncatePipe,
    ArrayJoinPipe,
    EnumToArrayPipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    LoaderComponent,
    HideTemplateDirective,
    NgForTrackByPropertyDirective,
    TruncatePipe,
    ArrayJoinPipe,
    EnumToArrayPipe,
  ],
})
export class SharedModule {}
