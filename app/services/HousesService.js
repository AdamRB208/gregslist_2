import { AppState } from "../AppState.js"
import { House } from "../models/Houses.js"
import { Pop } from "../utils/Pop.js"



class HouseService {
  createHouseListing(houseData) {
    const house = new House(houseData)
    console.log('new house', house)
    AppState.houses.unshift(house)
    this.saveHouse()
  }

  saveHouse() {
    const houses = AppState.houses
    const housesString = JSON.stringify(houses)
    console.log('houses string', housesString);
    localStorage.setItem('gregslist_houses', housesString)
  }

  loadHouses() {
    const housesString = localStorage.getItem('gregslist_houses')
    console.log('loaded houses', housesString);
    const housesData = JSON.parse(housesString)
    console.log('Houses Loaded', housesData);
    if (housesData == null) return
    const houses = housesData.map(housesData => new House(housesData))
    console.log('Houses!', houses);
    AppState.houses = houses

  }

  deleteHouse(houseId) {
    const houseToDelete = AppState.houses.find(house => house.id == houseId)
    const indexToRemove = AppState.houses.indexOf(houseToDelete)
    console.log('deleting house', houseToDelete, indexToRemove);
    AppState.houses.splice(indexToRemove, 1)
    Pop.toast(`Deleted ${houseToDelete.year} ${houseToDelete.description}`)
    this.saveHouse()
  }

}

export const houseService = new HouseService()
