import { Injectable } from '@angular/core';
import { ITodo } from '../todo';

export interface ITodosTotal {
  todo: ITodo;
}


@Injectable({
  providedIn: 'root'
})
export class TodosService {

quantity: number = 0;
todoList : ITodo[] = [];

  // function to create a TodoList type panier en localStorage
  private createTodoList() {
    const newTodoList = JSON.stringify([]);
    localStorage.setItem('todoList', newTodoList);
  }


  //function pour sauvegarder la liste de Todos
  private saveTodoList(todoList: ITodosTotal[]) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

 
 

// To get la liste de Todo
  getTodoList() {
    const todoList = localStorage.getItem('todoList');
    if (todoList) {
      return JSON.parse(todoList);
    } else {
      this.createTodoList();
      this.getTodoList();
  }
  }
  addToTodoList(todoTotal : ITodosTotal){
    const todoList = this.getTodoList();
    todoList.push(todoTotal);
    this.saveTodoList(todoList);
  }

  
 


   
}