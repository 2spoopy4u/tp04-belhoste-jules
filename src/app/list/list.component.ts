import { Component, inject } from '@angular/core';
import { CardCRUDService } from '../card-crud.service';
import { Card } from '../card';
import { FormUpdateComponent } from "../form-update/form-update.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormUpdateComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  selectedCard?:Card
  constructor() {}  
  cardService = inject(CardCRUDService);
  cards = this.cardService.getCards;

  ngOnInt() {
   ;
  }
  delete(code:number){
    this.cardService.delete(code);
  }
  update(card:Card){

    this.selectedCard=card;
    console.log(this.selectedCard);

  }
}
