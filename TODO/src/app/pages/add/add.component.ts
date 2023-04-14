import { Component, EventEmitter, Output } from '@angular/core';
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
  todoListFiltrated: ITodo[] = [];
  isUrgent! : boolean;
  




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
      urgence: []
    });

    this.getTodoList();
    this.getTodoListFiltrated();
    //this.urgence();
  }


  //fonction pour récupérer ma todo
  getTodoList() {
    this.todoList = this.todoService.getTodoList();
  }

  getTodoListFiltrated(): void {
    this.todoListFiltrated = this.todoList.filter(todo => todo.doneDate === null);
  }

  //fonction pour déterminer si la fonction est urgente ou pas
  urgence() {
    this.todoForm.value.urgence !== this.isUrgent;
    console.log("test",this.todoForm.value.urgence);
  }


  
  //créer une fonction pour donner un id à une todo
  addTodo(): void {
    //je récupère ma todoList
    // const todoList = this.getTodoList();
    // console.log("todolist", todoList);
    // const todoListFiltrated = todoList.filter(todo => todo.doneDate !== null));
    if (this.todoList.length > 0) {
      console.log("longueur", this.todoList.length);
      const id = this.todoList.length + 1;
      //je lui donne un id
      this.todoItem.id = id;
    } else {
      console.log("premier element", this.todoList.length);
      this.todoItem.id = 1;
    }
    //j'assigne la valeur de la catégorie à l'attribut category de ma todo
    this.todoItem.category = this.todoForm.value.cat;
    //j'assigne la valeur de la todo à l'attribut content de ma todo
    this.todoItem.content = this.todoForm.value.todo;
    //j'assigne l'urgence à l'attribut category de ma todo
    if (this.todoForm.value.urgence) {
      this.todoItem.isUrgent = true;
      console.log("urgence dans fonction", this.todoForm.value.urgence);
      console.log("urgence dans fonction", this.todoItem.isUrgent);
        };
    // ajout de la date à null pour le moment car todo en cours
    this.todoItem.doneDate = null;
    //j'ajoute les éléments au todoItem
    this.todoService.addToTodoList(this.todoItem);

    // je redirige sur la page home
    this.router.navigate(['home']);

  }

  
}