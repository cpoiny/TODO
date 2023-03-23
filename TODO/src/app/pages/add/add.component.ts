import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/todo';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],


})
export class AddComponent {

  // Déclarer la propriété FormGroup
  
  todoForm!: FormGroup;
  validationError: [] = [];
  todoList: ITodo[] = [];
  todoItem : ITodo = {
    id : 0,
    content : "",
    category: null,
    picture: "",
    isUrgent: false,
    doneDate: null
  }

  constructor(
    private formBuilder: FormBuilder,
    public todoService: TodosService,
    public router: Router
  ) {
  }

  ngOnInit() {
    
    this.todoForm = this.formBuilder.group({
      cat: [null],
      todo: [null, [Validators.required]],
      urgence:[false]
    });
    this.getTodoList();
  console.log("todolist pour test",this.todoList);
  }

 

  addTodo() {
    //j'assigne la valeur de la catégorie à l'attribut category de ma todo
    this.todoItem.category = this.todoForm.value.cat;
     //j'assigne la valeur de la todo à l'attribut content de ma todo
    this.todoItem.content = this.todoForm.value.todo;
     //j'assigne l'urgence à l'attribut category de ma todo
    this.todoItem.isUrgent = this.todoForm.value.urgence;
    
   //j'ajoute les éléments au todoItem
    this.todoService.addToTodoList(this.todoItem);
    // je redirige sur la page home
    this.router.navigate(['home']);
    
  
  }

  getTodoList() {
    this.todoList = this.todoService.getTodoList();
  }
 










}