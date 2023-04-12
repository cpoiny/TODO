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
    this.todoService.saveTodoList(this.todoList);
    this.todoService.saveTodoList(this.todoListFiltrated);
    console.log("liste de depart", this.todoListFiltrated);
    
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
    console.log("liste filtrée please", this.todoListFiltrated);
    this.todoListFiltrated.forEach((todo) => {
      if (todo.id === id) {
        todo.doneDate = new Date;
      }
    });
      

      console.log("liste filtrée avant", this.todoListFiltrated);
      const index = this.todoListFiltrated.findIndex(todo => todo.id === id);
      //je retire l'element de ma todoList filtrée avec une todo avec doneDate = null
      // console.log("index", index);
      // console.log('id', id);
      this.todoListFiltrated.splice(index, 1);
      //this.todoListFiltrated.splice(index, 1);
      this.todoService.saveTodoList(this.todoListFiltrated);
      console.log("liste filtrée apres", this.todoListFiltrated);
      
      //j'ajoute la todo qui a une date maintenant dans la liste history
      // this.todoListHistory.push(todo);
      //       // on enregistre toutes les listes
      // this.todoService.saveTodoList(this.todoListFiltrated);
      // this.todoService.saveTodoList(this.todoListHistory);
      // console.log("liste historique", this.todoListHistory);
         
   // });

    //mettre a jour la liste totale
    // this.todoList.forEach((todo) => {
    //   if (todo.id === id) {
    //     todo.doneDate = new Date;
    //   }
       this.todoService.saveTodoList(this.todoList);
       console.log("liste totale", this.todoList);   
  // })
  

 

}


}
