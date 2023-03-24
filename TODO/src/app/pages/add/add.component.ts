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
  todoItem: ITodo = {
    id: 0,
    content: "",
    category: null,
    picture: "",
    isUrgent: false,
    doneDate: new Date
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
      urgence: [false]
    });
    this.getTodoList();
    console.log("todolist pour test", this.todoList);
  }


  //fonction pour générer un id
  genId(todoList: ITodo[]): number {
    return todoList.length > 0 ? Math.max(...todoList.map(todoItem => todoItem.id)) + 1 : 1;
  }


  //fonction pour récupérer ma todo
  getTodoList() {
    this.todoList = this.todoService.getTodoList();
  }

  
  //créer une fonction pour donner un id à une todo
  addTodo() {
    //je récupère ma todoList
    const todoList = this.getTodoList();
    //je lui donne un id
    // this.todoItem.id = this.genId(todoList);
    //j'assigne la valeur de la catégorie à l'attribut category de ma todo
    this.todoItem.category = this.todoForm.value.cat;
    //j'assigne la valeur de la todo à l'attribut content de ma todo
    this.todoItem.content = this.todoForm.value.todo;
    //j'assigne l'urgence à l'attribut category de ma todo
    this.todoItem.isUrgent = this.todoForm.value.urgence;
    // ajout de la date à null pour le moment car todo en cours
    this.todoItem.doneDate = null;
    //j'ajoute les éléments au todoItem
    this.todoService.addToTodoList(this.todoItem);
    // je redirige sur la page home
    this.router.navigate(['home']);
  }









}