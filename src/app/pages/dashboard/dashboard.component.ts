import { Component, ViewEncapsulation } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardWidgetComponent } from './dashboard-widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatGridListModule, DashboardWidgetComponent],
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {}
