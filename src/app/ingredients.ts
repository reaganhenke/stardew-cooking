export enum seasonType {
  Spring = "Spring",
  Summer = "Summer",
  Fall = "Fall",
  Winter = "Winter",
  Any = "Any"
}

export enum categoryType {
  Crops,
}

export interface Ingredient {
  name: string;
  imageUrl: string;
  collected: boolean;
  category: categoryType
  season: seasonType;
  addedBy: string;
  recipeCooked: boolean;
}


export class Egg implements Ingredient {
  name = "Egg"
  imageUrl = "https://stardewvalleywiki.com/mediawiki/images/2/26/Egg.png";
  collected = false;
  category = categoryType.Crops
  season = seasonType.Fall;
  addedBy;
  recipeCooked = false;
  constructor(recipe: string) {
    this.addedBy = recipe;
  }
}

export class Milk implements Ingredient {
  name = "Milk"
  imageUrl = "https://stardewvalleywiki.com/mediawiki/images/9/92/Milk.png";
  collected = false;
  category = categoryType.Crops
  season = seasonType.Fall;
  addedBy;
  recipeCooked = false;
  constructor(recipe: string) {
    this.addedBy = recipe;
  }
}