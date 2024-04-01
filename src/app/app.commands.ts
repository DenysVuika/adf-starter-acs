import { Type } from '@angular/core';
import { Command } from '@app/sdk';
import { PreviewNodeCommand, RouterNavigateCommand } from './commands';

export const appCommands: Type<Command>[] = [PreviewNodeCommand, RouterNavigateCommand];
