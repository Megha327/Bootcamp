import { Component, OnInit } from '@angular/core';
import { userService } from '../user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  users:string[];
  constructor(private userService: userService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id:number){
    this.userService.setToInactive(id);
  }

}
