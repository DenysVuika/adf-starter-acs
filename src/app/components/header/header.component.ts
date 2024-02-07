import { AppConfigModule, DirectiveModule, LanguageMenuModule } from '@alfresco/adf-core';
import { Component, Output, ViewEncapsulation, EventEmitter, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { AppMenuEntry } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule,
    LanguageMenuModule,
    AppConfigModule,
    DirectiveModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent {
  @Input()
  entries: Array<AppMenuEntry> = [];

  @Output()
  toggleSidebar = new EventEmitter<void>();
}
