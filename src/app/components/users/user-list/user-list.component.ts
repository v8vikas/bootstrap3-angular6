import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any [] = []
  constructor(
    private userService: UsersService
  ) {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((users)=>{
      this.users = users;
      console.log('------users----', users)
    })
  }

  ngOnInit() {
  }

}
