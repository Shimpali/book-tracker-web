import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@material';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule, TranslateModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
})
export class SharedModule {}
