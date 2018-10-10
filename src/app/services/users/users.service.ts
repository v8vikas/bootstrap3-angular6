import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../http/http.service';

@Injectable()
export class UsersService {

  constructor(private httpService: HttpService) { }

  getAllUsers(): Observable<any> {
    return this.httpService.get('getUsers');
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.httpService.post('updateUser', data);
  }

  addUser(data: any): Observable<any> {
    return this.httpService.post('updateUser', data);
  }

}
