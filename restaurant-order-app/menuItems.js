import { menuArray } from "./data.js";

const items = document.querySelector(".items");

export const fillingDataItems = () => {
  let restaurantItemsHTML = "";
  
  menuArray.forEach(item => {
    const { name, ingredients, price, emoji } = item;
    restaurantItemsHTML += `
      <div class="itemOfRestaurant">
        <div class="item-image-and-details">
          <div class="itemImage">
            <p>${emoji}</p>
          </div>
          <div class="itemDetails">
            <h3>${name}</h3>
            <p class="ingredients">${ingredients.join(', ')}</p>
            <h3>$${price}</h3>
          </div>
        </div>
        <div class="item-add-button">
          <h3 class="plus-button" data-id="${item.id}">+</h3>
        </div>
      </div>`;
  });

  items.innerHTML = restaurantItemsHTML;
};
