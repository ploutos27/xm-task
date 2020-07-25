import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/doc.models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(Object.assign({}));
    this.user = this.userSubject.asObservable();
   }
    


    public get userValue(): User {
      return this.userSubject.value;
    }

    login(user: User) {
      this.userSubject.next(user);
    }

    register(user: User) {
      return this.http.post(`${environment.serverEndPoint}/v1/users/register`, user);
    }


}
