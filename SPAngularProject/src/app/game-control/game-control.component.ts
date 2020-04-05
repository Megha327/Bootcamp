import { Component, OnInit, ViewEncapsulation, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class GameControlComponent implements OnInit {
  @Output() interfired = new EventEmitter<number>();
  lastNumber= 0;
  interval;
 
  constructor() { }

  ngOnInit(): void {
  }

  onsstartgame(){
    this.interval = setInterval(() => {
      this.interfired.emit(this.lastNumber +1);
      this.lastNumber++;
    },1000)
  }

  onpausegame(){
    clearInterval(this.interval);
  }

}
