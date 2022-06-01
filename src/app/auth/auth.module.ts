import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@material';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    I18nModule,
    AuthRoutingModule,
  ],
  declarations: [LoginComponent],
})
export class AuthModule {}
