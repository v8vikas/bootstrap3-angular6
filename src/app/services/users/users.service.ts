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

  deleteUser(user: any): Observable<any> {
    // pass id in the delete 
    let id;
    // @TODO change the "id" with networkId. if needed.
    if(user.id) {
      id = user.id
    } else {
      id = user.networkId
    }
    return this.httpService.delete(`users/${id}`);
  }

}
