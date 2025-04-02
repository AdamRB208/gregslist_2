import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car({
      make: 'Honda',
      model: 'Civic',
      year: 2010,
      price: 15000,
      imgUrl: "https://images.unsplash.com/photo-1641825648759-2f88a6074323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlZCUyMGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D",
      color: 'red'
    }),
    new Car({
      make: 'Toyota',
      model: 'Tacoma',
      year: 2020,
      price: 23000,
      imgUrl: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG95b3RhJTIwdGFjb21hfGVufDB8fDB8fHww",
      color: 'tan'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      year: 2023,
      price: 50000,
      imgUrl: "https://images.unsplash.com/photo-1689058218527-01c51ea51c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1hemRhJTIwbWlhdGF8ZW58MHx8MHx8fDA%3D",
      color: 'white'
    }),
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())