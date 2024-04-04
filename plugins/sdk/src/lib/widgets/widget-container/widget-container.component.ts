import { AfterViewInit, Component, Input, Type, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-widget-container',
  standalone: true,
  template: '<template #container></template>',
  styleUrls: ['widget-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WidgetContainerComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  @Input()
  template?: Type<unknown>;

  ngAfterViewInit() {
    this.container.clear();

    if (this.template) {
      this.container.createComponent(this.template);
    }
  }
}
