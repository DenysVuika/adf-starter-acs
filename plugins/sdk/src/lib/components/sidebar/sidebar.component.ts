import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppSidebarEntry } from '../../services/navigation.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule, TranslateModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppSidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  @Input()
  entries: Array<AppSidebarEntry> = [];

  toggle() {
    this.sidenav.toggle();
  }
}
