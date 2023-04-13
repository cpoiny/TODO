import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/todo';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  todoList!: ITodo[];
  onlyUrgentList: ITodo[] = [];
  notUrgentList: ITodo[] = [];
  todoListHistory!: ITodo[];
  todoListFiltrated!: ITodo[];

  constructor(
    public todoService: TodosService
  ) { }

  ngOnInit(): void {
    this.getTodoList();
    this.getHistory();
    this.checkUrgentList();
    console.log("liste history dans history", this.todoListHistory);
  }

  getTodoList() {
    this.todoList = this.todoService.getTodoList();
  }

  getTodoListFiltrated() {
    this.todoList = this.todoService.getTodoList();
    this.todoListFiltrated = this.todoList.filter((todo) => todo.doneDate === null);
  }
  getHistory() {
    this.todoListHistory = this.todoList.filter((todo) => todo.doneDate !== null);
  }


  checkUrgentList() {
    this.onlyUrgentList = this.todoListHistory.filter((todo) => todo.isUrgent === true);
    this.notUrgentList = this.todoListHistory.filter((todo) => todo.isUrgent === false);
  }

  //fonction pour re basculer la todo dans "home"
  removeTodo(id: number): void {
    this.todoListHistory = this.todoList.filter((todo) => todo.doneDate !== null);

    //liste historique avec modification de la date
    this.todoListHistory.forEach((todo) => {
      if (todo.id === id) {
        todo.doneDate = null;
      }
      const index = this.todoListHistory.findIndex(todo => todo.id === id);
      if (index != -1) {
        //liste historique
        this.todoListHistory.splice(index, 1);
        this.todoService.saveTodoList(this.todoListHistory);
      }
    });

    const index2 = this.notUrgentList.findIndex(todo => todo.id === id);
    if (index2 != -1) {
      //liste historique
      this.notUrgentList.splice(index2, 1);
      this.todoService.saveTodoList(this.notUrgentList);
    }

    const index3 = this.onlyUrgentList.findIndex(todo => todo.id === id);
    if (index3 != -1) {
      //liste historique
      this.onlyUrgentList.splice(index3, 1);
      this.todoService.saveTodoList(this.onlyUrgentList);
    }

    //todoList totale
    this.todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.doneDate = null;
      }
    });
    this.todoService.saveTodoList(this.todoList);
  }
}
