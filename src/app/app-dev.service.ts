import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDevService {

  data(){ return "App data from dev service" }
  
}
