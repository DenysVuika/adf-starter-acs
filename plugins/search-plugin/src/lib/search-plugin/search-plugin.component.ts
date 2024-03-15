import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListModule, SearchModule, SearchQueryBuilderService } from '@alfresco/adf-content-services';
import { AppConfigService, DataTableModule, NotificationService, PaginationModule, TemplateModule } from '@alfresco/adf-core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { Pagination, ResultSetPaging } from '@alfresco/js-api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { SearchInputComponent } from './components/search-input.component';
import { DefaultSearchConfiguration } from './search.config';

@Component({
  selector: 'lib-search-plugin',
  standalone: true,
  imports: [
    CommonModule,
    SearchModule,
    DataTableModule,
    DocumentListModule,
    PaginationModule,
    TemplateModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    SearchInputComponent
  ],
  templateUrl: './search-plugin.component.html',
  styleUrls: ['./search-plugin.component.css']
})
export class SearchPluginComponent implements OnInit, OnDestroy {
  private appConfig = inject(AppConfigService);
  private queryBuilder = inject(SearchQueryBuilderService);
  private notifications = inject(NotificationService);
  private onDestroy$ = new Subject<boolean>();

  isLoading = false;
  searchQuery = '';
  sorting = ['name', 'asc'];
  data?: ResultSetPaging;

  private config = {
    aca_fields: ['cm:name', 'cm:title', 'cm:description', 'TEXT', 'TAG']
  };

  constructor() {
    // TODO: investigate why needed in ACA
    // TODO: ADF bug, should have default value
    this.queryBuilder.paging = {
      skipCount: 0,
      maxItems: 25
    };

    this.appConfig.config['search'] = [DefaultSearchConfiguration];
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

      this.data = data;
      this.isLoading = false;
    });

    this.queryBuilder.error.pipe(takeUntil(this.onDestroy$)).subscribe((err: any) => {
      this.onSearchError(err);
    });

    // this.columns = this.extensions.documentListPresets.searchResults || [];
  }

  onSearchError(error: { message: never }) {
    const { statusCode } = JSON.parse(error.message).error;
    this.notifications.showError(`Search error: ${statusCode}`);

    // TODO: errors should be moved from ACA to ADF
    // const messageKey = `APP.BROWSE.SEARCH.ERRORS.${statusCode}`;
    // let translated = this.translationService.instant(messageKey);

    // if (translated === messageKey) {
    //   translated = this.translationService.instant(`APP.BROWSE.SEARCH.ERRORS.GENERIC`);
    // }

    // this.store.dispatch(new SnackbarErrorAction(translated));
  }

  /**
   * Returns total number of search results, or 0
   */
  get totalResults(): number {
    return this.data?.list?.pagination?.totalItems || 0;
  }

  onPaginationChanged({ maxItems, skipCount }: Pagination) {
    this.queryBuilder.paging = {
      maxItems,
      skipCount
    };
    this.queryBuilder.update();
  }

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

  onSearchQueryChanged(searchTerm: string) {
    this.isLoading = true;

    if (searchTerm) {
      this.searchQuery = searchTerm;

      const query = this.formatSearchQuery(this.searchQuery, this.config.aca_fields);
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
