import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public nycLogo = 'assets/img/nyc_white.png';
  public mainLogo = 'assets/img/logo2.png';

  public mainMenu = [
    {
      title: 'Message',
      url: '/message'
    },
    {
      title: 'Templates',
      url: '/templates'
    },
    {
      title: 'Reports',
      url: '/reports'
    },
    {
      title: 'Users',
      url: '/users'
    }
  ]

  constructor() {}


  ngOnInit() {
  }

}
