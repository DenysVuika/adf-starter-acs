import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <router-outlet></router-outlet>
    <router-outlet name="overlay"></router-outlet>
  `,
  styles: [
    `
      router-outlet[name='overlay'] + * {
        width: 100%;
        height: 100%;
        z-index: 999999;
        position: absolute;
        top: 0;
        right: 0;
      }
    `
  ]
})
export class AppComponent {}
