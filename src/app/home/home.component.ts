import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [TranslateModule],
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {}
