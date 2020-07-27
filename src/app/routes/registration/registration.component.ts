import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  constructor( private router: Router,
    private httpServices: HttpService) { 
      if (this.httpServices.userValue) {
        this.router.navigate(['/welcome']);
      }
  }

  ngOnInit(): void {
  }

}
