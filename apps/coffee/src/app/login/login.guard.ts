import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }

    canActivate(): boolean {
        console.log(sessionStorage);
        if (this.loginService.isLoggedIn()) {
            return true;
        } else {
            console.warn('Not logged in');
            this.router.navigate(['login']);
            return false;
        }
    }
}
