import { Injectable } from '@angular/core';
import { ITodo } from '../todo';
import { TODOLIST } from '../todoList.mock';

export interface ITodosTotal {
  todo: ITodo;

}


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  quantity: number = 0;


  // function to create a TodoList
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

  


  // function pour récuperer toutes les todos du mock
  getTodos(): ITodo[] {
    console.log("liste de todo", TODOLIST)
    return TODOLIST;
  }


  
}
