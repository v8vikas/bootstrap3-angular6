import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddMessageComponent } from './add-message/add-message.component';
import { MessagesComponent } from './messages/messages.component';
import { AddGroupMessageComponent } from './add-group-message/add-group-message.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    MessagesComponent,
    AddMessageComponent,
    AddGroupMessageComponent
  ],
  exports: [
    MessagesComponent,
    AddMessageComponent,
    AddGroupMessageComponent
  ]
})
export class MessagesModule { }
