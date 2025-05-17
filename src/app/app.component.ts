import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {

  title = 'myApp';

  name="avinash";

  day=3;

  cars=["swift","alto","wagon r","brezza","grand vitara"];
  
  car={name:"swift", power: 82, torque: 112};

  dark={ background:"#222", color:"#fff"};


  date=new Date().getTime();
  tomorrow=this.date + (1000 * 60 * 60 * 24);
  pi=Math.PI;

  

}