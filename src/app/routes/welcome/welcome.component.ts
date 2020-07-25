import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { User } from '../../models/doc.models';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  registerUser: User;
  constructor(private httpServices: HttpService, private router: Router) { }

  ngOnInit(): void {
    if (Object.keys(this.httpServices.userValue).length === 0 && 
            this.httpServices.userValue.constructor === Object) {
              this.router.navigate(['/registration']);

    }
    this.registerUser = this.httpServices.userValue;
  }

}
