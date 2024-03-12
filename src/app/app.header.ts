import { AppHeaderEntry } from '@app/sdk';

/** Default global application header entries */
export const appHeaderEntries: Array<AppHeaderEntry> = [
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
