import { Component, OnDestroy } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Bootcamp  angular training';

  constructor(){

  }
  
  chnageVlaueofTitle(){
    this.title="chnage value of title";
  }
  destroyTitle(){
    this.title="";
  }
}
