import { Component, ViewChild, Input, ViewEncapsulation, inject } from '@angular/core';
import { NotificationService, PaginationModule, ToolbarModule } from '@alfresco/adf-core';
import { BreadcrumbModule, ContentDirectiveModule, DocumentListComponent, DocumentListModule, UploadModule } from '@alfresco/adf-content-services';
import { ActionService } from '@app/sdk';

@Component({
  selector: 'lib-documents-plugin',
  standalone: true,
  imports: [ToolbarModule, BreadcrumbModule, UploadModule, DocumentListModule, PaginationModule, ContentDirectiveModule],
  templateUrl: './documents-plugin.component.html',
  styleUrls: ['./documents-plugin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentsPluginComponent {
  private notificationService = inject(NotificationService);
  private commandService = inject(ActionService);

  @Input()
  showViewer = false;

  @ViewChild('documentList')
  documentList!: DocumentListComponent;

  uploadSuccess() {
    this.notificationService.openSnackMessage('File uploaded');
    this.documentList.reload();
  }

  showPreview(event: any) {
    const entry = event.value.entry;

    if (entry && entry.isFile) {
      this.commandService.execute<string>('preview.node', entry.id);
    }
  }
}
