import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UsersService
  ) {
    this.userForm = this.fb.group({
      networkId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      clinic: ['', Validators.required],
      role: ['', Validators.required],
      status: ['', Validators.required],
      active: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.userService.addUser(this.userForm.value).subscribe((user)=>{
      console.log('------user----', user);
    });
  }
}
