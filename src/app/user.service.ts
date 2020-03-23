import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class userService{
    activeUsers=["max","anna"];
    inactiveUsers=["alia","nob"];

    constructor(private counterService : CounterService){}

    setToActive(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id,1);
        this.counterService.counterActiveToInactive();
    }

    setToInactive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id,1);
        this.counterService.counterInactiveToActive();
    }

}