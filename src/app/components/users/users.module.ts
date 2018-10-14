import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesModule } from '../../services/services.module';
import { ReferralsComponent } from './profile/referrals/referrals.component';
import { ReportsComponent } from './profile/reports/reports.component';
import { TreatmentHistoryComponent } from './profile/treatment-history/treatment-history.component';
import { TestReportsComponent } from './profile/test-reports/test-reports.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule.forRoot()
  ],
  declarations: [
    UserListComponent,
    UserAddComponent,
    UsersComponent,
    ProfileComponent,
    ReferralsComponent,
    ReportsComponent,
    TreatmentHistoryComponent,
    TestReportsComponent,
    ProfileDetailsComponent
  ],
  exports: [
    UserListComponent,
    UserAddComponent,
    UsersComponent,
    ProfileComponent,
    ReferralsComponent,
    ReportsComponent,
    TreatmentHistoryComponent,
    TestReportsComponent,
    ProfileDetailsComponent
  ]
})
export class UsersModule { }
