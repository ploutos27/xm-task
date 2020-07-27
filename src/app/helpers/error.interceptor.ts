import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpService } from '../services/http.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private httpServices: HttpService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.httpServices.logout();
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}