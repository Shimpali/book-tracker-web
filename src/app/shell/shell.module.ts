import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@app/auth';
import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@material';
import { TranslateModule } from '@ngx-translate/core';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, AuthModule, I18nModule, RouterModule],
  declarations: [ShellComponent],
})
export class ShellModule {}
