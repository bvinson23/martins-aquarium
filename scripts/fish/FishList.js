export const FishList = () => {
    const contentElement = document.querySelector("#fishList")
    const soldierFish = getSoldierFish()
    const unworthyFish = getUnworthy()
    const holyFish = getMostHolyFish()
    const fishes = holyFish.concat(soldierFish, unworthyFish)
    let fishHTMLRepresentation = "";
    for (const oneThingFromTheSea of fishes) {
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
    }
    contentElement.innerHTML += `${fishHTMLRepresentation}`
}

import { getFish, getMostHolyFish, getSoldierFish, getUnworthy } from "./FishData.js"
import { Fish } from "./Fish.js"
