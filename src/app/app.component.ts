import { Component, computed, effect, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Routes, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { CardComponent } from "./card/card.component";
// import { AngularComponent } from "./angular/angular.component";
// import { ChangeDetectionStrategy } from '@angular/core';
// import { HomeComponent } from "./home/home.component";
// import { BehaviorSubject } from 'rxjs';
// import { AppService } from './app.service';
// import { AppDevService } from './app-dev.service';
// import { ErrService } from './err.service';

// import { provideHttpClient, withFetch } from '@angular/common/http';
// import { WebService } from './web.service';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true,
})

export class AppComponent {

  title = 'myApp';

  x=signal(0);

  // counter(){    this.x.update(x=>x+1);}
  increment(){    this.x.update(x=>x+1);}
  decrement(){    this.x.update(x=>x-1);}


  constructor(){
    // let x=signal(3);
    // let y=signal(5);

    // let z=computed(()=> x()+y());

    // console.log( z() );

    // x.set(10);

    // console.log( z() );
    
    // y.set(15);
    
    // console.log( z() );

    // effect( ()=>console.log( this.x() ));

  }
  

  ngOnInit(){
    // console.log( this.x() );
    
  }


   
   
   


  

  

}