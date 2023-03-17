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
todoList : ITodo[] = [];
todoUrgent : ITodo[] = [];
notTodoUrgent: ITodo[] = [];

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
  getTodosMock(): ITodo[] {
    return TODOLIST;
  }


  onlyTodoUrgent(): void {
    
    const urgentTodos = TODOLIST.filter(todo => todo.isUrgent);
    this.todoUrgent = urgentTodos;
    console.log("liste urgente service", this.todoUrgent)
    // for (let i = 0; i < this.todoList.length; i++) {
    //   console.log("todolist de la fonction", this.todoList);
    //   if (this.todoList[i].isUrgent) {
    //     this.todoUrgent.push(this.todoList[i]);
    //   }
    // }

    }
    todoNotUrgent(): void {
    
      const notUrgentTodos = TODOLIST.filter(todo => !todo.isUrgent);
      this.notTodoUrgent = notUrgentTodos;
      // for (let i = 0; i < this.todoList.length; i++) {
      //   console.log("todolist de la fonction", this.todoList);
      //   if (this.todoList[i].isUrgent) {
      //     this.todoUrgent.push(this.todoList[i]);
      //   }
      // }
  
      }






}