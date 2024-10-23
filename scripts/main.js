import { FoodTruck } from "./FoodTruck.js";

const mainContainer = document.querySelector("#container");

const render = async () => {
  mainContainer.innerHTML = await FoodTruck();
};

document.addEventListener("newOrderCreated", render);

render();
