import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppToolbarComponent, AppSidebarComponent } from '../../components';
import { NavigationService } from '../../services';

export type StandardLayoutSettings = {
  showToolbar?: boolean;
  showSidebar?: boolean;
};

@Component({
  selector: 'app-standard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, AppToolbarComponent, AppSidebarComponent],
  templateUrl: 'standard-layout.component.html'
})
export class StandardLayoutComponent implements OnInit {
  private navigationService = inject(NavigationService);
  private activatedRoute = inject(ActivatedRoute);

  @Input()
  showToolbar = true;

  @Input()
  showSidebar = true;

  @ViewChild('sidebar')
  sidebar?: AppSidebarComponent;

  sidebarEntries$ = this.navigationService.sidebarEntries$;
  headerEntries$ = this.navigationService.headerEntries$;

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      const settings = data['layout'] as StandardLayoutSettings;
      if (settings) {
        this.applySettings(settings);
      }
    });
  }

  private applySettings(settings: StandardLayoutSettings) {
    console.log(settings);

    if (settings.showSidebar !== undefined) {
      this.showSidebar = settings.showSidebar;
    }

    if (settings.showToolbar !== undefined) {
      this.showToolbar = settings.showToolbar;
    }
  }
}
