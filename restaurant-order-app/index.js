import { menuArray } from "./data.js";
import { cart } from "./cart.js";
import { fillingDataItems } from "./menuItems.js";

fillingDataItems(); //For Menu

document.addEventListener("click", e => {
  if (e.target.matches(".plus-button")) {
    handleAddToCart(e);
  }
  if (e.target.matches('.remove-button')) {
    handleRemoveFromCart(e);
  }
});

function handleAddToCart(e) {
  const itemId = e.target.dataset.id;
  const menuItem = menuArray.find(item => item.id == itemId);
  cart.addItem(menuItem);
}

function handleRemoveFromCart(e) {
  const itemId = e.target.dataset.id;
  const cartItem = cart.items.find(item => item.menuItem.id == itemId);
  if (cartItem) {
    cart.removeItem(cartItem);
  }
}
