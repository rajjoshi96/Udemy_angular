import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe_list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Test','This is a test recipe',"https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"),
    new Recipe('Test','This is a another test recipe',"https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png")

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
