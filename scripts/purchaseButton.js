import { saveOrder } from "./transientState.js"



const handleOrderPlacedClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        saveOrder()
    }
}

export const PlaceOrder = () => {

    document.addEventListener("click", handleOrderPlacedClick)


    return "<article><button id='purchase'>Purchase Combo</button></article>"
    
}

