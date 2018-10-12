import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../http/http.service';

@Injectable()
export class PatientService {

  constructor(private httpService: HttpService) { }

  findPatients(queryOptions: any): Observable<any> {
    // @TODO change the method as post if needed to pass the queryOptions?
    return this.httpService.get('findPatients');
  }

  getPatientRecord(patientId: any): Observable<any> {
    // @TODO pass the patientId as `getPatientRecord/${patientId}` in the route if needed?
    return this.httpService.get('getPatientRecord');
  }

}
