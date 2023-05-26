import { Component,OnInit } from '@angular/core';
import { Studentlist } from '../test';
import { ServiceService } from "../service.service";
import { ServiceTestService } from "../service-test.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{
// arr:any[]=[
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
//  s=new Studentlist()
studentList:any;
contactList:any;
constructor(public s:ServiceService,public S:ServiceTestService){  
}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.studentList=this.s.getStudentList();
    // this.contactList=this.S.getAllData();
    this.s.getStudentList().subscribe((data)=>this.studentList=data)
    // this.s.getStudentList();
    this.s.getStudentList().subscribe((data)=>this.studentList=data)
  }
}
