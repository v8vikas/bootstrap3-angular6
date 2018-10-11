import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../http/http.service';

@Injectable()
export class ReportsService {

  constructor(private httpService: HttpService) { }

  getAllReports(): Observable<any> {
    return this.httpService.get('reports');
  }

  updateReport(id: any, data: any): Observable<any> {
    return this.httpService.put(`reports/${id}`, data);
  }

  addReport(data: any): Observable<any> {
    return this.httpService.post('reports', data);
  }

  deleteReport(id: number): Observable<any> {
    // pass id in the delete 
    return this.httpService.delete(`reports/${id}`);
  }

}
