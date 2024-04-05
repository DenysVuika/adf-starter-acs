import { Component, inject, Type, ViewEncapsulation } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddWidgetDialogComponent, AddWidgetDialogData, APP_WIDGET, Widget, WidgetContainerComponent } from '@app/sdk';

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

  tiles: Tile[] = [];

  onAddWidget() {
    const dialogRef = this.dialog.open<AddWidgetDialogComponent, AddWidgetDialogData, Widget[]>(AddWidgetDialogComponent, {
      width: '600px',
      data: {
        widgets: this.widgets,
        selected: this.tiles.map((tile) => tile.key)
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.length > 0) {
        this.tiles = result.map<Tile>((widget) => ({
          key: widget.key,
          text: widget.name,
          cols: widget.layout.cols,
          rows: widget.layout.rows,
          color: widget.layout.color,
          component: widget.component
        }));
      }
    });
  }
}
