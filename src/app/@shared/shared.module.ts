import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material';
import { TranslateModule } from '@ngx-translate/core';

// Components
import { LoaderComponent, SearchInputComponent } from './components';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, MaterialModule, TranslateModule],
  declarations: [LoaderComponent, SearchInputComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule,
    LoaderComponent,
    SearchInputComponent,
  ],
})
export class SharedModule {}
