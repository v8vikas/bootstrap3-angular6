import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from './http/http.service';
import { MessagesService } from './messages/messages.service';
import { UsersService } from './users/users.service';
import { TemplatesService } from './templates/templates.service';
import { ReportsService } from './reports/reports.service';
import { PatientService } from './patient/patient.service';


@NgModule({
  imports: [
    CommonModule
  ]
})


export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        HttpService,
        MessagesService,
        UsersService,
        TemplatesService,
        ReportsService,
        PatientService
      ]
    };
  }
}
