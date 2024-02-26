import { provideSidebarEntries } from '@app/sdk';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    provideSidebarEntries([
      {
        text: 'Trashcan',
        path: '/trashcan',
        icon: 'delete'
      }
    ])
  ]
})
export class TrashcanPluginModule {}
