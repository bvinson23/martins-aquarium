console.log("you did it");

import { getFish } from './fish/FishData.js'
import { FishList } from './fish/FishList.js'

const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()

import { getTips } from './tips/TipData.js'
import { TipList } from './tips/TipList.js';

const allTheTips = getTips()

for (const tips of allTheTips) {
    console.log(tips)
}

TipList()

import { LocationList } from './locations/LocationList.js'
import { getLocations } from './locations/LocationData.js'

LocationList()
const allTheLocations = getLocations()

for (const location of allTheLocations) {
    console.log(location)
}