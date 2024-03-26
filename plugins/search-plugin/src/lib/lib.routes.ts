import { Route } from '@angular/router';
import { SearchPluginComponent } from './search-plugin/search-plugin.component';
import { ADF_SEARCH_CONFIGURATION, SEARCH_QUERY_SERVICE_TOKEN, SearchQueryBuilderService } from '@alfresco/adf-content-services';
import { DefaultSearchConfiguration } from './search-plugin/search.config';

export const searchPluginRoutes: Route[] = [
  {
    path: '',
    component: SearchPluginComponent,
    providers: [
      // TODO: Search not working without this line
      SearchQueryBuilderService,
      { provide: ADF_SEARCH_CONFIGURATION, useValue: DefaultSearchConfiguration },
      { provide: SEARCH_QUERY_SERVICE_TOKEN, useExisting: SearchQueryBuilderService }
    ]
  }
];
