import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: `./search-input.component.html`,
  styleUrls: ['./search-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchInputComponent {
  @Input()
  value = '';

  @Output()
  changed = new EventEmitter<string>();

  onSearchInputChanged(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value || '';

    this.changed.emit(searchTerm);
  }
}
