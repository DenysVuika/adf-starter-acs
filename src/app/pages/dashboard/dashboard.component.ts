import { Component, inject, Type, ViewEncapsulation } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { APP_WIDGET, Widget, WidgetContainerComponent, AddWidgetDialogComponent, AddWidgetDialogData } from '@app/sdk';

export interface Tile {
  key: string;
  color: string;
  cols: number;
  rows: number;
  component: Type<unknown>;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule, WidgetContainerComponent],
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  private widgets = inject<Widget[]>(APP_WIDGET, { optional: true }) || [];
  private dialog = inject(MatDialog);

  tiles: Tile[] = [
    // { key: 'widget.1', cols: 3, rows: 1, color: 'lightblue', component: DashboardWidgetComponent },
    // { key: 'widget.2', cols: 1, rows: 2, color: 'lightgreen', component: DashboardWidgetComponent },
    // { key: 'widget.3', cols: 1, rows: 1, color: 'lightpink', component: DashboardWidgetComponent },
    // { key: 'widget.4', cols: 2, rows: 1, color: '#DDBDF1', component: DashboardWidgetComponent }
  ];

  onAddWidget() {
    const dialogRef = this.dialog.open<AddWidgetDialogComponent, AddWidgetDialogData, Widget[]>(AddWidgetDialogComponent, {
      width: '600px',
      data: { widgets: this.widgets }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.length > 0) {
        const newTiles = result.map<Tile>((widget) => ({
          key: widget.key,
          text: widget.name,
          cols: widget.layout.cols,
          rows: widget.layout.rows,
          color: widget.layout.color,
          component: widget.component
        }));

        this.tiles.push(...newTiles);
      }
    });
  }
}
