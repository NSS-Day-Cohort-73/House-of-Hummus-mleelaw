import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = FoodTruck()
}

document.addEventListener("newOrderCreated", render)
render()



