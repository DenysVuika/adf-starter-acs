import { AfterViewInit, Component, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-widget-container',
  standalone: true,
  template: '<template #container></template>'
})
export class WidgetContainerComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  template: Type<unknown>;

  ngAfterViewInit() {
    this.container.clear();

    if (this.template) {
      this.container.createComponent(this.template);
    }
  }
}
