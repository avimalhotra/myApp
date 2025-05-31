import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RevsortPipe } from './revsort.pipe';
// import { SortjsonPipe } from './sortjson.pipe';
// import { Login } from './login';

import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormArray, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {

  title = 'myApp';

  // name=new FormControl("");

  // email=new FormControl("");
  // pass=new FormControl("");

  login=new FormGroup({
    name:new FormControl(""),
    email:new FormControl(""),
    pass:new FormControl("")
  });

  submitForm(){
    console.log(this.login.value);
    console.log(this.login.status);
    console.log(this.login.valid);
    console.log(this.login.invalid);

  }



 
}