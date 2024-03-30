import { AppConfigModule, LoginModule } from '@alfresco/adf-core';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { APP_COPYRIGHT } from '@app/sdk';

@Component({
  standalone: true,
  imports: [LoginModule, AppConfigModule, TranslateModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  copyrightText?: string = inject(APP_COPYRIGHT, { optional: true });
}
