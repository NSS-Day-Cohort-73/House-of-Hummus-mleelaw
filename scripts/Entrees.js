import { setEntree } from "./transientState.js"



const handleEntreeSelection = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        const convertedToInteger = parseInt(changeEvent.target.id)
        setEntree(convertedToInteger)
    }
}



export const entreeOptions = async() => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeSelection)


    let entreesHTML = ""
    for (const entree of entrees) {
        entreesHTML +=
         `<input type='radio' name='entree' id='${entree.id}' value='${entree.name}' />
         <label for='${entree.id}'>${entree.name}</label>
         <br>`

    }
    
    return entreesHTML

}


