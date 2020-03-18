import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {

  isShow=false;
  name='';
  default="Megha Prajapati";
  students=["Ankit","Ankur","Raj","Ravi","shefali","Megha","Astha","Monika"];
 
  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.isShow = true;
    this.name="hello";
  }


}
