import { Component } from '@angular/core';
import { Studentlist } from '../test';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
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
 s=new Studentlist()
}
