import { getLocations } from "./LocationData.js"
import { Location } from "./Location.js"

export const TipList = () => {
    const contentElement = document.querySelector("#tipList")
    const tips = getLocations()
    let locationHTMLRepresentation ="";
    for (const oneLocation of tips) {
        locationHTMLRepresentation += Location(oneLocation);
    }
    contentElement.innerHTML += `${locationHTMLRepresentation}`
}