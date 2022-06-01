import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/@shared';
import { AuthModule } from '@app/auth';
import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@material';

import { ShellComponent } from './shell.component';

@NgModule({
  imports: [SharedModule, FlexLayoutModule, MaterialModule, AuthModule, I18nModule, RouterModule],
  declarations: [ShellComponent],
})
export class ShellModule {}
