import { AppState } from "../AppState.js";
import { housesServices } from "../services/HousesServices.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawHouses(){
    console.log('drawing them houses')
    let content = ''
    AppState.houses.forEach(house => content+= house.HouseTemplate)
    setHTML('house',content)
}


export class HousesController{
    constructor(){
        this.getHouses()
        AppState.on('houses', _drawHouses)
    }

    async getHouses(){
        try {
            await housesServices.getHouses()
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async createHouse(){
        try {
            
        } catch (error) {
            Pop.error(error.message)
        }
    }



}