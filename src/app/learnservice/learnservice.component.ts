import { Component } from '@angular/core';
import { Studentlist } from '../test';

@Component({
  selector: 'app-learnservice',
  templateUrl: './learnservice.component.html',
  styleUrls: ['./learnservice.component.scss']
})
export class LearnserviceComponent {
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
  s =new Studentlist()
}
