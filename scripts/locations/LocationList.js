import { locationCollection } from "./LocationData.js"
import { Location } from "./Location.js"

export const LocationList = () => {
    const contentElement = document.querySelector("#locationList")
    const tips = locationCollection
    let locationHTMLRepresentation ="";
    for (const oneLocation of tips) {
        locationHTMLRepresentation += Location(oneLocation);
    }
    contentElement.innerHTML += `${locationHTMLRepresentation}`
}