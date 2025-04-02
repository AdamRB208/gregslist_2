import { generateId } from "../utils/GenerateId.js";


export class House {

  // /**
  //    * 
  //    * @param {{
  // * bedrooms: number,
  // * year: number,
  // * price: number,
  // * imgUrl: string,
  // * bathrooms: number,
  // * sqft: number, 
  // * description: string,
  // * listingDate: *
  // * }} data 
  // */

  constructor(data) {
    this.id = generateId()
    this.listingDate = new Date()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get houseCardTemplate() {
    return /*html*/ `
    <div class="col-6 col-md-4">
      <div class="card">
        <div class="card-body p-1">
          <img
            src="${this.imgUrl}"
            alt=" image of forsale home" class="house-img rounded">
            <h4>${this.year} ${this.description}</h4 >
            <div>
              <div>Bedrooms: ${this.bedrooms}</div>
              <div>Bathrooms: ${this.bathrooms}</div>
              <div>Squarefoot Total: ${this.sqft}ft</div>
            </div>
            <p class="text-end fw-bold">Listing Price:</p>
            <p class="text-end fw-bold text-success">$${this.price}</p>
            <!-- < small class="text-secondary" > ${this.dateFormatted}</small > -->
          </div >
      <div class="text-end">
        <button class="btn btn-outline-danger" type="button">
          Delete House Listing
        </button>
      </div>
        </div >
      </div >
      `
  }
}

