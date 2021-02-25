console.log("you did it");

import { getFish } from '../fish/FishData.js'
import { FishList } from '../fish/FishList.js'

const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()
