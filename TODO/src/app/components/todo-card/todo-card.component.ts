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




  //créer une fonction pour donner un id à une todo
  addTodo(id: number): void {

    //recuperer la liste totale
    const todoList = this.todosService.getTodoList();

    const index = todoList.findIndex((todo: ITodo) => todo.id === id);
    todoList.splice(index, 1);
    this.todosService.saveTodoList(todoList);


    console.log("etape1");
    //j'assigne la valeur de la catégorie à l'attribut category de ma todo
    this.todoDetails!.category = this.todoForm.value.cat;
    //j'assigne la valeur de la todo à l'attribut content de ma todo
    this.todoDetails!.content = this.todoForm.value.todo;
    //j'assigne l'urgence à l'attribut category de ma todo
    if (this.todoForm.value.urgence) {

      this.todoDetails!.isUrgent = !this.todoDetails!.isUrgent;

    } else {
      this.todoDetails!.isUrgent = !this.todoDetails!.isUrgent;
    };
    this.todoDetails!.doneDate = null;

    //j'ajoute les éléments au todoItem
    this.todosService.addToTodoList(this.todoDetails!);
    console.log("2");



    // je redirige sur la page home
    this.router.navigate(['home']);

  }
}



