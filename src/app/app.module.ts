import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
