import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/todo';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  todoList: ITodo[] = [];
  onlyUrgentList: ITodo[] = [];
  notUrgentList: ITodo[] = [];
  todoListHistory: ITodo[] = [];


  constructor(
    public todoService: TodosService
  ) { }

  ngOnInit(): void {
    this.getTodoList();
    this.checkUrgentList();
    this.getHistory();
  }

  getTodoList() {
    this.todoList = this.todoService.getTodoList();
  }

  getHistory() {
    this.todoListHistory = this.todoList.filter((todo) => todo.doneDate !== null)
    console.log("liste historique", this.todoListHistory);
    this.todoListHistory.sort();
  }


  checkUrgentList() {
    this.onlyUrgentList = this.todoListHistory.filter((todo) => todo.isUrgent === true);
    this.notUrgentList = this.todoListHistory.filter((todo) => todo.isUrgent === false);
  }
}




