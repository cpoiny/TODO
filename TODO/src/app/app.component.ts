import { Component } from '@angular/core';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';


  constructor (
    public todosService : TodosService
  ){}
  ngOnInit() {
    this.todosService.getTodoList();
  }
}
