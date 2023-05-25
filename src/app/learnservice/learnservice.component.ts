import { Component,OnInit } from '@angular/core';
import { Studentlist } from '../test';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-learnservice',
  templateUrl: './learnservice.component.html',
  styleUrls: ['./learnservice.component.scss']
})
export class LearnserviceComponent implements OnInit{
  // studentList:any[]=[
  //   {
  //     name:"roshin",
  //     gender:"male"
  //   },
  //   {
  //     name:"selva",
  //     gender:"male"
  //   },
  //   {
  //     name:"gokul",
  //     gender:"male"
  //   },
  //   {
  //     name:"rajiv",
  //     gender:"male"
  //   }
  // ]
  // s =new Studentlist(
      studentList:any;
      contactList:any;
  constructor (public s:ServiceService){
  }
  ngOnInit(): void {
    this.contactList=this.s.getContact();
    // console.log(this.s.getContact());
    
    this.s.getStudentList().subscribe((data)=>this.studentList=data)
  }  
}
