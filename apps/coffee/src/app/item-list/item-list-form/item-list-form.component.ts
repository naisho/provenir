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
        this.isNew = data ? false : true;
        this.itemForm = new FormGroup({
            id: new FormControl(data ? data.id : 0, [Validators.required]),
            icon: new FormControl(data ? data.icon : '', [Validators.required]),
            name: new FormControl(data ? data.name : '', [Validators.required]),
            description: new FormControl(data ? data.description : '', [Validators.required]),
            cup: new FormControl(data ? data.cup : '', [Validators.required]),
            flavor: new FormControl(data ? data.flavor : '', [Validators.required]),
            topping: new FormControl(data ? data.topping : ''),
        });
    }

    isNew: boolean;
    itemForm: FormGroup; 

    icons = ['local_cafe', 'hot_tub', 'cake', 'whatshot', 'star_border', 'ac_unit'];

    ngOnInit() {
    }

    save() {
        const item = this.itemForm.value as CupOfCoffee;
        if (this.isNew) {
            this.store.dispatch(new fromItemListActions.AddItem(item));
        } else {
            this.store.dispatch(new fromItemListActions.UpdateItem(item));
        }
        this.dialog.hide();
    }

    delete() {
        const item = this.itemForm.value as CupOfCoffee;
        if (item.id) {
            this.store.dispatch(new fromItemListActions.DeleteItem(item));
        }
        this.dialog.hide();
    }

    cancel() {
        this.dialog.hide();
    }
}
