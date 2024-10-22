import { setSide } from "./transientState.js"

const handleSideSelection = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        const convertedToInteger = parseInt(changeEvent.target.id)
        setSide(convertedToInteger)
    }
}





export const sideOptions = async() => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", handleSideSelection)


    let sidesHTML = ""
    for (const side of sides) {
        sidesHTML +=
         `<input type='radio' name='side' id='${side.id}' value='${side.title}' />
         <label for='${side.id}'>${side.title}</label>
         <br>`

    }
    
    return sidesHTML

}




