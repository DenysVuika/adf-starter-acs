import { AppConfigModule, DirectiveModule, LanguageMenuModule } from '@alfresco/adf-core';
import { Component, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, TranslateModule, LanguageMenuModule, AppConfigModule, DirectiveModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent {
  @Output()
  toggleSidebar = new EventEmitter<void>();
}
