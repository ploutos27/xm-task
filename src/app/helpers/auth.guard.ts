import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { HttpService } from '../services/http.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private httpServices: HttpService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.httpServices.userValue;
        if (user) {
            return true;
        }

        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}