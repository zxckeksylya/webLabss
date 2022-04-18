import { Injectable, OnInit } from '@angular/core';
import { Coment } from '../models/coment';
import { Post } from '../models/post';
import { StaticData } from './staticData';

@Injectable({
  providedIn: 'root',
})
export class PostReposytory implements OnInit {
  private posts: Post[] = [];
  constructor(private data: StaticData) {
    this.data.getData().forEach(p=>this.posts.push(p));
  }

  ngOnInit(): void {  }

  getPosts(): Post[] {
    return this.posts!;
  }

  getPost(id: number): Post {
    return this.posts.find((p) => p.id == id)!;
  }

  getComent(idOfPost:number,idOfComent:number):Coment{
    return this.getPost(idOfPost).coments.find(p=>p.id==idOfComent)!;
  }

  deletePost(id: number): void {
    let index = this.posts.findIndex((p) => p.id == id)!;
    this.posts.splice(index, 1);
  }

  deleteComent(idOfPost:number,idOfComent:number):void{
    const indexOfPost = this.posts.findIndex(p=>p.id==idOfPost)!;
    const indexOfComent = this.posts[indexOfPost].coments.findIndex(p=>p.id==idOfComent);
    this.posts[indexOfPost].coments.splice(indexOfComent,1);
  }

  addPost(newPost: Post): void {
    if (newPost.id == 0 || newPost.id == null) {
      newPost.id = this.generateIDForPost();
    }
    newPost.date = new Date();
    this.posts.push(newPost);
  }

  addComent(newComent:Coment,id:number){
    if (newComent.id == 0 || newComent.id == null) {
      newComent.id = this.generateIDForComent(id);
    }
    console.log(newComent)
    const index = this.posts.findIndex(p=>p.id==id);
    this.posts[index].coments.push(newComent);
  }

  private generateIDForPost(): number {
    let candidate: number = 100;
    while (this.getPost(candidate) != null) {
      candidate++;
    }
    return candidate;
  }

  private generateIDForComent(idOfPost:number): number {
    let candidate: number = 100;
    while (this.getComent(idOfPost,candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
