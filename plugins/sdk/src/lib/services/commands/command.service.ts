import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Command, APP_COMMAND } from './command';

@Injectable({ providedIn: 'root' })
export class CommandService {
  private snackBar = inject(MatSnackBar);
  private commands = inject<Command[]>(APP_COMMAND, { optional: true }) || [];

  constructor() {
    console.log(this.getSupportedCommands());
    console.log(this.commands);
  }

  getSupportedCommands(): Array<string> {
    return this.commands.map((cmd) => cmd.name);
  }

  /**
   * Checks if the command with the given name is registered
   *
   * @param name Command name (case-insensitive)
   */
  hasCommand(name: string): boolean {
    return this.commands.some((cmd) => cmd.name.toLowerCase() === name.toLowerCase());
  }

  /**
   * Gets the registered command by name
   *
   * @param name Command name (case-insensitive)
   */
  getCommand(name: string): Command | undefined {
    return this.commands.find((cmd) => cmd.name.toLowerCase() === name.toLowerCase());
  }

  /**
   * Executes the command by name
   *
   * @param name Command name (case-insensitive)
   * @param params (optional) Command parameters
   */
  execute(name: string, params?: Array<unknown>) {
    const command = this.getCommand(name);
    if (command) {
      command.execute(params);
    } else {
      this.snackBar.open(`Unknown command: ${name}`);
    }
  }
}
