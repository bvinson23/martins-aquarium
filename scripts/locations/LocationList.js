export const LocationList = () => {
    const contentElement = document.querySelector("#LocationList")
    const locations = getLocations()
    let locationHTMLRepresentation = "";
    for (const oneLocation of locations) {
        locationHTMLRepresentation += Location(oneLocation);
    }
    contentElement.innerHTML += `${fishHTMLRepresentation}`
}


import { getLocations } from "./LocationData.js"
import { Location } from "./Location.js"
