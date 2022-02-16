import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;

  rememberMe = false;
  username: string;
  password: string;

  ngOnInit(): void {
  }

  onClickLogin() {
    // To be implemented;
  }
}
