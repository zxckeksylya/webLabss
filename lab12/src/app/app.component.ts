import { Component } from '@angular/core';
import {Post} from './post.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab12';
  task?:Post;

  addPost(newTask:any){
    this.task = newTask;
    console.log(this.task?.text);
  }
}
