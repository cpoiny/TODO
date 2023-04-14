import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {

  todoDetails?: ITodo;

  constructor(
    public todosService: TodosService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) { }



  todoForm!: FormGroup;

  ngOnInit(): void {

    this.todoForm = this.formBuilder.group({
      cat: [null],
      todo: [null, [Validators.required]],
      urgence: []
    });

    this.getTodoDetails();
  }


  //fonction pour récupérer une todo par id
  getTodoDetails() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log("id todo", id);
    const todoList = this.todosService.getTodoList();
    const foundTodo = todoList.find((todoItem: ITodo) => todoItem.id === id);
    if (foundTodo) {
      this.todoDetails = foundTodo;
      console.log("todo récupéré", this.todoDetails);
      console.log("todo récupéré", foundTodo);


    } else {
      this.router.navigate(['/not-found']);
    }
    this.displayTodo(foundTodo);
  }


  //function display formulaire
  displayTodo(todo: ITodo): void {
    this.todoDetails = todo;
    this.todoForm.patchValue({
      cat: this.todoDetails.category,
      todo: this.todoDetails.content,
      urgence: this.todoDetails.isUrgent,
    });
  }
}


