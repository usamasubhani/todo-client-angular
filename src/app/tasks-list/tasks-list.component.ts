import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[];

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {
        'id': 1,
        'title': 'Test Task',
        'description': 'Test desc',
        'done': false
      },
      {
        'id': 2,
        'title': 'Another',
        'description': 'Test desc 2',
        'done': true
      }
    ];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

}


