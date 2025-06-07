import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RevsortPipe } from './revsort.pipe';
// import { SortjsonPipe } from './sortjson.pipe';
// import { Login } from './login';

import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CoursesComponent } from "./courses/courses.component";



@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true,
  encapsulation:ViewEncapsulation.None
})

export class AppComponent {

  title = 'myApp';

  // name=new FormControl("");

  // email=new FormControl("");
  // pass=new FormControl("");

 

  login=new FormGroup({
    name:new FormControl("",[Validators.required, Validators.minLength(3)]),
    
    email:new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),

    pass:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/)])

  });


  submitForm(){
    console.log(this.login.value);
    console.log(this.login.status);
    console.log(this.login.valid);
    // console.log(this.login.invalid);
  }


  setVal(){    
    this.login.setValue({'name':"aaa",'email':"a@b.cc",'pass':'Aa123456'})
  }

  patchval(){
    this.login.patchValue({email:"lorem@ipsum.com"})
  }


 


 
}