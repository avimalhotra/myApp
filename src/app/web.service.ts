import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  getData(){ return this.http.get("https://fakestoreapi.com/products") }
  getDataValue(id:number){ return this.http.get(`https://fakestoreapi.com/products/${id}`) }

  // postDate(){ return this.http.post("/post",JSON.stringify({"user":"avinash",pass:123456}),{headers:{'Content-Type':'application/json'}}) };
  postDate(){ return this.http.post("http://localhost:8080/postapi",JSON.stringify({"q":"alt"})) };


}
