import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../http/http.service';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {

  userDbUpdated: Subject<any> = new Subject<any>()
  userEdit: Subject<any> = new Subject<any>()

  constructor(private httpService: HttpService) { }

  getAllUsers(): Observable<any> {
    return this.httpService.get('users');
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.httpService.put(`users/${id}`, data);
  }

  addUser(data: any): Observable<any> {
    return this.httpService.post('users', data);
  }

  deleteUser(id: number): Observable<any> {
    // pass id in the delete 
    return this.httpService.delete(`users/${id}`);
  }

}
