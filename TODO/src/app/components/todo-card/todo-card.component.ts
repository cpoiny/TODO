import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDetailsService } from 'src/app/services/todo-details.service';
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
    public todoDetailsService: TodoDetailsService,
    public todosService: TodosService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder,
    public todoService: TodosService,
    
  ) { }

  //fonction pour récupérer une todo par id
  // getTodoDetails() {
  //   const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  //   const foundTodo = this.todoDetailsService.getTodo(id);
  //   if (foundTodo) {
  //     this.todoDetails = foundTodo;
  //     console.log("todofound", foundTodo);
  //   } else {
  //     this.router.navigate(['/not-found']);
  //   }
  // }

  todoForm!: FormGroup;
  validationError: [] = [];
  todoList: ITodo[] = [];
  todoListFiltrated: ITodo[] = [];
  isUrgent!: boolean;





  todoItem: ITodo = {
    id: 0,
    content: "",
    category: null,
    picture: "",
    isUrgent: false,
    doneDate: new Date
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
    console.log("test", this.todoForm.value.urgence);
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


