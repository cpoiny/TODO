import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { ICategory, ITodo } from 'src/app/todo';
import { CATEGORYLIST } from 'src/app/todoList.mock';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],


})
export class AddComponent {

  // Déclarer la propriété FormGroup
  listCategory: ICategory[] = CATEGORYLIST;
  todoForm!: FormGroup;
  validationError: [] = [];
  todoList: ITodo[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public todoService: TodosService,
    public router: Router
  ) {
  }

  ngOnInit() {
    console.log("list", this.listCategory);
    this.todoForm = this.formBuilder.group({
      cat: [null],
      todo: [null, [Validators.required]]
    });
    console.log(this.todoForm.value);
   // this.createTodo();

  }

  createTodo(): void {
    // this.todoService.GetTodoInfo(this.todoForm.value.cat);
    this.todoService.GetTodoInfo(this.todoForm.value.todo)
    this.router.navigate(['home']);

  }

  submit() {
    // this.validationError = [];
    // if (this.todoForm.invalid) {
    //   Object.keys(this.todoForm.controls).forEach((value) => {
    //     const currentInput = this.todoForm.get(value);
    //     console.log("currentInput", currentInput);
    //     if (currentInput && currentInput.status === "INVALID") {
    //       this.validationError.push();
    //     }
    //   });
    // }
    console.log(this.todoForm.value);
  }










}