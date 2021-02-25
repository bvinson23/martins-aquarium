export const FishList = () => {
    const contentElement = document.querySelector("#fishList")
    const fishes = getFish()
    let fishHTMLRepresentation = "";
    for (const oneThingFromTheSea of fishes) {
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
    }
    contentElement.innerHTML += `${fishHTMLRepresentation}`
}

import { getFish } from "./FishData.js"
import { Fish } from "./Fish.js"
