import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { MockAuthenticationService } from '@app/auth/authentication.service.mock';
import { MockCredentialsService } from '@app/auth/credentials.service.mock';
import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@material';
import { TranslateModule } from '@ngx-translate/core';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
          I18nModule,
          BrowserAnimationsModule,
          FlexLayoutModule,
          MaterialModule,
          RouterTestingModule,
        ],
        providers: [
          {
            provide: AuthenticationService,
            useClass: MockAuthenticationService,
          },
          { provide: CredentialsService, useClass: MockCredentialsService },
        ],
        declarations: [ShellComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
