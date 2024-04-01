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
