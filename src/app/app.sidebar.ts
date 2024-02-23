import { AppSidebarEntry } from '@app/sdk';

/** Default global application sidebar entries */
export const appSidebarEntries: Array<AppSidebarEntry> = [
  {
    text: 'APP.NAV.DOCUMENTS',
    path: '/documents',
    icon: 'text_snippet'
  },
  {
    text: 'Page 1',
    path: '/page1',
    icon: 'task'
  },
  {
    text: 'Page 2',
    path: '/page2',
    icon: 'assignment'
  }
];
