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
  todoListFiltrated: ITodo[] = [];

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
    this.todoListFiltrated = this.todoList.filter((todo) => todo.doneDate === null);
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


  removeTodo(id: number): void {
    this.todoListHistory.forEach((todo) => {
      if (todo.id === id) {
        todo.doneDate = null;
      }
      const index = this.todoListHistory.findIndex(todo => todo.id === id);
      this.todoListHistory.splice(index, 1);
      this.todoService.saveTodoList(this.todoListHistory);
      this.todoListFiltrated.push();
      this.todoService.saveTodoList(this.todoListFiltrated);

    })
  }
}





