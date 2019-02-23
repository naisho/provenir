import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { ItemListPartialState } from './item-list.reducer';
import {
    LoadItemList,
    ItemListLoaded,
    ItemListLoadError,
    ItemListActionTypes,
    UpdateItem,
    UpdateItemSuccess,
    UpdateItemError,
    AddItemSuccess,
    AddItem,
    AddItemError,
    DeleteItem,
    DeleteItemSuccess,
    DeleteItemError
} from './item-list.actions';
import { Item } from '../models/item';

@Injectable()
export class ItemListEffects {
    @Effect() loadItemList$ = this.dataPersistence.pessimisticUpdate(
        ItemListActionTypes.LoadItemList,
        {
            run: (action: LoadItemList, state: ItemListPartialState) => {
                const storage = localStorage.getItem('provenir-coffee');
                return storage ? new ItemListLoaded(JSON.parse(storage)) : new ItemListLoaded([]);
            },

            onError: (action: LoadItemList, error) => {
                // snackbar(error);
                console.error('Error', error);
                return new ItemListLoadError(error);
            }
        }
    );

    @Effect() addItem$ = this.dataPersistence.pessimisticUpdate(
        ItemListActionTypes.AddItem,
        {
            run: (action: AddItem, state: ItemListPartialState) => {
                const storage: Item[] = JSON.parse(localStorage.getItem('provenir-coffee'));
                const update = [...storage, action.payload].sort((a, b) => a.id - b.id);
                localStorage.setItem('provenir-coffee', JSON.stringify(update));
                return new AddItemSuccess(update);
            },

            onError: (action: AddItem, error) => {
                // snackbar(error);
                console.error('Error', error);
                return new AddItemError(error);
            }
        }
    );

    @Effect() updateItem$ = this.dataPersistence.pessimisticUpdate(
        ItemListActionTypes.UpdateItem,
        {
            run: (action: UpdateItem, state: ItemListPartialState) => {
                const storage: Item[] = JSON.parse(localStorage.getItem('provenir-coffee'));
                const update = storage.map(item => item.id === action.payload.id ? action.payload : item);
                localStorage.setItem('provenir-coffee', JSON.stringify(update));
                return new UpdateItemSuccess(update);
            },

            onError: (action: UpdateItem, error) => {
                // snackbar(error);
                console.error('Error', error);
                return new UpdateItemError(error);
            }
        }
    );

    @Effect() deleteItem$ = this.dataPersistence.pessimisticUpdate(
        ItemListActionTypes.DeleteItem,
        {
            run: (action: DeleteItem, state: ItemListPartialState) => {
                const storage: Item[] = JSON.parse(localStorage.getItem('provenir-coffee'));
                const update = storage.filter(item => item.id !== action.payload.id);
                localStorage.setItem('provenir-coffee', JSON.stringify(update));
                return new DeleteItemSuccess(update);
            },

            onError: (action: DeleteItem, error) => {
                // snackbar(error);
                console.error('Error', error);
                return new DeleteItemError(error);
            }
        }
    );

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<ItemListPartialState>
    ) {}
}