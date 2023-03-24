import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/todo';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  todoList: ITodo[] = [];


constructor(
  public todoService: TodosService
) { }

ngOnInit(): void {
    this.getTodoList();
}

getTodoList(){
this.todoList = this.todoService.getTodoList();
}

}




