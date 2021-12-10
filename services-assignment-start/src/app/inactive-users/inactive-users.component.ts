import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  /*  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  } */
  users: string[];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
