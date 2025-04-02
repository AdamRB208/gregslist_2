import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { carsService } from "../services/CarsService.js"
import { getFormData } from "../utils/FormHandler.js"


export class CarsController {
  constructor() {
    console.log('Cars Controller Running!')
    this.drawCars()
    AppState.on('cars', this.drawCars)
  }


  drawCars() {
    console.log('Draw Cars Running')
    const cars = AppState.cars
    let carsContent = ''
    cars.forEach(car => carsContent += car.CardTemplate)
    const listingElem = document.getElementById('listings')
    listingElem.innerHTML = carsContent
  }

  createCarListing() {
    console.log('Cars Listing Running')
    console.log(event);
    event.preventDefault()
    const form = event.target
    console.log(form.make.value);
    console.log(form);
    // const formData = new FormData(form)
    // console.log('data', formData);
    // formData.forEach((value, name) => console.log(value, name))
    const carData = getFormData(form)
    console.log('car data', carData);
    carsService.createCarListing(carData)
    form.reset()

  }
}