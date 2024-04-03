import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@app/sdk';

export class PreviewNodeAction implements Action<string> {
  private router = inject(Router);

  get name(): string {
    return 'preview.node';
  }

  execute(params?: string): void {
    if (params) {
      void this.router.navigate([{ outlets: { overlay: ['preview', params] } }]);
    }
  }
}
