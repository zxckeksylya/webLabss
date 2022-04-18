import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { StaticData } from "./staticData";
@Injectable({
    providedIn:'root'
})
export class UserRepository{
    private users:User[]=[];
    private idOfSelectedUser:number=1;

    constructor(private data:StaticData){
        this.data.getUsers().forEach(p=>this.users.push(p))
    }

    public getUsers():User[]{
        return this.users;
    }

    public getUser(id:number):User{
        return this.users.find(p=>p.id==id)!
    }

    public deleteUser(id:number):void{
        let index = this.users.findIndex(p=>p.id==id);
        this.users.splice(index,1);
    }

    public getIdSelectedUser():number{
        return this.idOfSelectedUser;
    }
}