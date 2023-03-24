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
  todoList: ITodo[] = [];



  // function to create a TodoList type panier en localStorage
  private createTodoList() {
    const newTodoList = JSON.stringify([]);
    localStorage.setItem('todoList', newTodoList);
  }


  //function pour sauvegarder la liste de Todos
  private saveTodoList(todoList: ITodo[]) {
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

  //function pour ajouter une todo à la todoList
  addToTodoList(todoItem: ITodo) {
    const todoList = this.getTodoList();
    todoList.push(todoItem);
    this.saveTodoList(todoList);
  }

  //get HistoryList
  
  }


