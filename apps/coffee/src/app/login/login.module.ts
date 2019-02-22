import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        MdlModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ]
})
export class LoginModule { }
