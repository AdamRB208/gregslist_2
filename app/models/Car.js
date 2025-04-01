
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
    <div>${this.make} ${this.model}</div>
    `
  }
}