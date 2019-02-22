import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list.component';

export const itemListRoutes: Routes = [
    {path: '', component: ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(itemListRoutes)],
  exports: [RouterModule]
})
export class ItemListRoutingModule { }
