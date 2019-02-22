import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Authenticate {
    username: string;
    password: string;
}

@Component({
    selector: 'provenir-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private router: Router) { }

    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    login() {
        sessionStorage.setItem('username', this.loginForm.value.username);
        sessionStorage.setItem('password', this.loginForm.value.password);
        this.router.navigate(['/coffee']);
    }

    logout() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
    }
}
