import { Routes } from '@angular/router';
import { AuthGuardEcm } from '@alfresco/adf-core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { AppLayoutComponent } from './components/page-layout/page-layout.component';
import { FileViewComponent } from './components/file-view/file-view.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { trashcanPluginRoutes } from 'trashcan-plugin';

/** Global application routes */
export const appRoutes: Routes = [
  { path: 'files/:nodeId/view', component: FileViewComponent, canActivate: [AuthGuardEcm], outlet: 'overlay' },
  {
    path: '',
    component: AppLayoutComponent,
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
      {
        path: 'trashcan',
        children: trashcanPluginRoutes,
        canActivate: [AuthGuardEcm]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
