import { Component, OnInit } from '@angular/core';
import {Post} from './models/post'
import { PostReposytory } from './services/posts-repository';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    
  }

}
