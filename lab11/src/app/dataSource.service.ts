import { Injectable } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
    providedIn:'root'
})
export class DataSourceService{
    private tasks:Task[]=[];
    private candidate:number=100;

    constructor(){
        this.tasks = [
            new Task(1,'сделать лабу',false),
            new Task(2,'покурить',false),
            new Task(3,'купить шаву',true),
            new Task(4,'съесть шаву',false)
        ]
    }
    getTasks():Task[]{
        return this.tasks;
    }
    addTask(task:Task):void{
        task.id=this.candidate;
        this.tasks.push(task)
        this.candidate++;
    }


}