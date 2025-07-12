import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Routes, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { AngularComponent } from "./angular/angular.component";
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
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, CardComponent, AngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true,
})

export class AppComponent {

  title = 'myApp';

  y=12;

  msg:any;

  @ViewChild(CardComponent) messageViewChild:CardComponent | undefined;

  ngAfterViewInit(){
    console.log( this.messageViewChild?.title );    
  }
  

}