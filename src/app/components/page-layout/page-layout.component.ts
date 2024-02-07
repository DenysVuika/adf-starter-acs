import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from '../header/header.component';
import { AppSidebarComponent } from '../sidebar/sidebar.component';
import { appSidebarEntries } from '../../app.sidebar';
import { SidebarEntry } from '../../types';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [
    RouterModule,
    AppHeaderComponent,
    AppSidebarComponent
  ],
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppLayoutComponent {
  entries: Array<SidebarEntry> = [...appSidebarEntries];
}
