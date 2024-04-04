import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-simple-widget',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: 'SimpleWidget.html'
})
export class SimpleWidget {}
