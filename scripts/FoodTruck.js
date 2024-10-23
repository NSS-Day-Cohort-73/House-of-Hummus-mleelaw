import { entreeOptions } from "./Entrees.js";
import { PlaceOrder } from "./purchaseButton.js";
import { sideOptions } from "./SideDishes.js";
import { vegetableOptions } from "./Vegetables.js";
import { purchases } from "./Sales.js";

export const FoodTruck = async () => {
  const entreeHTML = await entreeOptions();
  const sideHTML = await sideOptions();
  const veggieHTML = await vegetableOptions();
  const buttonHTML = PlaceOrder();
  const purchaseHTML = await purchases();

  return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <div id= "choices">
            <article class="Entree">
                <h3 class= "entreeTitle">Base Dish</h3>
                <div class= "entrees">
                <label>${entreeHTML}</label>
                </div>
            </article>

            <article class="Sides">
                <h3 class= "sideTitle">Sides</h3>
                <div class="sides">
                <label>${sideHTML}</label>
                </div>
            </article>

            <article class="Vegetables">
                <h3 class= "veggieTitle">Vegetables</h3>
                <div class="veggies">
                <label>${veggieHTML}</label>
                </div>
            </article>
        </div>

        <article>${buttonHTML}</article>
       

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${purchaseHTML}
            
        </article>

    `;
};
