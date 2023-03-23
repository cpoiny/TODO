import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
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
todoList : ITodo[] = [];

  // function to create a TodoList type panier en localStorage
  private createTodoList() {
    const newTodoList = JSON.stringify([]);
    localStorage.setItem('todoList', newTodoList);
  }


  //function pour sauvegarder la liste de Todos
  // private saveTodoList(todoList: ITodosTotal[]) {
  //   localStorage.setItem('todoList', JSON.stringify(todoList));
  // }
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

  
  // RÉCUPÉRATION de la value du FormGroup
  GetTodoInfo (todoInfo: FormGroup) {
    // ajoute à l'emplacement de stockage 
    localStorage.setItem('todoform', JSON.stringify(todoInfo));

  }

  // function pour récuperer toutes les todos du mock
  // getTodosMock(): ITodo[] {
  //   return TODOLIST;
  // }


  // onlyTodoUrgent(): void {
    
  //   const urgentTodos = TODOLIST.filter(todo => todo.isUrgent);
  //   this.todoUrgent = urgentTodos;
  //   console.log("liste urgente service", this.todoUrgent)
   

  //   }
   
}