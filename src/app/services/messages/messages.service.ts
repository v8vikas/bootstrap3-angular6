import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../http/http.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessagesService {
  onClose: Subject<any> = new Subject();
  onSuccess: Subject<any> = new Subject();
  constructor(private httpService: HttpService) { }

  getMessages(): Observable<any> {
    return this.httpService.get('getMessages');
  }

  sendNewMessage(params: any): Observable<any> {
    return this.httpService.post('sendNewMessage', params);
  }

  sendGroupMessage(params: any): Observable<any> {
    return this.httpService.post('sendGroupMessage', params);
  }
}
