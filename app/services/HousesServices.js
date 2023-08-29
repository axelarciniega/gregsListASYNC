import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"



// @ts-ignore
const _sandBoxApi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/',
    timeout: 8000
})


class HousesServices {

        async getHouses(){
            const response = await _sandBoxApi.get('api/houses')
            console.log(response.data)


            const mappedHouses = response.data.map(data => new House(data))
            AppState.houses = mappedHouses

        }






}



export const housesServices = new HousesServices()