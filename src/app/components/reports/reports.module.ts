import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { SavedReportsComponent } from './saved-reports/saved-reports.component';
import { ReportCriteriaComponent } from './report-criteria/report-criteria.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ReportsComponent,
    SavedReportsComponent,
    ReportCriteriaComponent
  ],
  exports: [
    ReportsComponent,
    SavedReportsComponent,
    ReportCriteriaComponent
  ]
})
export class ReportsModule { }
