import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/todo';
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

  constructor(
    private formBuilder: FormBuilder,
  ) {
   }

  ngOnInit() {
    console.log("list", this.listCategory);
    this.todoForm = this.formBuilder.group({
      cat: [],
      todo: [null, [Validators.required]]
    });
    console.log(this.todoForm.value);
    
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