import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private login = new Subject<any>();
  private changeStatusLoginForm = new Subject<any>();

  constructor() { }

  // LOGIN BTN 
  sendClickEventLogin() {
    this.login.next();
  }
  getClickEventLogin(): Observable<any>{ 
    return this.login.asObservable();
  }

  // LOGO VALUE CHANGE
  sendClickEventChangeLoginFormStatus(val: any) {
    this.changeStatusLoginForm.next(val);
  }
  getClickEventChangeLoginFormStatus(): Observable<any>{ 
    return this.changeStatusLoginForm.asObservable();
  }
}
