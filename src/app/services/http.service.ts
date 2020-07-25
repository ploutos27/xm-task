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

  constructor(private router: Router,
    private http: HttpClient) { }
    
    register(user: User) {
      return this.http.post(`${environment.serverEndPoint}/v1/users/register`, user);
    }
}
