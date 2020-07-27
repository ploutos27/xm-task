import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/doc.models';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
   }
    
    public get userValue(): User {
      return this.userSubject.value;
    }

    login(email, password) {
      return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { email, password })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
              this.userSubject.next(user);
              return user;
          }));
    }

    logout() {
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/']);
    }

    getAll() {
      return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
      return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }


}
