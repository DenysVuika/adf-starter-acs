import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PreviewService {
    private router = inject(Router);

    public content: Blob = null;
    public name: string = null;

    showResource(resourceId: string): void {
        this.router.navigate([{ outlets: { overlay: ['files', resourceId, 'view'] } }]);
    }

    showBlob(name: string, content: Blob): void {
        this.name = name;
        this.content = content;
        this.router.navigate([{ outlets: { overlay: ['preview', 'blob'] } }]);
    }
}
