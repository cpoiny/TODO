import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

// Déclarer la propriété FormGroup
tacheForm! : FormGroup


constructor(
  private formBuilder : FormBuilder
) {}

}
