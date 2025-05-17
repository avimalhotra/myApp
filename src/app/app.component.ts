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
  cname="lead";

  age=24;

  turbo=false;

  ev=false;

  num=-2;

  cars=["swift","alto","wagon r","brezza","grand vitara"];
  
  swift={name:"swift", power: 82, torque: 112};

  data=[
      {"name": "swift", "type": "hatchback", "price":810000},
      {"name": "dzire", "type": "hatchback", "price":880000},
      {"name": "ciaz", "type": "sedan", "price":1000000},
      {"name": "baleno", "type": "hatchback", "price":850000},
      {"name": "brezza", "type": "suv", "price":1400000},
      {"name": "fronx", "type": "hatchback", "price":1000000},
      {"name": "jimny", "type": "suv", "price":1300000}
  ];

}