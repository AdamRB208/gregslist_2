import { AppState } from "../AppState.js"
import { houseService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"


export class HousesController {
  constructor() {
    console.log('Houses Controller Running!')
    this.drawHouses()
    AppState.on('houses', this.drawHouses)
    houseService.loadHouses()
  }

  drawHouses() {
    console.log('Draw Houses Running!')
    const houses = AppState.houses
    let housesContent = ''
    houses.forEach(house => housesContent += house.houseCardTemplate)
    const houseListingElem = document.getElementById('houseListings')
    houseListingElem.innerHTML = housesContent
  }

  createHouseListing() {
    console.log('Houses Listing Running!')
    console.log(event);
    event.preventDefault()
    const form = event.target
    console.log(form.year.value);
    console.log(form);
    const houseData = getFormData(form)
    console.log('house data', houseData);
    houseService.createHouseListing(houseData)
    form.reset()
  }

  deleteHouse(houseId) {
    const confirmed = confirm('Are you sure you want to delete this listing? This cannot be undone!')
    console.log('deleting house listing', houseId);
    if (confirmed == false) return
    houseService.deleteHouse(houseId)
  }



}