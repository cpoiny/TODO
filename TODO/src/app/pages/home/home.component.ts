import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/todo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todoList: ITodo[] = [];
  todoUrgent : ITodo[] = [];



  constructor(
    public todoService: TodosService
  ) { }

  ngOnInit(): void {
       
  }

  // getTodosMock() {
  //   this.todoList = this.todoService.getTodosMock();
  
  // }

  // getTodosUrgent() {
  //   this.todoUrgent = this.todoService.onlyTodoUrgent();
  // }

}




