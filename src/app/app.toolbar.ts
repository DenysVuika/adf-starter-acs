import { AppToolbarEntry } from '@app/sdk';

/** Default global application header entries */
export const appToolbarEntries: Array<AppToolbarEntry> = [
  {
    text: 'APP.NAV.DOCUMENTS',
    path: '/documents'
  },
  {
    text: 'Page 1',
    path: '/page1'
  },
  {
    text: 'Page 2',
    path: '/page2'
  },
  {
    path: '/search',
    icon: 'search',
    text: 'Search'
  }
];
