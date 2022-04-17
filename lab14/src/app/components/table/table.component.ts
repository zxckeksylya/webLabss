import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
}
