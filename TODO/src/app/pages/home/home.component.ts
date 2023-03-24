import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/todo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todoList: ITodo[] = [];
  todoListFiltrated: ITodo[] = [];
  todoListHistory: ITodo[] = [];
  onlyUrgentList: ITodo[] = [];
  notUrgentList: ITodo[] = [];


  constructor(
    public todoService: TodosService
  ) { }

  ngOnInit(): void {
    this.getTodoList();
    this.checkUrgentList();
    this.getTodoListHistory();
  }

  getTodoList() {
    this.todoList = this.todoService.getTodoList();
    this.todoListFiltrated = this.todoList.filter((todo) => todo.doneDate === null);
  }

  getTodoListHistory() {
    this.todoList = this.todoService.getTodoList();
    this.todoListHistory = this.todoList.filter((todo) => todo.doneDate !== null);
  }
  checkUrgentList() {

    this.onlyUrgentList = this.todoListFiltrated.filter((todo) => todo.isUrgent === true);
    this.notUrgentList = this.todoListFiltrated.filter((todo) => todo.isUrgent === false);

  }

  //fonction pour basculer la todo dans history en lui donnant une date
  todoDone(id: number): void {
    this.todoListFiltrated.forEach((todo) => {
      if (todo.id === id) {
        console.log("todo id", todo.id, id);
        console.log(todo.doneDate)
        todo.doneDate = new Date;
        console.log(todo.doneDate)
      }
      const index = this.todoListFiltrated.findIndex(todo => todo.id === id);
      this.todoListFiltrated.splice(index, 1);
      this.todoListHistory.push();

    })
  }
}




