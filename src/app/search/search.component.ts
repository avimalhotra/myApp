import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  x:string="";
  searchItem:any="";

  constructor( private route:ActivatedRoute){  }

  ngOnInit(){
    // console.log("angular init ");

    this.route.params.subscribe((y)=>{
      this.x=y['params'];
      console.log(this.x);
    });

    this.route.queryParams.subscribe((p)=>{
      this.searchItem=p;
      console.log(p);
  });

  }



}
