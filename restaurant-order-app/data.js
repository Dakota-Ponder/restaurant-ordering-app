export class MenuItem {
  constructor(id, name, ingredients, price, emoji) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
    this.emoji = emoji;
  }
}

export const menuArray = [
  new MenuItem(0, "Pizza", ["pepperoni", "mushroom", "mozzarella"], 14, "🍕"),
  new MenuItem(1, "Hamburger", ["beef", "cheese", "lettuce"], 12, "🍔"),
  new MenuItem(2, "Beer", ["grain", "hops", "yeast", "water"], 12, "🍺"),
];
