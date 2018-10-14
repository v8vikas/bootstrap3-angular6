import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  @Input() reports: any = [];
  constructor() { }

  ngOnInit() {
  }

}
