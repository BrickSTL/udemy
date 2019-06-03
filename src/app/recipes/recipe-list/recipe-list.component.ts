import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model' ;
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
      new Recipe('A test recipe', 'this is simply a test','https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false')
    ];
  constructor() { }

  ngOnInit() {

  }

}