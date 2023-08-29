import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { CarsView } from "./views/CarsView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <div class="card">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: CarsView
  },
  {
    path: '#/houses',
    controller: HousesController,
    view: /**html */ `
    <div class="collapse" id="carFormCollapse">
              <<form class="row p-2" onsubmit="app.CarsController.createCar()">

                <div class="form-floating mb-3 col-4">
                  <input required type="text" minLength="3" maxLength="15" class="form-control" id="carMake" name="make"
                    placeholder="Car Make">
                  <label for="carMake">Car Make</label>
                </div>

                <div class="form-floating mb-3 col-4">
                  <input required type="text" class="form-control" id="carModel" name="model" placeholder="Car Model">
                  <label for="carModel">Car Model</label>
                </div>

                <div class="form-floating mb-3 col-4">
                  <input required type="number" class="form-control" min="1950" id="carYear" name="year"
                    placeholder="Car Year">
                  <label for="carYear">Car Year</label>
                </div>

                <div class="form-floating mb-3 col-6">
                  <input required type="number" class="form-control" max="10000000" id="carPrice" name="price"
                    placeholder="Car Price">
                  <label for="carPrice">Car Price</label>
                </div>

                <div class="form-floating mb-6 col-2">
                  <select name="engineType" id="engineType">
                    <option value="unknown">unknown</option>
                    <option value="2 stroke">2 stroke</option>
                    <option value="4 cylinder">4 cylinder</option>
                    <option value="v6">v6</option>
                    <option value="v8">v8</option>
                    <option value="v10">v10</option>
                    <option value="v12">v12</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    <option value="chuncko">CHONK</option>
                  </select>
                </div>

                <div class="form-floating mb-3 col-12">
                  <input required type="text" class="form-control" id="carimgUrl" name="imgUrl"
                    placeholder="Car imgUrl">
                  <label for="carimgUrl">Car Image Url</label>
                </div>

                <div class="form-floating">
                  <textarea required maxLength="144" class="form-control" placeholder="Please describe your car"
                    name="description" id="carDescription" style="height: 100px"></textarea>
                  <label for="carDescription">Car Description</label>
                </div>

               
                <div class="text-end">
                  <button type="submit" class="btn btn-info">Create Listing</button>

                </div>
              </form> 
            </div>

          </div>
        </section> 
    `
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */