import { NgForTrackByPropertyDirective } from './ng-for-track-by-property.directive';

describe('Directive: HideTemplate', () => {
  it('should create an instance', () => {
    const directive = new NgForTrackByPropertyDirective<string>();
    expect(directive).toBeTruthy();
  });
});
