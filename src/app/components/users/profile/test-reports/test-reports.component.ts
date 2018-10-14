import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test-reports',
  templateUrl: './test-reports.component.html',
  styleUrls: ['./test-reports.component.css']
})
export class TestReportsComponent implements OnInit, OnChanges {
  @Input() testResults: any[] = [];
  @Input() activeTestResult: any;
  constructor() { }

  ngOnChanges(option: SimpleChanges) {

  }
  ngOnInit() {
  }

}
