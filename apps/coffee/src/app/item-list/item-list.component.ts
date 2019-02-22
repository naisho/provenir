import { Component, OnInit, InjectionToken } from '@angular/core';
import { MdlDialogComponent, MdlDialogService, IMdlCustomDialogConfiguration } from '@angular-mdl/core';
import { ItemListFormComponent } from './item-list-form/item-list-form.component';
import { Item } from '../models/item';
import { Store } from '@ngrx/store';
import { ItemListState } from '../+state/item-list.reducer';
import { fromItemListActions } from '../+state/item-list.actions';
import { itemListQuery } from '../+state/item-list.selectors';
import { CupOfCoffee } from '../models/cup-of-coffee';

@Component({
  selector: 'provenir-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
    constructor(private modal: MdlDialogService, private store: Store<ItemListState>) { }

    itemList$ = this.store.select(itemListQuery.getAllItemList);

    ngOnInit() {
        if (!localStorage.getItem('provenir-coffee')) {
            const initialData: CupOfCoffee[] = [
                new CupOfCoffee(1, 'local_cafe', 'regular coffee', 'coffee that is regular', 'round', 'regular', ''),
                new CupOfCoffee(2, 'local_cafe', 'weird decaf', 'decaf that is weird', 'square', 'decaf', 'cream'),
                new CupOfCoffee(3, 'local_cafe', 'impossible coffee', 'coffee that is impossible', 'cone', 'chocolate', 'bongocat')
            ];
            console.log(initialData);
            localStorage.setItem('provenir-coffee', JSON.stringify(initialData));
        }
        this.store.dispatch(new fromItemListActions.LoadItemList);
    }

    show(data: any, mouseEvent: MouseEvent) {
        const config = {
            clickOutsideToClose: true,
            styles: {
                'min-width': '300px',
                'max-width': '80%',
                'max-height': '80%',
                'overflow-y': 'scroll',
            },
            isModal: true,
            openFrom: mouseEvent,
            enterTransitionDuration: 400,
            leaveTransitionDuration: 400
        };
        
        this.modal.showCustomDialog({
            component: ItemListFormComponent,
            providers: [{provide: 'data', useValue: data}],
            ...config
        });
    }
}
