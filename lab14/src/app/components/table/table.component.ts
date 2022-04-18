import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coment } from 'src/app/models/coment';
import { PostReposytory } from 'src/app/services/posts-repository';
import { Post } from '../../models/post';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  posts:Post[]=[];

  constructor(private data:PostReposytory) { }
  ngOnInit(): void {
   this.posts = this.data.getPosts();
  }

  getPost(id:number){
    return this.data.getPost(id);
  }

  deletePost(id:number){
    return this.data.deletePost(id);
  }
  addComent(newComent:Coment,idOfPost:number){
    this.data.addComent(newComent,idOfPost);
    // console.log(newComent)
    // console.log(idOfPost)
  }
  deleteComent(idOfComent:number,idPfPost:number){
    this.data.deleteComent(idPfPost,idOfComent);
  }
}
