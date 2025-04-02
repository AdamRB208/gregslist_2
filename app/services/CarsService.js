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
    const carsString = localStorage.getItem('gregslist_cars')
    console.log('loaded cars', carsString);
    const carsData = JSON.parse(carsString)
    console.log('Cars Loaded', carsData);
    const cars = carsData.map(carData => new Car(carData))
    console.log('Cars!', cars);
    AppState.cars = cars

  }

}

export const carsService = new CarsService()