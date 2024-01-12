import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { ActivatedRoute, PRIMARY_OUTLET, Router } from '@angular/router';
import { FileUploadErrorEvent, NodesApiService } from '@alfresco/adf-content-services';
import { NotificationService } from '@alfresco/adf-core';

@Component({
  selector: 'app-file-view',
  templateUrl: 'file-view.component.html',
  styleUrls: ['file-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FileViewComponent implements OnInit {
  nodeId: string = null;

  private notificationService = inject(NotificationService);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nodeApiService: NodesApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params.nodeId;
      if (id) {
        this.nodeApiService.getNode(id).subscribe(
          (node) => {
            if (node && node.isFile) {
              this.nodeId = id;
              return;
            }
            this.router.navigate(['/files', id]);
          },
          () => this.router.navigate(['/files', id])
        );
      }
    });
  }

  onUploadError(event: FileUploadErrorEvent) {
    const errorMessage = event.error;
    this.notificationService.showError(errorMessage);
  }

  onViewerVisibilityChanged() {
    const primaryUrl = this.router
      .parseUrl(this.router.url)
      .root.children[PRIMARY_OUTLET].toString();
    this.router.navigateByUrl(primaryUrl);
  }
}
