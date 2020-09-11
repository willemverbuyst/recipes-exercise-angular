import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Egg curry',
      'This is simply a test for eggs',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2012/11/egg-curry-recipe.jpg'
    ),
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2012/11/egg-curry-recipe.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
