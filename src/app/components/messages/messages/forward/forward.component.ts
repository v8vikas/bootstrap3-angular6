import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../../../../services/messages/messages.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.css']
})
export class ForwardComponent implements OnInit {
  @Input() users: any[] = [];
  @Input() message: any;
  messageForm: FormGroup;

  constructor(
    private messagesService: MessagesService,
    private fb: FormBuilder
  ) {
    this.messageForm = this.fb.group({
      message: ['']
    })  
    // this.messagesService
  }

  ngOnInit() {

  }

}
