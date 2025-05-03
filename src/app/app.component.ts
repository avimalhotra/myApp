import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';


@Component({
  selector: 'app-root',
  // selector: '[app-root]',
  imports: [CoursesComponent],
  templateUrl: './app.component.html',
  // template:'<h1>App Component</h1>',
  styleUrl: './app.component.css',
  // styleUrls: ['./app.component.css'],
  // styles:'h1{color:#f00}'
})

export class AppComponent {
  title = 'myApp';
  age=10;
  
  sayHi(){return "hello" };
  date=new Date();
  reverseStr(x:string){ return x.split("").reverse().join("")}

  months=["jan","feb","mar"];
  car={name:"swift", power:82};
}