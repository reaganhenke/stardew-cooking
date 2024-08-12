export enum seasonType {
  Spring = "Spring",
  Summer = "Summer",
  Fall = "Fall",
  Winter = "Winter",
  Any = "Any"
}

export enum categoryType {
  Crops = "Crops",
  Forage = "Forage",
  Fruit = "Fruit",
  AnimalProducts = "Animal Products",
  ArtisanGoods = "Artisan Goods",
  Miscellaneous = "Miscellaneous",
  Fish = "Fish",
  CrabPot = "Crab Pot",
  General = "General",
  Dishes = "Dishes"
}

export interface Ingredient {
  name: string;
  imageUrl: string;
  collected: boolean;
  category: categoryType;
  seasons: seasonType[];
  addedBy: string;
  recipeCooked: boolean;
  quantity: number;
}

export class BaseIngredient {
  collected = false;
  addedBy;
  recipeCooked = false;
  quantity = 1;
  constructor(recipe: string, needed?: number) {
    this.addedBy = recipe;
    if (needed) {this.quantity = needed}
  }
}

// CROPS

export class Parsnip extends BaseIngredient implements Ingredient  {
  name = "Parsnip";
  imageUrl = "../assets/ingredients/parsnip.png";
  category = categoryType.Crops;
  seasons = [seasonType.Spring];
}

export class Kale extends BaseIngredient implements Ingredient  {
  name = "Kale";
  imageUrl = "../assets/ingredients/kale.png";
  category = categoryType.Crops;
  seasons = [seasonType.Spring];
}

export class Potato extends BaseIngredient implements Ingredient  {
  name = "Potato";
  imageUrl = "../assets/ingredients/potato.png";
  category = categoryType.Crops;
  seasons = [seasonType.Spring];
}

export class BlueJazz extends BaseIngredient implements Ingredient  {
  name = "Blue Jazz";
  imageUrl = "../assets/ingredients/blue_jazz.png";
  category = categoryType.Crops;
  seasons = [seasonType.Spring];
}

export class GreenBean extends BaseIngredient implements Ingredient  {
  name = "Green Bean";
  imageUrl = "../assets/ingredients/green_bean.png";
  category = categoryType.Crops;
  seasons = [seasonType.Spring];
}

export class Cauliflower extends BaseIngredient implements Ingredient  {
  name = "Cauliflower";
  imageUrl = "../assets/ingredients/cauliflower.png";
  category = categoryType.Crops;
  seasons = [seasonType.Spring];
}

export class Rhubarb extends BaseIngredient implements Ingredient  {
  name = "Rhubarb";
  imageUrl = "../assets/ingredients/rhubarb.png";
  category = categoryType.Crops;
  seasons = [seasonType.Spring];
}

export class Garlic extends BaseIngredient implements Ingredient  {
  name = "Garlic";
  imageUrl = "../assets/ingredients/garlic.png";
  category = categoryType.Crops;
  seasons = [seasonType.Spring];
}

export class HotPepper extends BaseIngredient implements Ingredient  {
  name = "Hot Pepper";
  imageUrl = "../assets/ingredients/hot_pepper.png";
  category = categoryType.Crops;
  seasons = [seasonType.Summer];
}

export class Radish extends BaseIngredient implements Ingredient  {
  name = "Radish";
  imageUrl = "../assets/ingredients/radish.png";
  category = categoryType.Crops;
  seasons = [seasonType.Summer];
}

export class Poppy extends BaseIngredient implements Ingredient  {
  name = "Poppy";
  imageUrl = "../assets/ingredients/poppy.png";
  category = categoryType.Crops;
  seasons = [seasonType.Summer];
}

export class Tomato extends BaseIngredient implements Ingredient  {
  name = "Tomato";
  imageUrl = "../assets/ingredients/tomato.png";
  category = categoryType.Crops;
  seasons = [seasonType.Summer];
}

export class Melon extends BaseIngredient implements Ingredient  {
  name = "Melon";
  imageUrl = "../assets/ingredients/melon.png";
  category = categoryType.Crops;
  seasons = [seasonType.Summer];
}

export class Blueberry extends BaseIngredient implements Ingredient  {
  name = "Blueberry";
  imageUrl = "../assets/ingredients/blueberry.png";
  category = categoryType.Crops;
  seasons = [seasonType.Summer];
}

export class Corn extends BaseIngredient implements Ingredient  {
  name = "Corn";
  imageUrl = "../assets/ingredients/corn.png";
  category = categoryType.Crops;
  seasons = [seasonType.Summer, seasonType.Fall];
}

export class RedCabbage extends BaseIngredient implements Ingredient  {
  name = "Red Cabbage";
  imageUrl = "../assets/ingredients/red_cabbage.png";
  category = categoryType.Crops;
  seasons = [seasonType.Summer];
}

export class BokChoy extends BaseIngredient implements Ingredient  {
  name = "Bok Choy";
  imageUrl = "../assets/ingredients/bok_choy.png";
  category = categoryType.Crops;
  seasons = [seasonType.Fall];
}

export class Eggplant extends BaseIngredient implements Ingredient  {
  name = "Eggplant";
  imageUrl = "../assets/ingredients/eggplant.png";
  category = categoryType.Crops;
  seasons = [seasonType.Fall];
}

export class Amaranth extends BaseIngredient implements Ingredient  {
  name = "Amaranth";
  imageUrl = "../assets/ingredients/amaranth.png";
  category = categoryType.Crops;
  seasons = [seasonType.Fall];
}

export class Cranberries extends BaseIngredient implements Ingredient  {
  name = "Cranberries";
  imageUrl = "../assets/ingredients/cranberries.png";
  category = categoryType.Crops;
  seasons = [seasonType.Fall];
}

export class Yam extends BaseIngredient implements Ingredient  {
  name = "Yam";
  imageUrl = "../assets/ingredients/yam.png";
  category = categoryType.Crops;
  seasons = [seasonType.Fall];
}

export class Pumpkin extends BaseIngredient implements Ingredient  {
  name = "Pumpkin";
  imageUrl = "../assets/ingredients/pumpkin.png";
  category = categoryType.Crops;
  seasons = [seasonType.Fall];
}

export class Beet extends BaseIngredient implements Ingredient  {
  name = "Beet";
  imageUrl = "../assets/ingredients/beet.png";
  category = categoryType.Crops;
  seasons = [seasonType.Fall];
}

export class Artichoke extends BaseIngredient implements Ingredient  {
  name = "Artichoke";
  imageUrl = "../assets/ingredients/artichoke.png";
  category = categoryType.Crops;
  seasons = [seasonType.Fall];
}

export class Pineapple extends BaseIngredient implements Ingredient  {
  name = "Pineapple";
  imageUrl = "../assets/ingredients/pineapple.png";
  category = categoryType.Crops;
  seasons = [seasonType.Summer];
}

export class TaroRoot extends BaseIngredient implements Ingredient  {
  name = "Taro Root";
  imageUrl = "../assets/ingredients/taro_root.png";
  category = categoryType.Crops;
  seasons = [seasonType.Summer];
}

// FORAGE

export class Blackberry extends BaseIngredient implements Ingredient  {
  name = "Blackberry";
  imageUrl = "../assets/ingredients/blackberry.png";
  category = categoryType.Forage;
  seasons = [seasonType.Fall];
}

export class CaveCarrot extends BaseIngredient implements Ingredient  {
  name = "Cave Carrot";
  imageUrl = "../assets/ingredients/cave_carrot.png";
  category = categoryType.Forage;
  seasons = [seasonType.Any];
}

export class CommonMushroom extends BaseIngredient implements Ingredient  {
  name = "Common Mushroom";
  imageUrl = "../assets/ingredients/common_mushroom.png";
  category = categoryType.Forage;
  seasons = [seasonType.Spring, seasonType.Fall];
}

export class Dandelion extends BaseIngredient implements Ingredient  {
  name = "Dandelion";
  imageUrl = "../assets/ingredients/dandelion.png";
  category = categoryType.Forage;
  seasons = [seasonType.Spring];
}

export class Coconut extends BaseIngredient implements Ingredient  {
  name = "Coconut";
  imageUrl = "../assets/ingredients/coconut.png";
  category = categoryType.Forage;
  seasons = [seasonType.Any];
}

export class FiddleheadFern extends BaseIngredient implements Ingredient  {
  name = "FiddleheadFern";
  imageUrl = "../assets/ingredients/fiddlehead_fern.png";
  category = categoryType.Forage;
  seasons = [seasonType.Summer];
}

export class Hazelnut extends BaseIngredient implements Ingredient  {
  name = "Hazelnut";
  imageUrl = "../assets/ingredients/hazelnut.png";
  category = categoryType.Forage;
  seasons = [seasonType.Fall];
}

export class WildHorseradish extends BaseIngredient implements Ingredient  {
  name = "Wild Horseradish";
  imageUrl = "../assets/ingredients/wild_horseradish.png";
  category = categoryType.Forage;
  seasons = [seasonType.Spring];
}

export class Leek extends BaseIngredient implements Ingredient  {
  name = "Leek";
  imageUrl = "../assets/ingredients/leek.png";
  category = categoryType.Forage;
  seasons = [seasonType.Spring];
}

export class Morel extends BaseIngredient implements Ingredient  {
  name = "Morel";
  imageUrl = "../assets/ingredients/morel.png";
  category = categoryType.Forage;
  seasons = [seasonType.Spring];
}

export class WildPlum extends BaseIngredient implements Ingredient  {
  name = "Wild Plum";
  imageUrl = "../assets/ingredients/wild_plum.png";
  category = categoryType.Forage;
  seasons = [seasonType.Fall];
}

export class WinterRoot extends BaseIngredient implements Ingredient  {
  name = "WinterRoot";
  imageUrl = "../assets/ingredients/winter_root.png";
  category = categoryType.Forage;
  seasons = [seasonType.Winter];
}

export class Ginger extends BaseIngredient implements Ingredient  {
  name = "Ginger";
  imageUrl = "../assets/ingredients/ginger.png";
  category = categoryType.Forage;
  seasons = [seasonType.Any];
}

// TREE FRUIT

export class Apple extends BaseIngredient implements Ingredient  {
  name = "Apple";
  imageUrl = "../assets/ingredients/apple.png";
  category = categoryType.Fruit;
  seasons = [seasonType.Fall];
}

export class Apricot extends BaseIngredient implements Ingredient  {
  name = "Apricot";
  imageUrl = "../assets/ingredients/apricot.png";
  category = categoryType.Fruit;
  seasons = [seasonType.Spring];
}

export class Banana extends BaseIngredient implements Ingredient  {
  name = "Banana";
  imageUrl = "../assets/ingredients/banana.png";
  category = categoryType.Fruit;
  seasons = [seasonType.Summer];
}

export class Mango extends BaseIngredient implements Ingredient  {
  name = "Mango";
  imageUrl = "../assets/ingredients/mango.png";
  category = categoryType.Fruit;
  seasons = [seasonType.Summer];
}

// ANIMAL PRODUCTS

export class Egg extends BaseIngredient implements Ingredient  {
  name = "Egg";
  imageUrl = "../assets/ingredients/egg.png";
  category = categoryType.AnimalProducts;
  seasons = [seasonType.Any];
}

export class Milk extends BaseIngredient implements Ingredient  {
  name = "Milk"
  imageUrl = "../assets/ingredients/milk.png";
  category = categoryType.AnimalProducts;
  seasons = [seasonType.Any];
}

// ARTISAN GOODS

export class Cheese extends BaseIngredient implements Ingredient  {
  name = "Cheese"
  imageUrl = "../assets/ingredients/cheese.png";
  category = categoryType.ArtisanGoods;
  seasons = [seasonType.Any];
}

export class Mayonnaise extends BaseIngredient implements Ingredient  {
  name = "Mayonnaise"
  imageUrl = "../assets/ingredients/mayonnaise.png";
  category = categoryType.ArtisanGoods;
  seasons = [seasonType.Any];
}

export class VoidMayonnaise extends BaseIngredient implements Ingredient  {
  name = "Void Mayonnaise"
  imageUrl = "../assets/ingredients/void_mayonnaise.png";
  category = categoryType.ArtisanGoods;
  seasons = [seasonType.Any];
}

export class Coffee extends BaseIngredient implements Ingredient  {
  name = "Coffee"
  imageUrl = "../assets/ingredients/coffee.png";
  category = categoryType.ArtisanGoods;
  seasons = [seasonType.Any];
}

// MISCELLANEOUS

export class MapleSyrup extends BaseIngredient implements Ingredient  {
  name = "Maple Syrup"
  imageUrl = "../assets/ingredients/maple_syrup.png";
  category = categoryType.Miscellaneous;
  seasons = [seasonType.Any];
}

export class SquidInk extends BaseIngredient implements Ingredient  {
  name = "Squid Ink"
  imageUrl = "../assets/ingredients/squid_ink.png";
  category = categoryType.Miscellaneous;
  seasons = [seasonType.Any];
}

export class Moss extends BaseIngredient implements Ingredient  {
  name = "Moss"
  imageUrl = "../assets/ingredients/moss.png";
  category = categoryType.Miscellaneous;
  seasons = [seasonType.Any];
}

// FISH

export class Tuna extends BaseIngredient implements Ingredient  {
  name = "Tuna"
  imageUrl = "../assets/ingredients/tuna.png";
  category = categoryType.Fish;
  seasons = [seasonType.Summer, seasonType.Winter];
}

export class Sardine extends BaseIngredient implements Ingredient  {
  name = "Sardine"
  imageUrl = "../assets/ingredients/sardine.png";
  category = categoryType.Fish;
  seasons = [seasonType.Spring, seasonType.Fall, seasonType.Winter];
}

export class Bream extends BaseIngredient implements Ingredient  {
  name = "Bream"
  imageUrl = "../assets/ingredients/bream.png";
  category = categoryType.Fish;
  seasons = [seasonType.Any];
}

export class LargemouthBass extends BaseIngredient implements Ingredient  {
  name = "Largemouth Bass"
  imageUrl = "../assets/ingredients/largemouth_bass.png";
  category = categoryType.Fish;
  seasons = [seasonType.Any];
}

export class RainbowTrout extends BaseIngredient implements Ingredient  {
  name = "Rainbow Trout"
  imageUrl = "../assets/ingredients/rainbow_trout.png";
  category = categoryType.Fish;
  seasons = [seasonType.Summer];
}

export class Salmon extends BaseIngredient implements Ingredient  {
  name = "Salmon"
  imageUrl = "../assets/ingredients/salmon.png";
  category = categoryType.Fish;
  seasons = [seasonType.Fall];
}

export class Flounder extends BaseIngredient implements Ingredient  {
  name = "Flounder"
  imageUrl = "../assets/ingredients/flounder.png";
  category = categoryType.Fish;
  seasons = [seasonType.Spring, seasonType.Summer];
}

export class MidnightCarp extends BaseIngredient implements Ingredient  {
  name = "Midnight Carp"
  imageUrl = "../assets/ingredients/midnight_carp.png";
  category = categoryType.Fish;
  seasons = [seasonType.Fall, seasonType.Winter];
}

export class Carp extends BaseIngredient implements Ingredient  {
  name = "Carp"
  imageUrl = "../assets/ingredients/carp.png";
  category = categoryType.Fish;
  seasons = [seasonType.Any];
}

export class Sunfish extends BaseIngredient implements Ingredient  {
  name = "Sunfish"
  imageUrl = "../assets/ingredients/sunfish.png";
  category = categoryType.Fish;
  seasons = [seasonType.Spring, seasonType.Summer];
}

export class Eel extends BaseIngredient implements Ingredient  {
  name = "Eel"
  imageUrl = "../assets/ingredients/eel.png";
  category = categoryType.Fish;
  seasons = [seasonType.Spring, seasonType.Fall];
}

export class Squid extends BaseIngredient implements Ingredient  {
  name = "Squid"
  imageUrl = "../assets/ingredients/squid.png";
  category = categoryType.Fish;
  seasons = [seasonType.Winter];
}

export class SeaCucumber extends BaseIngredient implements Ingredient  {
  name = "Sea Cucumber"
  imageUrl = "../assets/ingredients/sea_cucumber.png";
  category = categoryType.Fish;
  seasons = [seasonType.Fall, seasonType.Winter];
}

export class Fish extends BaseIngredient implements Ingredient  {
  name = "Fish (any)"
  imageUrl = "../assets/ingredients/fish.png";
  category = categoryType.Fish;
  seasons = [seasonType.Any];
}

export class Seaweed extends BaseIngredient implements Ingredient  {
  name = "Seaweed"
  imageUrl = "../assets/ingredients/seaweed.png";
  category = categoryType.Fish;
  seasons = [seasonType.Any];
}

export class GreenAlgae extends BaseIngredient implements Ingredient  {
  name = "Green Algae"
  imageUrl = "../assets/ingredients/green_algae.png";
  category = categoryType.Fish;
  seasons = [seasonType.Any];
}

export class WhiteAlgae extends BaseIngredient implements Ingredient  {
  name = "White Algae"
  imageUrl = "../assets/ingredients/white_algae.png";
  category = categoryType.Fish;
  seasons = [seasonType.Any];
}

// CRAB POT

export class Lobster extends BaseIngredient implements Ingredient  {
  name = "Lobster"
  imageUrl = "../assets/ingredients/lobster.png";
  category = categoryType.CrabPot;
  seasons = [seasonType.Any];
}

export class Clam extends BaseIngredient implements Ingredient  {
  name = "Clam"
  imageUrl = "../assets/ingredients/clam.png";
  category = categoryType.CrabPot;
  seasons = [seasonType.Any];
}

export class Crayfish extends BaseIngredient implements Ingredient  {
  name = "Crayfish"
  imageUrl = "../assets/ingredients/crayfish.png";
  category = categoryType.CrabPot;
  seasons = [seasonType.Any];
}

export class Crab extends BaseIngredient implements Ingredient  {
  name = "Crab"
  imageUrl = "../assets/ingredients/crab.png";
  category = categoryType.CrabPot;
  seasons = [seasonType.Any];
}

export class Mussel extends BaseIngredient implements Ingredient  {
  name = "Mussel"
  imageUrl = "../assets/ingredients/mussel.png";
  category = categoryType.CrabPot;
  seasons = [seasonType.Any];
}

export class Shrimp extends BaseIngredient implements Ingredient  {
  name = "Shrimp"
  imageUrl = "../assets/ingredients/shrimp.png";
  category = categoryType.CrabPot;
  seasons = [seasonType.Any];
}

export class Snail extends BaseIngredient implements Ingredient  {
  name = "Snail"
  imageUrl = "../assets/ingredients/snail.png";
  category = categoryType.CrabPot;
  seasons = [seasonType.Any];
}

export class Periwinkle extends BaseIngredient implements Ingredient  {
  name = "Periwinkle"
  imageUrl = "../assets/ingredients/periwinkle.png";
  category = categoryType.CrabPot;
  seasons = [seasonType.Any];
}

// GENERAL

export class Sugar extends BaseIngredient implements Ingredient  {
  name = "Sugar"
  imageUrl = "../assets/ingredients/sugar.png";
  category = categoryType.General;
  seasons = [seasonType.Any];
}

export class WheatFlour extends BaseIngredient implements Ingredient  {
  name = "Wheat Flour"
  imageUrl = "../assets/ingredients/wheat_flour.png";
  category = categoryType.General;
  seasons = [seasonType.Any];
}

export class Rice extends BaseIngredient implements Ingredient  {
  name = "Rice"
  imageUrl = "../assets/ingredients/rice.png";
  category = categoryType.General;
  seasons = [seasonType.Any];
}

export class Oil extends BaseIngredient implements Ingredient  {
  name = "Oil"
  imageUrl = "../assets/ingredients/oil.png";
  category = categoryType.General;
  seasons = [seasonType.Any];
}

export class Vinegar extends BaseIngredient implements Ingredient  {
  name = "Vinegar"
  imageUrl = "../assets/ingredients/vinegar.png";
  category = categoryType.General;
  seasons = [seasonType.Any];
}

// DISHES

export class FriedEgg extends BaseIngredient implements Ingredient  {
  name = "Fried Egg"
  imageUrl = "../assets/recipes/fried_egg.png";
  category = categoryType.Dishes;
  seasons = [seasonType.Any];
}

export class Hashbrowns extends BaseIngredient implements Ingredient  {
  name = "Hashbrowns"
  imageUrl = "../assets/recipes/hashbrowns.png";
  category = categoryType.Dishes;
  seasons = [seasonType.Any];
}

export class Pancakes extends BaseIngredient implements Ingredient  {
  name = "Pancakes"
  imageUrl = "../assets/recipes/pancakes.png";
  category = categoryType.Dishes;
  seasons = [seasonType.Any];
}

export class Tortilla extends BaseIngredient implements Ingredient  {
  name = "Tortilla"
  imageUrl = "../assets/recipes/tortilla.png";
  category = categoryType.Dishes;
  seasons = [seasonType.Any];
}

export class Bread extends BaseIngredient implements Ingredient  {
  name = "Bread"
  imageUrl = "../assets/recipes/bread.png";
  category = categoryType.Dishes;
  seasons = [seasonType.Any];
}

export class Omelet extends BaseIngredient implements Ingredient  {
  name = "Omelet"
  imageUrl = "../assets/recipes/omelet.png";
  category = categoryType.Dishes;
  seasons = [seasonType.Any];
}
