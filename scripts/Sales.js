export const purchases = async () => {
  const entreeFetch = await fetch(
    "http://localhost:8088/purchases?_expand=entree&_expand=side&_expand=vegetable"
  );
  const purchases = await entreeFetch.json();

  // let purchaseHTML = ""
  // let purchaseArray = purchases.map(
  //     (purchase) => {
  //     return `
  //         <section class="orderList">Receipt # ${purchase.id} = $${purchase.entree.price + purchase.side.price + purchase.vegetable.price}</section>
  //     `
  // })

  // purchaseHTML += purchaseArray.join("")
  // return purchaseHTML

  return purchases
    .map((purchase) => {
      return `
            <section class="orderList">Receipt # ${purchase.id} = $${(
        purchase.entree.price +
        purchase.side.price +
        purchase.vegetable.price
      ).toFixed(2)}</section>
        `;
    })
    .join("");
};
