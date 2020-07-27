import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  constructor( private router: Router,
    private httpServices: HttpService) { 
      if (this.httpServices.userValue) {
        this.router.navigate(['/welcome']);
      }
  }

  ngOnInit(): void {}

}
