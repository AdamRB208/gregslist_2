import { AppState } from "../AppState.js"


export class CarsController {
  constructor() {
    console.log('Cars Controller Running!')
    this.drawCars()
  }


  drawCars() {
    console.log('Draw Cars Running')
    const cars = AppState.cars
    let carsContent = ''
    cars.forEach(car => carsContent += car.CardTemplate)
    const listingElem = document.getElementById('listings')
    listingElem.innerHTML = carsContent
  }
}