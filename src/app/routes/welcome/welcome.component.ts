import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { User } from '../../models/doc.models';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  registerUser: User;
  constructor(private httpServices: HttpService) { }

  ngOnInit(): void {
    this.registerUser = this.httpServices.userValue;
  }

}
