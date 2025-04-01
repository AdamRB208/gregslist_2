import { CarsController } from "./controllers/CarsController.js"


class App {

  CarsController = new CarsController()

}

window['app'] = new App()


