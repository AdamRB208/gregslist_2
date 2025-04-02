
export class Car {

  /**
   * 
   * @param {{
   * make: string,
   * model: string,
   * year: number,
   * price: number,
   * imgUrl: string,
   * color: string,
   * }} data 
   */
  constructor(data) {
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
              alt="${this.year} ${this.color} ${this.make} ${this.model}" class="card-img">
            <h4>${this.make} ${this.model}</h4>
            <div>
              <span>${this.year} <i style="color: ${this.color}" class="mdi mdi-circle"></i></span>
            </div>
            <p class="text-end fw-bold text-success">$${this.price}</p>
          </div>
        </div>
      </div>
    `
  }
}