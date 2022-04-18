import { Coment } from "./coment";

export class Post{
    constructor(
        public id?:number,
        public title?:string,
        public text?:string,
        public date?:Date,
        public coments:Coment[]=[]
    ){}
}