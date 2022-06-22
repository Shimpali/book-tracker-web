import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import omit from 'lodash-es/omit';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Credentials, CredentialsService } from './credentials.service';

export interface SignupContext {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  remember?: boolean;
}

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private credentialsService: CredentialsService) {}

  /**
   * Creates account and Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  signup(context: SignupContext): Observable<Credentials> {
    const data = omit(context, 'remember');
    return this.http.post('/auth/register', data).pipe(
      tap((data: any) => this.credentialsService.setCredentials(data, context.remember)),
      map((data) => data)
    );
  }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    const data = omit(context, 'remember');
    return this.http.post('/auth/login', data).pipe(
      tap((data: any) => this.credentialsService.setCredentials(data, context.remember)),
      map((data) => data)
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
