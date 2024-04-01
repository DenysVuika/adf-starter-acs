# Command Service

`Service`

<div class="warning">
This section is experimental

The content and API in this chapter are subject to change.
</div>

Provides access to global application commands, allows invoking the commands with parameters.

## Accessing commands from code

If your component requires invoking an application command, you can use `CommandService` for that:

```ts
import { Component, inject } from '@angular/core';
import { CommandService } from '@app/sdk';

@Component({/*...*/})
class MyComponent {
  private commandService = inject(CommandService);
  
  onShowAboutPage() {
    this.commandService.execute('router.navigate', ['/about']);
  }
}
```

Please note that the example above expects a `router.navigate` command to be registered with the applicaiton.

## Creating application commands

Each application command has the following characteristics:

- implements the `Command` interface

```ts
export interface Command {
  get name(): string;
  execute: (params?: unknown[]) => void;
}
```

- can access dependency injection

### Example

In the following example, we create a command `router.navigate` implementation.
The command takes a number of parameters, and passes to the Angular Router `navigate` method.

```ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Command } from '@app/sdk';

export class RouterNavigateCommand implements Command {
  private router = inject(Router);

  get name(): string {
    return 'router.navigate';
  }

  execute(params?: unknown[]): void {
    if (params) {
      void this.router.navigate(params);
    }
  }
}
```

## Registering application commands

The commands are registered at the application level in the `src/app/app.commands.ts`, and might look like the following:

```ts
import { Type } from '@angular/core';
import { Command } from '@app/sdk';
import { PreviewNodeCommand, RouterNavigateCommand } from './commands';

export const appCommands: Type<Command>[] = [
  PreviewNodeCommand, 
  RouterNavigateCommand
];
```

## Invoking commands

With the command above, you can use it with all building blocks that natively support `CommandService`.

For example toolbar or sidebar components:

`src/app/toolbar`

```ts
import { AppToolbarEntry } from '@app/sdk';

/** Default global application header entries */
export const appToolbarEntries: Array<AppToolbarEntry> = [
  {
    text: 'Page 1',
    action: ['router.navigate', ['/page1']]
  },
  {
    text: 'Page 2',
    action: ['router.navigate', ['/page2']]
  },
];
```
