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
    console.log("liste totale home", this.todoList);
    console.log("liste filtrée home", this.todoListFiltrated);
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

    console.log("liste filtrée please", this.todoListFiltrated);
    this.todoListFiltrated.forEach((todo) => {
      if (todo.id === id) {
        todo.doneDate = new Date;
      }

      const index = this.todoListFiltrated.findIndex(todo => todo.id === id);
      //je retire l'element de ma todoList filtrée avec une todo avec doneDate = null
     if (index !== -1) {
      this.todoListFiltrated.splice(index, 1);
      console.log ("index", index);
      this.todoService.saveTodoList(this.todoListFiltrated);
      console.log("liste filtrée apres", this.todoListFiltrated);

      //j'ajoute la todo qui a une date maintenant dans la liste history
      this.todoListHistory.push(todo);
      
      console.log("todo select", todo);
      //       // on enregistre toutes les listes
      // this.todoService.saveTodoList(this.todoListFiltrated);
      //this.todoService.saveTodoList(this.todoListHistory);
      console.log("liste historique", this.todoListHistory);
     }

    });

    this.todoList.forEach((todo) => {
      if (todo.id === id) {
        todo.doneDate = new Date;
      }


    });
    this.todoService.saveTodoList(this.todoList);
    console.log("liste apres ajout date", this.todoList);
    // })




  }


}
