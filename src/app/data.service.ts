import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://todo-rest-ms.herokuapp.com/todo/api/v1.0/tasks'
  
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(this.url);
  }

  newTask(task: Task) {
    return this.http.post<Task[]>(this.url, task);
  }

  deleteTask(task: Task) {
    return this.http.delete<Task[]>(this.url + '/' + task.id);
  }

  updateTask(task: Task) {
    return this.http.put<Task[]>(this.url + '/' + task.id, task);
  }
}
