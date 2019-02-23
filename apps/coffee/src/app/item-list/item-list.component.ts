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
                new CupOfCoffee(1, 'local_cafe', 'Regular Coffee', 'coffee that is regular', 'regular', 'regular', 'none'),
                new CupOfCoffee(2, 'whatshot', 'Fancy Coffee', 'like regular coffee but for fancy people', 'vacuum insulated', 'regular', 'none'),
                new CupOfCoffee(3, 'star_border', 'Favorite Coffee', 'coffee for people that like sweet drinks', 'regular', 'french vanilla', 'salty foam'),
                new CupOfCoffee(4, 'ac_unit', 'Ice Cream', 'I thought this was supposed to be coffee', 'ice cream cone', 'strawberry', 'sprinkles'),
                new CupOfCoffee(5, 'hot_tub', 'uhhh', 'coffee but not for normal people', `world's best dog`, 'rum', 'sprinkles'),
                new CupOfCoffee(6, 'local_cafe', 'Filler Coffee 1', `it's free real estate`, 'regular', 'regular', 'none'),
                new CupOfCoffee(7, 'local_cafe', 'Filler Coffee 2', `it's free real estate`, 'regular', 'regular', 'none'),
                new CupOfCoffee(8, 'local_cafe', 'Filler Coffee 3', `it's free real estate`, 'regular', 'regular', 'none'),
                new CupOfCoffee(9, 'local_cafe', 'Filler Coffee 4', `it's free real estate`, 'regular', 'regular', 'none'),
                new CupOfCoffee(99, 'cake', 'The Last Coffee', 'this coffee is at the bottom of the list and probably covered by the button', 'regular', 'regular', 'sprinkles'),
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
