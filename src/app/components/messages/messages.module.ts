import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddMessageComponent } from './add-message/add-message.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { SendComponent } from './send/send.component';
import { ReplyComponent } from './messages/reply/reply.component';
import { ForwardComponent } from './messages/forward/forward.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    MessagesComponent,
    AddMessageComponent,
    SendComponent,
    ReplyComponent,
    ForwardComponent
  ],
  exports: [
    MessagesComponent,
    AddMessageComponent,
    SendComponent,
    ReplyComponent,
    ForwardComponent
  ]
})
export class MessagesModule { }
