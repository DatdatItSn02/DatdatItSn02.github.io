import { User } from "./users.module";

export class Invoice {
    invoiceId: number = 0;
    user: User = new User(0,'','','','','',false);
    cart: any[] = [];
    total: number = 0;
    time: Date = new Date();

    constructor (invoiceId:number, user:User, cart:any[], total:number){
        this.invoiceId = invoiceId
        this.user = user
        this.cart = cart
        this.total = total
    }
}   