import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { DataService } from '../data.service';


@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  
  tasks: Task[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getTasks()
     .subscribe(data => this.tasks = data);
  }


  newTask(taskTitle: { value: string; }, taskDesc: { value: any; }) {
    if(taskTitle.value != "") {
      let task: Task = {
        id: 0,
        title: taskTitle.value,
        description: taskDesc.value,
        status: false
      };

      this.dataService.newTask(task)
       .subscribe(data => this.tasks = data);
    }
  }

  changeTaskStatus(task: Task) {
    task.status = !task.status;
    this.dataService.updateTask(task).subscribe(data => console.log(data));
  }

  deleteTask(task) {
    this.dataService.deleteTask(task)
     .subscribe(data => this.tasks = data);
  }


  showTasks() {
    console.log(this.tasks)
  }

}


