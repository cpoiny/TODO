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
    this.getTodoDetails();
    console.log("tododetails", this.todoDetails);
    console.log("todo modifié", this.todoItem);
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
  }

  //fonction qui modifie la Todo details
  addTodoDetails(id: number) {
    if (this.todoDetails) {
      this.todoItem.id = this.todoDetails.id;
      this.todoItem.content = this.todoForm.value.todo;;
      this.todoItem.category = this.todoForm.value.cat;
      this.todoItem.picture = this.todoDetails.picture;
      if (this.todoForm.value.urgence) {
        this.todoItem.isUrgent = true;
      };
      this.todoItem.doneDate = null;
    }

    // j'aoute la todo dans la todoList
      this.todoList.push(this.todoItem);
      this.todoService.saveTodoList(this.todoList);
    
    // j'ajoute la todo dans la todoList Filtrated
      this.todoListFiltrated.push(this.todoItem);
      this.todoService.saveTodoList(this.todoListFiltrated);
      
    
    // je redirige sur la page home
    this.router.navigate(['home']);
  }


  // removeTodo(id:number) {
   
  //   const index = this.todoList.findIndex(todo => todo.id === id);
  //   //je retire l'element de ma todoList filtrée avec une todo avec doneDate = null
  //   if (index !== -1) {
  //     this.todoList.splice(index,1);
  //     this.todoService.saveTodoList(this.todoList);
  //   }

  //   const index2 = this.todoListFiltrated.findIndex(todo => todo.id === id);
  //   //je retire l'element de ma todoList filtrée avec une todo avec doneDate = null
  //   if (index2 !== -1 && index2) {
  //     this.todoListFiltrated.splice(index2,1);
  //     this.todoService.saveTodoList(this.todoListFiltrated);
  //   }
  // }
}

