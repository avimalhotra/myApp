import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrService {

  checkErr(){ return "Error from er service" }
  
}
