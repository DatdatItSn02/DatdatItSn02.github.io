export class User {
    id:number = 0;
    username: string = ""
    password: string = ""
    name: string = ""
    phone: string = ""
    email: string = ""
    isAdmin: boolean = false;

    constructor(id:number,
    username:string, 
    password:string,
    name:string,
    phone:string,
    email:string,
    isAdmin: boolean) 
    {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.isAdmin = isAdmin
    }
}