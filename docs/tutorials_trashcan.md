## Creating a Trashcan Plugin

In this tutorial, you are going to create a "Trashcan" page, showing deleted content in Alfresco Content Repository. The users are going to navigate to the "Trashcan" page via the Sidebar menu.

### Generating New Plugin Library

Run the following command to generate a new `trashcan-plugin` library in the workspace:

```shell
npx nx generate @nx/angular:library \
  --name=trashcan-plugin \
  --buildable=true \
  --directory=plugins/trashcan-plugin \
  --lazy=true \
  --parent=src/app/app.routes.ts \
  --routing=true \
  --projectNameAndRootFormat=as-provided \
  --skipTests=true \
  --standalone=true \
  --unitTestRunner=none \
  --no-interactive
```

### Creating Plugin Module

In this tutorial, we are going to create a self-registering plugin - the library provides the navigation settings dynamically at application startup.

Create the `trashcan-plugin.module.ts` in the `plugins/trashcan-plugin/src/lib/trashcan-plugin/` directory,
with the next content:

```ts
import { NgModule } from '@angular/core';

@NgModule({})
export class TrashcanPluginModule {}
```

Use `provideSidebarEntries` helper function from the `@app/sdk` library to generate the sidebar entries:

```ts
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
```

Next, update the `plugins/trashcan-plugin/src/index.ts` to export the newly created module:

```ts
export * from './lib/lib.routes';
export * from './lib/trashcan-plugin/trashcan-plugin.component';
// export module
export * from './lib/trashcan-plugin/trashcan-plugin.module';
```

### Integrating Plugin

Update `src/app/app.module.ts`, import the module from the `trashcan-plugin` project, and import the module:

```ts
import { TrashcanPluginModule } from 'trashcan-plugin';

@NgModule({
  imports: [
    // ...
    TrashcanPluginModule
  ],
  // ...
})
export class AppModule {

```

Finally, switch to the application routes config `src/app/app.routes.ts`, and update the `trashcan` entry:

```ts
import { trashcanPluginRoutes } from 'trashcan-plugin';

/** Global application routes */
export const appRoutes: Routes = [
  // ...
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      // ...
      { path: 'trashcan', children: trashcanPluginRoutes }
    ]
  }
];
```

If you run the application at this point, you should see the "Trashcan" entry in the Sidebar.
The link navigates you to the main content of the plugin:

![Trashcan Tutorial: first run](./images/tutorials_trashcan_01.png)

### Displaying Trashcan Content
