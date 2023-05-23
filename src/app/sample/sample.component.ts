import { Component,OnInit,OnChanges, SimpleChanges, AfterViewInit,AfterContentChecked,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit {
  // ngAfterContentInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngAfterContentChecked(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
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
    
  }

}
