import { Component } from '@angular/core';
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
  this.todoService.getTodos();
  this.todoService.getTodoList();
}

}
