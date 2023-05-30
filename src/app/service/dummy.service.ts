import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http:HttpClient) { }


  getAllProducts(){
    return this.http.get<any>('https://dummyjson.com/products');
  }
}
