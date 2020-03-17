import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.css']
})
export class ServerCockpitComponent implements OnInit {
 
  @Output() customEvent=new EventEmitter<string>();
  @Output() customEventForUserInput = new EventEmitter<{userValue:any}>();
  newInput="";
  constructor() { }

  ngOnInit(): void {
  }

  sendMsgFromChild(){
    console.log("emiited");
      this.customEvent.emit("this message from child");
  }

  userInputValueFromChild(event){
    console.log("sucess");
    this.newInput = event.target.value;
    this.customEventForUserInput.emit({userValue:this.newInput});
  }
  
}
