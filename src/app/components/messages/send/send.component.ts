import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages.service';
import { TemplatesService } from '../../../services/templates/templates.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit, OnChanges {
  @Input() selectedPatients: any [] = [];
  @Input() type: string = '';
  selectedUsersName: string;
  templates: any [] = [];
  messageForm: FormGroup;
  selectedtempale: any = '';
  error: string = '';

  constructor(
    private messagesService: MessagesService,
    private templatesService: TemplatesService,
    private fb: FormBuilder
  ) {
    this.messageForm = this.fb.group({
      users: ['', Validators.required],
      template: ['', Validators.required],
      subject: ['', Validators.required],
      secureMessage: ['']
    }) 
  }

  ngOnInit() {
    this.loadTemplates();    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setSelectedUsersNames()
  }

  loadTemplates(): void {
    this.templatesService.getAllTemplates().subscribe((templates)=>{
      this.templates = templates;
    })
  }

  setSelectedUsersNames(): void {
    const usersStr = [... this.selectedPatients.map((p)=>`${p.firstName} ${p.lastName}`)].join(', ');
    this.messageForm.controls.users.setValue(usersStr)
  }

  send(): void {
    if(this.messageForm.valid) {
      if(this.type === 'Individual') {
        const params = {
          patientId: this.selectedPatients[0].patientId,
          templateId: this.selectedtempale.templateId,
          subject: this.messageForm.value.subject,
          secureMessage: this.messageForm.value.secureMessage 
        }
        this.messagesService.sendNewMessage(params).subscribe((reponse)=>{
          this.messagesService.onSuccess.next('sent');
        }, (error)=>{
          this.error = error && error.message ? error.message : 'Server Error'; 
        })
      } else {
        const params = {
          patientId: this.getPatientsId(),
          templateId: this.selectedtempale.templateId,
          subject: this.messageForm.value.subject
        }

        this.messagesService.sendGroupMessage(params).subscribe((reponse)=>{
          this.messagesService.onSuccess.next('sent');
        }, (error)=>{
          this.error = error && error.message ? error.message : 'Server Error'; 
        })
      }
    }
  }

  getPatientsId(): any[] {
    return this.selectedPatients.map(p=>p.patientId);
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
