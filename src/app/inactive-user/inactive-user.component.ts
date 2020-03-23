import { Component, OnInit } from '@angular/core';
import { userService } from '../user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  users:string[];
  constructor(private userService: userService) { }

  ngOnInit(): void {
  }

  onSetToActive(id:number){

  }

}
