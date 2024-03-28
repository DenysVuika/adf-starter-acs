import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PreviewService {
  private router = inject(Router);

  /**
   * Instructs application to show the content using `preview` route.
   * Preview route is wired with the `overlay` outlet by default.
   *
   * @param params Parameters to pass to the `preview` route.
   */
  async preview(...params: any[]) {
    return this.router.navigate([{ outlets: { overlay: ['preview', ...params] } }]);
  }
}
