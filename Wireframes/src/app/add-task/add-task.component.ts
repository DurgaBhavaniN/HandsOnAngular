import { Component, OnInit } from '@angular/core';
import { Task } from '../Models/task';
import {Router} from '@angular/router';
import { Key } from 'protractor';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  name:string;
  priority:Range;
  startdate:Date;
  enddate:Date;

item:Task;
list:Task[]=[];
  constructor(private route:Router) {
    this.item=new Task();
   }

  ngOnInit():void {
  }

  public addtask()
  {
    this.item.name=this.name; 
    this.item.priority=this.priority;
    this.item.startdate=this.startdate;
    this.item.enddate=this.enddate;
    if(localStorage.getItem('tsk'))
    {
      this.list=JSON.parse(localStorage.getItem('tsk')
      );
    }
    this.list.push(this.item);
  localStorage.setItem("tsk",JSON.stringify(this.list));
console.log(this.list);
    
   // this.list.push(this.item);
  }
  public Reset()
  {
    this.item.name=null; 
    this.item.priority=null;
    this.item.startdate=null;
    this.item.enddate=null;
   
    
  }
}
