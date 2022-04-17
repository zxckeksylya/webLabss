import { Injectable } from "@angular/core";
import { Post } from "../models/post";
import { User } from "../models/user";

@Injectable({
    providedIn:'root',
})
export class StaticData{
    posts:Post[];
    users:User[];

    constructor(){
        this.posts = [
            new Post(1,'title1','text1',new Date(),[]),
            new Post(2,'title2','text2',new Date(),[]),
            new Post(3,'title3','text3',new Date(),[]),
            new Post(4,'title4','text4',new Date(),[]),
            new Post(5,'title5','text5',new Date(),[]),
            new Post(6,'title6','text6',new Date(),[]),
        ];
        this.users = [
            new User(1,'name1'),
            new User(2,'name2'),
        ]
    }

    getData():Post[]{
        return this.posts
    }

    getUsers():User[]{
        return this.users;
    }
}