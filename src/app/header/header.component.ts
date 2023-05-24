import { Component,OnInit,OnChanges, SimpleChanges, AfterViewInit,AfterContentChecked,AfterContentInit,DoCheck,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit,DoCheck {
  @Input() public property:any;
  @Input() public a:any;
  @Input() public b:any;
  @Input() public details:any;
  @Input() public arrdetails:any;
  @Output() public outter=new EventEmitter();
  @Output() public toParent=new EventEmitter();
  @Output() public formSubmit=new EventEmitter();
  name:string="Roshinraj T";
  isDisabled:boolean=false;
  myname:string="roshinraj"
  show:boolean=false;
  arrr:number[]=[1,2,3,4,5];
  num:number=1
  value:any="";
  data:any={
    name:"raj",
    gender:"male"
  }
  passDataToParent:any=[
    {
      contactId:1,
      contactName:"roshinraj",
      contactNumber:91138684
    },
    {
      contactId:2,
      contactName:"aravindh",
      contactNumber:91138684
    },
    {
      contactId:3,
      contactName:"rohith",
      contactNumber:91138684
    }
  ]
  two:string="2way"

  // obj=
  //   {
  //     name:"Roshin",
  //     age:21
  //   }
  // run(name:any){
  
  constructor(){
    console.log("inside const");
    
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log("Docheck");
    
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log("contentInit");
    
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    console.log("contentChecked");
    
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log("inside View");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("inside Onchanges");
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("insided Oninit");
    this.toParent.emit(this.data)
  }
  mouseClick(){
    console.log("wedcf");
    
  }
  run(){    
    this.isDisabled=true;
    // this.arr=this.arr.filter((e)=>e==4);
    // this.arr.push(4)
    // console.log(name);    
  }
  decrement(){
    if(this.num>0)
    this.num-=1;   
  }
    increment(){
    this.num+=1
  }
  enableBtn(e:any){
    console.log(e.target.value.length,'keyup')
    if(e.target.value.length!=0){
      this.isDisabled=true
  }
  else{
    this.isDisabled=false
  }
  }
  clickBtn(){
    this.outter.emit("Roshinraj")
  }
  submit(name:any,email:any,address:any){
     let valueOfForm={
      name:name,
      email:email,
      address:address
    }

    // console.log(valueOfForm);
    this.formSubmit.emit(valueOfForm);
    
  }
  // chToP(){
  //   this.outterForjson.emit(this.data)
  // }
  // clivk(){
  //   if(this.value){   
          
  //   }
  //   else{
  //     console.log("asas");
      
  //   }
  //   // #inputclivk.isDisabled=false;
  //   // console.log("sasa");
    
  // }
  // sendToParent(){
  //   this.toParent.emit(this.data)
  // }
}