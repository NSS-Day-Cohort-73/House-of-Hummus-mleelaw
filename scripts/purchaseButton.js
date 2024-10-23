import { saveOrder, transientState } from "./transientState.js";

const handleOrderPlacedClick = (clickEvent) => {
  if (clickEvent.target.id === "purchase") {
    if (
      !transientState.entreeId ||
      !transientState.sideId ||
      !transientState.vegetableId
    ) {
      window.alert("select all items first!");
    } else {
      saveOrder();
    }
  }
};

export const PlaceOrder = () => {
  document.addEventListener("click", handleOrderPlacedClick);

  return "<article><button id='purchase'>Purchase Combo</button></article>";
};
