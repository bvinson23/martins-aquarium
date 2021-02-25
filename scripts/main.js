console.log("you did it");

import { getFish } from './fish/FishData.js'
import { FishList } from './fish/FishList.js'

const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()

import { getTips } from './tips/TipData.js'

const allTheTips = getTips()

for (const tips of allTheTips) {
    console.log(tips)
}