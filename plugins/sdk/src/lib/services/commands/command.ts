import { InjectionToken } from '@angular/core';

export interface Command {
  get name(): string;
  execute: (params?: unknown[]) => void;
}

export const APP_COMMAND = new InjectionToken<Command>('Application Command');
