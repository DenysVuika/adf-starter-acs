import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard-widget',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: 'dashboard-widget.component.html'
})
export class DashboardWidgetComponent {}
