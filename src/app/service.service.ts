import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    url="http://localhost:4200/assets/data.json"
  constructor( private http:HttpClient) { 

  }
  getContact(){
    return [
      {
        name:"roshin",
        gender:"male"
      },
      {
        name:"selva",
        gender:"male"
      },
      {
        name:"gokul",
        gender:"male"
      },
      {
        name:"rajiv",
        gender:"male"
      }
    ]
  }
  getStudentList(){
    return this.http.get(this.url)
  }
}
