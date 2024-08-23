import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { categoryType, Ingredient, seasonType } from './ingredients';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ALLRECIPES, Recipe } from './recipes';
import { SortArrowComponent } from "./sort-arrow/sort-arrow.component";

export interface MiniRecipe {
  c: number;
  l: number;
}

export interface MiniIng {
  c: number;
}

export interface FilterObj {
  hideCooked: boolean;
  substring: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule,
    MatCheckboxModule, MatSortModule, ReactiveFormsModule, SortArrowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stardew-ingredients';
  recipeColumns: string[] = ["cooked", "learned", "name", "ingredients", "source"];
  ingredientColumns: string[] = ["collected", "name", "category", "season", "recipe"];
  recipeDataSource = new MatTableDataSource(ALLRECIPES);
  ingredientDataSource = new MatTableDataSource(this.generateIngredients());
  hideUsedIngredients = new FormControl(false);
  categoryType = categoryType;
  currentFilter: FilterObj = {
    hideCooked: false,
    substring: ''
  };
  ingNameSearch = new FormControl('');
  @ViewChild('recipeSort', { static: false }) recipeSort!: MatSort;
  @ViewChild('ingredientSort', { static: false }) ingredientSort!: MatSort;

  constructor(private cdRef: ChangeDetectorRef) {
    const loadedData = this.loadFromBrowser();
    if (loadedData) {
      const parsedJson = JSON.parse(loadedData);

      parsedJson.recipes.forEach((rec: MiniRecipe, ind: number) => {
        ALLRECIPES[ind].cooked = !!rec.c;
        ALLRECIPES[ind].learned = !!rec.l;
      })

      const newIngs = this.generateIngredients();
      parsedJson.ingredients.forEach((ing: MiniIng, ind: number) => {
        newIngs[ind].collected = !!ing.c;
      })

      this.recipeDataSource = new MatTableDataSource(ALLRECIPES);
      this.ingredientDataSource = new MatTableDataSource(newIngs);
      this.hideUsedIngredients.setValue(parsedJson.hide);
      this.currentFilter.hideCooked = parsedJson.hide;
    }
  }

  ngAfterViewInit() {
    this.recipeDataSource.sort = this.recipeSort;
    this.ingredientDataSource.sort = this.ingredientSort;

    this.ingredientDataSource.filterPredicate =
      ((ing: Ingredient, filter: string) => {
        const filterObject = JSON.parse(filter) as FilterObj;
        const filterA = (filterObject.hideCooked == true) ? !ing.recipeCooked : true;
        const filterB = filterObject.substring ? ing.name.toLowerCase().includes(filterObject.substring.trim()) : true;
        return filterA && filterB;
      });

    this.ingredientDataSource.filter = JSON.stringify(this.currentFilter);

    this.cdRef.detectChanges()
  }

  sortSeasons(s: Sort) {
    if (s.active == "season") {
      const ingDataCopy = this.ingredientDataSource.data.slice();

      this.ingredientDataSource.data = ingDataCopy.sort((a, b) => {
        const isAsc = s.direction === 'asc';
        return compare(a.seasons, b.seasons, isAsc);
      });

      function compare(a: seasonType[], b: seasonType[], isAsc: boolean) {

        let aFocus = a.reduce((c, d) => (getSeasonValue(c) < getSeasonValue(d) && isAsc) ? c : d);
        let bFocus = b.reduce((c, d) => (getSeasonValue(c) < getSeasonValue(d) && isAsc) ? c : d);

        return (getSeasonValue(aFocus) < getSeasonValue(bFocus) ? -1 : 1) * (isAsc ? 1 : -1);
      }

      function getSeasonValue(season: seasonType): number {
        switch (season) {
          case seasonType.Spring:
            return 0;
          case seasonType.Summer:
            return 1;
          case seasonType.Fall:
            return 2;
          case seasonType.Winter:
            return 3;
          default:
            return 4;
        }
      }
    }
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

    this.currentFilter.hideCooked = event.checked;
    this.ingredientDataSource.filter = JSON.stringify(this.currentFilter);
    this.saveToBrowser();
  }

  learn(event: MatCheckboxChange, recipe: Recipe) {
    recipe.learned = event.checked;
    this.saveToBrowser();
  }

  toggleHideUsedIngredients(event: MatCheckboxChange) {
    this.currentFilter.hideCooked = event.checked;
    this.ingredientDataSource.filter = JSON.stringify(this.currentFilter);
    this.saveToBrowser();
  }

  loadFromBrowser(): string | null {
    return localStorage.getItem('stardewcooking_v1')
  }

  shorten(b: boolean): number {
    return b ? 1 : 0;
  }

  saveToBrowser() {
    // console.log("recipes: ", this.recipeDataSource.data);
    // console.log("ingredients: ", this.ingredientDataSource.data);

    let dataObj = {
      hide: this.hideUsedIngredients.value,
      recipes: this.recipeDataSource.data.map(r => { return { c: this.shorten(r.cooked), l: this.shorten(r.learned) } }),
      ingredients: this.ingredientDataSource.data.map(i => { return { c: this.shorten(i.collected) } })
    }

    localStorage.setItem('stardewcooking_v1', JSON.stringify(dataObj));
  }

  handleSearch() {
    this.currentFilter.substring = this.ingNameSearch.value?.trim().toLowerCase() || '';
    this.ingredientDataSource.filter = JSON.stringify(this.currentFilter);
    this.cdRef.detectChanges()
  }

  reset() {
    localStorage.removeItem('stardewcooking_v1');
    this.recipeDataSource.data.forEach(recipe => {
      recipe.cooked = false;
      recipe.learned = false;
    });
    this.ingredientDataSource.data.forEach(ing => {
      ing.collected = false;
      ing.recipeCooked = false;
    });
    this.ingNameSearch.setValue('');
    this.currentFilter.substring = '';
    this.ingredientDataSource.filter = JSON.stringify(this.currentFilter);
  }
}
