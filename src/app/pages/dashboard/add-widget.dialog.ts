import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Widget } from './widget';

export interface AddWidgetDialogData {
  widgets: Array<Widget>;
}

@Component({
  selector: 'app-add-widget',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatInputModule, MatListModule],
  templateUrl: 'add-widget.dialog.html'
})
export class AddWidgetDialogComponent {
  selected: Widget[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: AddWidgetDialogData) {}

  onSelectionChanged(event: MatSelectionListChange) {
    this.selected = event.source.selectedOptions.selected.map((entry) => entry.value);
  }
}
