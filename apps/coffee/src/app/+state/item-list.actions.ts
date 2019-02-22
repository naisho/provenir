import { Action } from '@ngrx/store';
import { Entity } from './item-list.reducer';
import { Item } from '../models/item';

export enum ItemListActionTypes {
    LoadItemList = '[ItemList] Load ItemList',
    ItemListLoaded = '[ItemList] ItemList Loaded',
    ItemListLoadError = '[ItemList] ItemList Load Error',
    UpdateItem = '[ItemList] Update Item in ItemList',
    DeleteItem = '[ItemList] Remove Item from ItemList'
}

export class LoadItemList implements Action {
    readonly type = ItemListActionTypes.LoadItemList;
}

export class ItemListLoadError implements Action {
    readonly type = ItemListActionTypes.ItemListLoadError;
    constructor(public payload: any) {}
}

export class ItemListLoaded implements Action {
    readonly type = ItemListActionTypes.ItemListLoaded;
    constructor(public payload: Entity[]) {}
}

export class UpdateItem implements Action {
    readonly type = ItemListActionTypes.UpdateItem;
    constructor(public payload: Item) {}
}

export class DeleteItem implements Action {
    readonly type = ItemListActionTypes.DeleteItem;
    constructor(public payload: Item) {}   
}

export type ItemListAction =
    LoadItemList |
    ItemListLoaded |
    ItemListLoadError |
    UpdateItem |
    DeleteItem;

export const fromItemListActions = {
    LoadItemList,
    ItemListLoaded,
    ItemListLoadError,
    UpdateItem,
    DeleteItem
};
