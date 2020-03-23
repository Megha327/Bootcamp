export class CounterService{
    activeToInactive = 0;
    InactiveToActive = 0;

    counterActiveToInactive(){
        this.activeToInactive ++;
        console.log(`Active To Inactive count: ${this.activeToInactive}`);
    }
    counterInactiveToActive(){
        this.InactiveToActive ++;
        console.log(`Inactive To Active count: ${this.InactiveToActive}`);
    }
}