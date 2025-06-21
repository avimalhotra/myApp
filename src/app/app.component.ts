import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Routes, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true,
})

export class AppComponent {

    title = 'myApp';

    x:number=1;

    pin=201301;
    data:any;

    a=12;

    /* rxjs */

    counter=0;
    count:any;


    // changeNum(){ this.x=this.x+1;}
    changeNum(){ this.a=this.a+1;}

    constructor(){
      // setTimeout(()=>{ this.x=this.x*2; },1000); 
      // setInterval(()=>{ this.x=this.x*2; },1000); 
    }

    ngOnInit(){
        // setTimeout(()=>{ this.x=this.x*2; },1000); 
        setInterval(()=>{ this.x=this.x+1; },1000); 

        // fetch(`https://api.postalpincode.in/pincode/${this.pin}`).then(i=>i.json()).then(i=>this.data=i);
        
        this.counter=1;
        this.data=new BehaviorSubject(this.counter);
    }


    changeCounter(){
        this.counter=this.counter+this.counter;     // double
        this.data.next(this.counter);
        // console.log( this.data.getValue() );
    }

 
}