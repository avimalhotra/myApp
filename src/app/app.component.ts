import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { CoursesComponent } from './courses/courses.component';


@Component({
  selector: 'app-root',
  // selector: '[app-root]',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  // template:'<h1>App Component</h1>',
  styleUrl: './app.component.css',
  // styleUrls: ['./app.component.css'],
  // styles:'h1{color:#f00}',
  preserveWhitespaces:true
})

export class AppComponent {
  title = 'myApp';
  age=10;
  
  sayHi(){return "hello" };
  date=new Date();
  reverseStr(x:string){ return x.split("").reverse().join("")}

  months=["jan","feb","mar"];
  car={name:"swift", power:82};

  dis=true  ;
  pic={ src:"favicon.ico", alt:"angular icon", width:48, height:48};

  para="p1";
  css={ color:"#00f", 'text-align': "center"};

  clickBtn(){ this.title="Angular App" }

  counter=0;

  inc(){ this.counter=this.counter+1 }
  dec(){ this.counter=this.counter-1 }

  name="";
  chk=false;
  gender="";

  

}