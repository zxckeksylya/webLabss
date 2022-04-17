import { Component, OnInit } from '@angular/core';
import { Post} from '../../models/post'
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PostReposytory } from 'src/app/services/posts-repository';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  post:Post = new Post()

  constructor(private data:PostReposytory) { }

  addPost():void{
    this.data.addPost(this.post)
    this.post=new Post()
  }

  ngOnInit(): void {
  }

}
