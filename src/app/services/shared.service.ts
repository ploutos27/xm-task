import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private login = new Subject<any>();
  constructor() { }

  sendClickEventLogin() {
    this.login.next();
  }
  getClickEventLogin(): Observable<any>{ 
    return this.login.asObservable();
  }

}
