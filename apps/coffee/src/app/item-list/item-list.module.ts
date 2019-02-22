import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemListComponent } from './item-list.component';
import { ItemListFormComponent } from './item-list-form/item-list-form.component';
import { MdlModule } from '@angular-mdl/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MdlSelectModule } from '@angular-mdl/select';

@NgModule({
    imports: [
        CommonModule,
        MdlModule,
        MdlSelectModule,
        FormsModule,
        ReactiveFormsModule,
        ItemListRoutingModule
    ],
    declarations: [
        ItemListComponent,
        ItemListFormComponent
    ],
    entryComponents: [ItemListFormComponent],
})
export class ItemListModule { }
