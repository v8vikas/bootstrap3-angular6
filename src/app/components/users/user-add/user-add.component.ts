import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  userForm: FormGroup;
  userId: boolean = false;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService
  ) {
    this.userForm = this.fb.group({
      networkId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([
          Validators.required, Validators.pattern(this.emailPattern)
        ])
      ],
      phone: ['', Validators.required],
      clinic: ['', Validators.required],
      role: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.userService.userEdit.subscribe((user)=>{
      // update if id is updated.
      this.userForm.patchValue(user);
      this.userId = user.id;
      console.log('user', user);
    })
  }

  addUser(): void {
    this.userService.addUser(this.userForm.value).subscribe((user)=>{
      console.log('user', user);
      this.userForm.reset();
      this.userService.userDbUpdated.next();
    });
  }

  editUser(): void {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe((user)=>{
      console.log('user', user);
      this.userForm.reset();      
      this.userService.userDbUpdated.next();
    });
  }

  onSubmit(): void {
    if(this.userId) {
      this.editUser();
    } else {
      this.addUser();
    }
  }
}
