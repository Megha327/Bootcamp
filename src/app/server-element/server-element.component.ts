import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

 @Input('srvElement') element:[{type:string, name:string, content:string}];

 @Input()  test:string;
  
 clickValue="";
 keyupValue="";
  constructor() { }

  ngOnInit(): void {
    console.log(this.element)
  }

  cleckEvent(){
    alert("Hello Newers! tis is click event.");
    this.clickValue="This is clcick event.";
  }
  keyupEvent(event:any){
    console.log(event);
    this.keyupValue += event.target.value + '|';
  }

}
