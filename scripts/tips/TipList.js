import { getTips } from "./TipData.js"
import { Tip } from "./Tip.js"

export const TipList = () => {
    const contentElement = document.querySelector("#tipList")
    const tips = getTips()
    let tipHTMLRepresentation ="";
    for (const oneTip of tips) {
        tipHTMLRepresentation += Tip(oneTip);
    }
    contentElement.innerHTML += `${tipHTMLRepresentation}`
}