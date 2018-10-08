import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserListComponent,
    UserAddComponent,
    UsersComponent,
    ProfileComponent
  ],
  exports: [
    UserListComponent,
    UserAddComponent,
    UsersComponent,
    ProfileComponent
  ]
})
export class UsersModule { }
