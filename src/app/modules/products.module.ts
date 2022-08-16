export class Product {
    id = 0;
    name = "";
    price = 0;
    timeRent = {
        timeTo : "",
        timeFrom : "",
    }
    description = ""
    image = "";
    category = "";

    constructor(id:number, name:string, price:number, timeTo:string, timeFrom:string,
                description:string, image:string, category:string ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.timeRent.timeTo = timeTo;
        this.timeRent.timeFrom = timeFrom;
        this.description = description;
        this.image = image;
        this.category = category;
    }
}