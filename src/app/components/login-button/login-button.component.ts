import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})

export class LoginButtonComponent implements OnInit {
  btn: string = 'Login';
  submitted: boolean;
  clickEventsubscription: Subscription;
  
  constructor(private sharedService: SharedService) { 
    this.clickEventsubscription = this.sharedService.getClickEventChangeLoginFormStatus().subscribe((res) => this.checkStatus(res));
  }

  ngOnInit(): void {}

  checkStatus(formStatus) {
    switch (formStatus) {
      case "VALID":
        this.submitted = true;
        break;
      case "INVALID":
        this.submitted = false;
        break;
    }
  }

  login() {
    this.sharedService.sendClickEventLogin();
  }

  
}
