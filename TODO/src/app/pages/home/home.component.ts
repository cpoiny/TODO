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
    this.todoService.getTodoList();
    this.getTodoListFiltrated();
    this.checkUrgentList();
    this.getTodoListHistory();
    console.log("liste totale page home", this.todoList);
    console.log("liste en cours page home", this.todoList.filter(todo => todo.doneDate === null));


  }

  getTodoListFiltrated() {
    this.todoList = this.todoService.getTodoList();
    this.todoListFiltrated = this.todoList.filter((todo) => todo.doneDate === null);
    this.todoService.saveTodoList(this.todoList);
  }

  getTodoListHistory() {
    this.todoList = this.todoService.getTodoList();
    this.todoListHistory = this.todoList.filter((todo) => todo.doneDate !== null);
    this.todoService.saveTodoList(this.todoList);
  }

  checkUrgentList() {
    this.onlyUrgentList = this.todoListFiltrated.filter((todo) => todo.isUrgent === true);
    this.notUrgentList = this.todoListFiltrated.filter((todo) => todo.isUrgent === false);
  }

  //fonction pour basculer la todo dans history en lui donnant une date
  todoDone(id: number): void {

    // Liste normale avec ajout de la date
    this.todoListFiltrated.forEach((todo) => {
      if (todo.id === id) {
        todo.doneDate = new Date;
      }

      const index = this.todoListFiltrated.findIndex(todo => todo.id === id);
      //je retire l'element de ma todoList filtrée avec une todo avec doneDate = null
      if (index !== -1) {
        this.todoListFiltrated.splice(index, 1);
        this.todoService.saveTodoList(this.todoListFiltrated);
      }
    });

   
 

  const index2 = this.onlyUrgentList.findIndex(todo => todo.id === id);
  //je retire l'element de ma todoList filtrée avec une todo avec doneDate = null
  if (index2 !== -1) {
    this.onlyUrgentList.splice(index2, 1);
    //this.onlyUrgentList.saveTodoList(this.notUrgentList);
  }

  const index3 = this.notUrgentList.findIndex(todo => todo.id === id);
  //je retire l'element de ma todoList filtrée avec une todo avec doneDate = null
  if (index3 !== -1) {
    this.notUrgentList.splice(index3, 1);
   // this.notUrgentList.saveTodoList(this.notUrgentList);
  }

    this.todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.doneDate = new Date;
        console.log("todo avec date", todo.doneDate);
      }
    });
    this.todoService.saveTodoList(this.todoList);
    console.log("liste totale ajout date", this.todoList);
  }
}
