import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any [] = []
  constructor(
    private userService: UsersService
  ) {
    this.userService.userDbUpdated.subscribe(()=>{
      this.loadUsers();
    });

    // load user initially.
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((users)=>{
      this.users = users;
    })
  }

  deleteUser(user: any): void {
    this.userService.deleteUser(user).subscribe((response)=>{
      this.loadUsers();
    })
  }

  editUser(user): void {
    this.userService.userEdit.next(user);
  }

}
