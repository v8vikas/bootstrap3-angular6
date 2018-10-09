import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesModule } from '../../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule.forRoot()
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
