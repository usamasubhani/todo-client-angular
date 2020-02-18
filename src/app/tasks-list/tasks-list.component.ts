import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { DataService } from '../data.service';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  // tasks: Observable<Task[]>;
  tasks: Task[];

  constructor(private dataService: DataService) {
    // this.tasks = this.getTasks();
   }

  ngOnInit() {
    // this.tasks = this.getTasks();
    return this.dataService.getTasks()
     .subscribe(data => this.tasks = data);
  }


  newTask(taskTitle, taskDesc) {
    if(taskTitle.value != "") {
      let task: Task = {
        id: 0,
        title: taskTitle.value,
        description: taskDesc.value,
        status: false
      };
      // console.log(task);
      this.dataService.newTask(task)
       .subscribe(data => this.tasks = data);
      // this.dataService.getTasks()
      //   .subscribe(data => this.tasks = data);
    }
  }

  deleteTask(task) {
    this.dataService.deleteTask(task)
     .subscribe(data => this.tasks = data);
    // this.dataService.getTasks()
    //  .subscribe(data => this.tasks = data);
  }

  changeTaskStatus(task) {
    task.status = !task.status;
    this.dataService.updateTask(task).subscribe(data => console.log(data));
  }

  getTasks(){
    // console.log(this.http.get<Task[]>('http://127.0.0.1:5000/todo/api/v1.0/tasks'));
    // this.http.get('http://0.0.0.0:5000/todo/api/v1.0/tasks')
    //  .subscribe((response: Task[]) => {
    //    this.tasks = response;
    //    console.log(this.tasks)
    //  })
    // return this.tasks;
    // this.tasks = this.http.get<Task[]>('http://0.0.0.0:5000/todo/api/v1.0/tasks')
    // return this.http.get<Task[]>('http://0.0.0.0:5000/todo/api/v1.0/tasks/1')
    //  .subscribe(data => this.tasks = data);
    // console.log(this.tasks)
    // .pipe(
    //   tap(_ => this.log('fetched heroes')),
    //   catchError(this.handleError<Hero[]>('getHeroes', []))
  }


  showTasks() {
    console.log(this.tasks)
  }

}


