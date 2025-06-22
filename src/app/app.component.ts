import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Routes, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
// import { ChangeDetectionStrategy } from '@angular/core';
import { HomeComponent } from "./home/home.component";
// import { BehaviorSubject } from 'rxjs';




@Component({
  selector: 'app-root',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true,
})

export class AppComponent {

  title = 'myApp';

  x=0;

  changeVal(){ this.x=this.x+1 }

  constructor(){
    console.log("hello constructor");
   
  }
 

  ngOnInit(){
    console.log("hello ngOnInit");
    
  }



}