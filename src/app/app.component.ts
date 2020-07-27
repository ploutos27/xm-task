import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { breadCrumbs, User } from './models/doc.models';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent implements OnInit  {
  name: string;
  user: User;
  
  constructor(router: Router, private httpServices: HttpService) {
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
         let r = breadCrumbs.findIndex(x => x.route === event.url);
          r === -1 ? this.name = 'Not Found' :  this.name = breadCrumbs[r].name;
        }
      });
  }

  ngOnInit(): void {
   
  }
}
