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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
    ITEMLIST_FEATURE_KEY,
    initialState as itemListInitialState,
    itemListReducer
} from './+state/item-list.reducer';
import { ItemListEffects } from './+state/item-list.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        MdlModule,
        LoginModule,
        ItemListModule,
        NxModule.forRoot(),
        RouterModule.forRoot(
            [
                { path: 'login', children: loginRoutes },
                {
                    path: 'coffee',
                    children: itemListRoutes,
                    canActivate: [LoginGuard]
                }
            ],
            { initialNavigation: 'enabled' }
        ),
        StoreModule.forRoot(
            { itemList: itemListReducer },
            {
                initialState: { itemList: itemListInitialState },
                metaReducers: !environment.production ? [storeFreeze] : []
            }
        ),
        EffectsModule.forRoot([ItemListEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreRouterConnectingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
