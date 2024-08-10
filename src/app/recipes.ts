import { Amaranth, Apple, Apricot, Artichoke, Banana, Beet, Blackberry, Blueberry, BlueJazz, BokChoy, Bread, Bream, Carp, Cauliflower, CaveCarrot, Cheese, Clam, Coconut, Coffee, CommonMushroom, Corn, Crab, Cranberries, Crayfish, Dandelion, Eel, Egg, Eggplant, FiddleheadFern, Fish, Flounder, FriedEgg, Garlic, Ginger, GreenAlgae, GreenBean, Hashbrowns, Hazelnut, HotPepper, Ingredient, Kale, LargemouthBass, Leek, Lobster, Mango, MapleSyrup, Mayonnaise, Melon, MidnightCarp, Milk, Morel, Moss, Mussel, Oil, Omelet, Pancakes, Parsnip, Periwinkle, Pineapple, Poppy, Potato, Pumpkin, Radish, RainbowTrout, RedCabbage, Rhubarb, Rice, Salmon, Sardine, SeaCucumber, Seaweed, Shrimp, Snail, Squid, SquidInk, Sugar, Sunfish, TaroRoot, Tomato, Tortilla, Tuna, Vinegar, VoidMayonnaise, WheatFlour, WhiteAlgae, WildHorseradish, WildPlum, WinterRoot, Yam } from "./ingredients";

export interface Recipe {
  name: string;
  imageUrl: string;
  cooked: boolean;
  learned: boolean;
  ingredients: Ingredient[];
  source: string;
}

export const ALLRECIPES: Recipe[] = [
  {
    name: "Fried Egg", 
    imageUrl: "/assets/recipes/fried_egg.png", 
    cooked: false, 
    learned: false, 
    ingredients: [new Egg("Fried Egg")],
    source: "Starter" 
  },
  { 
    name: "Omelet",
    imageUrl: "/assets/recipes/omelet.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Egg("Omelet"),
      new Milk("Omelet")],
    source: "The Queen of Sauce, 28 Spring, Year 1, or Stardrop Saloon for 100g" 
  },
  { 
    name: "Salad",
    imageUrl: "/assets/recipes/salad.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Leek("Salad"),
      new Dandelion("Salad"),
      new Vinegar("Salad")
    ],
    source: "Emily (Mail - 3+ hearts)" 
  },
  { 
    name: "Cheese Cauliflower",
    imageUrl: "/assets/recipes/cheese_cauliflower.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Cauliflower("Cheese Cauliflower"),
      new Cheese("Cheese Cauliflower"),
    ],
    source: "Pam (Mail - 3+ hearts)" 
  },
  { 
    name: "Baked Fish",
    imageUrl: "/assets/recipes/baked_fish.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Sunfish("Baked Fish"),
      new Bream("Baked Fish"),
      new WheatFlour("Baked Fish"),
    ],
    source: "The Queen of Sauce, 7 Summer, Year 1" 
  },
  { 
    name: "Parsnip Soup",
    imageUrl: "/assets/recipes/parsnip_soup.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Parsnip("Parsnip Soup"),
      new Milk("Parsnip Soup"),
      new Vinegar("Parsnip Soup")
    ],
    source: "Caroline (Mail - 3+ hearts)" 
  },
  { 
    name: "Vegetable Medley",
    imageUrl: "/assets/recipes/vegetable_medley.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Tomato("Vegetable Medley"),
      new Beet("Vegetable Medley")
    ],
    source: "Caroline (Mail - 7+ hearts)" 
  },
  { 
    name: "Complete Breakfast",
    imageUrl: "/assets/recipes/complete_breakfast.png",
    cooked: false,
    learned: false,
    ingredients: [
      new FriedEgg("Complete Breakfast"),
      new Milk("Complete Breakfast"),
      new Hashbrowns("Complete Breakfast"),
      new Pancakes("Complete Breakfast")
    ],
    source: "The Queen of Sauce, 21 Spring, Year 2" 
  },
  { 
    name: "Fried Calamari",
    imageUrl: "/assets/recipes/fried_calamari.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Squid("Fried Calamari"),
      new WheatFlour("Fried Calamari"),
      new Oil("Fried Calamari"),
    ],
    source: "Jodi (Mail - 3+ hearts)" 
  },
  { 
    name: "Strange Bun",
    imageUrl: "/assets/recipes/strange_bun.png",
    cooked: false,
    learned: false,
    ingredients: [
      new WheatFlour("Strange Bun"),
      new Periwinkle("Strange Bun"),
      new VoidMayonnaise("Strange Bun"),
    ],
    source: "Shane (Mail - 7+ hearts)" 
  },
  { 
    name: "Lucky Lunch",
    imageUrl: "/assets/recipes/lucky_lunch.png",
    cooked: false,
    learned: false,
    ingredients: [
      new SeaCucumber("Lucky Lunch"),
      new Tortilla("Lucky Lunch"),
      new BlueJazz("Lucky Lunch"),
    ],
    source: "The Queen of Sauce, 28 Spring, Year 2" 
  },
  { 
    name: "Fried Mushroom",
    imageUrl: "/assets/recipes/fried_mushroom.png",
    cooked: false,
    learned: false,
    ingredients: [
      new CommonMushroom("Fried Mushroom"),
      new Morel("Fried Mushroom"),
      new Oil("Fried Mushroom"),
    ],
    source: "Demetrius (Mail - 3+ hearts)" 
  },
  { 
    name: "Pizza",
    imageUrl: "/assets/recipes/pizza.png",
    cooked: false,
    learned: false,
    ingredients: [
      new WheatFlour("Pizza"),
      new Tomato("Pizza"),
      new Cheese("Pizza"),
    ],
    source: "The Queen of Sauce, 7 Spring, Year 2, or Stardrop Saloon for 150g" 
  },
  { 
    name: "Bean Hotpot",
    imageUrl: "/assets/recipes/bean_hotpot.png",
    cooked: false,
    learned: false,
    ingredients: [
      new GreenBean("Bean Hotpot", 2),
    ],
    source: "Clint (Mail - 7+ hearts)" 
  },
  { 
    name: "Glazed Yams",
    imageUrl: "/assets/recipes/glazed_yams.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Yam("Glazed Yams"),
      new Sugar("Glazed Yams"),
    ],
    source: "The Queen of Sauce, 21 Fall, Year 1" 
  },
  { 
    name: "Carp Surprise",
    imageUrl: "/assets/recipes/carp_surprise.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Carp("Carp Surprise", 4)
    ],
    source: "The Queen of Sauce, 7 Summer, Year 2" 
  },
  { 
    name: "Hashbrowns",
    imageUrl: "/assets/recipes/hashbrowns.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Potato("Hashbrowns"),
      new Oil("Hashbrowns")
    ],
    source: "The Queen of Sauce, 14 Spring, Year 2, or Stardrop Saloon for 50g" 
  },
  { 
    name: "Pancakes",
    imageUrl: "/assets/recipes/pancakes.png",
    cooked: false,
    learned: false,
    ingredients: [
      new WheatFlour("Pancakes"),
      new Egg("Pancakes"),
    ],
    source: "The Queen of Sauce, 14 Summer, Year 1, or Stardrop Saloon for 100g" 
  },
  { 
    name: "Salmon Dinner",
    imageUrl: "/assets/recipes/salmon_dinner.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Salmon("Salmon Dinner"),
      new Amaranth("Salmon Dinner"),
      new Kale("Salmon Dinner"),
    ],
    source: "Gus (Mail - 3+ hearts)" 
  },
  { 
    name: "Fish Taco",
    imageUrl: "/assets/recipes/fish_taco.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Tuna("Fish Taco"),
      new Tortilla("Fish Taco"),
      new RedCabbage("Fish Taco"),
      new Mayonnaise("Fish Taco")
    ],
    source: "Linus (Mail - 7+ hearts)" 
  },
  { 
    name: "Crispy Bass",
    imageUrl: "/assets/recipes/crispy_bass.png",
    cooked: false,
    learned: false,
    ingredients: [
      new LargemouthBass("Crispy Bass"),
      new WheatFlour("Crispy Bass"),
      new Oil("Crispy Bass"),
    ],
    source: "Kent (Mail - 3+ hearts)" 
  },

  { 
    name: "Pepper Poppers",
    imageUrl: "/assets/recipes/pepper_poppers.png",
    cooked: false,
    learned: false,
    ingredients: [
      new HotPepper("Pepper Poppers"),
      new Cheese("Pepper Poppers"),
    ],
    source: "Shane (Mail - 3+ hearts)"
  },
  { 
    name: "Bread",
    imageUrl: "/assets/recipes/bread.png",
    cooked: false,
    learned: false,
    ingredients: [
      new WheatFlour("Bread"),
    ],
    source: "The Queen of Sauce, 28 Summer, Year 1, or Stardrop Saloon for 100g" 
  },
  { 
    name: "Tom Kha Soup",
    imageUrl: "/assets/recipes/tom_kha_soup.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Coconut("Tom Kha Soup"),
      new Shrimp("Tom Kha Soup"),
      new CommonMushroom("Tom Kha Soup"),
    ],
    source: "Sandy (Mail - 7+ hearts)"
  },
  { 
    name: "Trout Soup",
    imageUrl: "/assets/recipes/trout_soup.png",
    cooked: false,
    learned: false,
    ingredients: [
      new RainbowTrout("Trout Soup"),
      new GreenAlgae("Trout Soup"),
    ],
    source: "The Queen of Sauce, 14 Fall, Year 1" 
  },
  { 
    name: "Chocolate Cake",
    imageUrl: "/assets/recipes/chocolate_cake.png",
    cooked: false,
    learned: false,
    ingredients: [
      new WheatFlour("Chocolate Cake"),
      new Sugar("Chocolate Cake"),
      new Egg("Chocolate Cake"),
    ],
    source: "The Queen of Sauce, 14 Winter, Year 1"
  },
  { 
    name: "Pink Cake",
    imageUrl: "/assets/recipes/pink_cake.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Melon("Pink Cake"),
      new WheatFlour("Pink Cake"),
      new Sugar("Pink Cake"),
      new Egg("Pink Cake"),
    ],
    source: "The Queen of Sauce, 21 Summer, Year 2"
  },
  { 
    name: "Rhubarb Pie",
    imageUrl: "/assets/recipes/rhubarb_pie.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Rhubarb("Rhubarb Pie"),
      new WheatFlour("Rhubarb Pie"),
      new Sugar("Rhubarb Pie"),
   
    ],
    source: "Marnie (Mail - 7+ hearts)"
  },
  { 
    name: "Cookie",
    imageUrl: "/assets/recipes/cookie.png",
    cooked: false,
    learned: false,
    ingredients: [
      new WheatFlour("Cookie"),
      new Sugar("Cookie"),
      new Egg("Cookie"),
    ],
    source: "Evelyn (4-heart event)"
  },
  { 
    name: "Spaghetti",
    imageUrl: "/assets/recipes/spaghetti.png",
    cooked: false,
    learned: false,
    ingredients: [
      new WheatFlour("Spaghetti"),
      new Tomato("Cookie")
    ],
    source: "Lewis (Mail - 3+ hearts)"
  },
  { 
    name: "Fried Eel",
    imageUrl: "/assets/recipes/fried_eel.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Eel("Fried Eel"),
      new Oil("Fried Eel"),
    ],
    source: "George (Mail - 3+ hearts)"
  },
  { 
    name: "Spicy Eel",
    imageUrl: "/assets/recipes/spicy_eel.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Eel("Spicy Eel"),
      new HotPepper("Spicy Eel"),
    ],
    source: "George (Mail - 7+ hearts)"
  },
  { 
    name: "Sashimi",
    imageUrl: "/assets/recipes/sashimi.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Fish("Sashimi"),
    ],
    source: "Linus (Mail - 3+ hearts)"
  },
  { 
    name: "Maki Roll",
    imageUrl: "/assets/recipes/maki_roll.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Fish("Maki Roll"),
      new Seaweed("Maki Roll"),
      new Rice("Maki Roll"),
    ],
    source: "The Queen of Sauce, 21 Summer, Year 1 or Stardrop Saloon for 300g"
  },
  { 
    name: "Tortilla",
    imageUrl: "/assets/recipes/tortilla.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Corn("Tortilla")
    ],
    source: "The Queen of Sauce, 7 Fall, Year 1 or Stardrop Saloon for 100g"
  },
  { 
    name: "Red Plate",
    imageUrl: "/assets/recipes/red_plate.png",
    cooked: false,
    learned: false,
    ingredients: [
      new RedCabbage("Red Plate"),
      new Radish("Red Plate")
    ],
    source: "Emily (Mail - 7+ hearts)"
  },
  { 
    name: "Eggplant Parmesan",
    imageUrl: "/assets/recipes/eggplant_parmesan.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Eggplant("Eggplant Parmesan"),
      new Tomato("Eggplant Parmesan"),
    ],
    source: "Lewis (Mail - 7+ hearts)"
  },
  { 
    name: "Rice Pudding",
    imageUrl: "/assets/recipes/rice_pudding.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Milk("Rice Pudding"),
      new Sugar("Rice Pudding"),
      new Rice("Rice Pudding"),
    ],
    source: "Evelyn (Mail - 7+ hearts)"
  },
  { 
    name: "Ice Cream",
    imageUrl: "/assets/recipes/ice_cream.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Milk("Ice Cream"),
      new Sugar("Ice Cream")
    ],
    source: "Jodi (Mail - 7+ hearts)"
  },
  { 
    name: "Blueberry Tart",
    imageUrl: "/assets/recipes/blueberry_tart.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Blueberry("Blueberry Tart"),
      new WheatFlour("Blueberry Tart"),
      new Sugar("Blueberry Tart"),
      new Egg("Blueberry Tart"),
    ],
    source: "Pierre (Mail - 3+ hearts)"
  },
  { 
    name: "Autumn's Bounty",
    imageUrl: "/assets/recipes/autumns_bounty.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Yam("Autumn's Bounty"),
      new Pumpkin("Autumn's Bounty"),
    ],
    source: "Demetrius (Mail - 7+ hearts)"
  },
  { 
    name: "Pumpkin Soup",
    imageUrl: "/assets/recipes/pumpkin_soup.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Pumpkin("Pumpkin Soup"),
      new Milk("Pumpkin Soup"),
    ],
    source: "Robin (Mail - 7+ hearts)"
  },
  { 
    name: "Super Meal",
    imageUrl: "/assets/recipes/super_meal.png",
    cooked: false,
    learned: false,
    ingredients: [
      new BokChoy("Super Meal"),
      new Cranberries("Super Meal"),
      new Artichoke("Super Meal"),
    ],
    source: "Kent (Mail - 7+ hearts)"
  },
  { 
    name: "Cranberry Sauce",
    imageUrl: "/assets/recipes/cranberry_sauce.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Cranberries("Cranberry Sauce"),
      new Sugar("Cranberry Sauce"),
    ],
    source: "Gus (Mail - 7+ hearts)"
  },
  { 
    name: "Stuffing",
    imageUrl: "/assets/recipes/stuffing.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Bread("Stuffing"),
      new Cranberries("Stuffing"),
      new Hazelnut("Stuffing"),
    ],
    source: "Pam (Mail - 7+ hearts)"
  },
  { 
    name: "Farmer's Lunch",
    imageUrl: "/assets/recipes/farmers_lunch.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Omelet("Farmer's Lunch"),
      new Parsnip("Farmer's Lunch"),
    ],
    source: "Farming Level 3"
  },
  { 
    name: "Survival Burger",
    imageUrl: "/assets/recipes/survival_burger.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Bread("Survival Burger"),
      new CaveCarrot("Survival Burger"),
      new Eggplant("Survival Burger"),
    ],
    source: "Foraging Level 8"
  },
  { 
    name: "Dish O' The Sea",
    imageUrl: "/assets/recipes/dish_o_the_sea.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Sardine("Dish O' The Sea", 2),
      new Hashbrowns("Dish O' The Sea"),
    ],
    source: "Fishing Level 3"
  },
  { 
    name: "Miner's Treat",
    imageUrl: "/assets/recipes/miners_treat.png",
    cooked: false,
    learned: false,
    ingredients: [
      new CaveCarrot("Miner's Treat"),
      new CaveCarrot("Miner's Treat"),
      new Sugar("Miner's Treat"),
      new Milk("Miner's Treat"),
    ],
    source: "Mining Level 3"
  },
  { 
    name: "Roots Platter",
    imageUrl: "/assets/recipes/roots_platter.png",
    cooked: false,
    learned: false,
    ingredients: [
      new CaveCarrot("Roots Platter"),
      new WinterRoot("Roots Platter"),
    ],
    source: "Combat Level 3"
  },
  { 
    name: "Triple Shot Espresso",
    imageUrl: "/assets/recipes/triple_shot_espresso.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Coffee("Triple Shot Espresso", 3)
    ],
    source: "Stardrop Saloon for 5,000g"
  },
  { 
    name: "Seafoam Pudding",
    imageUrl: "/assets/recipes/seafoam_pudding.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Flounder("Seafoam Pudding"),
      new MidnightCarp("Seafoam Pudding"),
      new SquidInk("Seafoam Pudding"),
    ],
    source: "Fishing (Level 9)"
  },
  { 
    name: "Algae Soup",
    imageUrl: "/assets/recipes/algae_soup.png",
    cooked: false,
    learned: false,
    ingredients: [
      new GreenAlgae("Algae Soup", 4)
    ],
    source: "Clint (Mail - 3+ hearts)"
  },
  { 
    name: "Pale Broth",
    imageUrl: "/assets/recipes/pale_broth.png",
    cooked: false,
    learned: false,
    ingredients: [
      new WhiteAlgae("Pale Broth", 2),
    ],
    source: "Marnie (Mail - 3+ hearts)" 
  },
  { 
    name: "Plum Pudding",
    imageUrl: "/assets/recipes/plum_pudding.png",
    cooked: false,
    learned: false,
    ingredients: [
      new WildPlum("Plum Pudding"),
      new WildPlum("Plum Pudding"),
      new WheatFlour("Plum Pudding"),
      new Sugar("Plum Pudding"),
    ],
    source: "The Queen of Sauce, 7 Winter, Year 1" 
  },
  { 
    name: "Artichoke Dip",
    imageUrl: "/assets/recipes/artichoke_dip.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Artichoke("Artichoke Dip"),
      new Milk("Artichoke Dip"),
    ],
    source: "The Queen of Sauce, 28 Fall, Year 1" 
  },
  { 
    name: "Stir Fry",
    imageUrl: "/assets/recipes/stir_fry.png",
    cooked: false,
    learned: false,
    ingredients: [
      new CaveCarrot("Stir Fry"),
      new CommonMushroom("Stir Fry"),
      new Kale("Stir Fry"),
      new Oil("Stir Fry"),
    ],
    source: "	The Queen of Sauce, 7 Spring, Year 1" 
  },
  { 
    name: "Roasted Hazelnuts",
    imageUrl: "/assets/recipes/roasted_hazelnuts.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Hazelnut("Roasted Hazelnuts", 3)
    ],
    source: "	The Queen of Sauce, 28 Summer, Year 2" 
  },
  { 
    name: "Pumpkin Pie",
    imageUrl: "/assets/recipes/pumpkin_pie.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Pumpkin("Pumpkin Pie"),
      new WheatFlour("Pumpkin Pie"),
      new Milk("Pumpkin Pie"),
      new Sugar("Pumpkin Pie"),
    ],
    source: "	The Queen of Sauce, 21 Winter, Year 1" 
  },
  { 
    name: "Radish Salad",
    imageUrl: "/assets/recipes/radish_salad.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Oil("Radish Salad"),
      new Vinegar("Radish Salad"),
      new Radish("Radish Salad"),
    ],
    source: "	The Queen of Sauce, 21 Spring, Year 1" 
  },
  { 
    name: "Fruit Salad",
    imageUrl: "/assets/recipes/fruit_salad.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Blueberry("Fruit Salad"),
      new Melon("Fruit Salad"),
      new Apricot("Fruit Salad"),
    ],
    source: "	The Queen of Sauce, 7 Fall, Year 2" 
  },
  { 
    name: "Blackberry Cobbler",
    imageUrl: "/assets/recipes/blackberry_cobbler.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Blackberry("Blackberry Cobbler", 2),
      new Sugar("Blackberry Cobbler"),
      new WheatFlour("Blackberry Cobbler"),
    ],
    source: "	The Queen of Sauce, 14 Fall, Year 2" 
  },
  { 
    name: "Cranberry Candy",
    imageUrl: "/assets/recipes/cranberry_candy.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Cranberries("Cranberry Candy"),
      new Apple("Cranberry Candy"),
      new Sugar("Cranberry Candy"),
    ],
    source: "	The Queen of Sauce, 28 Winter, Year 1" 
  },
  { 
    name: "Bruschetta",
    imageUrl: "/assets/recipes/bruschetta.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Bread("Bruschetta"),
      new Oil("Bruschetta"),
      new Tomato("Bruschetta"),
    ],
    source: "	The Queen of Sauce, 21 Winter, Year 2" 
  },
  { 
    name: "Coleslaw",
    imageUrl: "/assets/recipes/coleslaw.png",
    cooked: false,
    learned: false,
    ingredients: [
      new RedCabbage("Coleslaw"),
      new Vinegar("Coleslaw"),
      new Mayonnaise("Coleslaw"),
    ],
    source: "The Queen of Sauce, 14 Spring, Year 1" 
  },
  { 
    name: "Fiddlehead Risotto",
    imageUrl: "/assets/recipes/fiddlehead_risotto.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Oil("Fiddlehead Risotto"),
      new FiddleheadFern("Fiddlehead Risotto"),
      new Garlic("Fiddlehead Risotto"),
    ],
    source: "The Queen of Sauce, 28 Fall, Year 2" 
  },
  { 
    name: "Poppyseed Muffin",
    imageUrl: "/assets/recipes/poppyseed_muffin.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Poppy("Poppyseed Muffin"),
      new WheatFlour("Poppyseed Muffin"),
      new Sugar("Poppyseed Muffin"),
    ],
    source: "The Queen of Sauce, 7 Winter, Year 2" 
  },
  { 
    name: "Chowder",
    imageUrl: "/assets/recipes/chowder.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Clam("Chowder"),
      new Milk("Chowder"),
    ],
    source: "Willy (Mail - 3+ hearts)" 
  },
  { 
    name: "Fish Stew",
    imageUrl: "/assets/recipes/fish_stew.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Crayfish("Fish Stew"),
      new Mussel("Fish Stew"),
      new Periwinkle("Fish Stew"),
      new Tomato("Fish Stew"),
    ],
    source: "Willy (Mail - 7+ hearts)" 
  },
  { 
    name: "Escargot",
    imageUrl: "/assets/recipes/escargot.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Snail("Escargot"),
      new Garlic("Escargot")
    ],
    source: "Willy (Mail - 5+ hearts)" 
  },
  { 
    name: "Lobster Bisque",
    imageUrl: "/assets/recipes/lobster_bisque.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Lobster("Lobster Bisque"),
      new Milk("Lobster Bisque"),
    ],
    source: "The Queen of Sauce, 14 Winter, Year 2, or  Willy (Mail - 9+ hearts)" 
  },
  { 
    name: "Maple Bar",
    imageUrl: "/assets/recipes/maple_bar.png",
    cooked: false,
    learned: false,
    ingredients: [
      new MapleSyrup("Maple Bar"),
      new Sugar("Maple Bar"),
      new WheatFlour("Maple Bar"),
    ],
    source: "The Queen of Sauce, 14 Summer, Year 2" 
  },
  { 
    name: "Crab Cakes",
    imageUrl: "/assets/recipes/crab_cakes.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Crab("Crab Cakes"),
      new WheatFlour("Crab Cakes"),
      new Egg("Crab Cakes"),
      new Oil("Crab Cakes"),
    ],
    source: "The Queen of Sauce, 21 Fall, Year 2" 
  },
  { 
    name: "Shrimp Cocktail",
    imageUrl: "/assets/recipes/shrimp_cocktail.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Tomato("Shrimp Cocktail"),
      new Shrimp("Shrimp Cocktail"),
      new WildHorseradish("Shrimp Cocktail"),
    ],
    source: "The Queen of Sauce, 28 Winter, Year 2" 
  },
  { 
    name: "Ginger Ale",
    imageUrl: "/assets/recipes/ginger_ale.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Ginger("Ginger Ale", 3),
      new Sugar("Ginger Ale")
    ],
    source: "Dwarf Shop in Volcano Dungeon for 1,000g" 
  },
  { 
    name: "Banana Pudding",
    imageUrl: "/assets/recipes/banana_pudding.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Banana("Banana Pudding"),
      new Milk("Banana Pudding"),
      new Sugar("Banana Pudding"),
    ],
    source: "Island Trader for 30 Bone Fragment" 
  },
  { 
    name: "Mango Sticky Rice",
    imageUrl: "/assets/recipes/mango_sticky_rice.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Mango("Mango Sticky Rice"),
      new Coconut("Mango Sticky Rice"),
      new Rice("Mango Sticky Rice"),
    ],
    source: "Leo (Mail - 7+ hearts)" 
  },
  { 
    name: "Poi",
    imageUrl: "/assets/recipes/poi.png",
    cooked: false,
    learned: false,
    ingredients: [
      new TaroRoot("Poi", 4)
    ],
    source: "Leo (Mail - 3+ hearts)" 
  },
  { 
    name: "Tropical Curry",
    imageUrl: "/assets/recipes/tropical_curry.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Coconut("Tropical Curry"),
      new Pineapple("Tropical Curry"),
      new HotPepper("Tropical Curry"),
    ],
    source: "Ginger Island Resort for 2,000g" 
  },
  { 
    name: "Squid Ink Ravioli",
    imageUrl: "/assets/recipes/squid_ink_ravioli.png",
    cooked: false,
    learned: false,
    ingredients: [
      new SquidInk("Squid Ink Ravioli"),
      new WheatFlour("Squid Ink Ravioli"),
      new Tomato("Squid Ink Ravioli"),
    ],
    source: "Combat Level 9" 
  },
  { 
    name: "Moss Soup",
    imageUrl: "/assets/recipes/moss_soup.png",
    cooked: false,
    learned: false,
    ingredients: [
      new Moss("Moss Soup", 20)
    ],
    source: "Foraging Level 3" 
  }
]