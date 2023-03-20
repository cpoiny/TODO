import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICategory } from 'src/app/todo';
import { CATEGORYLIST } from 'src/app/todoList.mock';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

// Déclarer la propriété FormGroup
tacheForm! : FormGroup
listCategory : ICategory[] = CATEGORYLIST;


constructor(
  private formBuilder : FormBuilder
) {}

ngOnInit(){
  console.log("list", this.listCategory)}




}