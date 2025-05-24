import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RevsortPipe } from './revsort.pipe';
// import { SortjsonPipe } from './sortjson.pipe';
import { Login } from './login';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})

export class AppComponent {

  title = 'myApp';

  model=new Login("",0,"",false);

  formSubmit(data:any){
    console.log(data.value);
  }

}