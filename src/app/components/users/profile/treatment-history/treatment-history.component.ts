import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-treatment-history',
  templateUrl: './treatment-history.component.html',
  styleUrls: ['./treatment-history.component.css']
})
export class TreatmentHistoryComponent implements OnInit {
  @Input() treatmentHistory: any
  constructor() { }

  ngOnInit() {
  }

}
