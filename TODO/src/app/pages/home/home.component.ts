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
        todo.doneDate = new Date;
        console.log("new date", todo.doneDate);
      }
     
      // const index = this.todoListFiltrated.findIndex(todo => todo.id === id);
      // //je retire l'element de ma todoList filtrée avec une todo avec doneDate = null
      // this.todoListFiltrated.splice(index, 1);
      // // console.log("liste filtrée", this.todoListFiltrated);
      
      // //j'ajoute la todo qui a une date maintenant dans la liste history
      // this.todoListHistory.push(todo);
      //       // on enregistre toutes les listes
      // this.todoService.saveTodoList(this.todoListFiltrated);
      // this.todoService.saveTodoList(this.todoListHistory);
      // console.log("liste historique", this.todoListHistory);
      // console.log("liste normal", this.todoList);     
    });

    //mettre a jour la liste totale
    // this.todoList.forEach((todo) => {
    //   if (todo.id === id) {
    //     todo.doneDate = new Date;
    //   }
  //     this.todoService.saveTodoList(this.todoList);
  // })
  

  // removeGirl(id: number): void {
  //   this.womanAbsent.forEach((student) => {
  //     if (student.id === id) {
  //       student.status = !student.status;
  //       const index = this.womanAbsent.findIndex(student => student.id === id);
  //       this.onlyPresent.push(student);
  //       this.womanAbsent.splice(index, 1);
  //     }
  //   });
  // }

}


}
