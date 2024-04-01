import { Provider, Type } from '@angular/core';
import { Command, APP_COMMAND } from './command';

export function provideAppCommands(commands: Type<Command>[]): Array<Provider> {
  return commands.map((command) => ({
    provide: APP_COMMAND,
    multi: true,
    useClass: command
  }));
}
