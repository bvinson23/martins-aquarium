import { getFish } from '../fish/FishData.js'

export const getLocations = () => {
    const locations = getFish()
    let locationArray = getFish.harvestLocation;
    for (const oneLocation of locations) {
        return locationArray += locations(oneLocation);
    }
}