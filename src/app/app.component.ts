import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { Egg, Ingredient, Milk } from './ingredients';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

export interface Recipe {
  name: string;
  imageUrl: string;
  cooked: boolean;
  learned: boolean;
  ingredients: Ingredient[];
  source: string;
}

export interface MiniRecipe {
  c: number;
  l: number;
}

export interface MiniIng {
  c: number;
}

const ALLRECIPES: Recipe[] = [
  { name: "Fried Egg", imageUrl: "https://stardewvalleywiki.com/mediawiki/images/1/18/Fried_Egg.png", cooked: false, learned: false, ingredients: [new Egg("Fried Egg")], source: "starter" },
  { name: "Omelet", imageUrl: "https://stardewvalleywiki.com/mediawiki/images/1/12/Omelet.png", cooked: false, learned: false, ingredients: [new Egg("Omelet"), new Milk("Omelet")], source: "starter" }
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule, 
    MatCheckboxModule, MatSortModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stardew-ingredients';
  recipeColumns: string[] = ["cooked", "learned", "image", "name", "ingredients", "source"];
  ingredientColumns: string[] = ["collected", "image", "name", "season", "recipe"];
  recipeDataSource = new MatTableDataSource(ALLRECIPES);
  ingredientDataSource = new MatTableDataSource(this.generateIngredients());
  hideUsedIngredients = new FormControl(false);
  @ViewChild('recipeSort', { static: false }) recipeSort!: MatSort;
  @ViewChild('ingredientSort', { static: false }) ingredientSort!: MatSort;

  constructor(private cdRef: ChangeDetectorRef){
    const loadedData = this.loadFromBrowser();
    if (loadedData) {
      const parsedJson = JSON.parse(loadedData);
      this.hideUsedIngredients.setValue(parsedJson.hide);

      parsedJson.recipes.forEach((rec : MiniRecipe, ind: number) => {
        ALLRECIPES[ind].cooked = !!rec.c;
        ALLRECIPES[ind].learned = !!rec.l;
      })

      const newIngs = this.generateIngredients();
      parsedJson.ingredients.forEach((ing : MiniIng, ind: number) => {
        newIngs[ind].collected = !!ing.c;
      })

      this.recipeDataSource = new MatTableDataSource(ALLRECIPES);
      this.ingredientDataSource = new MatTableDataSource(newIngs);
    }
  }

  ngAfterViewInit() {
    this.recipeDataSource.sort = this.recipeSort;
    this.ingredientDataSource.sort = this.ingredientSort;
    this.ingredientDataSource.filterPredicate = 
      (ing: Ingredient, filter: string) => {
        return (filter=="true") ? !ing.recipeCooked : true};
    this.cdRef.detectChanges()
  }

  generateIngredients(): Ingredient[] {
    let allIngredients: Ingredient[] = [];
    ALLRECIPES.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        ing.recipeCooked = recipe.cooked;
        if (recipe.cooked) {
          ing.collected = true;
        }
        allIngredients.push(ing);
      })
    })
    return allIngredients;
  }

  collect(event: MatCheckboxChange, ing: Ingredient) {
    ing.collected = event.checked;
    this.saveToBrowser();
  }

  cook(event: MatCheckboxChange, recipe: Recipe) {
    recipe.cooked = event.checked;
    recipe.ingredients.forEach(x => {
      x.recipeCooked = event.checked;
      x.collected = event.checked;
    });

    this.ingredientDataSource.filter = this.hideUsedIngredients?.value?.toString() || '';
    this.saveToBrowser();
  }

  learn(event: MatCheckboxChange, recipe: Recipe) {
    recipe.learned = event.checked;
    this.saveToBrowser();
  }

  toggleHideUsedIngredients(event: MatCheckboxChange) {
    this.ingredientDataSource.filter = event.checked.toString(); 
    this.saveToBrowser();
  }

  loadFromBrowser(): string | null {
    return localStorage.getItem('stardewcooking')
  }

  shorten(b: boolean): number {
    return b ? 1 : 0;
  }

  saveToBrowser() {
    // console.log("recipes: ", this.recipeDataSource.data);
    // console.log("ingredients: ", this.ingredientDataSource.data);

    let dataObj = {
      hide: this.hideUsedIngredients.value,
      recipes: this.recipeDataSource.data.map(r => { return {c: this.shorten(r.cooked), l: this.shorten(r.learned)}}),
      ingredients: this.ingredientDataSource.data.map(i => { return {c: this.shorten(i.collected)}})
    }

    // console.log("save: ", JSON.stringify(dataObj));

    localStorage.setItem('stardewcooking', JSON.stringify(dataObj));
  }
}
