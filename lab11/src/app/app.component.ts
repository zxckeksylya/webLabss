import { Component } from '@angular/core';
import { DataSourceService } from './dataSource.service';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataSource:DataSourceService){}

  task:Task = new Task();


  getTasks():Task[]{
    return this.dataSource.getTasks().filter(p=>!p.status);
  }

  addItem(newItem:string){
    this.dataSource.addTask(new Task(undefined,newItem,false))
  }
}
