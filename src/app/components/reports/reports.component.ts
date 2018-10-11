import { Component } from '@angular/core';
import { ReportsService } from '../../services/reports/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  title: string = 'Reports';
  reports: any[] = [];

  constructor(private reportsService: ReportsService) {
    this.loadReports();
  }

  loadReports(): void {
    this.reportsService.getAllReports().subscribe(((reports)=>{
      this.reports = reports;
    }))
  }

}
