import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Routes, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
// import { ChangeDetectionStrategy } from '@angular/core';
// import { HomeComponent } from "./home/home.component";
// import { BehaviorSubject } from 'rxjs';
import { AppService } from './app.service';
import { AppDevService } from './app-dev.service';
import { ErrService } from './err.service';



@Component({
  selector: 'app-root',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true,
  // providers: [ AppService, ErrService ]
  // providers: [ { provide:AppService , useClass:AppDevService }]
  // providers: [ { provide:AppService, useExisting:AppDevService }]
  // providers: [ { provide:AppService, useValue:{ error:"custom error" } }]
  //   providers: [ { provide:AppService, useFactory:(x:boolean=true)=>{
  //     if(x){ return new AppService(); }
  //     else{ return new ErrService();}
  //   }
  // }]

  // providers:[AppService]

})

export class AppComponent {

  title = 'myApp';

  constructor( private appserv: AppService, private appdevserv: AppDevService, private errserv:ErrService ){ 
    
   }
 
  ngOnInit(){
    // this.data=this.appserv.getData();
    // console.log( this.data );   
    
    console.log( this.appserv.getData() );
    console.log( this.appdevserv.data() );
    console.log( this.errserv.checkErr() );
    
    // console.log( this.appserv );


  }

  // check(){ this.area=this.appserv.getArea(this.x,this.y);}


}