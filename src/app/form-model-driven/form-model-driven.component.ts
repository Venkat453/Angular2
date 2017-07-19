import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl }  from '@angular/forms';

@Component({
  selector: 'app-form-model-driven',
  templateUrl: './form-model-driven.component.html',
  styleUrls: ['./form-model-driven.component.css']
})
export class FormModelDrivenComponent implements OnInit {

  constructor() { }
  UserForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl()
    })
  });
  ngOnInit() { }
  
  onSubmit(){
    console.log(this.UserForm.value);
  }

}
