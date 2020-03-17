import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootcamp';
  serverElement=[{ type:'server', name:'Test Server', content:'just a test serve' }];
  testText="this is demo text of parent child data passing";

  getmsg="";
  getUserInput="";

  getMsgFromChild(event:string){
      console.log(event);
      this.getmsg=event;
  }
  getUserInputValue(value){
      console.log(event);
      this.getUserInput=value;
  }
 
}
