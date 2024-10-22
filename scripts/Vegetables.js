import { setVegetable } from "./transientState.js"

const handleVegetableSelection = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        const convertedToInteger = parseInt(changeEvent.target.id)
        setVegetable(convertedToInteger)
    }
}



export const vegetableOptions = async() => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change", handleVegetableSelection)


    let vegetableHTML = ""
    for (const vegetable of vegetables) {
        vegetableHTML +=
         `<input type='radio' name='vegetable' id='${vegetable.id}' value='${vegetable.type}' />
         <label for='${vegetable.id}'>${vegetable.type}</label>
         <br>`

    }
    
    return vegetableHTML

}

