import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListModule, SearchModule, SearchQueryBuilderService } from '@alfresco/adf-content-services';
import { DataTableModule, NotificationService, PaginationModule, TemplateModule } from '@alfresco/adf-core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { Pagination, ResultSetPaging } from '@alfresco/js-api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-search-plugin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchModule,
    DataTableModule,
    DocumentListModule,
    PaginationModule,
    TemplateModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './search-plugin.component.html',
  styleUrls: ['./search-plugin.component.css']
})
export class SearchPluginComponent implements OnInit, OnDestroy {
  private queryBuilder = inject(SearchQueryBuilderService);
  private notifications = inject(NotificationService);
  private onDestroy$ = new Subject<boolean>();

  isLoading = false;
  searchQuery: string | null = null;
  sorting = ['name', 'asc'];
  totalResults = 0;
  data?: ResultSetPaging;

  private config = {
    fields: ['cm:name', 'cm:title', 'cm:description', 'TEXT', 'TAG']
  };

  constructor() {
    // TODO: investigate why needed in ACA
    // TODO: ADF bug, should have default value
    this.queryBuilder.paging = {
      skipCount: 0,
      maxItems: 25
    };
  }

  ngOnInit(): void {
    this.queryBuilder.resetToDefaults();
    this.sorting = this.getSorting();

    this.queryBuilder.updated.pipe(takeUntil(this.onDestroy$)).subscribe((query) => {
      if (query) {
        this.sorting = this.getSorting();
        this.isLoading = true;
        this.queryBuilder.execute(query);
      }
    });

    this.queryBuilder.executed.pipe(takeUntil(this.onDestroy$)).subscribe((data) => {
      // TODO: investigate why needed in ACA
      this.queryBuilder.paging.skipCount = 0;

      this.onSearchResultLoaded(data);
      this.isLoading = false;
    });

    this.queryBuilder.error.pipe(takeUntil(this.onDestroy$)).subscribe((err: any) => {
      this.onSearchError(err);
    });

    // this.columns = this.extensions.documentListPresets.searchResults || [];
  }

  onSearchError(error: { message: any }) {
    const { statusCode } = JSON.parse(error.message).error;

    // const messageKey = `APP.BROWSE.SEARCH.ERRORS.${statusCode}`;
    // let translated = this.translationService.instant(messageKey);

    // if (translated === messageKey) {
    //   translated = this.translationService.instant(`APP.BROWSE.SEARCH.ERRORS.GENERIC`);
    // }

    // this.store.dispatch(new SnackbarErrorAction(translated));
    this.notifications.showError(`Search error: ${statusCode}`);
  }

  onSearchResultLoaded(nodePaging: ResultSetPaging) {
    this.data = nodePaging;
    this.totalResults = this.getNumberOfResults();
  }

  getNumberOfResults(): number {
    return this.data?.list?.pagination?.totalItems || 0;
  }

  onPaginationChanged(pagination: Pagination) {
    this.queryBuilder.paging = {
      maxItems: pagination.maxItems,
      skipCount: pagination.skipCount
    };
    this.queryBuilder.update();
  }

  // onSearchSortingUpdate(option: SearchSortingDefinition) {
  //   this.queryBuilder.sorting = [{ ...option, ascending: option.ascending }];
  //   this.queryBuilder.update();
  // }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  private getSorting(): string[] {
    const primary = this.queryBuilder.getPrimarySorting();

    if (primary) {
      return [primary.key, primary.ascending ? 'asc' : 'desc'];
    }

    return ['name', 'asc'];
  }

  formatSearchQuery(userInput: string, fields = ['cm:name']) {
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

  onSearchInputChanged(event: Event) {
    this.isLoading = true;

    const input = event.target as HTMLInputElement;
    const searchTerm = input.value;

    if (searchTerm) {
      this.searchQuery = input.value;

      const query = this.formatSearchQuery(this.searchQuery, this.config.fields);
      if (query) {
        this.queryBuilder.userQuery = decodeURIComponent(query);
        this.queryBuilder.update();
      }
    } else {
      this.searchQuery = null;
      this.queryBuilder.userQuery = '';
      this.queryBuilder.executed.next({
        list: { pagination: { totalItems: 0 }, entries: [] }
      });
      this.isLoading = false;
    }
  }
}
