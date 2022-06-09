import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideTemplate]',
})
export class HideTemplateDirective {
  @Input('appHideTemplate')
  set isVisible(value: boolean) {
    if (value) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {}
}
