import { Component, EventEmitter, input, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
    x=5;

    @Input() getpi=0;

    @Input() getx=0;

    sigfromparent=input('');                  // > ng17 


    @Output() getT=new EventEmitter<number>();
    counter=0;

    changeVal(){
      this.counter=this.counter+1;
      this.getT.emit(this.counter);
    }


    

}
