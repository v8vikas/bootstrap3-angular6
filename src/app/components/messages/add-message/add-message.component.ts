import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages.service';
import { TemplatesService } from '../../../services/templates/templates.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  title: string = 'New Message';

  allUsers: any [] = [];
  selectedUsersName: string;
  templates: any [] = [];
  messageForm: FormGroup;
  selectedtempale: any = '';
  error: string = '';
  message: string = '';

  constructor(
    private messagesService: MessagesService,
    private usersService: UsersService,
    private templatesService: TemplatesService,
    private fb: FormBuilder
  ) {
    this.messageForm = this.fb.group({
      user: ['', Validators.required],
      template: ['', Validators.required],
      subject: ['', Validators.required],
      secureMessage: ['']
    }) 
  }

  ngOnInit() {
    this.loadUsers();
    this.loadTemplates();    
  }

  loadTemplates(): void {
    this.templatesService.getAllTemplates().subscribe((templates)=>{
      this.templates = templates;
    })
  }

  loadUsers(): void {
    this.usersService.getAllUsers().subscribe((users)=>{
      this.allUsers = users;
    })
  }

  send(): void {
    if(this.messageForm.valid) {
        this.messagesService.sendNewMessage(this.messageForm.value).subscribe((reponse)=>{
          this.message = 'Message sent successfully.';
          this.messageForm.reset();
        }, (error)=>{
          this.error = error && error.message ? error.message : 'Server Error'; 
        })
    }
  }

  schedule() : void {
    // @TODO schedule message
    this.messagesService.onSuccess.next('scheduled');
    
  }

  close(): void {
    this.messagesService.onClose.next();
  }

  save(): void {
    // @TODO save message
    this.messagesService.onSuccess.next('saved');     
  }

}
