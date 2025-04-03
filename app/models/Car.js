import { generateId } from "../utils/GenerateId.js"

export class Car {

  // /**
  //  * 
  //  * @param {{
  //  * make: string,
  //  * model: string,
  //  * year: number,
  //  * price: number,
  //  * imgUrl: string,
  //  * color: string,
  //  * listingDate: *
  //  * }} data 
  //  */
  constructor(data) {
    this.id = generateId()
    this.listingDate = data.listingDate ? new Date(data.listingDate) : new Date()
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.color = data.color
  }

  get CardTemplate() {
    return /*html*/ `
    <div class="col-6 col-md-4">
        <div class="card">
          <div class="card-body p-1">
            <img
              src="${this.imgUrl}"
              alt="${this.year} ${this.color} ${this.make} ${this.model}" class="car-img rounded">
            <h4>${this.make} ${this.model}</h4>
            <div>
              <span>${this.year} <i style="color: ${this.color}" class="mdi mdi-circle"></i></span>
            </div>
            <p class="text-end fw-bold text-success">$${this.price}</p>
            <small class="text-secondary">${this.dateFormatted}</small>
          </div>
          <div class="text-end">
            <button onclick="app.CarsController.deleteCar('${this.id}')" class="btn btn-outline-danger" type="button">
              Delete Car
            </button>
          </div>
        </div>
      </div>
    `
  }

  get dateFormatted() {
    return this.listingDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
  }
}