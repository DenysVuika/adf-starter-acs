import { Component, ViewEncapsulation } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardWidgetComponent } from './dashboard-widget.component';
import { CommonModule } from '@angular/common';

export interface Tile {
  key: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatGridListModule, DashboardWidgetComponent],
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  tiles: Tile[] = [
    { key: 'widget.1', text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { key: 'widget.2', text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { key: 'widget.3', text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { key: 'widget.4', text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
  ];
}
