import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getData(){return `hello, i am from app service`;}

  // getArea(x:number=0,y:number=0){ return x*y; }

}
