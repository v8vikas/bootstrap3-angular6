import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessagesService } from '../../../../services/messages/messages.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @Input() message: any;
  messageForm: FormGroup;

  constructor(
    private messagesService: MessagesService,
    private fb: FormBuilder
  ) {

    this.messageForm = this.fb.group({
      message: ['']
    })  
  }

  ngOnInit() {
  }

  save(): void {
    // @TODO call api. 
    // this.messagesService.methodName().....

  }

}
