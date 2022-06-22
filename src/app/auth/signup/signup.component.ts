import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger } from '@app/@core';
import { UntilDestroy, untilDestroyed } from '@shared';
import { finalize } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

const log = new Logger('Signup');

@UntilDestroy()
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  error: string | undefined;
  signupForm!: UntypedFormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  invalid(key: string): boolean {
    return this.signupForm?.get(key)?.invalid ?? false;
  }

  touched(key: string): boolean {
    return this.signupForm?.get(key)?.touched ?? false;
  }

  login() {
    this.isLoading = true;
    const signup$ = this.authenticationService.signup(this.signupForm.value);
    signup$
      .pipe(
        finalize(() => {
          this.signupForm.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe(
        (credentials) => {
          log.debug(`${credentials.username} successfully logged in`);
          this.router.navigate([this.route.snapshot.queryParams['redirect'] || '/dashboard'], { replaceUrl: true });
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        }
      );
  }

  private createForm() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      remember: true,
    });
  }
}
