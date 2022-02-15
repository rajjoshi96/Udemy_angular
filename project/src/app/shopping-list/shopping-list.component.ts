//import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping_list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients :Ingredients[] = [
    new Ingredients("Eggs",6.9),
    new Ingredients("Bread",3.4),
  ];
  constructor() { }


  ngOnInit(): void {
  }

  onIngredientAdded(ingredient:Ingredients){
    this.ingredients.push(ingredient);

  }
}
