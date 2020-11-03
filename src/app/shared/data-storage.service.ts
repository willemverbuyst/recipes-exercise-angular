import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put('https://ng-recipe-book-b9d68.firebaseio.com/recipes.json', recipes)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
