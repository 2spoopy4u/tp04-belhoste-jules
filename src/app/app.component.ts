import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormComponent} from './credit-card-manager/form/form.component'
import { ListComponent } from './credit-card-manager/list/list.component';
import { CreditCardManagerModule } from './credit-card-manager/credit-card-manager.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreditCardManagerModule],
  styleUrl: './app.component.css',
  template:"<div><app-form/><br/><app-list/></div>"
})
export class AppComponent {
  title = 'tp04-belhoste-jules';
}
