import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(HeaderComponent) public child:any;
  title = 'my-app';
  a:number=10;
  b:number=20;
  name:string='';
  details:any={
    name:"Roshin",
    age:21,
    gender:"male"
  };
  arrdetails:any[]=[
    {
      name:"Roshin",
      age:21,
      gender:"male"
    },
    {
      name:"Roshin",
      age:21,
      gender:"male"

    },
    {
      name:"Roshin",
      age:21,
      gender:"male"

    },
    {
      name:"Roshin",
      age:21,
      gender:"male"

    },
    {
      name:"Roshin",
      age:21,
      gender:"male"

    },
    {
      name:"Roshin",
      age:21,
      gender:"male"

    },
    {
      name:"Roshin",
      age:21,
      gender:"male"
    }
  ];
  check:any;
  message=''
  dataFromChild:any;
  role:string='';
  dataFromChildInView:any;
  // formDataFromChild:any;
  formDataFromChild: any[] = [];
  funFromchild(e:string){
    this.name=e
    console.log("cadca",e);
  }   
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.message=this.child.myname
    this.dataFromChildInView=this.child.passDataToParent;
    console.log(this.dataFromChildInView);
    
  }
  fromChild(e:any){
    this.dataFromChild=e
    console.log(this.dataFromChild);
   
  }
  // loadData(e:any){
  //   // this.formDataFromChild+=e;
  //   // console.log(this.formDataFromChild);    
  //   console.log(e);
  //   // this.formDataFromChild+=e;
  //   // console.log(this.formDataFromChild);    
  //   this.formDataFromChild.push(e.name);
  //   // console.log(this.formDataFromChild);
  // }
  loadData(e: any) {
    console.log(e);
    this.formDataFromChild.push(e);
    console.log(this.formDataFromChild);
    
  }
}
