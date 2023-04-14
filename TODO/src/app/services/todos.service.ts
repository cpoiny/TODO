import { Injectable } from '@angular/core';
import { ITodo } from '../todo';
import { Observable, map } from 'rxjs';

// export interface ITodosTotal {
//   todo: ITodo;
// }


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todoList: ITodo[] = [];



  // function to create a TodoList type panier en localStorage
  private createTodoList() {
    const newTodoList = JSON.stringify([]);
    localStorage.setItem('todoList', newTodoList);
  }


  //function pour sauvegarder la liste de Todos
  saveTodoList(todoList: ITodo[]) {
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

getTodoById(id: number): Observable<ITodo>{
  const todoList = this.getTodoList();
  this.todoList = todoList;
return todoList.pipe(
  map(todoList => this.todoList.find((todo: ITodo) => todo.id === id))
)
}

  //function pour ajouter une todo à la todoList
  addToTodoList(todoItem: ITodo) {
    const todoList = this.getTodoList();
    todoList.push(todoItem);
    this.saveTodoList(todoList);
  }

  //get HistoryList
  getHistoryList() : ITodo[]{
    const historyList = this.getTodoList();
    console.log("historyList bonne ?", historyList);
    historyList.filter((todo? : ITodo) => todo?.doneDate !== null);
    console.log("liste history aprs filtre", historyList);
    this.saveTodoList(historyList);
    return historyList;
  }

 
  }


