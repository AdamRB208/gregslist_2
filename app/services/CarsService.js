import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"


class CarsService {
  createCarListing(carData) {
    const car = new Car(carData)
    console.log('new car', car)
    // AppState.cars.push(car)
    AppState.cars.unshift(car)
    this.saveCars()
  }

  saveCars() {
    const cars = AppState.cars
    const carsString = JSON.stringify(cars)
    console.log('cars string', carsString);
    // console.log(JSON.parse(carsString));
    localStorage.setItem('gregslist_cars', carsString)
  }

  loadCars() {

  }

}

export const carsService = new CarsService()