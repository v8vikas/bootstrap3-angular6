import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages.service';
import { MessageCollection } from '../../../models/message-collection';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  title: string = 'Physician Inbox';
  users: any[] = [];
  allMessages: MessageCollection;
  selectedTab: string = 'inbox';
  pagination: any = {
    page: 1,
    pageSize: 50
  }
  messages: any = [];
  allSelected: boolean;

  constructor(
    private messageServices: MessagesService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.loadMessages();
    this.loadUsers();
  }

  loadMessages(): void {
    this.messageServices.getMessages().subscribe((messages: any[]) => {
      this.allMessages = new MessageCollection(messages);
      this.setMessages('inbox');
    });
  }

  setMessages(tab: string): void {

    this.selectedTab = tab;

    this.messages = this.allMessages.getActiveMessages(
      this.selectedTab, this.pagination.pageSize, this.pagination.page
    )
    this.changeAllCheckedStatus(false);
  }

  changePage(): void {
    this.setMessages(this.selectedTab)
  }

  loadUsers(): void {
    this.usersService.getAllUsers().subscribe((users: any[]) => {
      this.users = users;
    });
  }

  addRemove(event: any, message: any): void {

    const messageIndex = this.messages.findIndex((v) => v.messageId === message.messageId);
    if (messageIndex !== -1) {
      this.messages[messageIndex].isChecked = event.target.checked;
    }

    const checkedIndexes = this.getAllCheckedmessages();

    if (checkedIndexes.length === this.messages.length) {
      this.allSelected = true;
    } else {
      this.allSelected = false;
    }
  }

  getAllCheckedmessages(): any[] {
    return this.messages.filter((v) => v.isChecked);
  }

  selectedAll(event): void {
    this.allSelected = event.target.checked;
    this.messages = this.changeAllCheckedStatus(event.target.checked);
  }

  addRemoveAll(event: any): void {
    this.allSelected = event.target.checked;

    this.messages = this.changeAllCheckedStatus(this.allSelected);
  }

  changeSection(option: string): void {
    if (option === 'all') {
      this.allSelected = true;
    } else {
      this.allSelected = false;
    }
    this.changeAllCheckedStatus(true, option);
    const checkedIndexes = this.getAllCheckedmessages();

    if (checkedIndexes.length === this.messages.length) {
      this.allSelected = true;
    } else {
      this.allSelected = false;
    }
  }

  changeAllCheckedStatus(value: boolean, type?: string): any[] {
    return this.messages.map(v => {
      if (!type || type === 'all') {
        v['isChecked'] = value;
      } else if (type && type === 'read' && v.isRead) {
        v['isChecked'] = value;
      } else if (type && type === 'read' && !v.isRead) {
        v['isChecked'] = value;
      } else {
        v['isChecked'] = false;
      }
      return v;
    });
  }

  deleteMessages(): void {
    const result = confirm('Do you want to remove slected messages');
    if (result) {
      const messages = this.getAllCheckedmessages();
      const messagesIds = messages.map((v) => v.messageId);
      this.messageServices.deleteMessages(messagesIds).subscribe((response) => {
        // @TODO message delted successfully.
        this.loadMessages();

      }, (error) => {
        // @TODO do what you want to do.
      })
    }
  }

}
