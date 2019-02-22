import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { loginRoutes } from './login-routing.module';

interface Credentials {
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    isLoggedIn(): boolean {
        const credentials = {
            username: sessionStorage.getItem('username'), 
            password: sessionStorage.getItem('password')
        };
        return this.validateCredentials(credentials);
    }

    logout() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
    }

    private validateCredentials(credentials: Credentials): boolean {
        return credentials.username && credentials.password && credentials.username === credentials.password;
    }
}
