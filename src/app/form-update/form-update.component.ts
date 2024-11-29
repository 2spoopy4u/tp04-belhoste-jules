import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CardCRUDService } from '../card-crud.service';
import { Card } from '../card';

@Component({
  selector: 'app-form-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css'
})
export class FormUpdateComponent {
  @Input() selectCard?:Card;
  updateForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.updateForm = this.formBuilder.group({
      Name: new FormControl('', [Validators.required,Validators.pattern('[A-z]*')]),
      Code: new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]),
      CCV: new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]),
      ExpirationMonth: new FormControl('', [Validators.required,Validators.pattern('[0-9][0-9]')]),
      ExpirationYear: new FormControl('', [Validators.required,Validators.pattern('[0-9][0-9][0-9][0-9]')]),

    });
  }  
  cardService = inject(CardCRUDService);
  ngOnInt() {
   ;
  }
  update(){
    console.log(this.updateForm.value);
    this.cardService.update(this.updateForm.value);
  }

}
