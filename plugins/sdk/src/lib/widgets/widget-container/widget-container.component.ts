import { Component, Input, OnInit, Type, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-widget-container',
  standalone: true,
  template: '<template #container></template>',
  styleUrls: ['widget-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WidgetContainerComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  @Input()
  template?: Type<unknown>;

  ngOnInit() {
    this.container.clear();

    if (this.template) {
      this.container.createComponent(this.template);
    }
  }
}
