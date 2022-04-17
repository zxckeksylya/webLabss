import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  

  @Input() posts:Post[]=[];
  @Output() deletedPost = new EventEmitter<number>()

  constructor() { }
  ngOnInit(): void {
  }

  deletePost(key:number){
    this.deletedPost.emit(key);
  }
}
