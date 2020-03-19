import { Component,
   OnInit,
   Input,
   OnChanges,
   SimpleChanges, 
   DoCheck, 
   AfterContentInit, 
   AfterContentChecked, 
   AfterViewInit, 
   AfterViewChecked, 
   OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
 {
   @Input() text:string;
   isShow=true;

  constructor() { 
    console.log("constructor called!");
   }

  ngOnChanges(change: SimpleChanges){
    console.log("ngOnChanges called!");
    console.log(change);
  } 
  ngOnInit(): void {
    console.log("ngOnInit called!");
  }
  ngDoCheck(){
    console.log("ngDoCheck called!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit called!");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy called!");
  }
  clickevent(){
    this.isShow=false;
  }

}
