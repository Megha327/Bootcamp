import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {

  constructor( private ele: ElementRef ) { }

  ngOnInit(){
    this.ele.nativeElement.innerText="Hello , I am Custom Directive";
    this.ele.nativeElement.style.backgroundColor = 'yellow';
  }

}
