# Plugin SDK

<div class="warning">
This section is experimental

The content and API in this chapter are subject to change.

</div>

To facilitate plugin development, the project comes with the SDK library: `@app/sdk`.

## Navigation Service

Provides access to the navigation management and settings:

- Header menu entries
- Sidebar menu entries

```ts
class NavigationService {
  headerEntries$: Observable<AppToolbarEntry[]>;
  sidebarEntries$: Observable<AppSidebarEntry[]>;
}
```

Plugins can register additional entries by utilizing the provider functions:

```ts
import { provideHeaderEntries, provideSidebarEntries } from '@app/sdk';

@NgModule({
  providers: [
    provideHeaderEntries([
      {
        text: 'Extra Page 1',
        path: '/extra-page-1'
      }
    ]),
    provideSidebarEntries([
      {
        text: 'Extra Page 1',
        path: '/extra-page-1',
        icon: 'assignment'
      }
    ])
  ]
})
class AppModule {}
```

You can register additional content either from the main application module, or from within the plugin modules.

When providing customizations with the plugin modules, import them into the root application one:

```ts
import { Plugin1Module } from '@my-org/plugin1';

@NgModule({
  imports: [Plugin1Module]
})
class AppModule {}


// where Plugin1Module is

@NgModule({
  providers: [
    provideHeaderEntries([
      /*...*/
    ]),
    provideSidebarEntries([
      /*...*/
    ])
  ]
})
export class Plugin1Module {}
```

## Preview Service

Provides access to global Viewer APIs:

```ts
class PreviewService {
  preview: (...params: any[]) => Promise<any>;
}
```

Note that the Viewer implementation can be customized at the application level.

Example:

```ts
import { PreviewService } from '@app/sdk';

class MyComponent {
  private previewService = inject(PreviewService);

  onPreviewClick(event: any) {
    const entry = event.value.entry;

    if (entry && entry.isFile) {
      this.previewService.preview(entry.id);
    }
  }
}
```
