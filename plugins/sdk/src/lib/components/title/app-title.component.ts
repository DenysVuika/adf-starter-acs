import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { APP_DESCRIPTION, APP_NAME } from '../../tokens';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [NgIf, TranslateModule],
  template: `<div *ngIf="appName" [title]="appDescription">{{ appName | translate }}</div>`
})
export class AppTitleComponent {
  appName = inject(APP_NAME, { optional: true });
  appDescription = inject(APP_DESCRIPTION, { optional: true });
}
