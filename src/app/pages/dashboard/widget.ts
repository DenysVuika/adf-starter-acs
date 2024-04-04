import { InjectionToken, Provider, Type } from '@angular/core';

export interface WidgetInfo {
  key: string;
  name: string;
  color: string; // todo: move to metadata
  component?: Type<unknown>;
}

export const APP_WIDGET = new InjectionToken<WidgetInfo>('Application Widget');

export function provideAppWidgets(entries: WidgetInfo[]): Array<Provider> {
  return entries.map<Provider>((entry) => ({
    provide: APP_WIDGET,
    multi: true,
    useValue: entry
  }));
}
