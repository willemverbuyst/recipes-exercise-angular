import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Egg curry',
      'This is simply a test for eggs',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2012/11/egg-curry-recipe.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2012/11/egg-curry-recipe.jpg',
      [new Ingredient('Curry', 1), new Ingredient('Eggs', 20)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
