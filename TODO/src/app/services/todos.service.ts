import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITodo } from '../todo';
import { TODOLIST } from '../todoList.mock';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }


  // getTodos() : Observable<ITodo[]>{
  //   const todolist = of(TODOLIST);
  //   return todolist;
  // }


  // methode normale
  getTodos(): ITodo[] {
    return TODOLIST;
  }
}
