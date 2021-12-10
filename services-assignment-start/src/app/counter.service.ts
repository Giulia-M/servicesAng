import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  constructor() {}

  activeToInactive = 0;
  inactiveToActive = 0;
  incrementToActive() {
    this.inactiveToActive++;
    console.log("inactive to active " + this.inactiveToActive);
  }

  incrementToInactive() {
    this.activeToInactive++;
    console.log(" active to inactive " + this.activeToInactive);
  }
}
