import { Component, Input } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {

  todoList : ITodo[] = [];


constructor(
  public todoService : TodosService
){}

ngOnInit() {
  this.todoService.getTodosMock();
  this.todoService.getTodoList();
}

}
