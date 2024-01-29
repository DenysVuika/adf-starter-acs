import { Component, ViewChild, Input, ViewEncapsulation, inject } from '@angular/core';
import { NotificationService, PaginationModule, ToolbarModule } from '@alfresco/adf-core';
import { BreadcrumbModule, ContentDirectiveModule, DocumentListComponent, DocumentListModule, UploadModule } from '@alfresco/adf-content-services';
import { PreviewService } from '../services/preview.service';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [ToolbarModule, BreadcrumbModule, UploadModule, DocumentListModule, PaginationModule, ContentDirectiveModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-documents' }
})
export class DocumentsComponent {
  private notificationService = inject(NotificationService);
  private preview = inject(PreviewService);

  @Input()
  showViewer = false;

  @ViewChild('documentList')
  documentList: DocumentListComponent;

  uploadSuccess() {
    this.notificationService.openSnackMessage('File uploaded');
    this.documentList.reload();
  }

  showPreview(event: any) {
    const entry = event.value.entry;

    if (entry && entry.isFile) {
      this.preview.showResource(entry.id);
    }
  }
}
