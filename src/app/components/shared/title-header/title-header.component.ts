import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-header',
  templateUrl: './title-header.component.html',
  styleUrls: ['./title-header.component.css']
})
export class TitleHeaderComponent implements OnInit {

  @Input() title: string = ''
  constructor() { }

  ngOnInit() {
  }

}
