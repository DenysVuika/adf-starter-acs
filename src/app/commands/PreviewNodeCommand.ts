import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Command } from '@app/sdk';

export class PreviewNodeCommand implements Command {
  private router = inject(Router);

  get name(): string {
    return 'preview.node';
  }

  execute(params?: unknown[]): void {
    if (params) {
      void this.router.navigate([{ outlets: { overlay: ['preview', ...params] } }]);
    }
  }
}
