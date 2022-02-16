import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  isExpanded: boolean = false;

  isAuthenticated: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggle() {

  }
}
