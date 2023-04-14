import { Injectable } from '@angular/core';
import { ITodo } from '../todo';
import { TodosService } from './todos.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDetailsService {

  constructor( public todosService : TodosService) { }



  // getTodo(id: number): ITodo | undefined {
  //   const todoList = this.todosService.getTodoList();
  //   console.log("liste dans tododetails", todoList);
  //   const todoDetails = todoList.find(todo => todo.id === id);
  //   console.log("todoItem", todoDetails);
  //   return todoDetails 
  // }
}
