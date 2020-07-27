import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  btn: string = 'Login';

  constructor(private sharedServices: SharedService) { }

  ngOnInit(): void {}

  login() {
    this.sharedServices.sendClickEventLogin();
  }

  
}
