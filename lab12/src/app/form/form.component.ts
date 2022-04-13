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
  task:Post = new Post()

  constructor() { }

  addPost(){
    this.sizeChange.emit(this.task)
    this.task=new Post()
  }

  ngOnInit(): void {
  }

}
