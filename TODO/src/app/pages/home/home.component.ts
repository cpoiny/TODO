import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/todo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todoList : ITodo[] = [];


  constructor(
    private todoService : TodosService
  ){}
  
ngOnInit():void{
  this.getTodos();
}


 
getTodos() {
  this.todoList = this.todoService.getTodos();
}

}
