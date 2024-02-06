import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppHeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    TranslateModule,
    AppHeaderComponent
  ],
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {}
