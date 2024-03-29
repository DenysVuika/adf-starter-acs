# Page Layouts

You can control if your custom page has a predefined layout, or a fully custom one.

The application comes with a set of predefined layouts:

- Blank Layout
- Standard Layout

## Blank Layout

`@app/sdk`, `component`

Backed by the `BlankLayoutComponent` component, this layout provides just a main content entry on a full page.

You can use this component for cases when your page provides a fully custom content and layout.

Once you click the newly introduced "My Page" link, the component is taking the whole page:

![Route without Layout](./images/route-without-layout.png)

## Standard Layout

`@app/sdk`, `component`

Backed by the `StandardLayoutComponent` component, this layout provides the following blocks:

- Application Toolbar
- Application Sidebar
- Main Content Area

In the `src/app/app.routes.ts`, make your entry a child of the route backed by the `StandardLayoutComponent`:

```ts
import { StandardLayoutComponent } from '@app/sdk';

export const appRoutes: Routes = [
  // ...
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'documents',
        component: DocumentsComponent,
        canActivate: [AuthGuardEcm]
      },
      {
        path: 'page1',
        component: Page1Component
      },
      {
        path: 'page2',
        component: Page2Component
      },
      // Move the entry here
      {
        path: 'my-page',
        component: MyPageComponent
      }
    ]
  }
  // ...
];
```

Upon navigation, the page should be looking like the following now:

![Route with the Layout](./images/route-with-layout.png)
