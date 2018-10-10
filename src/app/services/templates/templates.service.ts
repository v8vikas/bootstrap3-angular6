import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TemplatesService {

  constructor(private httpService: HttpService) { }

  getAllTemplates(): Observable<any> {
    return this.httpService.get('templates');
  }

  updateTemplate(id: any, data: any): Observable<any> {
    return this.httpService.put(`templates/${id}`, data);
  }

  addTemplate(data: any): Observable<any> {
    return this.httpService.post('templates', data);
  }

  deleteTemplate(id: number): Observable<any> {
    // pass id in the delete 
    return this.httpService.delete(`templates/${id}`);
  }

}
