import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages.service';
import { MessageCollection } from '../../../models/message-collection';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  title: string = 'Physician Inbox';

  allMessages: MessageCollection;
  selectedTab: string = 'inbox';
  pagination: any = {
    page: 1,
    pageSize: 50
  }

  constructor(private messageServices: MessagesService) { }

  ngOnInit() {
    this.loadMessages()
  }

  loadMessages(): void {
    this.messageServices.getMessages().subscribe((messages: any[])=>{
      this.allMessages = new MessageCollection(messages);
    });
  }

}
