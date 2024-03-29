import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent, AppSidebarComponent } from '../../components';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-standard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, AppHeaderComponent, AppSidebarComponent],
  templateUrl: 'standard-layout.component.html'
})
export class StandardLayoutComponent {
  private navigationService = inject(NavigationService);

  sidebarEntries$ = this.navigationService.sidebarEntries$;
  headerEntries$ = this.navigationService.headerEntries$;
}
