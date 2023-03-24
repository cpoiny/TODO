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
  onlyUrgentList: ITodo[] = [];
  notUrgentList : ITodo[] = [];


  constructor(
    public todoService: TodosService
  ) { }

  ngOnInit(): void {
      this.getTodoList();
      this.checkUrgentList();
  }

 getTodoList(){
  this.todoList = this.todoService.getTodoList();
 }

 checkUrgentList() {
  
  this.onlyUrgentList = this.todoList.filter((todo)=> todo.isUrgent === true);
  this.notUrgentList = this.todoList.filter((todo)=> todo.isUrgent === false);
  
}



}
