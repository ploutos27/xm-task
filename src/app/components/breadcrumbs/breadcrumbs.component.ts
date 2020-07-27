import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { User } from 'src/app/models/doc.models';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent implements OnInit {
  @Input() breadCrumbName: string;
  user: User;

  constructor(private httpServices: HttpService) { 
    this.httpServices.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
  }

  logout() {
    this.httpServices.logout();
  }
}
