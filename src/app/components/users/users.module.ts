import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserListComponent,
    UserAddComponent,
    UsersComponent
  ],
  exports: [
    UserListComponent,
    UserAddComponent,
    UsersComponent
  ]
})
export class UsersModule { }
