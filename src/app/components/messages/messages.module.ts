import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddMessageComponent } from './add-message/add-message.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { SendComponent } from './send/send.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    MessagesComponent,
    AddMessageComponent,
    SendComponent
  ],
  exports: [
    MessagesComponent,
    AddMessageComponent,
    SendComponent
  ]
})
export class MessagesModule { }
