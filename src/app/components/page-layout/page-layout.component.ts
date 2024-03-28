import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSidebarComponent } from '../sidebar/sidebar.component';
import { AppHeaderComponent, NavigationService } from '@app/sdk';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, AppHeaderComponent, AppSidebarComponent],
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppLayoutComponent {
  private navigationService = inject(NavigationService);

  sidebarEntries$ = this.navigationService.sidebarEntries$;
  headerEntries$ = this.navigationService.headerEntries$;
}
