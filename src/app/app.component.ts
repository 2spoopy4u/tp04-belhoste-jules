import { Component } from '@angular/core';
import { CreditCardManagerModule } from './credit-card-manager/credit-card-manager.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CreditCardManagerModule],
  styleUrl: './app.component.css',
  template:"<div><app-form/><br/><app-list/></div>"
})
export class AppComponent {
  title = 'tp04-belhoste-jules';
}
