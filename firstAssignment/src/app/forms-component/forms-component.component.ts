import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms-component.component.html',
  styleUrls: ['./forms-component.component.css']
})
export class FormsComponentComponent implements OnInit 
{

  username ;
  isDisable = true;
  constructor() {
  }

  ngOnInit(): void {
    
  }
  onClear(){
    this.username = "";
    this.isDisable = true;
  }
  isDisableEnableBtn(){
    if(this.username !=""){
      this.isDisable = false;
    }else{
      this.isDisable = true;
    }
  }
  

}
