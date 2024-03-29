import { AppConfigModule, DirectiveModule, LanguageMenuModule } from '@alfresco/adf-core';
import { Component, Output, ViewEncapsulation, EventEmitter, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AppToolbarEntry } from '../../types';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    TranslateModule,
    LanguageMenuModule,
    AppConfigModule,
    DirectiveModule,
    RouterModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppToolbarComponent {
  @Input()
  entries: Array<AppToolbarEntry> = [];

  @Output()
  toggleSidebar = new EventEmitter<void>();
}
