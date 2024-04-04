import { Component, inject, Type, ViewEncapsulation } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardWidgetComponent } from './dashboard-widget.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddWidgetDialogComponent, AddWidgetDialogData } from './add-widget.dialog';
import { APP_WIDGET, WidgetInfo } from './widget';
import { WidgetContainerComponent } from './widget-container.component';

export interface Tile {
  key: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
  component: Type<unknown>;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatGridListModule, DashboardWidgetComponent, MatButtonModule, WidgetContainerComponent],
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  private widgets = inject<WidgetInfo[]>(APP_WIDGET, { optional: true }) || [];
  private dialog = inject(MatDialog);

  tiles: Tile[] = [
    { key: 'widget.1', text: 'One', cols: 3, rows: 1, color: 'lightblue', component: DashboardWidgetComponent },
    { key: 'widget.2', text: 'Two', cols: 1, rows: 2, color: 'lightgreen', component: DashboardWidgetComponent },
    { key: 'widget.3', text: 'Three', cols: 1, rows: 1, color: 'lightpink', component: DashboardWidgetComponent },
    { key: 'widget.4', text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', component: DashboardWidgetComponent }
  ];

  onAddWidget() {
    const dialogRef = this.dialog.open<AddWidgetDialogComponent, AddWidgetDialogData, WidgetInfo[]>(AddWidgetDialogComponent, {
      width: '600px',
      data: { widgets: this.widgets }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.length > 0) {
        const newTiles = result.map<Tile>((widget) => ({
          key: widget.key,
          text: widget.name,
          cols: 1,
          rows: 1,
          color: widget.color,
          component: widget.component
        }));

        this.tiles.push(...newTiles);
      }
    });
  }
}
