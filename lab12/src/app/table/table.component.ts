import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  items:Post[]=[];

  @Input() item?:Post;

  constructor() { }

  addPost(){
    console.log(this.item?.text)
    this.items.push(this.item!)
  }
  ngOnInit(): void {
  }

}
