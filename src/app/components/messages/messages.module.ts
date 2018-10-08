import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddMessageComponent } from './add-message/add-message.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MessagesComponent,
    AddMessageComponent
  ],
  exports: [
    MessagesComponent,
    AddMessageComponent
  ]
})
export class MessagesModule { }
