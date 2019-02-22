import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ItemListModule } from './item-list/item-list.module';
import { MdlModule } from '@angular-mdl/core';
import { loginRoutes } from './login/login-routing.module';
import { itemListRoutes } from './item-list/item-list-routing.module';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MdlModule,
    LoginModule,
    ItemListModule,
    NxModule.forRoot(),
    RouterModule.forRoot([
        {path: 'login', children: loginRoutes},
        {path: 'coffee', children: itemListRoutes, canActivate: [LoginGuard]}
    ], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
