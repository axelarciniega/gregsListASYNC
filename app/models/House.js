

export class House {
    constructor(data){
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.name = data.creator.name
        this.profilePicture = data.creator.picture
    }


    get HouseTemplate(){
        return `
         <section class="row elevation-5 my-3">
          <div class="col-4 p-0">
            <img class="house-img" src="${this.imgUrl}" alt="${this.year}" />
          </div>
          <div class="col-4">
            <h3>${this.year} $${this.price}</h3>
            <span> Bathrooms: ${this.bathrooms} Bedrooms: ${this.bedrooms}</span>
            <div>
              <span>${this.levels}</span>
            </div>
            <div>
              <span> <b>Description:</b> ${this.description}</span>
            </div>
            <img class="creator-img" src="${this.profilePicture}" alt="pic" />
            <h5>${this.name}</h5>
          </div>
        </section>
        `
    }




}