import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from "./teachers/teachers.component";


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, CoursesComponent, TeachersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {
  title = 'myApp';

  x=22;
  pi=3.14;

  sig="lorem ipsum";

  num:number=0;

  showNum(count:number){
    console.log( this.num );
    this.num=count;
  }


}