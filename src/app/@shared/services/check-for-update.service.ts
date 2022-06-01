import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CheckForUpdateService {
  constructor(private appRef: ApplicationRef, private updates: SwUpdate) {}

  checkForUpdates() {
    this.handleUpdates();
    this.updates.checkForUpdate();
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = this.appRef.isStable.pipe(first((isStable) => isStable === true));
    const everyOneMinute$ = interval(60 * 1000);
    const everyOneMinuteOnceAppIsStable$ = concat(appIsStable$, everyOneMinute$);
    everyOneMinuteOnceAppIsStable$.subscribe(() => {
      this.updates.checkForUpdate();
    });
  }

  private handleUpdates() {
    this.updates.available.subscribe((update) => {
      const r = confirm('There is a new version of the app available!\nWould you like to reload the screen to update?');
      if (r === true) window.location.reload();
    });
  }
}
