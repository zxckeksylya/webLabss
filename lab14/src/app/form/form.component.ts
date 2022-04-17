import { Component, OnInit } from '@angular/core';
import { Post} from '../post.model'
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() sizeChange = new EventEmitter<any>();
  post:Post = new Post()

  constructor() { }

  addPost():void{
    this.sizeChange.emit(this.post)
    this.post=new Post()
  }

  ngOnInit(): void {
  }

}
