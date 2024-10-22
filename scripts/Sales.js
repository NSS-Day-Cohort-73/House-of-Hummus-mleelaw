export const purchases = async () => {
    const purchaseFetch = await fetch("http://localhost:8088/purchases")
    const purchases = await purchaseFetch.json()
    
    let purchaseHTML = ""
    let purchaseArray = purchases.map(
        (purchase) => {
        return `
            <section class="orderList">Receipt # ${purchase.id}</section>
        `
    })
    
    purchaseHTML += purchaseArray.join("")
    return purchaseHTML
}

