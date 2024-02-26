import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '@alfresco/adf-core';
import { DocumentListModule } from '@alfresco/adf-content-services';

@Component({
  selector: 'lib-trashcan-plugin',
  standalone: true,
  imports: [CommonModule, DocumentListModule, PaginationModule],
  templateUrl: './trashcan-plugin.component.html',
  styleUrls: ['./trashcan-plugin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrashcanPluginComponent {}
