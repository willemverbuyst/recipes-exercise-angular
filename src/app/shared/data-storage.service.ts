import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs/operators';

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

  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://ng-recipe-book-b9d68.firebaseio.com/recipes.json')
      .pipe(
        map((recipes) => {
          return recipes.map((r) => {
            return { ...r, ingredients: r.ingredients ? r.ingredients : [] };
          });
        }),
        tap((recipes) => this.recipesService.setRecipes(recipes))
      );
  }
}
