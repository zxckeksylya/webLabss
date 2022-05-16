import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private data:PostReposytory,private router:Router) { }
  ngOnInit(): void {
   this.posts = this.data.getPosts();
  }

  getPost(id:number){
    return this.data.getPost(id);
  }

  deletePost(id:number){
    return this.data.deletePost(id);
  }
  rederectToPost(key:number){
    this.router.navigate(['/post',key])
  }

}
