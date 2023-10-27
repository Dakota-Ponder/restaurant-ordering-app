import { MenuItem } from "./data.js";

class CartItem {
  constructor(menuItem) {
    this.menuItem = menuItem;
    this.quantity = 1;
  }

  get total() {
    return this.menuItem.price * this.quantity;
  }
}

export const cart = {
  items: [],
  
  get total() {
    return this.items.reduce((acc, item) => acc + item.total, 0);
  },

  addItem(menuItem) {
    let item = this.items.find(i => i.menuItem.id === menuItem.id);
    if (!item) {
      item = new CartItem(menuItem);
      this.items.push(item);
    } else {
      item.quantity++;
    }
    this.updateUI();
  },

  removeItem(cartItem) {
    const index = this.items.indexOf(cartItem);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.updateUI();
  },

  updateUI() {
    // Access the cart section in the HTML
    const cartItemsDiv = document.querySelector('.cart-items');
    const cartTotalDiv = document.querySelector('.cart-total');

    // Render each cart item
    let cartItemsHTML = "";
    this.items.forEach(cartItem => {
      cartItemsHTML += `
        <div class="cart-item">
          <span>${cartItem.menuItem.name} (x${cartItem.quantity}) - $${cartItem.total}</span>
          <button class="remove-button" data-id="${cartItem.menuItem.id}">Remove</button>
        </div>`;
        });
        
        // Set the HTML and update the total price
    cartItemsDiv.innerHTML = cartItemsHTML;
    cartTotalDiv.textContent = `Total: $${this.total.toFixed(2)}`;
  }
};
