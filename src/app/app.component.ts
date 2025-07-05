import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Routes, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
// import { ChangeDetectionStrategy } from '@angular/core';
// import { HomeComponent } from "./home/home.component";
// import { BehaviorSubject } from 'rxjs';
// import { AppService } from './app.service';
// import { AppDevService } from './app-dev.service';
// import { ErrService } from './err.service';

import { HttpClientModule } from '@angular/common/http';
import { WebService } from './web.service';



@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true,
  providers:[WebService]
})

export class AppComponent {

  title = 'myApp';
  data:any;

  constructor( private web: WebService ){  }
 
  ngOnInit(){

    // fetch("https://api.github.com/users/avimalhotra").then(i=>i.json()).then(i=>console.log(i));
    
    // fetch("https://fakestoreapi.com/products/1").then(i=>i.json()).then(i=>console.log(i)).catch(e=>console.warn(e));
    // fetch("https://fakestoreapi.com/products/1").then(i=>i.json()).then(i=>this.data=i).catch(e=>console.warn(e));
    // fetch("https://fakestoreapi.com/products").then(i=>i.json()).then(i=>this.data=i).catch(e=>console.warn(e));


    // console.log( this.web.getData() );                  // Observable

       this.web.getData().subscribe( res=>{
          this.data=res;
       })
      
    

  }


}