import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'provenir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private loginService: LoginService, private router: Router) { }
    title = 'coffee';

    isLoggedIn = this.loginService.isLoggedIn();
    
    logout() {
        this.loginService.logout();
        this.router.navigate(['login']);
    }
}
