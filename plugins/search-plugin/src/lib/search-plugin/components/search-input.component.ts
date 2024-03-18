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

  @Input()
  label = 'Search';

  @Input()
  placeholder = 'Search query';

  @Input()
  fields: string[] = [];

  @Output()
  changed = new EventEmitter<string>();

  onSearchInputChanged(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value || '';

    const query = this.formatSearchQuery(searchTerm, this.fields);
    this.changed.emit(decodeURIComponent(query));
  }

  private formatSearchQuery(userInput: string, fields = ['cm:name']) {
    if (!userInput) {
      return null;
    }

    if (/^http[s]?:\/\//.test(userInput)) {
      return this.formatFields(fields, userInput);
    }

    userInput = userInput.trim();

    if (userInput.includes(':') || userInput.includes('"')) {
      return userInput;
    }

    const words = userInput.split(' ');

    if (words.length > 1) {
      const separator = words.some(this.isOperator) ? ' ' : ' AND ';

      return words
        .map((term) => {
          if (this.isOperator(term)) {
            return term;
          }

          return this.formatFields(fields, term);
        })
        .join(separator);
    }

    return this.formatFields(fields, userInput);
  }

  private isOperator(input: string): boolean {
    if (input) {
      input = input.trim().toUpperCase();

      const operators = ['AND', 'OR'];
      return operators.includes(input);
    }
    return false;
  }

  private formatFields(fields: string[], term: string): string {
    let prefix = '';
    let suffix = '*';

    if (term.startsWith('=')) {
      prefix = '=';
      suffix = '';
      term = term.substring(1);
    }

    return '(' + fields.map((field) => `${prefix}${field}:"${term}${suffix}"`).join(' OR ') + ')';
  }
}
