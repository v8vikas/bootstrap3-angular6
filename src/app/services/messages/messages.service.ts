import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../http/http.service';

@Injectable()
export class MessagesService {

  constructor(private httpService: HttpService) { }

  getMessages(): Observable<any> {
    return this.httpService.get('getMessages');
  }
}
