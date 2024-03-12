import { Inject, Injectable, InjectionToken, Optional, Provider } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type AppSidebarEntry = { text: string; path: string; icon?: string };
export type AppHeaderEntry = { text: string; path: string; icon?: string };

export const APP_SIDEBAR_ENTRY_TOKEN = new InjectionToken<AppSidebarEntry>('Injection token for application sidebar entries.');
export const APP_HEADER_ENTRY_TOKEN = new InjectionToken<AppHeaderEntry>('Injection token for application header entries.');

/**
 * Generates injection providers to extend the application sidebar menu.
 *
 * @param entries Sidebar entries to register
 * @returns Module providers with the sidebar entries
 */
export function provideSidebarEntries(entries: AppSidebarEntry[]): Array<Provider> {
  return entries.map((entry) => ({
    provide: APP_SIDEBAR_ENTRY_TOKEN,
    multi: true,
    useValue: entry
  }));
}

/**
 * Generates injection providers to extend the application header menu.
 *
 * @param entries Header entries to register
 * @returns Module providers with the header entries
 */
export function provideHeaderEntries(entries: AppHeaderEntry[]): Array<Provider> {
  return entries.map((entry) => ({
    provide: APP_HEADER_ENTRY_TOKEN,
    multi: true,
    useValue: entry
  }));
}

@Injectable({ providedIn: 'root' })
export class NavigationService {
  /** Application header entries */
  headerEntries$: Observable<AppHeaderEntry[]>;

  /** Application sidebar entries */
  sidebarEntries$: Observable<AppSidebarEntry[]>;

  constructor(
    @Optional() @Inject(APP_HEADER_ENTRY_TOKEN) headerEntries: AppHeaderEntry[],
    @Optional() @Inject(APP_SIDEBAR_ENTRY_TOKEN) sidebarEntries: AppSidebarEntry[]
  ) {
    this.headerEntries$ = new BehaviorSubject(headerEntries).asObservable();
    this.sidebarEntries$ = new BehaviorSubject(sidebarEntries).asObservable();
  }
}
