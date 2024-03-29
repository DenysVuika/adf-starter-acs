import { Routes } from '@angular/router';
import { AuthGuardEcm } from '@alfresco/adf-core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PreviewComponent } from './components/preview/preview.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { StandardLayoutComponent, BlankLayoutComponent } from '@app/sdk';

/** Global application routes */
export const appRoutes: Routes = [
  { path: 'preview/:nodeId', component: PreviewComponent, canActivate: [AuthGuardEcm], outlet: 'overlay' },
  // Using `Standard` layout for all child routes/components
  {
    path: '',
    component: StandardLayoutComponent,
    // optional: configuring the StandardLayoutComponent settings
    data: {
      layout: {
        showToolbar: true,
        showSidebar: true
      }
    },
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
        canActivate: [AuthGuardEcm],
        loadChildren: () => import('documents-plugin').then((m) => m.documentsPluginRoutes)
      },
      {
        path: 'page1',
        component: Page1Component
      },
      {
        path: 'page2',
        component: Page2Component
      },
      {
        path: 'trashcan',
        canActivate: [AuthGuardEcm],
        loadChildren: () => import('trashcan-plugin').then((m) => m.trashcanPluginRoutes)
      },
      {
        path: 'search',
        canActivate: [AuthGuardEcm],
        loadChildren: () => import('search-plugin').then((m) => m.searchPluginRoutes)
      }
    ]
  },
  // Using `Blank` layout for all child routes/components
  {
    path: 'pages',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'page1',
        component: Page1Component
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // Redirect every undefined route to the root
  {
    path: '**',
    redirectTo: ''
  }
];
