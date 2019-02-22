import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { ItemListPartialState } from './item-list.reducer';
import {
    LoadItemList,
    ItemListLoaded,
    ItemListLoadError,
    ItemListActionTypes
} from './item-list.actions';

@Injectable()
export class ItemListEffects {
    @Effect() loadItemList$ = this.dataPersistence.fetch(
        ItemListActionTypes.LoadItemList,
        {
            run: (action: LoadItemList, state: ItemListPartialState) => {
                return new ItemListLoaded(JSON.parse(localStorage.getItem('provenir-coffee')));
            },

            onError: (action: LoadItemList, error) => {
                console.error('Error', error);
                return new ItemListLoadError(error);
            }
        }
    );

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<ItemListPartialState>
    ) {}
}
