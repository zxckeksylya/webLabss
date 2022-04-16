import { Component } from '@angular/core';
import {Post} from './post.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts:Post[]=[];

  addPost(newPost:Post):void{
    if(newPost.id==0||newPost.id==null){
      newPost.id=this.generateID()
    }
    newPost.date=new Date();
    this.posts.push(newPost);
  }
  
  getPost(key:number):Post{
    return this.posts.find(p=>p.id==key)!
  }

  deletePost(key:number){
    let index = this.posts.findIndex(p=>p.id==key);
    this.posts.splice(index,1)
  }

  private generateID():number{
    let candidate:number=100;
    while(this.getPost(candidate)!=null){
      candidate++
    }
    return candidate;
  }
}
