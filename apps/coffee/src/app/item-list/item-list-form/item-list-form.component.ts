import { Component, OnInit, Input, Inject } from '@angular/core';
import { MdlDialogReference } from '@angular-mdl/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ItemListState } from '../../+state/item-list.reducer';
import { fromItemListActions } from '../../+state/item-list.actions';
import { CupOfCoffee } from '../../models/cup-of-coffee';

@Component({
  selector: 'provenir-item-list-form',
  templateUrl: './item-list-form.component.html',
  styleUrls: ['./item-list-form.component.scss']
})
export class ItemListFormComponent implements OnInit {
    constructor(private dialog: MdlDialogReference, @Inject('data') data: any, private store: Store<ItemListState>) {
        this.itemForm = new FormGroup({
            id: new FormControl(data.id, [Validators.required]),
            name: new FormControl(data.name, [Validators.required]),
            description: new FormControl(data.description, [Validators.required]),
            cup: new FormControl(data.cup, [Validators.required]),
            flavor: new FormControl(data.flavor, [Validators.required]),
            topping: new FormControl(data.topping),
        });
    }

    itemForm: FormGroup; 

    ngOnInit() {
    }

    save() {
        const item = this.itemForm.value as CupOfCoffee;
        if (item.id) {
            // this.store.dispatch(new fromItemListActions.UpdateItem());
        } else {
            // this.store.dispatch(new fromItemListActions.CreateNewItem());
        }
        this.dialog.hide();
    }
}
