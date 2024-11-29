import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormComponent} from './form/form.component'
import { ListComponent } from './list/list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormComponent,ListComponent],
  styleUrl: './app.component.css',
  template:"<div><app-form/><br/><app-list/></div>"
})
export class AppComponent {
  title = 'tp04-belhoste-jules';
}
