import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { breadCrumbs } from './models/doc.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent implements OnInit  {
  name: string;
  constructor(router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        breadCrumbs.forEach(el => {
          if (el.route === event.url) {
            this.name = el.name
          }
        });
      }
    });
  }

  ngOnInit(): void {
   
  }
}
